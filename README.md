# ABOPC — Bản học tập HTML + CSS

50 trang HTML, 26 sản phẩm, phân trang thật 9–9–8. Trang chủ, danh mục, chi tiết và UI kit dùng chung CSS, hoạt động khi JavaScript bị tắt. Các quy trình nghiệp vụ là trang mẫu có nhãn rõ ràng.

## Mở và sửa
Mở trực tiếp `index.html` hoặc `ui-kit.html`. Để xem qua HTTP, mở PowerShell tại thư mục này:

```powershell
cd E:\trang-web-ban-pc\ABOPC-static\static-site
node serve.mjs
```

Truy cập http://127.0.0.1:5179/; Ctrl+C để dừng. Có thể dùng `python -m http.server 5179` thay thế. Không cần npm install, React, Vite, cơ sở dữ liệu hoặc Internet để xem website. Node.js chỉ dùng cho công cụ tùy chọn trên máy.

Sửa trực tiếp HTML/CSS, lưu rồi tải lại. Tên/giá sản phẩm nằm trong các file HTML riêng; khi sửa phải cập nhật cả card, chi tiết và trang mẫu có nhắc sản phẩm đó.

## Tìm code
| Nội dung | File |
|---|---|
| Bài thực hành và mã ví dụ | `ui-kit.html` |
| Nút và trạng thái | `assets/css/buttons.css` |
| Phân trang | `assets/css/pagination.css` và ba file trong `products/` |
| Font, reset, màu | `assets/css/base.css` |
| Thứ tự import CSS | `assets/css/main.css` |
| Bố cục trang tĩnh | `assets/css/study-pages.css`, `layout.css`, `pages.css` |
| Lớp tiện ích kế thừa còn dùng | `assets/css/utilities.css` |
| Danh sách đầy đủ 50 trang | `pages.json` |

Giữ các lớp tiện ích để bảo toàn phần nội dung cũ; không cần trình biên dịch Tailwind. Bài trình bày tập trung vào buttons.css và pagination.css.

## Kiểm tra và đóng gói
```powershell
node tools/check.mjs
node tools/package.mjs ..\ABOPC-html-css-delivery
```

Thư mục đích phải chưa tồn tại. Công cụ chỉ sao chép file, không xuất bản. Gói sao chép chạy `node serve.mjs` độc lập. Các file .mjs là công cụ Node trên máy; không có HTML nào tải chúng.

Workflow `.github/workflows/pages.yml` kiểm tra rồi sao chép website cho GitHub Pages. Người sở hữu cấu hình Pages dùng GitHub Actions và chủ động push/chạy workflow khi muốn xuất bản. Đợt này chưa push/deploy. `PAGE_BASE` xác định thư mục hosting để sửa link trang 404. Không chạy bộ xuất cũ; `.static-study.json` và chốt bảo vệ ngăn ghi đè bản viết tay.

## Tài liệu
- [Đối chiếu bài giảng](docs/doi-chieu-ly-thuyet.md)
- [Kịch bản 8–10 phút](docs/huong-dan-thuyet-trinh.md)
- [Phạm vi bản học tập](docs/pham-vi-ban-hoc-tap.md)
- [Kiểm thử](docs/kiem-thu-html-css.md)
- [Đọc code](docs/huong-dan-doc-code.md)
- [Quy ước chỉnh sửa](docs/quy-uoc-chinh-sua.md)
- [Bàn giao P11–P17](docs/ban-giao-p11-p17.md)

Báo cáo P01–P05/P06–P10 và kiểm kê P01 là lịch sử, không mô tả cấu trúc cuối cùng. Giữ font, ảnh và giấy phép gốc.
