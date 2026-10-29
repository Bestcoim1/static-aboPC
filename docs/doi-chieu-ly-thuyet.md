# Đối chiếu lý thuyết với ABOPC

Nguồn: [Bài giảng — tab Buttons và Pagination](https://docs.google.com/document/d/1yJUwScZPknijKSalSQJWVZW4UwTHHnhh-mFEmXU-rMw/edit?hl=vi&tab=t.6x2um26ll1zl). Phạm vi đã chốt: HTML + CSS, giữ thương hiệu đỏ–kem ABOPC. Đường dẫn dưới đây tính từ static-site.

| Ý trong bài giảng | HTML/selector | File | Thao tác |
|---|---|---|---|
| Nút và liên kết | button type="button", a.btn | ui-kit.html | Phân biệt nút mẫu và điều hướng |
| Màu nền/chữ | .btn-primary, .btn-buy | assets/css/buttons.css | Chỉ background-color, color, border-color |
| Box model/bo góc | .btn | assets/css/buttons.css | Padding 12px 20px, border 1px, radius 8px, min-height 44px |
| Con trỏ | .btn, .btn:disabled | assets/css/buttons.css | Hover nút thường và disabled |
| Hover | .btn:hover:not(:disabled) | assets/css/buttons.css | Đổi màu và dịch lên 2px |
| Nhấn giữ | .btn:active:not(:disabled) | assets/css/buttons.css | Giữ chuột và xem transform |
| Focus | .btn:focus, .btn:focus-visible | assets/css/buttons.css | Tab để thấy outline và outline-offset |
| Disabled | disabled, .btn:disabled | ui-kit.html; buttons.css | Nút bỏ qua trong thứ tự Tab |
| Transition | transition trên .btn | assets/css/buttons.css | CSS nội suy giá trị, không tạo nghiệp vụ |
| Giảm chuyển động | prefers-reduced-motion | assets/css/buttons.css | Giả lập reduced motion; nút ngừng dịch chuyển |
| Cấu trúc phân trang | nav > ul > li > a | products/index.html | Nav có aria-label |
| Dàn hàng/khoảng cách | .pagination ul | assets/css/pagination.css | Flex, flex-wrap, gap, list-style |
| Viền/kích thước | .pagination a, span | assets/css/pagination.css | So sánh link và span |
| Trang hiện tại | .pagination .active a; aria-current | ba file danh sách | Mỗi HTML có active viết sẵn |
| Hover/focus phân trang | a:hover; a:focus-visible | assets/css/pagination.css | Thử chuột và Tab |
| Đầu/cuối | li.disabled > span | trang 1 và trang 3 | Không có href khi không có trang trước/sau |
| Chia nội dung | 9 + 9 + 8 card | ba file danh sách | 26 sản phẩm, không lặp |
| Responsive | media query 1023px/639px, minmax | assets/css/study-pages.css | Đổi 1440px xuống 390px |

## Những điểm cần nói đúng
1. `.active` là class của trang hiện tại; `:active` là pseudo-class lúc kích hoạt phần tử. CSS không tự đọc URL để gắn class.
2. Thẻ a không hỗ trợ disabled như button. aria-disabled chỉ cung cấp ngữ nghĩa. Span không có href loại bỏ hành động điều hướng ở giới hạn đầu/cuối.
3. HTML chia nội dung sẵn; CSS định dạng. CSS không thêm giỏ, xác thực, lưu dữ liệu hay gửi đơn.

Màu và kích thước theo thương hiệu ABOPC. Mục tiêu là khớp kiến thức, cấu trúc và ý nghĩa trạng thái, không sao chép mọi giá trị màu của ví dụ gốc.
