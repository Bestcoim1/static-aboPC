# ABOPC — Giao diện cửa hàng HTML + CSS

Bản này giữ diện mạo và nội dung của website tĩnh ABOPC trước khi chuyển đổi: header, trang chủ, danh mục, thẻ sản phẩm, chi tiết, đăng nhập và các công cụ PC. Website không tải JavaScript.

Yêu cầu được điều chỉnh ngày 29/10/2026: giữ website để trình bày như cửa hàng gốc; không biến giao diện chính thành bộ trang “mẫu” hoặc bài thực hành. Tài liệu học và UI kit nằm riêng.

## Mở website
Mở trực tiếp index.html, hoặc chạy:

```powershell
cd E:\trang-web-ban-pc\ABOPC-static\static-site
node serve.mjs
```

Mở địa chỉ in trong terminal; Ctrl+C để dừng. Không cần npm install, React, Vite, API hoặc cơ sở dữ liệu để xem giao diện.

## Hành vi
- Điều hướng, ảnh, liên kết danh mục và phân trang HTML hoạt động.
- Menu Sản phẩm/Công cụ/menu điện thoại dùng details/summary, có thể mở/đóng bằng chuột và bàn phím.
- 26 sản phẩm chia 3 trang 9–9–8, giữ thẻ sản phẩm của giao diện gốc.
- Tìm kiếm, lọc động, thêm giỏ, đăng nhập, lưu dữ liệu và kéo thả cần JavaScript nên không thực hiện. Control giữ hình thức/vị trí cũ và được vô hiệu hóa; tooltip giải thích khi cần.
- Giỏ hàng, checkout, wishlist và đơn hàng giữ trạng thái rỗng ban đầu của website gốc. Không tự thêm dữ liệu để làm trang mẫu.
- UI kit tại ui-kit.html là tài liệu thực hành riêng, không thay thế website.

## Cấu trúc
assets/css/main.css nạp CSS nền và giao diện gốc. Các file base/layout/pages/utilities/refinements/components và CSS riêng từng trang giữ kiểu trình bày của bản trước. no-script.css điều chỉnh menu HTML và các control không chạy JavaScript. buttons.css/pagination.css giữ nội dung bài giảng; teaching.css và study-pages.css chỉ được UI kit tải riêng.

Sửa HTML/CSS rồi tải lại. Các trang là tài liệu độc lập, không có bước sinh lại từ React. Giữ .static-study.json để ngăn bộ xuất cũ ghi đè.

## Kiểm tra và đóng gói
```powershell
node tools/check.mjs
node tools/package.mjs ..\ABOPC-storefront-html-css
```

Đích phải là thư mục mới. Các file .mjs là công cụ Node chạy trên máy, không được HTML tải. Workflow Pages vẫn kiểm tra và sao chép file khi có push được chủ sở hữu yêu cầu.

Khi đóng gói, mỗi URL CSS (kể cả CSS được @import) được thêm mã phiên bản tính từ nội dung toàn bộ stylesheet. Khi sửa CSS và xuất bản lại, trình duyệt tải bộ CSS mới thay vì trộn với cache của lần trước. File nguồn vẫn giữ tên dễ đọc; không thêm JavaScript vào website. Chạy `node --test tools/version-css.test.mjs` để kiểm tra cơ chế này.

Xem [báo cáo chỉnh lại giao diện](docs/khoi-phuc-giao-dien-cua-hang.md) và [phạm vi hiện tại](docs/pham-vi-ban-hoc-tap.md). Báo cáo P01–P17 phản ánh giai đoạn trước khi sửa cách hiểu yêu cầu; không dùng các con số CSS hoặc trang mẫu cũ để mô tả bản hiện tại.
