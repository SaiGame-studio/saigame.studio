// Privacy Policy content (EN / VI). Rendered by components/pages/privacy-policy/PrivacyPolicyContent.tsx.
// Inline links use the form [label](url); **text** is bold.
//
// TODO before publishing: set CONTACT_EMAIL to a mailbox that receives privacy requests.
export const LAST_UPDATED = { en: "October 14, 2026", vi: "14/10/2026" };
export const CONTACT_EMAIL = ""; // e.g. "privacy@saigame.studio" — the contact line is hidden while empty
export const DISCORD_URL = "https://discord.gg/UU3YarmVde";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

const en: Block[] = [
  { type: "p", text: "This Privacy Policy explains how SaiGame (\"SaiGame\", \"we\", \"us\") collects, uses, shares and protects personal data when you visit our website, play our games, use our online services, follow our courses or join our community channels." },
  { type: "p", text: "We process personal data in accordance with the data protection laws that apply in the countries and regions where our games and services are available, such as the EU General Data Protection Regulation (GDPR) and other applicable privacy laws." },

  { type: "h2", text: "1. Who we are" },
  { type: "p", text: "SaiGame is an independent game studio that develops and publishes games and related online services, and creates game-development learning content. For the processing described in this policy, SaiGame is the data controller. You can reach us through the contact details in section 12." },

  { type: "h2", text: "2. Information we collect" },
  { type: "p", text: "**Website.** When you visit our website, our hosting infrastructure automatically records technical data needed to deliver and secure it, such as IP address, browser and device type, pages requested, date and time, and referring page." },
  { type: "p", text: "**Games and online services.** Our games are distributed through third-party stores and platforms, which handle purchases and payments; we do not receive your payment card details. When you use online features of our games, we may process:" },
  { type: "ul", items: [
    "Account data: player ID, display name, the platform account you sign in with and, if you register directly, your email address.",
    "Gameplay data: progress, saved games, inventory, scores, leaderboard entries, virtual items and similar game state.",
    "Technical data: game version, device and operating system information, IP address, error and crash reports, and logs used to keep our services running and fair.",
  ] },
  { type: "p", text: "**Community, courses and recruitment.** When you interact with us on community platforms or watch our courses, we see the information those platforms make available, such as your username and the messages you send us. If you apply for a job, we process the information you choose to send, such as your CV, portfolio and contact details." },
  { type: "p", text: "**Contacting us.** If you contact us, we process your message and the contact details you provide in order to reply." },

  { type: "h2", text: "3. How we use your information" },
  { type: "ul", items: [
    "To provide our website, games and online services, including the features you choose to use.",
    "To keep our services secure and fair, including preventing fraud, cheating and abuse, and fixing bugs and crashes.",
    "To improve our games and services using aggregated statistics.",
    "To answer your requests, provide support and review job applications.",
    "To comply with our legal obligations and to establish, exercise or defend legal claims.",
  ] },
  { type: "p", text: "We rely on the performance of our agreement with you, our legitimate interests (such as security, anti-cheat and service improvement), your consent where it is required, and our legal obligations. We do not sell your personal data and we do not use it for automated decisions that significantly affect you." },

  { type: "h2", text: "4. Cookies and local storage" },
  { type: "p", text: "Our website stores your language choice in your browser so that pages are shown in the language you selected. This is strictly necessary for the feature you request and contains no tracking identifiers. We do not currently use advertising or analytics cookies on our website; if that changes, we will update this policy and ask for your consent where the law requires it." },
  { type: "p", text: "Embedded content from other websites, such as videos or store widgets, may set its own cookies when it loads. Its use is governed by the privacy policy of the provider." },

  { type: "h2", text: "5. Sharing your information" },
  { type: "p", text: "We share personal data only when needed:" },
  { type: "ul", items: [
    "With service providers that host and operate our website, servers and online services on our behalf, under contracts that require them to protect the data.",
    "With the stores and platforms you use to access our games or community, as needed for the features you use.",
    "With competent authorities when required by law, or to protect the rights, safety and security of our players, our studio or others.",
    "With a successor organization in case of a merger, acquisition or transfer of our business, which will remain bound by this policy.",
  ] },

  { type: "h2", text: "6. International transfers" },
  { type: "p", text: "Our service providers and partner platforms may process data outside your country. When we transfer personal data abroad, we do so in accordance with applicable law and with appropriate safeguards." },

  { type: "h2", text: "7. How long we keep data" },
  { type: "p", text: "We keep personal data only for as long as needed for the purposes described in this policy: account and gameplay data while your account is active or until you ask us to delete it, technical logs for a limited period unless needed to investigate a security issue, and job applications and messages for as long as needed to handle them. We may keep data longer where the law requires it or to resolve disputes." },

  { type: "h2", text: "8. Security" },
  { type: "p", text: "We use technical and organizational measures appropriate to the risk, such as encrypted connections, access control and limited access to personal data. No system is completely secure; if a data breach affects your rights, we will notify you and the competent authority as required by law." },

  { type: "h2", text: "9. Children" },
  { type: "p", text: "If you are under 16 (or the age of digital consent in your country), please use our online services only with the consent and supervision of a parent or guardian. Where the law requires parental consent to process a child's data, we process it only with that consent. If you believe a child has given us personal data without the required consent, contact us and we will delete it." },

  { type: "h2", text: "10. Your rights" },
  { type: "p", text: "Subject to applicable law, you have the right to:" },
  { type: "ul", items: [
    "be informed about and access the personal data we hold about you;",
    "have inaccurate data corrected, and request deletion of your data;",
    "withdraw your consent at any time, without affecting processing carried out before the withdrawal;",
    "restrict or object to certain processing, and receive your data in a portable format;",
    "lodge a complaint with the competent data protection authority.",
  ] },
  { type: "p", text: "To exercise these rights, contact us as described in section 12. We may ask you to verify your identity and will answer within the time limit required by law." },

  { type: "h2", text: "11. Changes to this policy" },
  { type: "p", text: "We may update this policy as our games and services evolve or when the law changes. The \"last updated\" date below shows when it was last revised; for significant changes we will provide a more visible notice." },

  { type: "h2", text: "12. Contact us" },
  { type: "p", text: "For any question or request about your personal data, contact SaiGame through our [Discord server](DISCORD_URL){{EMAIL}}." },
];

const vi: Block[] = [
  { type: "p", text: "Chính sách quyền riêng tư này giải thích cách SaiGame (\"SaiGame\", \"chúng tôi\") thu thập, sử dụng, chia sẻ và bảo vệ dữ liệu cá nhân khi bạn truy cập website, chơi game, sử dụng các dịch vụ trực tuyến, theo học các khóa học hoặc tham gia các kênh cộng đồng của chúng tôi." },
  { type: "p", text: "Chúng tôi xử lý dữ liệu cá nhân theo các luật bảo vệ dữ liệu áp dụng tại những quốc gia và khu vực nơi game và dịch vụ của chúng tôi được phát hành, chẳng hạn Quy định chung về bảo vệ dữ liệu của EU (GDPR) và các luật về quyền riêng tư khác." },

  { type: "h2", text: "1. Chúng tôi là ai" },
  { type: "p", text: "SaiGame là studio game độc lập, phát triển và phát hành game cùng các dịch vụ trực tuyến liên quan, và sản xuất nội dung học lập trình game. Đối với các hoạt động xử lý mô tả trong chính sách này, SaiGame là bên kiểm soát dữ liệu. Bạn có thể liên hệ với chúng tôi theo thông tin ở mục 12." },

  { type: "h2", text: "2. Thông tin chúng tôi thu thập" },
  { type: "p", text: "**Website.** Khi bạn truy cập website, hạ tầng lưu trữ của chúng tôi tự động ghi lại các dữ liệu kỹ thuật cần thiết để phục vụ và bảo vệ website, như địa chỉ IP, loại trình duyệt và thiết bị, trang được truy cập, ngày giờ và trang dẫn tới." },
  { type: "p", text: "**Game và dịch vụ trực tuyến.** Game của chúng tôi được phân phối qua các cửa hàng và nền tảng của bên thứ ba; việc mua và thanh toán do các nền tảng này xử lý, chúng tôi không nhận thông tin thẻ thanh toán của bạn. Khi bạn dùng các tính năng trực tuyến trong game, chúng tôi có thể xử lý:" },
  { type: "ul", items: [
    "Dữ liệu tài khoản: ID người chơi, tên hiển thị, tài khoản nền tảng bạn dùng để đăng nhập và địa chỉ email nếu bạn đăng ký trực tiếp.",
    "Dữ liệu chơi game: tiến trình, dữ liệu lưu game, túi đồ, điểm số, bảng xếp hạng, vật phẩm ảo và các trạng thái game tương tự.",
    "Dữ liệu kỹ thuật: phiên bản game, thông tin thiết bị và hệ điều hành, địa chỉ IP, báo cáo lỗi và crash, nhật ký dùng để duy trì dịch vụ ổn định và công bằng.",
  ] },
  { type: "p", text: "**Cộng đồng, khóa học và tuyển dụng.** Khi bạn tương tác với chúng tôi trên các nền tảng cộng đồng hoặc theo dõi khóa học, chúng tôi thấy những thông tin mà các nền tảng đó cung cấp, như tên người dùng và tin nhắn bạn gửi cho chúng tôi. Nếu bạn ứng tuyển, chúng tôi xử lý những thông tin bạn chọn gửi, như CV, portfolio và thông tin liên hệ." },
  { type: "p", text: "**Liên hệ với chúng tôi.** Khi bạn liên hệ, chúng tôi xử lý nội dung tin nhắn và thông tin liên hệ bạn cung cấp để phản hồi." },

  { type: "h2", text: "3. Chúng tôi sử dụng thông tin như thế nào" },
  { type: "ul", items: [
    "Để cung cấp website, game và dịch vụ trực tuyến, bao gồm các tính năng bạn chọn sử dụng.",
    "Để giữ dịch vụ an toàn và công bằng, bao gồm ngăn chặn gian lận, hack/cheat và lạm dụng, khắc phục lỗi và crash.",
    "Để cải thiện game và dịch vụ dựa trên số liệu thống kê tổng hợp.",
    "Để trả lời yêu cầu của bạn, hỗ trợ và xem xét hồ sơ ứng tuyển.",
    "Để tuân thủ nghĩa vụ pháp lý và để xác lập, thực hiện hoặc bảo vệ các quyền hợp pháp.",
  ] },
  { type: "p", text: "Chúng tôi xử lý dữ liệu dựa trên việc thực hiện thỏa thuận với bạn, lợi ích hợp pháp của chúng tôi (như bảo mật, chống gian lận và cải thiện dịch vụ), sự đồng ý của bạn khi pháp luật yêu cầu, và nghĩa vụ pháp lý. Chúng tôi không bán dữ liệu cá nhân của bạn và không dùng dữ liệu để ra quyết định tự động gây ảnh hưởng đáng kể đến bạn." },

  { type: "h2", text: "4. Cookie và bộ nhớ trình duyệt" },
  { type: "p", text: "Website lưu lựa chọn ngôn ngữ của bạn trong trình duyệt để hiển thị trang bằng ngôn ngữ bạn đã chọn. Đây là dữ liệu thực sự cần thiết cho tính năng bạn yêu cầu và không chứa mã định danh theo dõi. Hiện chúng tôi không dùng cookie quảng cáo hay phân tích trên website; nếu điều đó thay đổi, chúng tôi sẽ cập nhật chính sách và xin sự đồng ý của bạn khi pháp luật yêu cầu." },
  { type: "p", text: "Nội dung nhúng từ website khác, như video hoặc widget cửa hàng, có thể đặt cookie riêng khi tải. Việc này tuân theo chính sách quyền riêng tư của nhà cung cấp." },

  { type: "h2", text: "5. Chia sẻ thông tin" },
  { type: "p", text: "Chúng tôi chỉ chia sẻ dữ liệu cá nhân khi cần thiết:" },
  { type: "ul", items: [
    "Với các nhà cung cấp dịch vụ lưu trữ và vận hành website, máy chủ và dịch vụ trực tuyến thay mặt chúng tôi, theo hợp đồng yêu cầu họ bảo vệ dữ liệu.",
    "Với các cửa hàng và nền tảng bạn dùng để truy cập game hoặc cộng đồng, trong phạm vi cần thiết cho tính năng bạn sử dụng.",
    "Với cơ quan có thẩm quyền khi pháp luật yêu cầu, hoặc để bảo vệ quyền, sự an toàn và an ninh của người chơi, studio hoặc người khác.",
    "Với tổ chức kế thừa trong trường hợp sáp nhập, mua lại hoặc chuyển nhượng hoạt động kinh doanh; tổ chức này vẫn phải tuân theo chính sách này.",
  ] },

  { type: "h2", text: "6. Chuyển dữ liệu ra nước ngoài" },
  { type: "p", text: "Các nhà cung cấp dịch vụ và nền tảng đối tác có thể xử lý dữ liệu bên ngoài quốc gia của bạn. Khi chuyển dữ liệu cá nhân ra nước ngoài, chúng tôi thực hiện theo quy định của pháp luật và áp dụng các biện pháp bảo vệ phù hợp." },

  { type: "h2", text: "7. Thời gian lưu trữ" },
  { type: "p", text: "Chúng tôi chỉ lưu dữ liệu cá nhân trong thời gian cần thiết cho các mục đích nêu trong chính sách này: dữ liệu tài khoản và chơi game trong thời gian tài khoản còn hoạt động hoặc cho đến khi bạn yêu cầu xóa, nhật ký kỹ thuật trong một thời gian giới hạn trừ khi cần để điều tra sự cố bảo mật, hồ sơ ứng tuyển và tin nhắn trong thời gian cần thiết để xử lý. Chúng tôi có thể lưu lâu hơn khi pháp luật yêu cầu hoặc để giải quyết tranh chấp." },

  { type: "h2", text: "8. Bảo mật" },
  { type: "p", text: "Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp với mức độ rủi ro, như kết nối mã hóa, kiểm soát truy cập và giới hạn người được tiếp cận dữ liệu cá nhân. Không hệ thống nào an toàn tuyệt đối; nếu xảy ra sự cố lộ lọt dữ liệu ảnh hưởng đến quyền của bạn, chúng tôi sẽ thông báo cho bạn và cơ quan có thẩm quyền theo quy định của pháp luật." },

  { type: "h2", text: "9. Trẻ em" },
  { type: "p", text: "Nếu bạn dưới 16 tuổi (hoặc dưới độ tuổi được tự đồng ý theo quy định nơi bạn sống), vui lòng chỉ sử dụng dịch vụ trực tuyến của chúng tôi khi có sự đồng ý và giám sát của cha mẹ hoặc người giám hộ. Khi pháp luật yêu cầu sự đồng ý của cha mẹ để xử lý dữ liệu của trẻ em, chúng tôi chỉ xử lý khi có sự đồng ý đó. Nếu bạn cho rằng một trẻ em đã cung cấp dữ liệu cá nhân cho chúng tôi mà chưa có sự đồng ý cần thiết, hãy liên hệ để chúng tôi xóa dữ liệu." },

  { type: "h2", text: "10. Quyền của bạn" },
  { type: "p", text: "Theo quy định của pháp luật, bạn có quyền:" },
  { type: "ul", items: [
    "được biết và truy cập dữ liệu cá nhân của bạn mà chúng tôi đang lưu giữ;",
    "yêu cầu chỉnh sửa dữ liệu không chính xác và yêu cầu xóa dữ liệu;",
    "rút lại sự đồng ý bất cứ lúc nào, không ảnh hưởng đến việc xử lý đã thực hiện trước đó;",
    "hạn chế hoặc phản đối một số hoạt động xử lý, và nhận dữ liệu của bạn ở định dạng có thể chuyển giao;",
    "khiếu nại tới cơ quan có thẩm quyền về bảo vệ dữ liệu cá nhân.",
  ] },
  { type: "p", text: "Để thực hiện các quyền này, hãy liên hệ với chúng tôi theo mục 12. Chúng tôi có thể đề nghị bạn xác minh danh tính và sẽ phản hồi trong thời hạn pháp luật quy định." },

  { type: "h2", text: "11. Thay đổi chính sách" },
  { type: "p", text: "Chúng tôi có thể cập nhật chính sách này khi game, dịch vụ hoặc quy định pháp luật thay đổi. Ngày \"cập nhật lần cuối\" bên dưới cho biết thời điểm sửa đổi gần nhất; với các thay đổi quan trọng, chúng tôi sẽ thông báo rõ ràng hơn." },

  { type: "h2", text: "12. Liên hệ" },
  { type: "p", text: "Mọi câu hỏi hoặc yêu cầu liên quan đến dữ liệu cá nhân của bạn, vui lòng liên hệ SaiGame qua [Discord server](DISCORD_URL){{EMAIL}}." },
];

export const PRIVACY_POLICY: Record<"en" | "vi", Block[]> = { en, vi };
export const LABELS = {
  en: { lastUpdated: "Last updated", email: " or by email at " },
  vi: { lastUpdated: "Cập nhật lần cuối", email: " hoặc qua email " },
};
