/**
 * CHECKLIST ÔN THI – Grow with English (Ms. Minh Thư)
 * Dán toàn bộ file này vào Apps Script của Google Sheet "Checklist ôn thi".
 * Tự tạo sheet "Checklist": mỗi việc HS tick = 1 dòng "Chờ duyệt".
 * Trợ giảng xem bằng chứng HS gửi rồi Duyệt / Chưa đạt trên trang web (link có #tg).
 */
var MK_TG = 'DOI-MAT-KHAU-NAY';   // ← cô đổi thành mật khẩu cho trợ giảng trước khi Deploy

var HEAD = ['Kế hoạch', 'Mã việc', 'Ngày', 'Việc', 'Trạng thái', 'HS tick lúc', 'Duyệt lúc', 'Lý do (nếu chưa đạt)'];

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Checklist');
  if (!sh) {
    sh = ss.insertSheet('Checklist');
    sh.appendRow(HEAD);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEAD.length).setFontWeight('bold').setBackground('#e3f1dc');
  }
  return sh;
}
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function fmt_(d) { return d instanceof Date ? Utilities.formatDate(d, 'Asia/Ho_Chi_Minh', 'dd/MM HH:mm') : String(d || ''); }

// Tìm dòng theo kế hoạch + mã việc (trả về số dòng, 0 nếu chưa có)
function find_(v, plan, id) {
  for (var i = 1; i < v.length; i++) if (String(v[i][0]) === plan && String(v[i][1]) === id) return i + 1;
  return 0;
}

function doGet() { return out_({ ok: true, app: 'on-thi-checklist' }); }

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var d = JSON.parse(e.postData.contents);
    var sh = sheet_(), v = sh.getDataRange().getValues(), plan = String(d.plan || ''), row;
    if (!plan) throw new Error('Thiếu mã kế hoạch.');

    switch (d.action) {
      case 'list':
        var items = {};
        for (var i = 1; i < v.length; i++) if (String(v[i][0]) === plan)
          items[String(v[i][1])] = { status: String(v[i][4]), sent: fmt_(v[i][5]), reviewed: fmt_(v[i][6]), reason: String(v[i][7]) };
        return out_({ ok: true, items: items });

      case 'login':
        if (String(d.pw) !== MK_TG) throw new Error('Sai mật khẩu trợ giảng.');
        return out_({ ok: true });

      case 'tick':      // HS tick: tạo mới hoặc gửi lại việc "Chưa đạt"
        row = find_(v, plan, String(d.id));
        if (row && v[row - 1][4] === 'Đã duyệt') throw new Error('Việc này đã được duyệt rồi.');
        var rec = [plan, String(d.id), String(d.date || ''), String(d.task || ''), 'Chờ duyệt', new Date(), '', ''];
        if (row) sh.getRange(row, 1, 1, HEAD.length).setValues([rec]); else sh.appendRow(rec);
        return out_({ ok: true });

      case 'untick':    // HS bỏ tick: chỉ được khi còn "Chờ duyệt"
        row = find_(v, plan, String(d.id));
        if (row && v[row - 1][4] !== 'Chờ duyệt') throw new Error('Việc đã được trợ giảng xem, không bỏ tick được.');
        if (row) sh.deleteRow(row);
        return out_({ ok: true });

      case 'review':    // TG: status = 'Đã duyệt' | 'Chưa đạt' | 'Chờ duyệt' (bỏ duyệt)
        if (String(d.pw) !== MK_TG) throw new Error('Sai mật khẩu trợ giảng.');
        if (['Đã duyệt', 'Chưa đạt', 'Chờ duyệt'].indexOf(d.status) < 0) throw new Error('Trạng thái không hợp lệ.');
        row = find_(v, plan, String(d.id));
        if (!row) throw new Error('HS chưa tick việc này.');
        sh.getRange(row, 5, 1, 4).setValues([[d.status, v[row - 1][5], d.status === 'Chờ duyệt' ? '' : new Date(), String(d.reason || '')]]);
        return out_({ ok: true });
    }
    throw new Error('Không rõ thao tác.');
  } catch (err) {
    return out_({ ok: false, error: String(err.message || err) });
  } finally {
    lock.releaseLock();
  }
}
