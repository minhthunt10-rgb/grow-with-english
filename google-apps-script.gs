/**
 * Nhận kết quả từ trang bài tập và ghi vào Google Sheet.
 * Tự tạo 2 sheet:
 *  - "Tong quan": mỗi học sinh + lớp + bài = 1 dòng, luôn cập nhật điểm mới nhất của từng bài, % kỹ năng và nhận xét.
 *  - "Chi tiet": mỗi lần học sinh nộp 1 bài = 1 dòng (lịch sử nộp bài).
 * Cột điểm từng bài được tự thêm khi có bài mới, nên dùng được cho mọi unit.
 */
var SK_IDS = ['pa', 'tv', 'np', 'gt', 'rd', 'wr', 'ls'];
var OVERVIEW_HEAD = ['Họ tên', 'Lớp', 'Bài', 'Cập nhật', 'Tổng điểm', 'Tổng tối đa', '% chung',
  'Phát âm', 'Từ vựng', 'Ngữ pháp', 'Giao tiếp', 'Đọc hiểu', 'Viết', 'Nghe', 'Nhận xét'];
var FIXED = OVERVIEW_HEAD.length;           // các cột bài tập nằm sau cột "Nhận xét"
var DETAIL_HEAD = ['Thời gian', 'Họ tên', 'Lớp', 'Bài', 'Phần vừa nộp',
  'Điểm bài', 'Tối đa bài', 'Tổng điểm', 'Tổng tối đa', '% chung', 'Nhận xét'];

function getSheet_(ss, name, head) {
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(head);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground('#d9efe9');
  }
  return sh;
}

// Tìm cột theo tên tiêu đề; chưa có thì thêm vào cuối
function colFor_(sh, title) {
  var lastCol = Math.max(sh.getLastColumn(), FIXED);
  var heads = sh.getRange(1, 1, 1, lastCol).getValues()[0];
  var idx = heads.indexOf(title);
  if (idx >= 0) return idx + 1;
  var c = lastCol + 1;
  sh.getRange(1, c).setValue(title).setFontWeight('bold').setBackground('#d9efe9');
  return c;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var now = new Date();
    var pct = (d.pct || 0) / 100;
    var secs = d.sections || [];

    // 1) Lịch sử từng lần nộp
    var latest = secs.filter(function (s) { return s.id === d.latest; })[0];
    var det = getSheet_(ss, 'Chi tiet', DETAIL_HEAD);
    det.appendRow([now, d.name, d.cls, d.unit, latest ? latest.title : '(gửi lại toàn bộ)',
      latest ? latest.score : '', latest ? latest.max : '', d.total, d.max, pct, d.comment]);
    det.getRange(det.getLastRow(), 10).setNumberFormat('0%');

    // 2) Tổng quan: mỗi học sinh 1 dòng
    var ov = getSheet_(ss, 'Tong quan', OVERVIEW_HEAD);
    var skPct = SK_IDS.map(function (k) {
      var s = (d.skills || []).filter(function (x) { return x.k === k; })[0];
      return s && s.max ? s.got / s.max : '';
    });
    var fixed = [d.name, d.cls, d.unit, now, d.total, d.max, pct].concat(skPct, [d.comment]);

    var norm = function (a) { return a.join('|').toLowerCase().replace(/\s+/g, ' ').trim(); };
    var key = norm([d.name, d.cls, d.unit]);
    var data = ov.getDataRange().getValues();
    var target = -1;
    for (var i = 1; i < data.length; i++) {
      if (norm([data[i][0], data[i][1], data[i][2]]) === key) { target = i + 1; break; }
    }
    if (target < 0) target = ov.getLastRow() + 1;
    ov.getRange(target, 1, 1, fixed.length).setValues([fixed]);
    ov.getRange(target, 4).setNumberFormat('dd/MM/yyyy HH:mm');
    ov.getRange(target, 7, 1, 8).setNumberFormat('0%');
    ov.getRange(target, 5, 1, 2).setNumberFormat('0');

    // điểm từng bài (tự tạo cột mới nếu chưa có)
    secs.forEach(function (s) {
      var c = colFor_(ov, s.title + ' (/' + s.max + ')');
      ov.getRange(target, c).setValue(s.score);
    });
    colorSkills_(ov, target);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

// Tô màu ô kỹ năng: >=80% xanh, 50-79% vàng, <50% đỏ
function colorSkills_(sh, rowNum) {
  var rng = sh.getRange(rowNum, 8, 1, 7);
  var colors = rng.getValues()[0].map(function (v) {
    if (v === '') return null;
    return v >= 0.8 ? '#d7f0df' : (v >= 0.5 ? '#fff1b8' : '#f9d6cf');
  });
  rng.setBackgrounds([colors]);
}

function doGet() {
  return ContentService.createTextOutput('Web app đang chạy. Trang bài tập gửi kết quả bằng POST.');
}
