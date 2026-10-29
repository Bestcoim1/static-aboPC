# Bàn giao P01–P05

Ngày 29/10/2026. Phạm vi: bản tĩnh `ABOPC-static/static-site`. Trạng thái: **P01–P05 hoàn thành; P06–P17 chưa thực hiện trong đợt này**.

## Công việc đã hoàn thành

| Mã | Kết quả | Bằng chứng |
|---|---|---|
| P01 | Kiểm kê 48 HTML, 263 file, đường dẫn/tài nguyên/điều khiển; phương án riêng từng trang | kiem-ke-p01.md và kiem-ke-p01.json |
| P02 | Ghi nhận baseline Git; marker bản học tập; chặn bộ xuất/publish cũ trước khi thay đổi file hoặc liên hệ Git remote | .static-study.json, quy-uoc-chinh-sua.md, kết quả guard |
| P03 | Chuyển 7 stylesheet cũ vào assets/css và tách thêm thành 14 stylesheet; chuyển đủ 7 font; cập nhật HTML/CSS và đường dẫn lazy CSS | 1.357 tham chiếu tài nguyên kiểm tra thành công |
| P04 | Định dạng 48 HTML; tất cả có lang vi, title, viewport và main/h1; bổ sung 37 header bao quanh nav | Parse HTML và kiểm tra trình duyệt |
| P05 | Tách base/layout/pages/components cùng các file chuyển tiếp; thay 11 mẫu class tại 612 vị trí | CSS đọc được và 96 lượt so sánh trước/sau không khác biệt đo được |

## Class bố cục đã chuyển

| Class sau khi rút gọn | Số vị trí |
|---|---:|
| `storefront site-shell` | 37 |
| `site-container` | 42 |
| `site-container site-footer-content` | 37 |
| `static-catalog site-container catalog-content` | 1 |
| `site-header-actions` | 37 |
| `desktop-navigation` | 37 |
| `site-main` | 37 |
| `site-footer` | 37 |
| `product-card-body` | 113 |
| `product-card-purchase` | 117 |
| `product-price-row` | 117 |

Các CSS chuyển tiếp legacy-utilities/refinements vẫn cần thiết vì P06–P13 chưa chuyển hết thành phần và runtime. Không tuyên bố đã loại toàn bộ utility hoặc JavaScript.

## Kiểm tra đã chạy

- 48 tài liệu HTML không lỗi parse; 14 CSS parse được; 1.357 tham chiếu tài nguyên và 3.156 liên kết không có đích bị thiếu.
- Ảnh và 7 font so khớp SHA-256 với mốc trước chuyển đổi.
- Chromium, JavaScript tắt: 48 trang ở 390px và 1440px dưới /demo/ (96 lượt). Nội dung, số phần tử nội dung, bounding box và 16 thuộc tính CSS đo được khớp baseline. Không tràn ngang mới. Header ngữ nghĩa mới được loại khỏi phép đối chiếu phần tử vì không có tương ứng ở baseline.
- Mở 10 trang đại diện với JavaScript bật để kiểm tra tải module và CSS.
- Kiểm tra tương thích runtime giữ lại: 47 documents: direct HTML paths, images, no overflow at 375px; mount /.
- Kiểm tra tương thích runtime giữ lại: 47 documents: direct HTML paths, images, no overflow at 375px; mount /demo.
- Kiểm tra tương thích runtime giữ lại: Subdirectory cart interaction and reload persistence.
- Kiểm tra tương thích runtime giữ lại: Subdirectory lightbox loads original/secondary images and closes.
- Kiểm tra tương thích runtime giữ lại: Subdirectory autocomplete, comparison links and shared UI state sheet.
- Kiểm tra tương thích runtime giữ lại: Dark mode toggles and persists; reduced-motion media enabled.
- Kiểm tra tương thích runtime giữ lại: Initial HTML renders without JavaScript on home, product, Builder and Planner.
- Không có lỗi trình duyệt/tài nguyên hoặc request ngoài origin trong bộ kiểm tra runtime.
- Xem ảnh chụp thực tế trang chủ desktop, danh sách sản phẩm mobile và UI kit.
- Guard chặn build, prerender, publish và publish --skip-build; đích xuất legacy riêng vẫn được phép.

Snapshot và JSON máy trong dự án gốc: `artifacts/html-css-p01-p05/` gồm baseline-inventory.json, migration.json, structure-check.json, before-browser.json, after-browser.json, runtime-verification.json và ảnh PNG.

## Giới hạn và công việc tiếp theo

- Chưa thực hiện P06 Buttons, P07–P08 phân trang, P10 nội dung mẫu, P11 UI kit thuần HTML/CSS hoặc P13 gỡ JavaScript.
- Chưa kiểm thử Safari/iPhone, Firefox, screen reader hoặc toàn bộ ma trận responsive/zoom của P12.
- Bản có JavaScript vẫn có thể dựng lại DOM thành các class cũ; để trình bày HTML đã sửa ở giai đoạn này, tắt JavaScript rồi tải lại.
- Chưa commit/push/deploy. README và metadata đã ghi rõ giai đoạn chuyển tiếp; quy trình xuất bản cuối cùng còn thuộc P15.
- Không thay mã nguồn React/backend. Ngoài bản tĩnh chỉ thêm công cụ kiểm tra và guard cho các script xuất cũ.
