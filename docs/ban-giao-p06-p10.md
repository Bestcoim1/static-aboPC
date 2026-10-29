# Bàn giao P06–P10

Ngày 29/10/2026. **P06–P10 hoàn thành.** P11–P17 chưa được đánh dấu hoàn thành.

## Kết quả

| Mã | Thay đổi | File chính |
|---|---|---|
| P06 | Chuẩn hóa btn/btn-primary/btn-outline/btn-buy, đủ hover/active/focus/disabled; ví dụ nút trong UI kit | `assets/css/buttons.css`, `ui-kit.html` |
| P07 | 26 sản phẩm được chia thành ba file HTML theo thứ tự cũ: 9–9–8 | `products/index.html`, `products/page-2.html`, `products/page-3.html` |
| P08 | Phân trang dùng nav/ul/li/a, Flexbox, active/disabled, aria-current; đầu/cuối dùng span không có href | `assets/css/pagination.css` |
| P09 | Đồng bộ header/footer, card và CTA; giữ tên, giá, mô tả, thông số của 26 sản phẩm; mở ảnh và quay lại đúng trang danh sách | Trang chủ, 26 trang chi tiết, `assets/css/study-pages.css` |
| P10 | Chuyển 16 trang nghiệp vụ/công cụ thành nội dung mẫu cố định; menu và hướng dẫn thu gọn dùng details/summary | Giỏ hàng, checkout, tài khoản, quản trị, Builder, Planner và các trang mẫu |

Hiện có **50 file HTML**: 48 file sau P05 và hai trang danh sách mới. `pages.json` đã liệt kê cả UI kit.

## Phạm vi hiện tại

- HTML không tải script, không có inline event handler hoặc URL javascript. Bỏ liên kết runtime ngay ở P10 để giao diện cũ không dựng lại và ghi đè HTML mới.
- Các file JavaScript cũ vẫn giữ nguyên trên đĩa. Xóa tài nguyên không dùng và dọn CSS chuyển tiếp còn thuộc P13.
- Điều hướng dùng a có href thật. Nút mua/đăng nhập/tra cứu không khả dụng dùng button disabled kèm giải thích.
- Nút đang bật trong khu vực ví dụ của UI kit chỉ minh họa phản hồi CSS, không thực hiện giao dịch. Hoàn thiện UI kit giảng dạy còn thuộc P11.
- Danh mục/nhãn thương hiệu dẫn tới sản phẩm đầu tiên phù hợp trong danh sách; không giả làm bộ lọc. Không còn query tìm kiếm/lọc động.
- Không sửa React/backend, không gọi bộ xuất cũ, không commit/push/deploy.

## Dữ liệu mẫu

- Giỏ hàng, checkout và đơn MẪU-001: Intel Core i9-14900K + Corsair Vengeance DDR5 32GB, mỗi sản phẩm một đơn vị; tổng mẫu 18.350.000 ₫, phí giao hàng mẫu 0 ₫.
- Builder: một phần cấu hình gồm CPU AMD, mainboard ASUS và RAM Corsair; chưa phải PC đầy đủ và không kiểm tra tương thích tự động.
- Trang tương thích: bảng thông số hai CPU Intel và AMD, không kết luận tương thích toàn hệ thống.
- Planner: ảnh bố trí cố định, có giải thích nút trong ảnh không phải điều khiển đang hoạt động.
- Trang nghiệp vụ là ví dụ viết sẵn, không lấy thông tin từ tài khoản hoặc đơn thật.

## Kiểm tra đã đạt

| Kiểm tra | Kết quả |
|---|---|
| Parse 50 HTML; main/h1, ID và tham chiếu | Đạt |
| 1.003 tham chiếu tài nguyên và 1.839 liên kết/anchor | Không thiếu đích |
| 26 sản phẩm trong ba trang danh sách | Đúng 9–9–8, không trùng/thiếu |
| Tên, giá, mô tả và từng thông số chi tiết | Khớp dữ liệu trước P06 |
| SHA-256 ảnh, font, file JS giữ lại | Không đổi |
| 50 trang × 390px/1440px × bật/tắt JavaScript | 200 lượt tải, không lỗi tài nguyên hoặc tràn ngang trang |
| Đường dẫn phục vụ | Tắt JS tại /demo/, bật JS tại /; phân trang thử cả hai |
| Phân trang | 1→2→3→2→1, bấm số trang, vào chi tiết và trở về đúng trang 3 |
| Gallery | Mở ảnh thật, Back quay lại chi tiết |
| Buttons | Hover đổi màu/nâng nhẹ, active khi nhấn giữ, focus bàn phím, native disabled |
| Biểu mẫu mẫu | Trường nhập/nút gửi bị vô hiệu hóa, không gửi giao dịch |
| Menu mobile và phần thu gọn | Hoạt động bằng details/summary khi tắt JS, menu mở không tràn ngang |
| Kiểm tra ảnh chụp | Danh sách desktop/mobile, chi tiết, trang chủ mobile, giỏ hàng và UI kit |

Bằng chứng trong dự án gốc: `artifacts/html-css-p06-p10/` gồm baseline.json, products-source.json, migration.json, verification.json, ảnh PNG và snapshot văn bản trước P06. Công cụ kiểm tra: `scripts/static-study/check-p06-p10.mjs`.

## Còn lại

P11: UI kit có ví dụ code và trạng thái phân trang. P12: ma trận responsive/zoom/bàn phím đầy đủ. P13: dọn runtime và CSS không dùng. P14–P17: QA tổng thể, quy trình xuất bản, tài liệu thuyết trình và tổng duyệt.

Chưa kiểm thử Firefox, Safari/iPhone thật, screen reader hoặc zoom 200%. Không dùng kết quả này để tuyên bố đã hoàn tất các phần đó.
