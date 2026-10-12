# Báo cáo phân tích website saigame.studio

> Mục đích: kiểm kê toàn bộ trang public để rebuild bằng **Next.js**
> Ngày khảo sát: 14/10/2026 · Nguồn: `sitemap.xml`, WordPress REST API (`/wp-json`), crawl trực tiếp từng URL

---

## 1. Tổng quan

| Hạng mục | Giá trị |
|---|---|
| Nền tảng | WordPress 7.1.3 |
| Theme / Page builder | Kubio (dựa trên Colibri). Riêng trang `co-ban-sai-server` dùng template của Brizy (`brizy-blank-template.php`) |
| Thương mại điện tử | WooCommerce 9.6.4 (store **chưa mở bán**, mọi trang shop hiện "Great things are on the horizon") |
| Đa ngôn ngữ | TranslatePress: **EN** (mặc định, không có prefix) + **VI** (prefix `/vi/`) |
| Plugin khác | Google Site Kit 1.147.0, Jetpack, AdSense host ID `ca-host-pub-2644536267352236` |
| Trang chủ | Static page `front_page` (ID 15) · Trang blog: `blog` (ID 16) |
| Múi giờ | GMT+7 |
| robots.txt | Chỉ chặn `/wp-admin/` |
| Meta description | **Không có** trên mọi trang (cần bổ sung khi rebuild) |
| Tags | 0 tag nào được dùng |

---

## 2. Số lượng trang public

| Loại | Số lượng (EN) | Có bản VI |
|---|---:|---|
| Pages (trang tĩnh) | 21 | Có |
| Posts (bài blog) | 8 | Có |
| Products (WooCommerce) | 3 | Có (slug `/vi/san-pham/…`) |
| Category archive | 3 | Có |
| Product brand archive | 1 | Có |
| Product category archive | 1 | Có |
| Author archive | 1 | Có |
| **Tổng URL trong sitemap** | **38** | **→ 76 URL tính cả `/vi/`** |

Nếu chỉ tính trang **thực sự có nội dung riêng cần build lại** (bỏ sample page, cart/checkout/shop trống, archive tự sinh): khoảng **24 trang nội dung** + **8 bài blog**.

Ngoài sitemap còn có các URL tự sinh: `/my-account/lost-password/`, archive theo ngày (`/2025/12/18/`), tìm kiếm (`/?s=…`), RSS `/feed/`, `/comment-page-1/`.

---

## 3. Danh sách đầy đủ URL

Tất cả đều trả về **HTTP 200** trừ khi ghi chú khác.

### 3.1 Pages

| # | URL | Tiêu đề | Nhóm | Ngày tạo / sửa gần nhất | Ghi chú |
|---|---|---|---|---|---|
| 1 | `/` | Home | Core | 2025-02-25 / 2026-09-10 | Landing page |
| 2 | `/games/` | Games | Games | 2025-02-26 / 2026-09-10 | Danh sách game |
| 3 | `/purgatory/` | Purgatory | Games | 2025-08-25 / 2025-12-18 | Game chính, nhiều nội dung nhất |
| 4 | `/the-immortal/` | The Immortal | Games | 2025-02-26 / 2025-12-05 | |
| 5 | `/the-watcher/` | The Watcher | Games | 2025-02-26 / 2025-12-05 | |
| 6 | `/courses/` | Courses | Courses | 2025-02-27 / 2025-02-27 | Danh sách khóa học |
| 7 | `/unity-dev-basic/` | Courses Unity Dev Basic | Courses | 2025-02-27 / 2026-01-16 | 5 khóa C0–C4 (YouTube playlist) |
| 8 | `/unity-dev-advance/` | Courses Unity Dev Advance | Courses | 2025-02-27 / 2026-01-17 | 3 khóa N0–N2 (YouTube playlist) |
| 9 | `/co-ban-sai-server/` | Basic Sai Server | Courses | 2026-04-17 / 2026-04-17 | Giới thiệu Sai Server, link sang `server.saigame.studio` |
| 10 | `/recruitment/` | Recruitment | Tuyển dụng | 2025-02-27 / 2025-02-27 | 4 job card |
| 11 | `/recruit-unity-developer/` | Recruit Unity Developer | Tuyển dụng | 2025-02-26 / 2026-01-17 | Đã tuyển đủ |
| 12 | `/recruit-game-designer/` | Recruit Game Designer | Tuyển dụng | 2025-02-26 / 2026-01-17 | Đã tuyển đủ, có video YouTube |
| 13 | `/recruit-narrative-designer/` | Recruit Narrative Designer | Tuyển dụng | 2025-02-26 / 2026-01-17 | |
| 14 | `/recruit-php-laravel/` | Recruit PHP Laravel | Tuyển dụng | 2025-02-26 / 2026-01-17 | |
| 15 | `/blog/` | Blog | Blog | 2025-02-25 / 2025-03-01 | List bài, không phân trang |
| 16 | `/privacy-policy/` | Privacy Policy | Legal | 2025-02-25 / 2026-06-15 | Nội dung mẫu mặc định của WordPress |
| 17 | `/shop/` | Shop | Woo | 2025-02-25 | Store chưa mở |
| 18 | `/cart/` | Cart | Woo | 2025-02-25 | |
| 19 | `/checkout/` | Checkout | Woo | 2025-02-25 | Redirect về `/cart/` khi giỏ trống |
| 20 | `/my-account/` | My account | Woo | 2025-02-25 / 2026-06-15 | Form login (không có form đăng ký, không social login) |
| 21 | `/sample-page/` | Sample Page | — | 2025-02-25 | **Trang mẫu mặc định WP, nên bỏ** |

### 3.2 Blog posts (8 bài)

| # | URL | Tiêu đề | Category | Ngày đăng | Nội dung |
|---|---|---|---|---|---|
| 1 | `/thu-thach-lam-game/` | Thử Thách Làm Game | Uncategorized | 2026-02-01 | Danh sách theo tháng, có link Steam/itch.io |
| 2 | `/sai-game-lore-1/` | Sai Game Lore #1 | Uncategorized | 2025-12-28 | Lore 3 chương |
| 3 | `/purgatory-game-tutorial/` | Purgatory – Game Tutorial | Tutorial | 2025-12-18 | 9 bước có ảnh chụp màn hình |
| 4 | `/ss05-backend-tutorial/` | Purgatory – Backend Tutorial | Tutorial | 2025-12-02 | Tutorial |
| 5 | `/how-to-configure-google-cloud-enable-youtube-data-api-v3-for-desktop-applications/` | How to Configure Google Cloud & Enable YouTube Data API v3 (for Desktop Applications) | Tutorial | 2025-11-25 | Tutorial |
| 6 | `/sai-rewind-2024-nhat-ky-e3/` | Sai Rewind 2024 – Nhật ký E3 | Podcasts | 2025-06-01 | Video |
| 7 | `/cu-phot-unity-2023-nhat-ky-e2/` | Cú phốt Unity 2023 – Nhật Ký – E2 | Podcasts | 2025-06-01 | Video |
| 8 | `/nguon-goc-sai-game/` | Nguồn gốc Sai Game – Nhật Ký – E1 | Podcasts | 2025-02-25 | Embed YouTube playlist |

Tác giả: Sai (`/author/simonsai/`). Bài có comment (WP comments, yêu cầu đăng nhập), có điều hướng Previous / Next.

### 3.3 Products (WooCommerce, cả 3 đều giá 0, category "free product")

| URL | Tên | Bản VI |
|---|---|---|
| `/product/sais-heart/` | Sai's heart | `/vi/san-pham/sais-heart/` |
| `/product/saibehaviour/` | SaiBehaviour | `/vi/san-pham/saibehaviour/` (suy ra) |
| `/product/saisingleton/` | SaiSingleton | `/vi/san-pham/saisingleton/` (suy ra) |

Cả 3 trang chỉ hiển thị "Store đang được xây dựng", không có giá, ảnh hay nút mua.

### 3.4 Archive (tự sinh)

| URL | Mô tả |
|---|---|
| `/category/podcasts/` | 3 bài |
| `/category/tutorial/` | 3 bài |
| `/category/uncategorized/` | 2 bài |
| `/brand/sai-game/` | Woo product brand |
| `/product-category/free-product/` | 3 sản phẩm |
| `/author/simonsai/` | Bài của tác giả Sai |

### 3.5 Bản tiếng Việt

Mọi URL trên đều có bản `/vi/` + cùng slug (ví dụ `/vi/games/`, `/vi/purgatory/`, `/vi/blog/`). Ngoại lệ duy nhất là sản phẩm: `/product/` → `/vi/san-pham/`. Bản VI dịch phần lớn text, nhưng H1 trang chủ và link footer vẫn để tiếng Anh. Ngược lại, nhiều trang EN (Unity Dev Basic/Advance, Recruit…) có **nội dung body bằng tiếng Việt**, tức là bản dịch chưa đồng bộ.

---

## 4. Điều hướng (Navigation)

**Header**
```
Home → /
Games → /games
  ├─ Purgatory → /games/purgatory      (redirect → /purgatory/)
  ├─ The Immortal → /games/the-immortal (redirect → /the-immortal/)
  └─ The Watcher → /games/the-watcher   (redirect → /the-watcher/)
Courses → /courses
  ├─ Unity Dev Basic → /unity-dev-basic/
  └─ Basic Sai Server → /co-ban-sai-server/
Blog → /blog
My account → /my-account/
[EN flag] [VI flag]
```

**Footer:** Privacy Policy · Shop · Cart · Logo · © 2026 SaiGame

**Các trang không có trong menu** (chỉ truy cập qua link nội bộ): `/unity-dev-advance/`, `/recruitment/` + 4 trang recruit, `/checkout/`, các bài blog, sản phẩm.

**Link ngoài thường dùng**
- YouTube: `https://www.youtube.com/@SaiGame`
- Discord: `https://discord.gg/UU3YarmVde` (chung) · `https://discord.gg/eRb2qMDAnP` (Purgatory)
- Telegram (Purgatory): `https://t.me/+VXjv4nLR2chhOGE1`
- GitHub: `https://github.com/SaiGame-studio`
- Steam: Purgatory `app/3983490` · The Immortal `app/1952270` · The Watcher `app/1900830`
- itch.io: `https://saigame.itch.io/the-immortal`
- Sai Server docs: `https://server.saigame.studio/tutorials`
- CodersSchool: `https://www.coderschool.vn/vi/game-development-sai-game`

---

## 5. Cấu trúc nội dung từng template

### Home (`/`)
1. Hero: "It's not the destination, but the journey." + trích dẫn
2. "Top games we've already released": card Purgatory, The Watcher
3. CTA YouTube
4. "Game Dev Courses" + Read more → `/courses`
5. CTA Discord
6. "The Unity courses": card Unity Dev Basic, Basic Sai Server
7. CTA GitHub

### Games list (`/games/`)
3 card game (Purgatory, The Immortal, The Watcher): nền tảng (Steam PC), mô tả, tag thể loại (2D side-scroller / Incremental / Pixel Art), nút Download.

### Game detail (`/purgatory/`, `/the-immortal/`, `/the-watcher/`)
Khung chung: nhãn nền tảng → tiêu đề → mô tả → giải thích thể loại → nút "Download from Steam" → các block tính năng (GIF + text) → Steam widget iframe.
- **Purgatory** (phức tạp nhất): so sánh 2 phiên bản (Offline Standard / Online Expansion), cơ chế 2 màn hình (Streamer Dashboard / Game Client), Phase 1 / Phase 2, cấu hình yêu cầu, link tài liệu (3 bài tutorial), gallery 4 ảnh, Telegram + Discord.
- **The Immortal**: Auto Run, Charge Attack, Unlock Skin (10 skin).
- **The Watcher**: Idle Mode, Attack Mode, Drop and Craft.

→ Nên làm **1 template `GameDetail`** dùng chung, dữ liệu theo từng game.

### Courses list (`/courses/`)
Intro + CTA Discord + 3 card (Unity Dev Basic, Unity Dev Advance, Youni – CodersSchool).

### Course detail (`/unity-dev-basic/`, `/unity-dev-advance/`)
Intro + danh sách module, mỗi module: mã (C0…/N0…), tên, số tập, mô tả, nút "Xem trên Youtube" → playlist.
- Basic: C0 C# cơ bản (30 tập), C1 Unity 2D (34), C2 Unity 3D (10), C3 Làm game 2D (100), C4 Unity 3D C# (99)
- Advance: N0 JsonBin & PlayFab (10), N1 Photon (11), N2 Netcode với AI (~70)

### Product landing (`/co-ban-sai-server/`)
Hero + 4 feature (Multi studio, Dashboard & Analytics, Item & Shop, Quest & Mission) + CTA "Learning Center".

### Recruitment list / detail
- List: 4 job card (tiêu đề + mô tả ngắn).
- Detail: ảnh header, trạng thái tuyển, Trách nhiệm chính, Yêu cầu khác, (đôi khi có video YouTube), nút "Ứng tuyển qua Discord Sai Game".

### Blog list / Blog post
- List: card dọc (ảnh, tác giả, ngày, tiêu đề, excerpt), ô tìm kiếm, widget "Latest Comments". Không có phân trang (`/blog/page/2/` → 404).
- Post: H1, tác giả, ngày, category, ảnh đại diện, nội dung, comment, Previous / Next.

### Legal: `/privacy-policy/` (text mẫu WordPress, cần viết lại).

---

## 6. Lỗi và vấn đề phát hiện

| Mức | Vấn đề | Vị trí |
|---|---|---|
| 🔴 | Link gãy **404**: `/games/sai-pikachu` (tiêu đề card Purgatory trỏ sai) | `/games/` |
| 🟠 | H2 "Purgatory" lại link tới `/games/the-immortal` | `/purgatory/` |
| 🟠 | Menu dùng `/games/*` và `/courses/*` (phải redirect), sitemap dùng slug gốc → URL không nhất quán | Header, `/courses/` |
| 🟠 | Không có meta description / OG tags tùy chỉnh trên bất kỳ trang nào | Toàn site |
| 🟠 | Trang mẫu `/sample-page/` vẫn public và nằm trong sitemap | — |
| 🟡 | Privacy Policy là template mặc định của WP, website ghi `http://` | `/privacy-policy/` |
| 🟡 | Shop / Cart / Checkout / 3 product đều trống ("coming soon") nhưng vẫn index | Woo |
| 🟡 | Trộn ngôn ngữ: bản EN có body tiếng Việt, bản VI còn sót tiếng Anh | Nhiều trang |
| 🟡 | Typo "Unity Dev **Baisc**" | `/unity-dev-basic/` |
| 🟡 | WP `siteurl` vẫn là `http://saigame.studio` | Cấu hình |
| ⚪ | Server rate-limit gắt (429 khi crawl nhanh), cần lưu ý khi export dữ liệu | Hosting |

---

## 7. Đề xuất cấu trúc khi rebuild bằng Next.js (App Router)

### 7.1 Route map

```
app/
└─ [locale]/                         # en (mặc định, không prefix) | vi
   ├─ page.tsx                       # /
   ├─ games/
   │  ├─ page.tsx                    # /games
   │  └─ [slug]/page.tsx             # /games/purgatory | the-immortal | the-watcher
   ├─ courses/
   │  ├─ page.tsx                    # /courses
   │  ├─ [slug]/page.tsx             # /courses/unity-dev-basic | unity-dev-advance
   │  └─ sai-server/page.tsx         # /courses/sai-server (thay /co-ban-sai-server)
   ├─ careers/
   │  ├─ page.tsx                    # /careers (thay /recruitment)
   │  └─ [slug]/page.tsx             # unity-developer | game-designer | narrative-designer | php-laravel
   ├─ blog/
   │  ├─ page.tsx                    # /blog (+ phân trang)
   │  ├─ [slug]/page.tsx             # bài viết
   │  └─ category/[slug]/page.tsx    # podcasts | tutorial
   ├─ shop/ …                        # tạm thời là trang "Coming soon" hoặc bỏ
   ├─ privacy-policy/page.tsx
   └─ not-found.tsx
app/sitemap.ts · app/robots.ts · middleware.ts (i18n)
```

Gợi ý: dùng `next-intl` với `localePrefix: 'as-needed'` để giữ đúng kiểu URL hiện tại (EN không prefix, VI có `/vi/`).

### 7.2 Redirect 301 cần cấu hình (`next.config.js`) để giữ SEO

| URL cũ | URL mới (đề xuất) |
|---|---|
| `/purgatory/`, `/the-immortal/`, `/the-watcher/` | `/games/:slug` |
| `/unity-dev-basic/`, `/unity-dev-advance/` | `/courses/:slug` |
| `/co-ban-sai-server/` | `/courses/sai-server` |
| `/recruitment/` | `/careers` |
| `/recruit-unity-developer/` … `/recruit-php-laravel/` | `/careers/:role` |
| `/:post-slug/` (8 bài blog ở root) | `/blog/:post-slug` |
| `/category/:slug` | `/blog/category/:slug` |
| `/author/simonsai` | `/blog` |
| `/product/:slug`, `/product-category/*`, `/brand/*`, `/cart`, `/checkout` | `/shop` (hoặc giữ nếu sẽ bán hàng) |
| `/sample-page/`, `/games/sai-pikachu` | `/` hoặc 410 |
| Tất cả trên với prefix `/vi/` (và `/vi/san-pham/:slug`) | tương ứng `/vi/...` |

*(Nếu muốn an toàn SEO tối đa, có thể giữ nguyên slug cũ ở root thay vì đổi sang cấu trúc lồng nhau.)*

### 7.3 Mô hình dữ liệu (content collections / MDX hoặc headless CMS)

- **Game**: slug, title, platform, steamAppId, tagline, genres[], editions[], features[{title, text, media}], systemRequirements, gallery[], docs[], community{discord, telegram}
- **Course**: slug, title, level, intro, modules[{code, title, episodes, description, playlistUrl}]
- **Job**: slug, title, status (open/closed), summary, responsibilities[], requirements[], videoUrl, applyUrl
- **Post**: slug, title, date, category, cover, excerpt, body (MDX), youtubeEmbed
- **Site config**: menu, link mạng xã hội, footer

Lựa chọn nguồn nội dung: MDX trong repo (đơn giản, phù hợp quy mô ~30 trang) hoặc headless CMS (Sanity / Payload / Strapi) nếu muốn người không biết code chỉnh sửa. Cũng có thể giữ WordPress làm headless và lấy dữ liệu qua REST API `/wp-json/wp/v2` (đang hoạt động).

### 7.4 Component dùng chung

`Header` (dropdown + language switcher) · `Footer` · `Hero` · `GameCard` · `FeatureBlock` (GIF + text) · `SteamWidget` · `CourseModuleCard` · `JobCard` · `PostCard` · `CTABanner` (YouTube / Discord / GitHub) · `YouTubeEmbed`

### 7.5 Checklist khi rebuild
- [ ] Xuất nội dung 8 bài viết + media (`/wp-content/uploads`) trước khi tắt WP (export chậm vì bị rate-limit)
- [ ] Viết meta title/description + OG image cho từng trang
- [ ] `hreflang` en/vi trên mọi trang
- [ ] Sửa link gãy và link sai đã liệt kê ở mục 6
- [ ] Viết lại Privacy Policy
- [ ] Quyết định giữ hay bỏ Shop / My account (hiện chỉ có login, không có chức năng)
- [ ] Thay comment WP bằng giải pháp khác (Giscus, Disqus) hoặc bỏ
- [ ] Thay Google Site Kit bằng GA4 / `@next/third-parties`
- [ ] Đồng bộ ngôn ngữ nội dung EN/VI
