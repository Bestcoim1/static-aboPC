# Sửa lỗi giao diện do CSS khác phiên bản — 29/10/2026

Ảnh báo lỗi có header xếp dọc và nút mất nền. Bản GitHub Pages tải CSS mới hiển thị đúng; dùng HTML mới cùng CSS của bản trước tái hiện được kiểu lỗi trong ảnh: header từ 109px thành khoảng 380px, mất position fixed, nút CTA trở thành nền trong suốt. Các file trên hosting đều trả 200, nên kiểm tra HTTP 200 đơn thuần không phát hiện được trường hợp này.

tools/package.mjs hiện gắn mã phiên bản tính từ toàn bộ nội dung CSS vào các liên kết CSS trong HTML và các @import. Khi một stylesheet phụ thay đổi, URL main.css và mọi CSS liên quan đều đổi phiên bản. Không thêm runtime trình duyệt và không đổi giao diện.

Đã kiểm tra 100 lượt tải (50 trang × 390/1440px) với JavaScript tắt và mô phỏng cache cũ cho URL CSS không có phiên bản. Tất cả yêu cầu CSS dùng đúng phiên bản mới; không dùng CSS cũ, không tràn ngang hoặc lỗi ảnh. Header cao 111px ở mobile và 109px ở desktop; CTA giữ màu đỏ. Có kiểm tra Node.js trong CI để bảo đảm thay đổi CSS phụ làm đổi phiên bản và đóng gói lặp lại không tự đổi phiên bản khi nội dung giữ nguyên.

Bằng chứng phát triển: artifacts/css-cache-fix/verification.json và ảnh stale-css.png, fresh-live.png, fixed-390.png, fixed-1440.png. Chưa kiểm tra trực tiếp trên Opera của người dùng; kiểu lỗi đã được tái hiện và kiểm tra khắc phục trên Chromium.
