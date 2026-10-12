# saigame.studio — Next.js rebuild

Homepage của https://saigame.studio dựng lại bằng Next.js 16 (App Router), toàn bộ ảnh / CSS / font / JS chạy local.

## Chạy

```bash
npm install
npm run build
npm run start        # http://localhost:3000  (hoặc npm run dev khi sửa code)
```

### Domain local.saigame.studio

Thêm dòng sau vào `C:\Windows\System32\drivers\etc\hosts` (mở Notepad bằng quyền Administrator):

```
127.0.0.1      local.saigame.studio
```

Sau đó mở http://local.saigame.studio:3000

Cổng 80 trên máy đang do Docker giữ (proxy cho `local-admin`, `local-api`...). Nếu muốn bỏ `:3000`,
thêm một rule trong reverse-proxy Docker đó trỏ `local.saigame.studio` → `host.docker.internal:3000`.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `app/layout.tsx` | `<html>/<body>` giống bản gốc, nạp CSS theo đúng thứ tự cascade của WordPress |
| `app/wp-styles.json` | Danh sách stylesheet (file gốc của Kubio/WooCommerce + các block `<style>` inline đã tách ra `public/css/`) |
| `app/page.tsx` | Trang chủ, ghép từ các section |
| `components/home/*.tsx` | 8 section: `SiteNavigation`, `Hero`, `TopGames`, `YoutubeCta`, `GameDevCourses`, `DiscordAndCourses`, `GithubCta`, `SiteFooter` |
| `components/KubioScripts.tsx` | Nạp jQuery + JS frontend của Kubio sau khi React hydrate (menu dropdown, menu mobile, animation) |
| `public/wp-content/…` | Ảnh, CSS, JS tải từ site gốc (giữ nguyên đường dẫn) |
| `public/fonts/` | Google Fonts tự host (Open Sans, Mulish, Roboto, Carter One, Poppins, Syne, Syncopate) |

Giữ nguyên `className` trong các component — CSS gốc phụ thuộc vào chúng (`style-local-NN-…`).

## Khác biệt có chủ đích so với bản WordPress

- Bỏ: Google Analytics/Site Kit, AdSense, script WooCommerce (giỏ hàng, order attribution), WP emoji script
  (emoji ❤ ở footer đã thay bằng đúng ảnh SVG mà WordPress render).
- Link nội bộ đổi từ `https://saigame.studio/...` sang đường dẫn tương đối (`/games`, `/blog`...) — các trang này chưa build nên sẽ 404 cho tới khi dựng tiếp.

## Lỗi có sẵn ở bản gốc (mobile)

Ảnh "The Watcher" và icon YouTube dùng `loading="lazy"` trong khung inline-block rộng 0px,
nên trên site thật ở màn hình < 768px chúng thường không bao giờ được tải (hiển thị trống).
Markup/CSS ở đây giữ nguyên như bản gốc, nên lỗi này vẫn có thể xảy ra.

## Tải lại asset từ site gốc

```bash
cd ..
node tools/scrape-home.mjs /      # → _mirror/  (HTML gốc + asset)
node tools/fetch-gfonts.mjs       # → _mirror/public/fonts
```

## Chạy qua cổng 80 (vhost nginx)

Cổng 80 do container nginx `docker-web84-1` (project `D:\Projects\Pulse\pcs\pulse-docker`) giữ.
Đã thêm vhost riêng: `D:\Projects\Pulse\pcs\pulse-docker\tools\nginx84\conf.d\local.saigame.studio.conf`
→ proxy `local.saigame.studio` tới `host.docker.internal:3000` (Next.js trên máy Windows). Các vhost khác không bị ảnh hưởng.

1. `npm run start` (hoặc `npm run dev`) trong thư mục này — Next phải đang chạy ở cổng 3000.
2. Mở http://local.saigame.studio

Sửa vhost xong thì nạp lại: `docker exec docker-web84-1 nginx -t && docker exec docker-web84-1 nginx -s reload`.
Nếu container nginx bị tạo lại, vhost vẫn còn vì `conf.d` được mount từ thư mục trên.
