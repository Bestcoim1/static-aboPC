> Tài liệu giai đoạn P01–P17. Yêu cầu giao diện đã điều chỉnh ngày 29/10/2026: giữ cửa hàng gốc, chỉ bỏ JavaScript. Xem [bản điều chỉnh hiện tại](khoi-phuc-giao-dien-cua-hang.md); các mô tả trang mẫu/bố cục cũ bên dưới chỉ còn giá trị lịch sử.

# Hướng dẫn đọc code

1. Đọc ui-kit.html: mỗi section là một ý, ví dụ sống đi cùng mã mẫu.
2. Đọc assets/css/buttons.css: .btn là nền, các class primary/buy/outline là biến thể; pseudo-class là trạng thái.
3. Trong products/index.html, tìm nav class="pagination": nav/ul/li/a, active và span ở biên đầu.
4. So sánh products/page-2.html và products/page-3.html: href, active và disabled thay đổi; dữ liệu cố định.
5. Đọc assets/css/pagination.css: flex/gap, background/border/radius và focus.
6. Đọc main.css để thấy thứ tự import: base là font/reset/màu; layout là container/logo; pages là trang chủ; utilities là lớp tiện ích kế thừa; refinements là điều chỉnh giao diện; study-pages là các trang tĩnh.

HTML dùng a để chuyển trang, button type="button" cho nút mẫu và details/summary cho nội dung mở/đóng. Form mẫu nằm trong fieldset disabled. Không gắn onclick hoặc script.

data-product-id phục vụ kiểm kê, không tự thực thi JavaScript. aria-current, aria-label và aria-disabled cung cấp ngữ nghĩa, không tạo nghiệp vụ.

tools/check.mjs kiểm tra file; tools/package.mjs sao chép và sửa đường dẫn 404 theo hosting. serve.mjs và http-file.mjs phục vụ HTTP trên máy. Người học chỉ cần sửa HTML/CSS để thay giao diện.

Xem [bảng đối chiếu](doi-chieu-ly-thuyet.md) và [kịch bản](huong-dan-thuyet-trinh.md).
