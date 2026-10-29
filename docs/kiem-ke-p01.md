# Kiểm kê P01 — mốc trước chuyển đổi

Ngày 29/10/2026; Git HEAD: `5b9543f753f790ed8c76c15fee5e3cf1457fd6bc`; working tree sạch.

Có **48 file HTML thực tế**: 47 trang trong `pages.json` và `ui-kit.html`. Không bỏ qua trang thành phần khi kiểm tra. Có 263 file ngoài thư mục Git.

## Nhóm tài nguyên trước khi sửa

| Nhóm | Số file |
|---|---:|
| HTML | 48 |
| CSS | 7 |
| JavaScript trình duyệt | 34 |
| Font | 7 |
| Ảnh | 157 |
| Công cụ máy chủ / cấu hình / tài liệu | 10 |

## Phương án cho từng trang

Các cột script/điều khiển/liên kết là số lượng ở mốc trước khi sửa, không có nghĩa mọi điều khiển đều cần JavaScript. JSON đi kèm lưu chi tiết từng liên kết, label, script, stylesheet, srcset và inline handler.

| File | Tiêu đề | Nhóm | Script | Điều khiển | Link | Phương án |
|---|---|---|---:|---:|---:|---|
| `404.html` | Không tìm thấy trang \| ABOPC | Trang lỗi | 1 | 8 | 69 | Giữ trang lỗi và liên kết quay lại; chuẩn hóa HTML/CSS |
| `about/index.html` | Về ABOPC \| ABOPC | Nội dung chính | 1 | 8 | 69 | Giữ nội dung, chuẩn hóa bố cục; đồng bộ CTA tại P09–P10 |
| `account/index.html` | Đăng nhập \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 10 | 5 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `admin/coupons/index.html` | Quản trị mã giảm giá \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 1 | 9 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `admin/index.html` | Quản trị đơn hàng \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 1 | 9 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `admin/orders/index.html` | Quản trị đơn hàng \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 1 | 9 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `admin/products/index.html` | Quản trị sản phẩm và kho \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 1 | 9 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `admin/reviews/index.html` | Quản trị đánh giá \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 1 | 9 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `builder/index.html` | Xây dựng cấu hình PC \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 18 | 72 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `cart/index.html` | Giỏ hàng \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 1 | 5 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `checkout/index.html` | Thanh toán \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 1 | 5 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `compatibility/index.html` | Kiểm tra tương thích \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 29 | 73 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `deals/index.html` | Khuyến mãi \| ABOPC | Nội dung chính | 1 | 44 | 87 | Giữ nội dung, chuẩn hóa bố cục; đồng bộ CTA tại P09–P10 |
| `guest-order.html` | Tra cứu đơn demo · ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 4 | 3 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `index.html` | Linh kiện và cấu hình PC \| ABOPC | Nội dung chính | 1 | 34 | 108 | Giữ nội dung, chuẩn hóa bố cục; đồng bộ CTA tại P09–P10 |
| `login/index.html` | Đăng nhập \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 10 | 5 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `orders/index.html` | Đơn hàng \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 8 | 70 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `products/10/index.html` | G.Skill Trident Z5 RGB 64GB \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/11/index.html` | WD Black SN850X 1TB NVMe \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/12/index.html` | Corsair RM850x 850W 80+ Gold \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/13/index.html` | NZXT Kraken Elite 360 RGB \| ABOPC | Chi tiết sản phẩm | 1 | 32 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/14/index.html` | be quiet! Dark Rock Pro 5 \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/15/index.html` | Fractal Design North Charcoal \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/16/index.html` | Seasonic Prime TX-1000 1000W \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/1/index.html` | Intel Core i9-14900K \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/2/index.html` | NVIDIA GeForce RTX 4080 Super \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/3/index.html` | ASUS ROG Strix B650E-F Gaming \| ABOPC | Chi tiết sản phẩm | 1 | 31 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/4/index.html` | Corsair Vengeance DDR5 32GB \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/5/index.html` | Samsung 990 Pro 2TB NVMe \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/6/index.html` | Lian Li O11 Dynamic EVO \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/7/index.html` | AMD Ryzen 9 7950X3D \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/8/index.html` | MSI GeForce RTX 4070 Ti Gaming X \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90101/index.html` | ABOPC Nano ITX \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90102/index.html` | ABOPC Pulse Air \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90103/index.html` | ABOPC Vertex 4000D \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90104/index.html` | ABOPC Titan Full Tower \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90201/index.html` | ABOPC View 24" \| ABOPC | Chi tiết sản phẩm | 1 | 26 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90202/index.html` | ABOPC View 27" \| ABOPC | Chi tiết sản phẩm | 1 | 26 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90203/index.html` | ABOPC View 32" 4K \| ABOPC | Chi tiết sản phẩm | 1 | 26 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90204/index.html` | ABOPC UltraWide 34" \| ABOPC | Chi tiết sản phẩm | 1 | 26 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90301/index.html` | ABOPC Giá đỡ đơn \| ABOPC | Chi tiết sản phẩm | 1 | 26 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/90302/index.html` | ABOPC Giá đỡ đôi \| ABOPC | Chi tiết sản phẩm | 1 | 26 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/9/index.html` | Gigabyte X670 AORUS Elite AX \| ABOPC | Chi tiết sản phẩm | 1 | 29 | 85 | Giữ nội dung và đường dẫn; chuẩn hóa HTML/CSS P04–P05; CTA/gallery xử lý P09–P10 |
| `products/index.html` | Danh mục sản phẩm \| ABOPC | Danh sách sản phẩm | 1 | 144 | 120 | Chuẩn hóa HTML/CSS P04–P05; chia trang và phân trang P07–P08 |
| `setup-planner/index.html` | Bố trí góc máy \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 60 | 71 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `track-order/index.html` | Tra cứu đơn hàng \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 12 | 70 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |
| `ui-kit.html` | ABOPC · Mẫu thành phần UI | Minh họa thành phần | 1 | 8 | 0 | Định dạng HTML/CSS P04–P05; thay script mẫu tại P11 |
| `wishlist/index.html` | Sản phẩm yêu thích \| ABOPC | Nghiệp vụ / công cụ minh họa | 1 | 8 | 69 | Giữ HTML dựng sẵn và runtime tại P01–P05; chuyển nội dung mẫu/điều khiển tại P10 |

## Phụ thuộc cần theo dõi

- Tìm kiếm/lọc/sắp xếp, giỏ hàng, tài khoản/quản trị, Builder/Planner, wishlist, so sánh và đánh giá đang cần runtime. P01–P05 giữ lại; P10–P13 chuyển đổi theo kế hoạch.
- CSS tải muộn của admin, Planner và tra cứu được tham chiếu trong `assets/main.js`; đã cập nhật khi chuyển file CSS.
- Tất cả trang có main và h1 sẵn. Các trang nghiệp vụ có thể là trạng thái khách/trống, không phải lỗi mất nội dung.
- Trang UI kit có inline event handler; giữ nguyên cho đến P11.
- Build/prerender/publish cũ có thể ghi đè HTML biên tập; P02 đã bổ sung guard.

## Toàn bộ file tại mốc ban đầu

Đường dẫn ở bảng này là **đường dẫn cũ**. CSS/font hiện nằm trong `assets/css/`, `assets/fonts/`. SHA-256 đầy đủ nằm trong `kiem-ke-p01.json`.

| File | Byte |
|---|---:|
| `.github/workflows/pages.yml` | 1730 |
| `.gitignore` | 79 |
| `404.html` | 32671 |
| `INTER-LICENSE.txt` | 4477 |
| `LUCIDE-LICENSE.txt` | 880 |
| `README.md` | 11636 |
| `about/index.html` | 47227 |
| `account/index.html` | 7673 |
| `admin/coupons/index.html` | 6615 |
| `admin/index.html` | 6583 |
| `admin/orders/index.html` | 6635 |
| `admin/products/index.html` | 6787 |
| `admin/reviews/index.html` | 6490 |
| `assets/About.js` | 7607 |
| `assets/Account.js` | 15305 |
| `assets/AdminCoupons.js` | 7665 |
| `assets/AdminDialog.js` | 2119 |
| `assets/AdminLayout.css` | 7462 |
| `assets/AdminLayout.js` | 2179 |
| `assets/AdminOrders.js` | 9066 |
| `assets/AdminProducts.js` | 21910 |
| `assets/AdminReviews.js` | 3518 |
| `assets/Builder.js` | 12144 |
| `assets/Cart.js` | 8452 |
| `assets/ChangeHighlight.js` | 702 |
| `assets/Checkout2.js` | 17400 |
| `assets/Compatibility.js` | 26233 |
| `assets/Deals.js` | 4035 |
| `assets/FormField.js` | 1096 |
| `assets/Login.js` | 6003 |
| `assets/NotFound.js` | 717 |
| `assets/Orders.js` | 9829 |
| `assets/ProductDetail.js` | 13195 |
| `assets/Products.js` | 11027 |
| `assets/ReviewEditor.js` | 2180 |
| `assets/SetupPlanner.css` | 6046 |
| `assets/SetupPlanner.js` | 39629 |
| `assets/ToolNavigation.js` | 954 |
| `assets/TrackOrder.css` | 1706 |
| `assets/TrackOrder.js` | 2967 |
| `assets/Wishlist.js` | 6135 |
| `assets/checkout.css` | 1174 |
| `assets/checkout.js` | 11013 |
| `assets/compat.js` | 8354 |
| `assets/data.css` | 1164 |
| `assets/data.js` | 58505 |
| `assets/discovery-dialogs.js` | 3061 |
| `assets/guestOrder.css` | 4826 |
| `assets/guestOrder.js` | 7051 |
| `assets/inter-cyrillic-ext-wght-normal.woff2` | 25960 |
| `assets/inter-cyrillic-wght-normal.woff2` | 18748 |
| `assets/inter-greek-ext-wght-normal.woff2` | 11232 |
| `assets/inter-greek-wght-normal.woff2` | 18996 |
| `assets/inter-latin-ext-wght-normal.woff2` | 85068 |
| `assets/inter-latin-wght-normal.woff2` | 48256 |
| `assets/inter-vietnamese-wght-normal.woff2` | 10252 |
| `assets/main.css` | 198272 |
| `assets/main.js` | 87654 |
| `assets/product-images.js` | 839 |
| `assets/saved-delete.js` | 1971 |
| `builder/index.html` | 60237 |
| `cart/index.html` | 4339 |
| `checkout/index.html` | 4306 |
| `compatibility/index.html` | 67036 |
| `deals/index.html` | 80636 |
| `export-manifest.json` | 2915 |
| `guest-order.html` | 1743 |
| `guest-token.js` | 230 |
| `http-file.mjs` | 1739 |
| `image-optimization.json` | 16736 |
| `images/abopc-desk-studio.jpg` | 222021 |
| `images/about-workshop.jpg` | 109269 |
| `images/brand/abo-logo.svg` | 4847 |
| `images/optimized/abopc-desk-studio-1280.webp` | 90608 |
| `images/optimized/abopc-desk-studio-1536.webp` | 122270 |
| `images/optimized/abopc-desk-studio-192.webp` | 5402 |
| `images/optimized/abopc-desk-studio-384.webp` | 15086 |
| `images/optimized/abopc-desk-studio-768.webp` | 42434 |
| `images/optimized/abopc-desk-studio-96.webp` | 1994 |
| `images/optimized/pc-studio-taste-1280.webp` | 56450 |
| `images/optimized/pc-studio-taste-1536.webp` | 77896 |
| `images/optimized/pc-studio-taste-192.webp` | 2648 |
| `images/optimized/pc-studio-taste-384.webp` | 7334 |
| `images/optimized/pc-studio-taste-768.webp` | 24610 |
| `images/optimized/pc-studio-taste-96.webp` | 980 |
| `images/optimized/products/1-1000.webp` | 23310 |
| `images/optimized/products/1-192.webp` | 3504 |
| `images/optimized/products/1-384.webp` | 7756 |
| `images/optimized/products/1-768.webp` | 16576 |
| `images/optimized/products/1-96.webp` | 1468 |
| `images/optimized/products/10-192.webp` | 4342 |
| `images/optimized/products/10-384.webp` | 10800 |
| `images/optimized/products/10-768.webp` | 28694 |
| `images/optimized/products/10-785.webp` | 30488 |
| `images/optimized/products/10-96.webp` | 1946 |
| `images/optimized/products/11-1000.webp` | 18116 |
| `images/optimized/products/11-192.webp` | 1896 |
| `images/optimized/products/11-384.webp` | 4942 |
| `images/optimized/products/11-768.webp` | 12424 |
| `images/optimized/products/11-96.webp` | 806 |
| `images/optimized/products/12-192.webp` | 6476 |
| `images/optimized/products/12-384.webp` | 17752 |
| `images/optimized/products/12-768.webp` | 43210 |
| `images/optimized/products/12-800.webp` | 48732 |
| `images/optimized/products/12-96.webp` | 2344 |
| `images/optimized/products/13-1000.webp` | 22562 |
| `images/optimized/products/13-192.webp` | 2312 |
| `images/optimized/products/13-384.webp` | 5742 |
| `images/optimized/products/13-768.webp` | 14260 |
| `images/optimized/products/13-96.webp` | 1012 |
| `images/optimized/products/13-alt-1000.webp` | 12732 |
| `images/optimized/products/13-alt-192.webp` | 1596 |
| `images/optimized/products/13-alt-384.webp` | 3628 |
| `images/optimized/products/13-alt-768.webp` | 7594 |
| `images/optimized/products/13-alt-96.webp` | 730 |
| `images/optimized/products/13-back-1000.webp` | 14446 |
| `images/optimized/products/13-back-192.webp` | 1244 |
| `images/optimized/products/13-back-384.webp` | 3070 |
| `images/optimized/products/13-back-768.webp` | 8158 |
| `images/optimized/products/13-back-96.webp` | 576 |
| `images/optimized/products/14-1000.webp` | 69940 |
| `images/optimized/products/14-192.webp` | 6022 |
| `images/optimized/products/14-384.webp` | 17844 |
| `images/optimized/products/14-768.webp` | 43994 |
| `images/optimized/products/14-96.webp` | 1788 |
| `images/optimized/products/15-192.webp` | 1914 |
| `images/optimized/products/15-384.webp` | 5352 |
| `images/optimized/products/15-768.webp` | 14020 |
| `images/optimized/products/15-800.webp` | 19750 |
| `images/optimized/products/15-96.webp` | 772 |
| `images/optimized/products/16-1000.webp` | 37910 |
| `images/optimized/products/16-192.webp` | 3740 |
| `images/optimized/products/16-384.webp` | 10264 |
| `images/optimized/products/16-768.webp` | 25478 |
| `images/optimized/products/16-96.webp` | 1508 |
| `images/optimized/products/2-1000.webp` | 26862 |
| `images/optimized/products/2-192.webp` | 3060 |
| `images/optimized/products/2-384.webp` | 7300 |
| `images/optimized/products/2-768.webp` | 16920 |
| `images/optimized/products/2-96.webp` | 1144 |
| `images/optimized/products/3-192.webp` | 4284 |
| `images/optimized/products/3-384.webp` | 12962 |
| `images/optimized/products/3-768.webp` | 38490 |
| `images/optimized/products/3-96.webp` | 1590 |
| `images/optimized/products/3-996.webp` | 70936 |
| `images/optimized/products/3-alt-192.webp` | 4046 |
| `images/optimized/products/3-alt-384.webp` | 12206 |
| `images/optimized/products/3-alt-768.webp` | 36160 |
| `images/optimized/products/3-alt-96.webp` | 1474 |
| `images/optimized/products/3-alt-996.webp` | 64570 |
| `images/optimized/products/4-192.webp` | 5216 |
| `images/optimized/products/4-384.webp` | 14884 |
| `images/optimized/products/4-768.webp` | 39384 |
| `images/optimized/products/4-800.webp` | 44494 |
| `images/optimized/products/4-96.webp` | 1926 |
| `images/optimized/products/5-192.webp` | 2578 |
| `images/optimized/products/5-384.webp` | 7734 |
| `images/optimized/products/5-624.webp` | 17318 |
| `images/optimized/products/5-96.webp` | 904 |
| `images/optimized/products/6-192.webp` | 2850 |
| `images/optimized/products/6-384.webp` | 9064 |
| `images/optimized/products/6-600.webp` | 21474 |
| `images/optimized/products/6-96.webp` | 1124 |
| `images/optimized/products/7-1000.webp` | 20622 |
| `images/optimized/products/7-192.webp` | 2808 |
| `images/optimized/products/7-384.webp` | 6822 |
| `images/optimized/products/7-768.webp` | 14530 |
| `images/optimized/products/7-96.webp` | 1298 |
| `images/optimized/products/8-1000.webp` | 46818 |
| `images/optimized/products/8-192.webp` | 4210 |
| `images/optimized/products/8-384.webp` | 11494 |
| `images/optimized/products/8-768.webp` | 30890 |
| `images/optimized/products/8-96.webp` | 1774 |
| `images/optimized/products/9-192.webp` | 7812 |
| `images/optimized/products/9-384.webp` | 26542 |
| `images/optimized/products/9-768.webp` | 81762 |
| `images/optimized/products/9-96.webp` | 2580 |
| `images/optimized/products/9-984.webp` | 133376 |
| `images/optimized/tools/builder-preview-192.webp` | 1060 |
| `images/optimized/tools/builder-preview-384.webp` | 3148 |
| `images/optimized/tools/builder-preview-768.webp` | 8574 |
| `images/optimized/tools/builder-preview-844.webp` | 10084 |
| `images/optimized/tools/builder-preview-96.webp` | 378 |
| `images/optimized/tools/compatibility-preview-192.webp` | 1022 |
| `images/optimized/tools/compatibility-preview-384.webp` | 3072 |
| `images/optimized/tools/compatibility-preview-768.webp` | 7830 |
| `images/optimized/tools/compatibility-preview-804.webp` | 9002 |
| `images/optimized/tools/compatibility-preview-96.webp` | 346 |
| `images/optimized/tools/setup-preview-192.webp` | 1978 |
| `images/optimized/tools/setup-preview-384.webp` | 5278 |
| `images/optimized/tools/setup-preview-768.webp` | 12238 |
| `images/optimized/tools/setup-preview-874.webp` | 14930 |
| `images/optimized/tools/setup-preview-96.webp` | 770 |
| `images/pc-studio-taste.jpg` | 205784 |
| `images/product-placeholder.svg` | 372 |
| `images/products/1.webp` | 29846 |
| `images/products/10.webp` | 36452 |
| `images/products/11.webp` | 21276 |
| `images/products/12.webp` | 59358 |
| `images/products/13-alt.webp` | 16102 |
| `images/products/13-back.webp` | 18198 |
| `images/products/13.webp` | 30892 |
| `images/products/14.webp` | 84668 |
| `images/products/15.webp` | 25972 |
| `images/products/16.webp` | 44116 |
| `images/products/2.webp` | 36920 |
| `images/products/3-alt.webp` | 76588 |
| `images/products/3.webp` | 87176 |
| `images/products/4.webp` | 49182 |
| `images/products/5.webp` | 20294 |
| `images/products/6.webp` | 27508 |
| `images/products/7.webp` | 26308 |
| `images/products/8.webp` | 56494 |
| `images/products/9.webp` | 165344 |
| `images/products/90101.svg` | 943 |
| `images/products/90102.svg` | 911 |
| `images/products/90103.svg` | 938 |
| `images/products/90104.svg` | 936 |
| `images/products/90201.svg` | 743 |
| `images/products/90202.svg` | 743 |
| `images/products/90203.svg` | 743 |
| `images/products/90204.svg` | 739 |
| `images/products/90301.svg` | 696 |
| `images/products/90302.svg` | 871 |
| `images/tools/builder-preview.jpg` | 28435 |
| `images/tools/compatibility-preview.jpg` | 24423 |
| `images/tools/setup-preview.jpg` | 43508 |
| `index.html` | 75158 |
| `login/index.html` | 7361 |
| `orders/index.html` | 33507 |
| `pages.json` | 6444 |
| `products/10/index.html` | 57846 |
| `products/11/index.html` | 57783 |
| `products/12/index.html` | 57921 |
| `products/13/index.html` | 59822 |
| `products/14/index.html` | 57527 |
| `products/15/index.html` | 56631 |
| `products/16/index.html` | 57899 |
| `products/1/index.html` | 57819 |
| `products/2/index.html` | 57907 |
| `products/3/index.html` | 59448 |
| `products/4/index.html` | 57848 |
| `products/5/index.html` | 57783 |
| `products/6/index.html` | 56739 |
| `products/7/index.html` | 57842 |
| `products/8/index.html` | 57942 |
| `products/90101/index.html` | 55835 |
| `products/90102/index.html` | 55838 |
| `products/90103/index.html` | 55862 |
| `products/90104/index.html` | 55896 |
| `products/90201/index.html` | 54220 |
| `products/90202/index.html` | 54220 |
| `products/90203/index.html` | 54229 |
| `products/90204/index.html` | 54235 |
| `products/90301/index.html` | 53866 |
| `products/90302/index.html` | 53866 |
| `products/9/index.html` | 57492 |
| `products/index.html` | 160382 |
| `serve.mjs` | 1409 |
| `setup-planner/index.html` | 75358 |
| `track-order/index.html` | 35205 |
| `ui-kit.html` | 2439 |
| `wishlist/index.html` | 33373 |
