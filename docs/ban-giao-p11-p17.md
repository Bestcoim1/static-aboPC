# Bàn giao P11–P17 — 29/10/2026

Hoàn tất các đầu việc còn lại của kế hoạch HTML/CSS. Nguồn chính là thư mục static-site; website có 50 trang và 26 sản phẩm.

| Mã | Kết quả |
|---|---|
| P11 | UI kit có ví dụ sống, HTML/CSS đi kèm, ba trạng thái phân trang và giải thích active/disabled |
| P12 | Focus, vùng code cuộn riêng, xuống dòng chữ dài; kiểm tra 5 kích thước, bàn phím, reduced motion và stress 200% |
| P13 | Bỏ 34 file JavaScript, 7 CSS cũ không còn dùng; lọc CSS kế thừa, đổi legacy-utilities.css thành utilities.css; thành phần thật ở components.css |
| P14 | 50 HTML/10 CSS, link/tài nguyên, nội dung sản phẩm, 500 lượt tải Chromium; không lỗi trong kiểm tra cuối |
| P15 | README và metadata hoàn chỉnh; công cụ check/package không cần npm; workflow Pages sao chép bản viết tay; local server có trang 404 HTML |
| P16 | Bảng đối chiếu lý thuyết, hướng dẫn đọc code, phạm vi, kịch bản 8–10 phút và FAQ |
| P17 | Kiểm tra gói sao chép độc lập tại / và /demo, file://, server đi kèm, 404 sâu, phân trang/chi tiết/quay lại; chuẩn bị ZIP bàn giao |

## Thay đổi đáng chú ý
- Tổng CSS giảm từ 291.221 byte trước P11 xuống khoảng 70 KB (giảm khoảng 76%), dù có thêm giao diện bài thực hành.
- Giữ nguyên 166 file ảnh/font/giấy phép đã kiểm kê bằng SHA-256.
- Nút submit mẫu liên kết với form bằng thuộc tính form, vẫn disabled. Không thêm chức năng nghiệp vụ.
- HTML không tải JavaScript. Các .mjs còn lại là công cụ Node chạy trên máy.
- Không sửa backup người dùng; không sửa React/backend trong đợt này; không commit, push hoặc deploy.

## Nhóm file bàn giao
- UI: ui-kit.html, assets/css/, ba form mẫu checkout/track-order/login.
- Vận hành: serve.mjs, tools/check.mjs, tools/package.mjs, pages.json, export-manifest.json, .static-study.json, workflow Pages.
- Tài liệu: README.md và docs/doi-chieu-ly-thuyet.md, huong-dan-thuyet-trinh.md, pham-vi-ban-hoc-tap.md, huong-dan-doc-code.md, quy-uoc-chinh-sua.md, kiem-thu-html-css.md.
- Danh sách file thêm/đổi/xóa chi tiết: artifacts/html-css-p11-p17/final-changes.json trong workspace phát triển.

## Cách dùng ngay
Mở ui-kit.html để học; mở index.html để xem cửa hàng. Hoặc chạy node serve.mjs rồi truy cập địa chỉ in trong terminal. Chạy node tools/check.mjs trước khi chỉnh tiếp. Đọc huong-dan-thuyet-trinh.md trước khi trình bày.

Các tính năng chuyển thành mẫu được liệt kê tại pham-vi-ban-hoc-tap.md. Phạm vi và giới hạn kiểm thử được ghi tại kiem-thu-html-css.md, gồm giới hạn Chromium và phương pháp kiểm tra zoom. Không có lỗi còn mở trong tập kiểm tra đã thực hiện.
