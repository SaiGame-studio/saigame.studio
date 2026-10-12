# saigame.studio — Next.js rebuild

Các trang của https://saigame.studio dựng lại 1:1 bằng Next.js 16 (App Router); ảnh / CSS / font / JS chạy local.
Click link nội bộ **không reload trang**: chỉ đổi nội dung và URL (điều hướng phía client).

| Route | Trang gốc |
|---|---|
| `/` | Trang chủ |
| `/games/` | Danh sách game |
| `/purgatory/` | Purgatory (menu link `/games/purgatory` → redirect 308) |
| `/the-immortal/` | The Immortal (`/games/the-immortal` → redirect) |
| `/the-watcher/` | The Watcher (`/games/the-watcher` → redirect) |

## Chạy

```bash
npm install
npm run build
npm run start        # http://localhost:3000  (hoặc npm run dev khi sửa code)
```

## Chạy qua cổng 80 — http://local.saigame.studio

- hosts: `127.0.0.1  local.saigame.studio`
- Cổng 80 do container nginx `docker-web84-1` (project `D:\Projects\Pulse\pcs\pulse-docker`) giữ. Vhost riêng:
  `D:\Projects\Pulse\pcs\pulse-docker\tools\nginx84\conf.d\local.saigame.studio.conf` → proxy tới `host.docker.internal:3000`.
- Next phải đang chạy ở cổng 3000. Sửa vhost xong: `docker exec docker-web84-1 nginx -t && docker exec docker-web84-1 nginx -s reload`.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `app/layout.tsx` | `<html>/<body>` như bản gốc; nạp toàn bộ CSS (theo `app/wp-styles.json`), `ClientRouter`, `KubioScripts` |
| `app/wp-styles.json` | Danh sách stylesheet của mọi trang, đúng thứ tự cascade WordPress — **sinh bởi** `tools/build_global_styles.py` |
| `app/<route>/page.tsx` | Mỗi trang: metadata + `<div data-wp-page="<slug>" style="display:contents">` bọc các section |
| `components/pages/<slug>/*.tsx` | Section của từng trang (`Navigation`, `Hero`, …, `Footer`) |
| `components/pages/<slug>/styles.json` | Stylesheet gốc của trang (đầu vào cho `build_global_styles.py`) |
| `components/ClientRouter.tsx` | Bắt click vào `<a>` nội bộ → `router.push()` (không reload); prefetch khi hover |
| `components/KubioScripts.tsx` | jQuery + JS Kubio; sau mỗi lần chuyển trang: dọn menu mobile của trang cũ, bỏ khoá cuộn, căn lại header |
| `public/css/<slug>/` | CSS inline gốc của từng trang (nguồn) |
| `public/css/shared/` | Khối CSS inline giống nhau ở mọi trang (1 bản) |
| `public/css/scoped/` | CSS Kubio riêng của từng trang, mọi selector được scope bằng `:where([data-wp-page="<slug>"])` |
| `public/wp-content/…`, `public/wp-includes/…` | Ảnh, CSS, JS tải từ site gốc (giữ nguyên đường dẫn) |
| `public/fonts/` | Google Fonts tự host (`map.json`: trang nào dùng file nào) |
| `public/wp-emoji/` | SVG emoji mà WordPress thay cho ký tự emoji |

### Điều hướng không reload hoạt động thế nào

- Kubio đánh số class `style-local-N` theo từng trang và mỗi trang ghi đè vài style dùng chung, nên CSS của các trang
  xung đột nhau. `build_global_styles.py` scope CSS riêng của từng trang vào wrapper `[data-wp-page]` bằng `:where()`
  (độ ưu tiên 0 → cascade không đổi), gộp các khối giống nhau, rồi layout nạp tất cả một lần.
- Markup giữ nguyên `<a href>` như bản gốc; `ClientRouter` chặn click (bỏ qua link ngoài, `target=_blank`, file tĩnh,
  anchor `#` cùng trang, Ctrl/Cmd-click) và gọi `router.push`. Nút Back/Forward hoạt động bình thường.
- Kubio (Colibri) tự khởi tạo component mới nhờ `MutationObserver`. Menu mobile bị Kubio chuyển ra `<body>` nên được gắn
  `data-wp-owner` (CSS scope áp dụng cả cho phần tử này) và được gỡ khi sang trang khác.

## Thêm một trang mới từ site gốc

```bash
cd ..                                   # thư mục gốc repo
node tools/scrape-home.mjs /blog/       # → _mirror/_blog_.orig.html, _blog_.local.html + asset
node tools/fetch-gfonts.mjs             # → _mirror/public/fonts (+ map.json)
pip install beautifulsoup4 lxml
python tools/convert_page.py _mirror/_blog_.local.html blog blog web _mirror/public/fonts/map.json _blog_.orig.html
python tools/build_global_styles.py web # cập nhật app/wp-styles.json + public/css/shared|scoped
robocopy _mirror/public web/public /E   # chép asset mới
```

## Khác biệt có chủ đích so với bản WordPress

- Bỏ: Google Analytics/Site Kit, AdSense, script WooCommerce, script emoji của WP (emoji đã được thay sẵn bằng SVG).
- Footer bỏ dòng "Created with ❤ using WordPress and Kubio".
- Card Purgatory ở `/games/` (bản gốc link tới `/games/sai-pikachu` – 404) trỏ tới `http://local.saigame.studio/purgatory/`.
- Link nội bộ là đường dẫn tương đối; các trang chưa dựng sẽ 404.
- Lỗi có sẵn ở bản gốc được giữ nguyên: trên mobile, vài ảnh `loading="lazy"` nằm trong khung rộng 0px nên có thể không hiện.
