> Tài liệu giai đoạn P01–P17. Yêu cầu giao diện đã điều chỉnh ngày 29/10/2026: giữ cửa hàng gốc, chỉ bỏ JavaScript. Xem [bản điều chỉnh hiện tại](khoi-phuc-giao-dien-cua-hang.md); các mô tả trang mẫu/bố cục cũ bên dưới chỉ còn giá trị lịch sử.

# Kiểm thử HTML/CSS — 29/10/2026

Kết quả P11–P17: đạt các kiểm tra bên dưới. Bằng chứng JSON và ảnh nằm tại `E:\trang-web-ban-pc\artifacts\html-css-p11-p17` trong workspace phát triển.

| Kiểm tra | Kết quả |
|---|---|
| HTML | 50/50 tài liệu parse bằng parse5; một main/h1, lang vi, không trùng ID, không script/handler/modulepreload |
| Validator bổ sung | html-validate 10.4.0: 50 trang, 0 lỗi với cấu hình lưu trong syntax-validation.json |
| CSS | 10 file; PostCSS parse thành công; CSS Tree parse rule/declaration thành công |
| Liên kết/tài nguyên | 1.885 link và 997 tham chiếu tài nguyên được kiểm tra trong bộ QA sâu; không thiếu file/anchor |
| Nội dung | 26 tên/giá/mô tả/thông số khớp nguồn P06; chia 9–9–8 không lặp |
| Trình duyệt | Chromium, 50 trang × 360/390/768/1280/1440px × JS bật/tắt = 500 lượt tải; không lỗi trang/ảnh/tràn ngang |
| Runtime | Không có yêu cầu tải script hoặc tài nguyên từ bên ngoài trong lượt kiểm tra website |
| Lọc CSS | 100 đối chiếu trước/sau: 50 trang × 390/1440px; tọa độ/kích thước và các thuộc tính hiển thị được đo không đổi |
| Bàn phím | Skip link tới main; Tab bỏ qua disabled; focus nhìn thấy; menu mở/đóng Enter/Space; vùng code vào/ra bằng Tab |
| Chuyển động | prefers-reduced-motion: reduce tắt transform/transition của nút |
| Phóng to | CSS zoom 200% trên 50 trang không tràn ngang; thêm reflow 640 CSS px/DPR 2 trên trang chủ/danh mục/UI kit |
| Chữ dài | Chuỗi tiêu đề không có khoảng trắng ở 360px trên 4 trang đại diện không gây tràn ngang |
| Tương tác HTML | Phân trang 1→2→3→2→1; chi tiết/quay về đúng trang; gallery mở ảnh và Back; details mở/đóng |
| Form mẫu | Fieldset disabled; nút submit liên kết đúng form và vẫn disabled; không nhập/gửi được |
| Gói sao chép | 100 lượt tải: 50 trang tại / và 50 tại /demo, JS tắt; link và ảnh hoạt động |
| 404 | URL thiếu ở nhiều cấp trả HTTP 404, có CSS/ảnh và link về đúng gốc hosting; thử cả / và /demo |
| Mở file trực tiếp | file:// UI kit → danh mục → trang 3 hoạt động |
| Server đi kèm | Gói sao chép tự chạy serve.mjs, mở UI kit và trả trang 404 HTML |
| Chốt bảo vệ | Bộ xuất cũ bị chặn với thư mục học tập và thư mục con; thư mục xuất độc lập vẫn được phép |
| Bảo toàn tài nguyên | 166 ảnh/font/giấy phép trong kiểm kê khớp SHA-256 trước P11 |

## Giới hạn của bằng chứng
Chỉ xác nhận Chromium đã chạy tự động; chưa thử Firefox, Safari, trình đọc màn hình hoặc thiết bị di động thật. Kiểm tra 200% dùng CSS zoom và kích thước reflow tương đương, chưa thao tác menu zoom gốc của trình duyệt. Không tuyên bố đạt toàn bộ WCAG.

Đối chiếu CSS so sánh vị trí/kích thước và một tập thuộc tính computed style, không phải so sánh từng pixel. Ảnh đại diện của UI kit mobile và danh mục desktop đã được xem trực tiếp.

HTML validator tắt các quy tắc định dạng doctype/void, giới hạn độ dài title, SVG focusable, ưu tiên phần tử native và cấm inline style để phù hợp nguồn kế thừa; các quy tắc cấu trúc/ngữ nghĩa còn lại vẫn chạy. CSS Tree giữ phần điều kiện at-rule dạng raw vì parser không hiểu đầy đủ cú pháp @supports lồng của nền CSS kế thừa; PostCSS và Chromium vẫn đọc các stylesheet thực tế. Đây không phải chứng nhận W3C Validator.

## Chạy lại
Trong gói: `node tools/check.mjs`. Đây là kiểm tra nhanh 50 trang, link/anchor/tài nguyên và phân trang, dùng Node.js thuần.

Trong workspace phát triển:
- `node scripts/static-study/check-p11-p17.mjs`
- `node scripts/static-study/check-final-layout.mjs`
- `node scripts/static-study/validate-final-syntax.mjs`
- `node scripts/static-study/check-portable.mjs`

Các script chuyên sâu dùng thư viện kiểm thử ở tmp/html-css-tools và Chromium trong máy phát triển; không phải phụ thuộc để website chạy. Không dùng báo cáo P01–P10 thay cho kết quả cuối này. Chưa push hoặc chạy workflow deploy.
