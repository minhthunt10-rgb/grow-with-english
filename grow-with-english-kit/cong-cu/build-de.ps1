# Ghép một đề (dữ liệu viết tay dạng JS) vào template.html — dùng khi máy không có Python.
# VD: .\build-de.ps1 -Data data-giuaky1-lop9.js -Out ..\giuaky1-lop9\index.html -Title "Giữa kỳ I · Lớp 9" -Unit "Giữa kỳ I - Lớp 9" -Sub "..."
param($Data, $Out, $Title, $Unit, $Sub)
$enc = New-Object System.Text.UTF8Encoding $false
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$t = [IO.File]::ReadAllText((Join-Path $here 'template.html'), $enc)
$d = [IO.File]::ReadAllText((Join-Path $here $Data), $enc).Trim()
$t = $t.Replace('/*DATA*/', 'var DATA=' + $d + ';')
$t = $t.Replace('<title>Unit 6 Artificial Intelligence</title>', "<title>$Title</title>")
$t = $t.Replace('<h1>Global Success 12 · Unit 6 · Artificial Intelligence</h1>', "<h1>$Title</h1>")
$t = $t.Replace('<p>Từ vựng, ngữ pháp và đề luyện thi. Nộp từng bài để xem đáp án, giải thích, bản dịch và nhận xét kỹ năng.</p>', "<p>$Sub</p>")
$t = $t.Replace("var UNIT = 'Global Success 12 - Unit 6';", "var UNIT = '$Unit';")
$doc = "<!doctype html>`n<html lang=`"vi`"><head><meta charset=`"utf-8`"><meta name=`"viewport`" content=`"width=device-width,initial-scale=1,viewport-fit=cover`"><style>body{margin:0}</style></head><body>`n" + $t + "`n</body></html>`n"
$outPath = Join-Path $here $Out
New-Item -ItemType Directory -Force (Split-Path -Parent $outPath) | Out-Null
[IO.File]::WriteAllText($outPath, $doc, $enc)
"Đã ghi $outPath ($($doc.Length) ký tự)"
