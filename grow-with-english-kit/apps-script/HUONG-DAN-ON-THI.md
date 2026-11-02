# Cài Google Sheet cho Checklist ôn thi (làm 1 lần, ~5 phút)

1. Vào Google Sheets → tạo bảng tính mới, đặt tên **Checklist ôn thi**.
2. Menu **Tiện ích mở rộng → Apps Script**. Xoá hết mã có sẵn, dán toàn bộ file `on-thi-checklist.gs`.
3. Dòng `var MK_TG = 'DOI-MAT-KHAU-NAY';` → đổi thành mật khẩu cô muốn đưa cho trợ giảng. Bấm **Lưu**.
4. **Triển khai (Deploy) → Tùy chọn triển khai mới → Ứng dụng web**:
   - Thực thi với tư cách: **Tôi**
   - Người có quyền truy cập: **Bất kỳ ai**
   → Triển khai → cấp quyền → **sao chép link Ứng dụng web** (…/exec) gửi cho Claude.
5. Claude dán link vào `CK_URL` trong `on-thi-28-ngay/index.html` rồi đưa lên mạng.

Sửa mã sau này: **Triển khai → Quản lý triển khai → sửa bản cũ** (giữ nguyên link), không tạo bản mới.

Sheet "Checklist" tự tạo khi bé tick việc đầu tiên: mỗi việc 1 dòng, cột Trạng thái = Chờ duyệt / Đã duyệt / Chưa đạt.
