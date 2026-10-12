# saigame.studio — Next.js rebuild

Các trang của https://saigame.studio dựng lại 1:1 bằng Next.js 16 (App Router); ảnh / CSS / font / JS chạy local.

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
| `app/layout.tsx` | `<html>/<body>` như bản gốc, nạp JS Kubio |
| `app/<route>/page.tsx` | Mỗi trang: metadata (title, canonical, hreflang) + ghép các section |
| `components/pages/<slug>/*.tsx` | Section của từng trang (`Navigation`, `Hero`, …, `Footer`) |
| `components/pages/<slug>/styles.json` | Stylesheet của trang, đúng thứ tự cascade WordPress |
| `components/WpStyles.tsx` | Render các stylesheet đó (`<link precedence>` → React hoist vào `<head>`) |
| `components/KubioScripts.tsx` | jQuery + JS frontend Kubio (menu dropdown, menu mobile) sau khi hydrate |
| `public/css/<slug>/` | Các block `<style>` inline của từng trang |
| `public/wp-content/…`, `public/wp-includes/…` | Ảnh, CSS, JS tải từ site gốc (giữ nguyên đường dẫn) |
| `public/fonts/` | Google Fonts tự host (`map.json`: trang nào dùng file nào) |
| `public/wp-emoji/` | SVG emoji mà WordPress thay cho ký tự emoji |

**Vì sao mỗi trang có Navigation/Footer riêng:** Kubio đánh số class `style-local-N` theo từng trang và sinh CSS inline tương ứng,
nên header/footer của trang chủ và trang trong không dùng chung được CSS. Vì cùng lý do, link nội bộ là `<a>` thường
(tải lại trang) — không dùng `next/link`, nếu không CSS của trang trước sẽ lẫn vào trang sau.

## Thêm một trang mới từ site gốc

```bash
cd ..                                   # thư mục gốc repo
node tools/scrape-home.mjs /blog/       # → _mirror/_blog_.orig.html, _blog_.local.html + asset
node tools/fetch-gfonts.mjs             # → _mirror/public/fonts (+ map.json)
pip install beautifulsoup4 lxml
python tools/convert_page.py _mirror/_blog_.local.html blog blog web _mirror/public/fonts/map.json _blog_.orig.html
robocopy _mirror/public web/public /E   # chép asset mới
```

## Khác biệt có chủ đích so với bản WordPress

- Bỏ: Google Analytics/Site Kit, AdSense, script WooCommerce, script emoji của WP (emoji đã được thay sẵn bằng SVG).
- Link nội bộ là đường dẫn tương đối; các trang chưa dựng sẽ 404.
- Lỗi có sẵn ở bản gốc được giữ nguyên: card Purgatory ở `/games/` link tới `/games/sai-pikachu` (404);
  trên mobile, vài ảnh `loading="lazy"` nằm trong khung rộng 0px nên có thể không hiện.
