(function(){
/* Đề số 5 – "12 đề thi giữa học kì 1 Tiếng Anh 9 Global Success" (CHIA SẺ CHO CỘNG ĐỒNG/ĐỀ + ĐÁP ÁN CƠ BẢN/KHỐI 9/GIUA HKI).
   Bỏ Part A. Listening (câu 1–8 gốc) vì file không có âm thanh. Câu 9–40 gốc đánh số lại thành 1–32. Đáp án theo file gốc. */
var LL='ABCD';
function M(n,p,o,a,sk,tp,ex,alt){var q={t:'mcq',n:n,p:p,o:o,g:['','','',''],a:LL.indexOf(a),sk:sk,tp:tp,ex:ex};if(alt)q.alt=alt.split('').map(function(c){return LL.indexOf(c)});return q}
function F(n,p,a,sk,tp,ex,ph,alts){var q={t:'fill',n:n,p:p,a:a,sk:sk,tp:tp,ex:ex,ph:ph};if(alts)q.alts=alts;return q}
function T(n,p,model,ex,ph){return {t:'trans',n:n,p:p,model:model,ex:ex,sk:'wr',tp:'',ph:ph||'Em viết câu trả lời của mình'}}
function B(n){return '<span class="blank">('+n+') ______</span>'}
function S(id,grp,title,sub,instr,sk,qs,groups,selfcheck){
  var s={id:id,grp:grp,title:title,sub:sub,instr:instr,sk:sk,selfcheck:!!selfcheck,qs:qs,groups:[]};
  (groups||[]).forEach(function(g,gi){
    var idx=[];qs.forEach(function(q,i){if(q.n>=g.from&&q.n<=g.to){q.gi=gi;idx.push(i)}});
    s.groups.push({i:gi,title:g.title||'',html:g.html,vi:'',qs:idx});
  });
  return s;
}
var D='Đề 5';
var secs=[];

secs.push(S('d5a',D,
 'Phát âm','Phát âm & trọng âm','Câu 1–2: chọn từ có phần gạch chân phát âm khác. Câu 3–4: chọn từ có trọng âm chính khác.','pa',[
 M(1,'Chọn từ có phần gạch chân phát âm khác:',['h<u>a</u>ndicraft','f<u>a</u>cilities','live<u>a</u>ble','<u>a</u>menities'],'A','pa','âm a (câu 1)','handicraft /ˈhændikrɑːft/: a đọc /æ/. facilities /fəˈsɪlətiz/, liveable /ˈlɪvəbl/, amenities /əˈmiːnətiz/: a đọc /ə/.'),
 M(2,'Chọn từ có phần gạch chân phát âm khác:',['<u>h</u>ouse','<u>h</u>ealthy','<u>h</u>appiness','<u>h</u>onest'],'D','pa','âm h câm (câu 2)','honest /ˈɒnɪst/: h câm. house, healthy, happiness: h đọc /h/.'),
 M(3,'Chọn từ có trọng âm chính khác:',['frustrated','confident','delighted','embarrassed'],'B','pa','trọng âm 3 âm tiết (câu 3)','confident /ˈkɒnfɪdənt/ nhấn âm 1. frustrated /frʌˈstreɪtɪd/, delighted /dɪˈlaɪtɪd/, embarrassed /ɪmˈbærəst/ nhấn âm 2.'),
 M(4,'Chọn từ có trọng âm chính khác:',['priority','competition','electrician','entertainment'],'A','pa','trọng âm 4 âm tiết (câu 4)','priority /praɪˈɒrəti/ nhấn âm 2. competition /ˌkɒmpəˈtɪʃn/, electrician /ɪˌlekˈtrɪʃn/, entertainment /ˌentəˈteɪnmənt/ nhấn âm 3 (đuôi -tion, -cian, -ment).')
]));

secs.push(S('d5b',D,
 'Từ vựng – Ngữ pháp','Chọn đáp án đúng','Chọn đáp án đúng cho câu 5–12.','np',[
 M(5,'Lang Biang iconic mountain, which is 12 km from Dalat in the North, is one of the top _____ in Viet Nam.',['tourist places','tourism places','guided tours','tourist attractions'],'D','tv','tourist attractions (câu 5)','"one of the top …" + ngọn núi nổi tiếng → <b>tourist attractions</b> = điểm thu hút khách du lịch. guided tours = chuyến tham quan có hướng dẫn.'),
 M(6,'The city is now a big _____ site with many half-finished buildings.',['waste','construction','storage','tourist'],'B','tv','construction site (câu 6)','"half-finished buildings" (toà nhà xây dở) → <b>construction site</b> = công trường xây dựng.'),
 M(7,'They wondered _____ with Dan - the tremendous talent.',['who to compare','who should they compare','who should be compared','who can be compared'],'A','np','từ để hỏi + to V (câu 7)','Sau wonder dùng từ để hỏi + <b>to V</b>: who to compare. B sai trật tự (câu hỏi gián tiếp không đảo ngữ); C, D bị động không hợp nghĩa.'),
 M(8,'The most important thing is to stay ____ and give yourself time to think.',['tense','calm','embarrassed','frustrated'],'B','tv','stay calm (câu 8)','"give yourself time to think" → giữ bình tĩnh: <b>stay calm</b>. tense = căng thẳng; embarrassed = xấu hổ; frustrated = bực bội.'),
 M(9,'The longer the talk about the matter is, _____.',['the situation seems worse','the worse seems the situation','the worse the situation seems','the situation seems the worse'],'C','np','so sánh kép (câu 9)','So sánh kép: The + so sánh hơn + S + V → <b>the worse the situation seems</b>.'),
 M(10,'(Trái nghĩa) The doctor advised Peter to <u><b>give up</b></u> smoking.',['stop','finish','continue','consider'],'C','tv','give up ≠ continue (câu 10)','give up = từ bỏ ≠ <b>continue</b> = tiếp tục. stop, finish là đồng nghĩa; consider = cân nhắc.'),
 M(11,'(Gần nghĩa) Peter was always <u><b>optimistic</b></u>, even when things were at their worst.',['negative','positive','pessimistic','gloomy'],'B','tv','optimistic = positive (câu 11)','optimistic = lạc quan = <b>positive</b> = tích cực. negative, pessimistic, gloomy đều mang nghĩa tiêu cực (trái nghĩa).'),
 M(12,'Chọn câu đáp lại phù hợp:<br>– May I give you a hand?<br>– ______',['Yes, I\'d love to.','I’m not sure.','Yes, give me.','Thank you. You are so kind.'],'D','gt','đáp lời đề nghị giúp đỡ (câu 12)','Người khác đề nghị giúp (May I give you a hand?) → cảm ơn: <b>Thank you. You are so kind.</b> "I\'d love to" dùng để nhận lời mời, không dùng khi được giúp.')
]));

var BOX='<div class="instr" style="margin:0 0 8px"><b>reached · romantic · will · most · for · communes</b> (thừa 1 từ)</div>';
var HONKEM=BOX+'<p>Hon Kem - Da Dung lie alongside the two banks of Thu Bon River, belonging the two '+B(13)+' of Que Lam and Que Phuoc (Que Son District), Quang Nam Province. This landscape is an area of two ranges of stone mountains with strange images and patterns stretching out and interfering with the flow of Thu Bon River. The excitement of Hon Kem - Da Dung does not only lie in the '+B(14)+' scene of rivers and mountains, but also in the inscriptions of the old Chiem Thanh characters seen on pieces of rock of tens of tons heavy which stand out mirroring themselves on the water of Thu Bon River.</p><p>Hon Kem Da Dung can be '+B(15)+' by boat up from Hoi An and Vinh Dien with a visit to My Son Holy Land on the way, or overland from Que Son District through Deo Le (Le Pass) and Trung Phuoc Market, and continue by boat to the place. Visitors '+B(16)+' travel pass beautiful villages, green mulberry and corn fields, and crowded markets on rivers. Visitors can also go across the river at Trung Phuoc Market to visit a village called Dai Buong, which is famous in Quang Nam '+B(17)+' its orchards.</p>';
secs.push(S('d5c',D,
 'Đọc – điền từ','Đọc hiểu','Điền từ trong khung vào chỗ trống (13–17). Có một từ thừa.','rd',[
 F(13,'Chỗ trống (13)','communes','tv','communes (câu 13)','"the two … of Que Lam and Que Phuoc" → hai xã: <b>communes</b> (danh từ số nhiều sau "two").','Gõ từ trong khung'),
 F(14,'Chỗ trống (14)','romantic','tv','romantic (câu 14)','Trước danh từ "scene" cần tính từ: <b>romantic</b> scene = cảnh thơ mộng.','Gõ từ trong khung'),
 F(15,'Chỗ trống (15)','reached','np','bị động can be + V3 (câu 15)','Bị động "can be + V3": <b>can be reached</b> by boat = có thể đến bằng thuyền.','Gõ từ trong khung'),
 F(16,'Chỗ trống (16)','will','np','will + V (câu 16)','Trước động từ nguyên mẫu "travel" cần trợ động từ: Visitors <b>will</b> travel past … = du khách sẽ đi qua …','Gõ từ trong khung'),
 F(17,'Chỗ trống (17)','for','np','famous for (câu 17)','Cụm cố định <b>famous for</b> sth = nổi tiếng về. Từ thừa: most.','Gõ từ trong khung')
],[{from:13,to:17,title:'Hon Kem – Da Dung',html:HONKEM}]));

var UYEN='<p>Phuong Uyen, a student at a specialised high school in Quang Nam, needs to have a well-balanced life because she wants to excel in her studies, pursue her passions and hobbies, etc. Below are some of the things she often does to achieve a well-balanced life.</p><p>Firstly, Phuong Uyen starts each day by planning her schedule and setting priorities for the day, making sure to allocate time for studying, extracurricular activities, and socialising. She also takes breaks throughout the day to relax and recharge. In addition, Uyen dedicates time to her hobbies, such as reading, listening to music, and doing sports. She believes that pursuing her passions brings her joy and a sense of fulfilment.</p><p>Phuong Uyen also spends time with her family and friends regularly and makes an effort to stay in touch even when she is busy with schoolwork. She understands the importance of building and maintaining strong relationships with them. Finally, Phuong Uyen gives priority to her physical and mental health. She gets enough sleep, eats a balanced diet, and does exercise regularly. She also practises mindfulness and meditation to manage stress and maintain a positive mindset. By following these practices, we believe that Uyen is on her way to achieving a fulfilling and well-balanced life.</p>';
secs.push(S('d5d',D,
 'Đọc hiểu','Đọc hiểu','Câu 18–20: chọn True hoặc False. Câu 21–22: trả lời ngắn.','rd',[
 M(18,'Uyen plans the schedule and sets priorities for the day.',['True','False'],'A','rd','True/False (câu 18)','"Phuong Uyen starts each day by <b>planning her schedule and setting priorities</b> for the day" → True.'),
 M(19,'She doesn’t only spend time with her family and friends regularly but she also makes an effort to stay in touch at any time.',['True','False'],'A','rd','True/False (câu 19)','"spends time with her family and friends regularly and <b>makes an effort to stay in touch even when she is busy</b>" → True.'),
 M(20,'It is unlikely that she will achieve a well-balanced life.',['True','False'],'B','rd','True/False (câu 20)','Câu cuối: "Uyen is <b>on her way to achieving</b> a fulfilling and well-balanced life" → False.'),
 F(21,'Does Phuong Uyen want to rank first in her study?','Yes, she does.','rd','trả lời ngắn (câu 21)','"she wants to <b>excel in her studies</b>" (học xuất sắc) → Yes, she does.','Trả lời ngắn',['Yes, she does','Yes','Yes she does']),
 F(22,'How many tips does she take to achieve a well-balanced life?','four','rd','trả lời ngắn (câu 22)','Bài liệt kê 4 ý bằng Firstly, In addition, also, Finally → <b>four</b> (4 tips).','Trả lời ngắn',['4','four tips','4 tips','She takes four tips','She takes four tips.'])
],[{from:18,to:22,title:'Phuong Uyen\'s well-balanced life',html:UYEN}]));

secs.push(S('d5e',D,
 'Viết – từ loại','Dạng đúng của từ','Viết dạng đúng của từ trong ngoặc (23–24).','wr',[
 F(23,'Have you thought of talking to a marriage guidance <span class="blank">______</span>? (COUNSEL)','counselor','tv','từ loại: counsellor (câu 23)','Sau "a marriage guidance" cần danh từ chỉ người: counsel (v) → <b>counsellor</b> (BrE) / counselor (AmE) = chuyên viên tư vấn.','Nhập dạng đúng của từ',['counsellor']),
 F(24,'We use public <span class="blank">______</span> to reduce pollution. (TRANSPORTATION)','transport','tv','public transport (câu 24)','Cụm <b>public transport</b> = phương tiện giao thông công cộng (đáp án file gốc). "public transportation" (AmE) cũng đúng nghĩa.','Nhập dạng đúng của từ',['transportation'])
]));

secs.push(S('d5f',D,
 'Viết câu','Tự đối chiếu','Câu 25–26: viết lại câu với từ cho sẵn. Câu 27–28: sắp xếp từ thành câu. Câu 29–32: viết câu dùng từ gợi ý. Viết xong bấm xem đáp án mẫu để tự đối chiếu.','wr',[
 T(25,'She wondered how she should resolve the conflict. (TO)<br>→ She …','She wondered how to resolve the conflict.','"how she should resolve" → <b>how to resolve</b> (từ để hỏi + to V).','Viết tiếp: She …'),
 T(26,'The bus got more crowded, it was more difficult for me to breathe. (THE)<br>→ …','The more crowded the bus got, the more difficult it was for me to breathe.','So sánh kép: The + so sánh hơn + S + V, the + so sánh hơn + S + V.','Viết lại câu'),
 T(27,'My area / as / famous for / banh it / some specialities / such / is / mi quang / , / banh xeo / and /.','My area is famous for some specialities such as mi quang, banh xeo and banh it.','be famous for + N; such as dùng để liệt kê ví dụ.','Viết câu hoàn chỉnh'),
 T(28,'If teenagers / are / relationships, / they / may be / satisfied with / their lives and / usually happier.','If teenagers are satisfied with their lives and relationships, they may be usually happier.','Câu điều kiện loại 1: If + S + are satisfied with …, S + may be … Đáp án file gốc giữ "may be usually happier"; viết tự nhiên hơn là "they are usually happier".','Viết câu hoàn chỉnh'),
 T(29,'It / be / very convenient / live / city.','It is very convenient to live in the city.','It is + adj + to V; thêm giới từ "in the" trước city.','Viết câu hoàn chỉnh'),
 T(30,'public transport system / reach / almost / areas / the city, so it / be / easy / me / get around.','The public transport system reaches almost all areas of the city, so it is easy for me to get around.','Chủ ngữ số ít → reaches; almost all areas of the city; it is easy for sb to V. (Đáp án file gốc viết "almost areas"; đúng ngữ pháp phải là "almost all areas".)','Viết câu hoàn chỉnh'),
 T(31,'There / be / many shops / sell / all kinds of goods, / so I can / buy almost everything / I need.','There are many shops which sell all kinds of goods, so I can buy almost everything I need.','There are + N số nhiều; mệnh đề quan hệ which sell (hoặc rút gọn: selling).','Viết câu hoàn chỉnh'),
 T(32,'Therefore, people here / can enjoy / high quality education / healthcare','Therefore, people here can enjoy high quality education and healthcare.','Nối hai danh từ bằng "and".','Viết câu hoàn chỉnh')
],null,true));

return {secs:secs,vocab:{words:[],phrases:[]},tips:{
 pa:'Ôn âm a (/æ/, /ə/), âm h câm và trọng âm từ có đuôi -tion, -cian, -ment.',
 tv:'Ôn từ vựng Unit 1–3: tourist attractions, construction site, stay calm, optimistic, give up.',
 np:'Ôn từ để hỏi + to V, so sánh kép, bị động với can, famous for.',
 gt:'Ôn cách đáp lại lời đề nghị giúp đỡ: Thank you. You are so kind.',
 rd:'Đọc kỹ câu True/False, tìm đúng câu trong bài rồi so từng ý.',
 wr:'Ôn so sánh kép, từ để hỏi + to V, It is + adj + to V, There are + N.'}};
})()
