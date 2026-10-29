# Phạm vi hiện tại: giữ giao diện cửa hàng, bỏ JavaScript

Ngày điều chỉnh: 29/10/2026.

Yêu cầu của người dùng là website để trình bày giống bản tĩnh ban đầu nhất có thể, chỉ không dùng JavaScript. Vì vậy, việc đổi giao diện chính thành “Giỏ hàng mẫu”, “Trang mẫu”, bảng ví dụ hoặc chèn lời giảng giải đã được đảo lại.

## Được giữ
Header và footer gốc; bố cục trang chủ; sidebar/danh mục; thẻ sản phẩm gốc; thông số và ảnh; trang đăng nhập; bố cục cấu hình PC, tương thích và mặt bằng góc máy. Giữ trạng thái khởi đầu gốc của các trang cần dữ liệu tài khoản hoặc giỏ hàng.

## Không dùng JavaScript
Không có thẻ script, modulepreload, inline handler hay URL javascript. Không gọi API và không đọc/ghi localStorage. Các nút/input cần xử lý động giữ hình thức nhưng disabled; không chuyển sang trang xác nhận hoặc giả vờ xử lý thành công.

Menu dùng details/summary; liên kết vẫn điều hướng; phân trang tải ba tài liệu HTML chứa 9–9–8 sản phẩm. Link danh mục/thương hiệu dẫn tới trang và vị trí sản phẩm có thật; không tạo kết quả lọc động bằng query giả.

## Tài liệu học
UI kit và các tài liệu đối chiếu lý thuyết vẫn được giữ riêng. CSS trình bày gốc được khôi phục khi cần; không ưu tiên giảm số dòng CSS nếu việc đó làm mất diện mạo website.

Bản JavaScript đầy đủ và ứng dụng React/backend không được sửa trong lần điều chỉnh này. Bản thay đổi hiện tại chưa tự động commit/push; kết quả GitHub trước đó vẫn là lần xuất bản đã được người dùng yêu cầu trước khi điều chỉnh.
