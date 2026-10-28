# ABOPC — bản HTML, CSS và JavaScript thuần

## Xem online và cập nhật

Cập nhật giá mẫu 28/10/2026: giá bán và giá gốc được làm tròn đến 10.000đ gần nhất, ví dụ 15.044.745đ → 15.040.000đ. Trình duyệt đã dùng bản cũ được nâng cấp một lần; giá tự sửa trong admin, dữ liệu tài khoản, tồn kho và đơn đã tạo được giữ nguyên. Báo giá chờ có sản phẩm đổi giá cần lấy lại. Đây là giá demo, không phải giá thị trường hoặc bảng giá HACOM.

Đường link chia sẻ: **https://bestcoim1.github.io/static-aboPC/**. Website là demo đồ án; tài khoản, giỏ hàng và đơn mẫu lưu riêng trên trình duyệt mỗi người.

Repository này chỉ chứa bản xuất tĩnh. GitHub Actions tự xuất bản sau mỗi lần push vào `main`; không cần gửi lại file cho người xem. Tiến độ triển khai nằm ở tab Actions. Chỉnh sửa trên máy chưa xuất bản sẽ không ảnh hưởng đến đường link đang chia sẻ.

Từ dự án gốc `E:/trang-web-ban-pc`, chạy lệnh sau để tạo lại bản tĩnh, kiểm tra và push:

```powershell
node scripts/static-export/publish.mjs
```

Nếu vừa sửa trực tiếp các file trong bản tĩnh và muốn giữ chúng (không tạo lại từ React/adapter), dùng `node scripts/static-export/publish.mjs --skip-build`. Cả hai chế độ đều kiểm tra bản xuất trước khi push. Công cụ dùng môi trường Node/Playwright đã cài trên máy phát triển hiện tại; người xem website không cần cài gì.

Lưu ý: tạo lại bản tĩnh sẽ thay các file sinh tự động. Các thay đổi UI dùng lâu dài nên nằm trong nguồn/bộ xuất của dự án gốc. Bản đã cập nhật có thể cần tải lại trang; dữ liệu demo cũ trong trình duyệt không tự đồng bộ giữa các máy.

Bản demo riêng, cập nhật ngày 26/10/2026, đã áp dụng đợt cải thiện UI/UX dành cho bản tĩnh. Thư mục này có thể sao chép độc lập; trình duyệt không cần React, Vite, Supabase hay CDN. Có 47 tài liệu HTML, 26 sản phẩm mẫu, ảnh và font Inter đi kèm.

## Chạy trên máy

Nếu đã cài Node.js, mở terminal **trong thư mục này**:

```powershell
node serve.mjs
```

Mở **http://127.0.0.1:5179**. Nhấn Ctrl+C để dừng. Không cần `npm install`.

Hoặc, với Python 3:

```powershell
python -m http.server 5179
```

Không mở bằng cách nhấp đúp `index.html` qua `file://`: JavaScript modules cần HTTP. Khi đưa lên hosting, dùng HTTPS. Hosting chỉ cần phục vụ tệp tĩnh, hỗ trợ `index.html` trong thư mục con và chuyển `/products` sang `/products/`. Có thể đặt toàn bộ thư mục dưới một đường dẫn như `/demo/`.

## Sử dụng demo

Bảng **Bản tĩnh · Demo** ở cuối trang, sau footer, cho phép chọn Khách, Khách hàng demo hoặc Quản trị demo, xuất JSON và đặt lại dữ liệu. Sau khi chọn Quản trị demo, bấm **Mở quản trị**.

| Tài khoản | Email | Mật khẩu |
|---|---|---|
| Khách hàng demo | customer@abopc.example | DemoAbopc123! |
| Quản trị demo | admin@abopc.example | DemoAbopc123! |

Mã `DEMO10` giảm 10%, tối đa 100.000 đồng, cho tối đa 100 lượt dùng trong dữ liệu demo. Giá, thuế, phí và chính sách đều là số liệu mô phỏng phục vụ đồ án.

Các thao tác hoạt động trong trình duyệt:

- Tìm kiếm/lọc sản phẩm, gallery, popup, dark mode, menu mobile.
- Giỏ hàng, wishlist, thay đổi số lượng và lưu lại khi tải lại trang.
- Builder, kiểm tra tương thích, Setup Planner kéo thả/bàn phím, lưu cấu hình và góc máy.
- Đăng ký/đăng nhập demo, hồ sơ, dữ liệu riêng cho từng tài khoản cục bộ.
- Checkout COD demo, mã giảm giá, giữ tồn, chống gửi lặp theo mã thao tác trong dữ liệu cục bộ.
- Khách vãng lai tra cứu bằng mã đơn/email trên cùng trình duyệt, hủy đơn khi còn được phép.
- Quản trị sản phẩm/ảnh/tồn kho, mã giảm giá, đóng gói/giao/nhận hàng/thu COD, quản trị đánh giá.
- Tài khoản đã nhận hàng viết/sửa một đánh giá cho mỗi sản phẩm.

## Giao diện — cập nhật 26/10/2026

Bản bàn giao đã tối ưu tải: ảnh WebP nhiều kích thước, JavaScript/CSS được nén, các trang công cụ/quản trị tải mã khi mở. Ảnh gốc vẫn đi kèm; ảnh người dùng tải lên và dữ liệu cục bộ giữ nguyên. `serve.mjs` dùng kèm `http-file.mjs` để phục vụ Brotli/gzip và ETag, không cần cài package. Nếu dùng Python hoặc hosting khác, website vẫn chạy; bật nén HTTP ở hosting để có mức dung lượng truyền tương đương.

- Giữ đỏ–kem và Inter; header gọn hơn, tìm kiếm trong danh mục giữ các bộ lọc hiện tại.
- Trang chủ đưa danh mục/sản phẩm lên trước công cụ, hiện 4 sản phẩm nổi bật; card dạng hàng trên điện thoại, ảnh công cụ chụp từ bản tĩnh thực tế.
- Sao và số lượt đánh giá thống nhất từ đánh giá công khai lưu trong trình duyệt; chưa có nhận xét thì hiển thị rõ, không dùng số sao seed.
- Checkout mobile có tổng tiền trước form, mở xem chi tiết và cập nhật theo mã giảm giá. Submit lỗi đưa focus đến ô sai sau khi render.
- Planner có thanh lưu/mua phía trên workspace, hướng dẫn thu gọn và cảnh báo nêu tên thiết bị; bảng Demo nằm trong luồng trang.
- Title/description riêng cho các trang; có theme tối và reduced motion. Chưa đặt canonical vì chưa có địa chỉ hosting chính thức.

## Setup Planner — cập nhật 25/10/2026

- Chọn màn hình rồi kéo nút xoay nối với cạnh khung chọn, xoay quanh tâm cố định như trình chỉnh sửa ảnh. Giữ Shift để căn mỗi 15°, hoặc nhập góc chính xác; vượt mép bàn sẽ được cảnh báo.
- Bỏ lựa chọn Ngang/Dọc và ô tọa độ X/Y. Bàn phím, chuột kéo thả độc lập với giá treo màn hình.
- Lót chuột là vật mô phỏng, không tính tiền: kéo để di chuyển, kéo góc để đổi kích thước, hoặc nhập Dài/Rộng (cm). Có 11 preset thuộc bốn nhóm Nhỏ, Vừa, Lớn, Trải dài; mặc định 80×30 cm.
- Esc hủy thao tác đang kéo; Hoàn tác khôi phục vị trí, góc và kích thước. Có chế độ mở rộng và điều khiển bằng bàn phím.
- Bấm Lưu bố trí để giữ góc xoay và kích thước lót chuột khi tải lại. Khách và từng tài khoản demo có danh sách lưu riêng trong trình duyệt. Bố trí cũ chỉ có tọa độ vẫn được hỗ trợ.

## Giới hạn cần hiểu

Đây là **mô phỏng phía trình duyệt**, không phải backend thương mại. Người dùng có thể tự đổi vai trò demo hoặc sửa localStorage. Không có phân quyền bảo mật, email thật, thanh toán thật, xác thực liên kết tra cứu, đồng bộ nhiều thiết bị, hay bảo đảm giao dịch đồng thời giữa nhiều tab.

Dữ liệu lấy từ **catalog mẫu trong mã nguồn**, không xuất tài khoản, đơn hàng hoặc danh mục đang lưu trên Supabase. Xóa dữ liệu trình duyệt sẽ xóa các thay đổi demo. Upload ảnh lưu trong localStorage, chịu hạn mức dung lượng trình duyệt; nên dùng ảnh nhỏ. Không nhập mật khẩu thật hoặc dữ liệu cá nhân thật. Email khôi phục mật khẩu không được gửi; giao diện sẽ thông báo rõ giới hạn này.

Các khóa lưu trữ bắt đầu bằng `abopc-static`; không dùng chung dữ liệu với bản React. Nút đặt lại chỉ xóa các khóa của bản tĩnh. Dữ liệu không tự đi theo khi đổi cổng, hostname hoặc trình duyệt. Nếu chỉnh ảnh thành URL bên ngoài trong admin thì ảnh đó sẽ cần mạng; các ảnh ban đầu đều có sẵn trong gói.

## UI và hiệu ứng

Giữ CSS, bố cục, màu đỏ–kem, typography, logo và ảnh của bản nguồn. HTML ban đầu đã được dựng sẵn; JavaScript khởi tạo lại trạng thái tương tác theo dữ liệu đang lưu. Những trang cần đăng nhập/quản trị hiển thị trạng thái khách trước khi chọn vai trò demo.

Hiệu ứng được thực hiện bằng CSS và Web Animations API. Chuyển động, popup và gallery giữ hành vi tương ứng, nhưng thời gian/spring/thoát phần tử không được bảo đảm giống Motion từng khung hình. Giao diện có thêm bảng điều khiển demo và điều chỉnh câu chữ về email/backend để phản ánh đúng hành vi cục bộ.

## Tệp trong gói

- `index.html`, các thư mục trang và `guest-order.html`: HTML dựng sẵn.
- `assets/*.js`: mã JavaScript thuần có thể đọc được, gồm xử lý DOM, trạng thái và nghiệp vụ demo.
- `assets/*.css`, `assets/*.woff2`, `images/`: style, font và ảnh.
- `pages.json`: danh sách tài liệu HTML.
- `export-manifest.json`: nguồn tạo bản xuất và xác nhận không dùng React/Supabase runtime.
- `serve.mjs`: máy chủ phục vụ tệp tùy chọn, chỉ để xem thử bằng Node.
- `LUCIDE-LICENSE.txt`, `INTER-LICENSE.txt`: giấy phép icon và font.

Ảnh trang Giới thiệu được đóng gói từ đúng URL ảnh đang dùng ở bản nguồn: https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=720&h=540&fit=crop&auto=format . Các ảnh sản phẩm/logo giữ nguyên từ dự án; những sản phẩm tự đặt tên vẫn là mẫu minh họa.

Mã nguồn bộ xuất, kịch bản kiểm thử và báo cáo chi tiết nằm trong dự án gốc ở `scripts/static-export/`, `artifacts/static-export/` và `STATIC_EXPORT.md`.

## Cập nhật UI ngày 27/10/2026

UI-001–005: xác nhận trước khi xóa bố trí/cấu hình, màu selected Planner rõ hơn ở theme tối, focus nội dung khi chuyển trang, nút dịch vật dụng 1/5 cm có Hoàn tác và input mobile 16px. Báo cáo trong dự án gốc: `design-plans/STATIC_UI_001_005_2026-10-27.md`. Dữ liệu vẫn là demo lưu trong trình duyệt.

UI-006, UI-008–011: danh sách sản phẩm mobile Gọn/Ảnh lớn; lightbox có zoom; Builder có thông số/chênh lệch giá và tổng tiền gần đầu; kết quả tương thích chia nhóm; lưu Planner qua form tên ngay tại chỗ và thuộc tính riêng trong chế độ mở rộng. Chi tiết: `design-plans/STATIC_UI_DISCOVERY_2026-10-27.md` trong dự án gốc.

UI-007, UI-012–015: tìm kiếm có tối đa 5 gợi ý và điều khiển bàn phím; thông báo lỗi quan trọng giữ lại cho đến khi đóng; nút/form/nhãn dùng chung bộ token; giảm chuyển động theo thiết lập hệ thống; so sánh 2–3 sản phẩm cùng loại, lọc thông số khác nhau và thêm vào giỏ. Danh sách so sánh được nhớ trong trình duyệt. Mở `ui-kit.html` để xem các trạng thái thành phần sáng/tối. Báo cáo: `design-plans/STATIC_UI_FINAL_2026-10-27.md` trong dự án gốc. UI-001–015 đã triển khai trên bản tĩnh; Safari/iPhone thật vẫn cần kiểm tra.
"# static-aboPC" 
