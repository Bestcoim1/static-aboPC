> Tài liệu giai đoạn P01–P17. Yêu cầu giao diện đã điều chỉnh ngày 29/10/2026: giữ cửa hàng gốc, chỉ bỏ JavaScript. Xem [bản điều chỉnh hiện tại](khoi-phuc-giao-dien-cua-hang.md); các mô tả trang mẫu/bố cục cũ bên dưới chỉ còn giá trị lịch sử.

# Kịch bản thuyết trình 8–10 phút

## Chuẩn bị
Mở index.html, ui-kit.html, products/index.html và trình soạn thảo ở buttons.css, pagination.css. Có thể mở file trực tiếp hoặc chạy node serve.mjs. Tắt JavaScript trong DevTools và tải lại; chuẩn bị viewport 1440px và 390px. Không cần đăng nhập hay Internet.

| Thời gian | Màn hình/code | Lời dẫn và thao tác |
|---|---|---|
| 0:00–0:45 | Trang chủ | “Đây là website PC chuyển thành bản học tập HTML/CSS. Các quy trình mua hàng là mẫu.” Mở danh mục. |
| 0:45–1:30 | Cây file | Chỉ HTML, ba trang danh sách, ảnh/font và main.css; giải thích đường dẫn tương đối và CSS dùng chung. |
| 1:30–3:00 | UI kit mục 1–2; buttons.css | Button khác a. Chỉ padding, border, radius, color, cursor. Hover, nhấn giữ, dùng Tab; nút disabled bị bỏ qua. |
| 3:00–4:00 | UI kit mục 4 | So sánh .active và :active. Giải thích focus và disabled thật khác việc chỉ làm mờ. |
| 4:00–5:30 | UI kit mục 3; pagination.css | Mở mã ba trạng thái; chỉ nav/ul/li/a, flex/gap, active/aria-current, span ở đầu/cuối. |
| 5:30–6:45 | Danh mục | Bấm 1 → 2 → 3 → 2 → 1. Sang trang 3, mở sản phẩm rồi quay lại trang 3. Nội dung chia sẵn 9–9–8. |
| 6:45–7:45 | Viewport 390px | Quan sát header, cột, nút, phân trang. Mở/đóng menu bằng bàn phím; details/summary là HTML native. |
| 7:45–8:45 | Giỏ/checkout | Chỉ nhãn mẫu, tổng tiền cố định, fieldset disabled và nút không gửi đơn. |
| 8:45–9:30 | UI kit / báo cáo QA | Trang vẫn hiện khi JS tắt. Nêu phạm vi kiểm thử Chromium, mở CSS để trả lời câu hỏi. |

## Câu hỏi thường gặp
**Tại sao không dùng JavaScript?** Mục tiêu là cấu trúc HTML và trình bày CSS. Nghiệp vụ động nằm ngoài bản học tập; người dùng đã có bản dự phòng đầy đủ.

**Nút Mua ngay có mua được không?** Không. Button trong UI kit chỉ minh họa trạng thái. Liên kết “Xem giỏ hàng mẫu” dẫn tới nội dung cố định.

**Tại sao có file .mjs?** Đây là công cụ Node.js để mở HTTP, kiểm tra và sao chép. Không có HTML tải script. Mở file HTML trực tiếp không cần chúng.

**CSS tự phân trang được không?** Không. Ba HTML chứa sẵn 9, 9 và 8 sản phẩm; mỗi tài liệu viết sẵn active.

**aria-current khác active thế nào?** aria-current cung cấp ngữ nghĩa trang hiện tại; class active được dùng làm selector định dạng. Hai phần phải đồng bộ.

**Tại sao dùng span cho disabled pagination?** A không có disabled như button. Span không có href, không điều hướng và không vào thứ tự Tab thông thường.

**Vì sao có viền khi Tab?** Focus giúp nhận biết vị trí bàn phím. Focus-visible cho phép trình duyệt thể hiện focus phù hợp phương thức nhập.

**Form có gửi thông tin không?** Không. Fieldset và nút gửi disabled; không có lưu trữ hay gọi API.

**Đổi giá sản phẩm ở đâu?** Sửa card, chi tiết và các mẫu liên quan; dữ liệu không tự đồng bộ.

**Vì sao còn utilities.css?** Một số nội dung trang chủ/thông số kế thừa dùng lớp tiện ích. File đã lọc bớt, là CSS có sẵn, không cần biên dịch. Trọng tâm bài trình bày là buttons.css và pagination.css.
