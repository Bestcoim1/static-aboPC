> Tài liệu giai đoạn P01–P17. Yêu cầu giao diện đã điều chỉnh ngày 29/10/2026: giữ cửa hàng gốc, chỉ bỏ JavaScript. Xem [bản điều chỉnh hiện tại](khoi-phuc-giao-dien-cua-hang.md); các mô tả trang mẫu/bố cục cũ bên dưới chỉ còn giá trị lịch sử.

# Quy ước chỉnh sửa

## Nguồn và đường dẫn
- Sửa trực tiếp HTML/CSS; UTF-8, thụt lề 2 khoảng trắng, xuống dòng LF.
- Link tương đối phải trỏ tới file/anchor thật. Không thêm query giả để mô phỏng lọc.
- Thêm trang phải cập nhật pages.json, lang="vi", title, viewport, một main và một h1.
- Không chạy lại script migrate P01–P10 hoặc bộ xuất cũ. Giữ .static-study.json để bảo vệ HTML viết tay.

## Thành phần
- Dùng .btn và biến thể primary/buy/outline; điều hướng dùng a, nút mẫu dùng button type="button".
- Phân trang có một aria-current cho trang hiện tại; biên không khả dụng dùng span.
- Sửa buttons.css/pagination.css rồi đồng bộ khối mã mẫu trong UI kit. Giữ thứ tự import main.css.
- Khi đổi giá/tên/ảnh, cập nhật card, chi tiết, khuyến mãi và mẫu liên quan.
- Không tải CDN/framework/script để sửa bố cục. Giữ ảnh/font/giấy phép.
- Không đưa .git, node_modules hoặc backup vào gói xuất bản.

## Kiểm tra
Chạy node tools/check.mjs. Mở trang chủ, ba danh sách, chi tiết, UI kit khi JS tắt; thử 360/390/768/1280/1440px, Tab, hover/nhấn giữ, disabled và giới hạn phân trang. Sửa CSS nền phải kiểm tra cả trang chủ và thông số kế thừa.

Công cụ tích hợp là kiểm tra cấu trúc/link của gói, không thay thế validator đầy đủ, xem giao diện hoặc kiểm thử trình đọc màn hình. Bằng chứng đợt này ở kiem-thu-html-css.md và artifacts/html-css-p11-p17 ngoài website.

node tools/package.mjs <thu-muc-moi> sao chép gói. Nếu hosting nằm dưới thư mục con, đặt PAGE_BASE đúng đường dẫn để 404 có link phù hợp. Việc push/deploy cần yêu cầu chủ động của người sở hữu.
