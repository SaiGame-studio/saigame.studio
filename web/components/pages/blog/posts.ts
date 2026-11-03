// Blog posts shown on /blog/, newest first. Each post page lives at /blog/<slug>/ (app/blog/<slug>/page.tsx).
export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date, shown in the visitor's language */
  date: string;
  image?: string;
  /** the post opens with a video embed: the list still shows the image, the post page skips it */
  video?: boolean;
  excerpt?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "thu-thach-lam-game",
    title: "Thử Thách Làm Game",
    date: "2026-02-01",
    excerpt: "Tháng 1: Hạnh đầu đà. Tháng 3: Thánh Gióng. Tháng 6: SG11.",
  },
  {
    slug: "sai-game-lore-1",
    title: "Sai Game Lore #1",
    date: "2025-12-28",
    image: "/wp-content/uploads/2025/12/Gemini_Generated_Image_ca1d1ica1d1ica1d-scaled.png",
    excerpt: "Đây là soft release lore của Sai Game, AE xem rồi góp ý nhé. Chương 1: Vết Nứt. Chương 2: 99.99%. Chương 3: Ông Chủ.",
  },
  {
    slug: "purgatory-game-tutorial",
    title: "Purgatory – Game Tutorial",
    date: "2025-12-18",
    image: "/wp-content/uploads/2025/12/Screenshot_2-1.jpg",
    excerpt: "Viewers in chat can join the game in the working phase by entering “join”.",
  },
  {
    slug: "ss05-backend-tutorial",
    title: "Purgatory – Backend Tutorial",
    date: "2025-12-02",
    image: "/wp-content/uploads/2025/12/Screenshot_3.jpg",
    excerpt: "Open and close the game from the top menu, and adjust the gold rate to decide how much in-game…",
  },
  {
    slug: "how-to-configure-google-cloud-enable-youtube-data-api-v3-for-desktop-applications",
    title: "How to Configure Google Cloud & Enable YouTube Data API v3 (for Desktop Applications)",
    date: "2025-11-25",
    image: "/wp-content/uploads/2025/11/Screenshot_26.jpg",
    excerpt: "Enable YouTube Data API v3 in Google Cloud Console, step by step.",
  },
  {
    slug: "sai-rewind-2024-nhat-ky-e3",
    video: true,
    title: "Sai Rewind 2024 – Nhật ký E3",
    date: "2025-06-01",
    image: "/wp-content/uploads/2025/06/maxresdefault.webp",
  },
  {
    slug: "cu-phot-unity-2023-nhat-ky-e2",
    video: true,
    title: "Cú phốt Unity 2023 – Nhật Ký – E2",
    date: "2025-06-01",
    image: "/wp-content/uploads/2025/06/maxresdefault.jpg",
  },
  {
    slug: "nguon-goc-sai-game",
    video: true,
    title: "Nguồn gốc Sai Game – Nhật Ký – E1",
    date: "2025-02-25",
    image: "/wp-content/uploads/2025/02/maxresdefault.jpg",
  },
];
