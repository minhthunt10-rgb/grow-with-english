# Website bài tập Grow with English
Cô Minh Thư (giáo viên tiếng Anh). Trả lời bằng tiếng Việt, ngắn gọn.
## Cấu trúc
- unitN/index.html: mỗi Unit là một trang tự chứa (dữ liệu nhúng trong `var DATA=`).
- cong-cu/: parse.py (docx giáo viên -> data.json), template.html (giao diện + chấm điểm), build.py (ghép thành trang). Unit 6 là mẫu chuẩn.
- apps-script/google-apps-script.gs: nhận kết quả về Google Sheet. Dùng chung mọi Unit; biến SHEET_URL trong trang dán link Apps Script.
- nguon-docx/: file Word gốc (GV có đáp án, HS).
## Quy tắc
- HS phải làm đủ mọi câu mới nộp được; mỗi phần nộp một lần rồi khóa.
- Chấm ngay, giải thích, nhận xét theo kỹ năng (từ vựng, ngữ pháp, đọc, phát âm, viết).
- Unit mới: chạy `python cong-cu/parse.py <file GV.docx>`, chỉnh parse.py nếu cấu trúc docx khác, đổi tên Unit trong template.html, chạy build.py, copy kết quả vào unitN/index.html, thêm vào index.html (menu), rồi commit và push.
- Không đưa tên/điểm học sinh vào repo.
