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

## Đa ngôn ngữ (EN / VI)

- **Không có ngôn ngữ trong URL.** Lựa chọn được lưu ở client (`localStorage["lang"]`) và chép sang cookie `lang`
  để server render đúng ngôn ngữ ngay lần tải đầu (không nháy EN → VI).
- **Đổi ngôn ngữ:** cờ trong menu (`data-lang`) → `ClientRouter` lưu lựa chọn rồi `router.refresh()`:
  nội dung đổi tại chỗ, URL và vị trí cuộn giữ nguyên.
- **URL cũ `/vi/...`:** `proxy.ts` redirect 307 về URL không có `/vi` (giữ query), đặt cookie `lang=vi`;
  `LangSync` ghi "vi" xuống `localStorage`.
- `LangSync` cũng khôi phục cookie từ `localStorage` nếu cookie bị xoá/hết hạn.
- **Bản dịch:** `i18n/vi.json` (EN → VI), dựng từ bản TranslatePress của site gốc bằng `tools/i18n_build_dict.py`;
  nội dung thêm mới ở bản Next.js dịch tay trong `i18n/vi.extra.json`.
  Component dùng `const { t, flags } = await getI18n();` (`lib/i18n.ts`) — chữ không có trong từ điển giữ tiếng Anh
  (giống bản tiếng Việt của site gốc: "Games", "Blog", "Privacy Policy"…).

| File | Vai trò |
|---|---|
| `lib/lang.ts` | Hằng số + lưu ngôn ngữ ở client (localStorage + cookie) |
| `lib/i18n.ts` | Server: `getLang()`, `getI18n()` → `t()` và cờ ngôn ngữ |
| `components/LangSync.tsx` | Đồng bộ localStorage ↔ cookie |
| `proxy.ts` | `/vi/...` → bỏ `/vi`, nhớ tiếng Việt |
| `i18n/vi.json`, `i18n/vi.extra.json` | Từ điển EN → VI |

Cập nhật bản dịch:

```bash
cd ..
node tools/scrape-home.mjs /vi/<trang>/   # bản tiếng Việt của trang (TranslatePress)
python tools/i18n_build_dict.py _mirror web/i18n/vi.json web/i18n/vi.extra.json
node tools/i18n_apply.mjs web             # thay chữ trong component bằng t("…") (chạy lại được nhiều lần)
```

## Thêm một trang mới từ site gốc

```bash
cd ..                                   # thư mục gốc repo
node tools/scrape-home.mjs /blog/       # → _mirror/_blog_.orig.html, _blog_.local.html + asset
node tools/fetch-gfonts.mjs             # → _mirror/public/fonts (+ map.json)
pip install beautifulsoup4 lxml
python tools/convert_page.py _mirror/_blog_.local.html blog blog web _mirror/public/fonts/map.json _blog_.orig.html
python tools/build_global_styles.py web # cập nhật app/wp-styles.json + public/css/shared|scoped
node tools/i18n_apply.mjs web          # chữ theo ngôn ngữ (cần web/i18n/vi.json, xem mục Đa ngôn ngữ)
robocopy _mirror/public web/public /E   # chép asset mới
```

## Khác biệt có chủ đích so với bản WordPress

- Bỏ: Google Analytics/Site Kit, AdSense, script WooCommerce, script emoji của WP (emoji đã được thay sẵn bằng SVG).
- Footer bỏ dòng "Created with ❤ using WordPress and Kubio".
- Card Purgatory ở `/games/` (bản gốc link tới `/games/sai-pikachu` – 404) trỏ tới `http://local.saigame.studio/purgatory/`.
- Link nội bộ là đường dẫn tương đối; các trang chưa dựng sẽ 404.
- Lỗi có sẵn ở bản gốc được giữ nguyên: trên mobile, vài ảnh `loading="lazy"` nằm trong khung rộng 0px nên có thể không hiện.
