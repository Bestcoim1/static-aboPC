# Khôi phục diện mạo cửa hàng — 29/10/2026

## Lý do
Bản P01–P17 đã đi quá xa khi thay website bằng những trang có nhãn mẫu, lời giải thích học tập và bố cục đơn giản hóa. Người dùng muốn giữ diện mạo website tĩnh ban đầu và chỉ bỏ JavaScript.

## Đã chỉnh
- Khôi phục HTML và CSS giao diện gốc từ snapshot trước P06; 49 trang cửa hàng được sửa, UI kit được giữ riêng.
- Khôi phục header/search bar, footer, trang chủ, card, sidebar, chi tiết sản phẩm, login, builder, compatibility và planner.
- Trả giỏ hàng, thanh toán, wishlist, đơn hàng về trạng thái ban đầu gốc, bỏ dữ liệu mẫu tự thêm.
- Giữ phân trang HTML 9–9–8 với hình thức thẻ sản phẩm gốc.
- Chuyển menu desktop/mobile thành details/summary để hoạt động không cần JavaScript.
- Bỏ script, modulepreload, inline handler, URL javascript, form gửi dữ liệu. Tác vụ động giữ hình thức nhưng disabled; tooltip giải thích khi cần.
- Giữ ảnh/font local và cấu trúc CSS có thể sửa trực tiếp. Khôi phục các stylesheet cần để bảo toàn giao diện; không giữ mục tiêu giảm 76% CSS của bản trước.

## Bằng chứng
- tools/check.mjs: 50 trang, 26 sản phẩm, 19 CSS, 4.328 tham chiếu hợp lệ, 0 file JavaScript trình duyệt.
- Parse HTML bằng parse5; tên/giá/mô tả/thông số của 26 sản phẩm khớp nguồn trước chuyển đổi.
- 300 lượt tải Chromium: 50 trang ở 360/390/768/1280/1440px khi JS tắt; 50 trang ở 1440px khi JS bật. Không lỗi trang/ảnh/tràn ngang hoặc yêu cầu tải script.
- Menu desktop/mobile, Enter/Space, link danh mục, phân trang, chi tiết và Back đã thử.
- Đã xem ảnh trang chủ desktop/mobile sau chỉnh và đối chiếu ảnh bản gốc. Không tuyên bố so sánh từng pixel.
- Gói sao chép mở trực tiếp file://: 5 trang đại diện, không lỗi console/ảnh/tràn ngang. Bỏ crossorigin ở stylesheet và preload font của bộ xuất cũ để tránh chặn CSS khi mở file local.
- Chưa thử Firefox, Safari, trình đọc màn hình hoặc thiết bị thật.

Bằng chứng mới: docs/qa/storefront-no-js.json; ảnh tại artifacts/storefront-no-js-correction trong workspace phát triển. Các báo cáo QA P01–P17 là lịch sử, không thay thế bằng chứng này.

## Cách trình bày
Mở index.html và đi qua website như một cửa hàng thông thường. Khi cần giải thích kiến thức, mở UI kit hoặc file CSS riêng. Nêu một lần rằng phiên bản này giữ phần giao diện HTML/CSS, các tác vụ nghiệp vụ JavaScript đã tạm bỏ; không gắn nhãn “mẫu” lên từng trang.

Lần điều chỉnh này chưa tự commit/push/deploy.
