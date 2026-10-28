(function(){
/* Đề số 4 – "12 đề thi giữa học kì 1 Tiếng Anh 9 Global Success" (CHIA SẺ CHO CỘNG ĐỒNG/ĐỀ + ĐÁP ÁN CƠ BẢN/KHỐI 9/GIUA HKI).
   Bỏ phần I. Listening vì file không có âm thanh. Đánh số lại câu 1–21. Đáp án theo file gốc. */
var LL='ABCD';
function M(n,p,o,a,sk,tp,ex,alt){var q={t:'mcq',n:n,p:p,o:o,g:['','','',''],a:LL.indexOf(a),sk:sk,tp:tp,ex:ex};if(alt)q.alt=alt.split('').map(function(c){return LL.indexOf(c)});return q}
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
var D='Đề 4';
var secs=[];

secs.push(S('d4a',D,
 'Trắc nghiệm','Phát âm · Ngữ pháp · Từ vựng','Chọn đáp án đúng cho câu 1–8.','np',[
 M(1,'Chọn từ có phần gạch chân phát âm khác:',['<u>o</u>cean','c<u>o</u>ncrete','metr<u>o</u>','pr<u>o</u>cess'],'B','pa','âm o (câu 1)','concrete /ˈkɒŋkriːt/: o đọc /ɒ/. ocean /ˈəʊʃn/, metro /ˈmetrəʊ/, process /ˈprəʊses/: o đọc /əʊ/.'),
 M(2,'Mai did the test well, so she is optimistic ______ the result of the exam.',['about','from','for','with'],'A','np','optimistic about (câu 2)','Cụm cố định <b>optimistic about sth</b> = lạc quan về điều gì.'),
 M(3,'Chọn phần cần sửa:<br>While <u>visiting</u> (A) Ho Chi Minh city <u>with</u> (B) my family, my uncle took <u>me</u> (C) to <u>get up</u> (D) the whole city.',['visiting','with','me','get up'],'D','np','tìm lỗi sai (câu 3)','"get up" = thức dậy, không hợp nghĩa. Phải là <b>look around</b> / <b>explore</b> (đi tham quan khắp thành phố).'),
 M(4,'If you want to avoid traffic jam, you ____ leave early in the morning.',['should','could','will','must'],'A','np','should – lời khuyên (câu 4)','Câu khuyên "muốn tránh tắc đường thì nên đi sớm" → <b>should</b>. must = bắt buộc (quá mạnh); could/will không mang nghĩa khuyên.'),
 M(5,'Hai wondered how ____ the neighborhood safer.',['make','making','to make','made'],'C','np','từ để hỏi + to V (câu 5)','Sau động từ wonder + từ để hỏi (how) dùng <b>to V</b>: how to make = làm thế nào để.'),
 M(6,'The ________ for the journey to Con Dao is next Sunday.',['rush hour','due date','concrete jungle','construction site'],'B','tv','due date (câu 6)','<b>due date</b> = ngày hẹn, ngày đến hạn. rush hour = giờ cao điểm; concrete jungle = rừng bê tông; construction site = công trường.'),
 M(7,'I think the more crowded the city is, ______ it becomes.',['more polluted','much polluted','the most polluted','the more polluted'],'D','np','so sánh kép (câu 7)','So sánh kép: The + so sánh hơn + S + V, <b>the + so sánh hơn</b> + S + V → the more polluted.'),
 M(8,'What does the notice say?<br><img src="thong-bao-thu-vien.png" alt="Thông báo: LIBRARY HOURS OPEN – 9.00 A.M. TILL 5.30 P.M. WEEKDAYS – 9.00 A.M. TILL 1.00 P.M. SATURDAY" style="max-width:320px;width:100%;margin-top:8px;border-radius:8px">',['The library is not open at noon.','The library closes before 1 o’clock on Saturday afternoons.','People can come to the library from 9 a.m. to 5.30 p.m. every day except Saturday.','People cannot come to the library on Saturdays.'],'C','rd','đọc thông báo (câu 8)','Ngày thường (weekdays) mở 9.00–5.30, thứ Bảy chỉ mở 9.00–1.00 → <b>C</b>. A sai (trưa vẫn mở); B sai (đóng lúc 1 giờ, không phải trước 1 giờ); D sai (thứ Bảy vẫn mở buổi sáng).')
]));

var HEALTH='<p>Maintaining a healthy lifestyle is important for your well-being. Here are some tips to help you stay on track:</p><p><b>Exercise Regularly:</b> Try to participate in '+B(9)+' activities, such as sports or jogging, for at least 30 minutes a day.</p><p><b>Eat a Balanced Diet:</b> It\'s important to include a variety '+B(10)+' fruits and vegetables in your daily meals to get essential nutrients.</p><p><b>Avoid Unhealthy Foods:</b> Minimize the consumption of '+B(11)+' like chips and candies to maintain good health. By following these guidelines, you can lead a '+B(12)+' and more energetic life.</p><p>Best regards,</p>';
secs.push(S('d4b',D,
 'Đọc – điền chỗ trống','Đọc hiểu','Đọc thông báo và chọn đáp án đúng cho mỗi chỗ trống (9–12).','rd',[
 M(9,'Chỗ trống (9)',['mental','optimistic','physical','balanced'],'C','tv','physical activities (câu 9)','"such as sports or jogging" → hoạt động thể chất: <b>physical</b> activities. mental = tinh thần; optimistic = lạc quan; balanced = cân bằng.'),
 M(10,'Chỗ trống (10)',['of','with','for','from'],'A','np','a variety of (câu 10)','Cụm cố định <b>a variety of</b> = nhiều loại.'),
 M(11,'Chỗ trống (11)',['leftovers','junk foods','fattening foods','food waste'],'B','tv','junk foods (câu 11)','"like chips and candies" (khoai tây chiên, kẹo) → đồ ăn vặt: <b>junk foods</b>. leftovers = thức ăn thừa; food waste = rác thực phẩm.'),
 M(12,'Chỗ trống (12)',['health','healthy','more healthy','healthier'],'D','np','so sánh hơn (câu 12)','Song song với "more energetic" (so sánh hơn) → <b>healthier</b>. healthy là tính từ một âm tiết kép kết thúc bằng -y nên so sánh hơn là healthier, không dùng "more healthy".')
],[{from:9,to:12,title:'Healthy lifestyle tips',html:HEALTH}]));

var COMM='<p>Our local community plays an important role in shaping a lively and supportive environment for all residents. One of the most effective ways to strengthen community connections is through active participation in local events and ideas. For instance, neighborhood clean-up drives not only increase the beauty of our surroundings but also develop a sense of pride and cooperation among residents. Additionally, community gardens offer a space where people can grow fresh produce, share gardening tips, and enjoy the benefits of working together. By supporting local businesses and attending town festivals, we contribute to the economic and cultural development of our area. Connecting with our community helps build lasting relationships, solve local issues, and create a more united and stronger neighborhood.</p>';
secs.push(S('d4c',D,
 'Đọc hiểu','Đọc hiểu','Đọc đoạn văn và chọn đáp án đúng cho câu 13–16.','rd',[
 M(13,'According to the passage, what is an effective way to strengthen community connections?',['Only growing fresh produce','Participating in local events and ideas','Only sharing gardening tips','Only participating in town festivals'],'B','rd','chi tiết (câu 13)','"One of the most effective ways to strengthen community connections is through <b>active participation in local events and ideas</b>."'),
 M(14,'________ contributes to the economic development of the area.',['Building lasting relationships','Sharing gardening tips','Supporting local businesses','Solving local issues'],'C','rd','chi tiết (câu 14)','"By <b>supporting local businesses</b> and attending town festivals, we contribute to the economic and cultural development of our area."'),
 M(15,'The word "gardens" in the passage refers to ____ .',['parks','houses','shops','community spaces'],'A','tv','quy chiếu (câu 15)','Đáp án file gốc: <b>A. parks</b> (vườn, khu cây xanh công cộng). Câu này em chấp nhận cả D vì "community gardens" là không gian chung của cộng đồng.','D'),
 M(16,'Which of the following is NOT true according to the passage?',['Neighborhood clean-up drives increase the beauty of the surroundings.','Community gardens help people share gardening tips and grow fresh produce.','Attending town festivals contributes to the cultural development of the area.','Connecting with the community can’t help to build lasting relationships.'],'D','rd','NOT true (câu 16)','Bài viết: "Connecting with our community <b>helps</b> build lasting relationships" → D nói "can’t help" là sai.')
],[{from:13,to:16,title:'Our local community',html:COMM}]));

secs.push(S('d4w',D,
 'Viết','Tự đối chiếu','Viết lại câu theo yêu cầu (17–19), hoàn thành câu theo ý mình (20) và viết đoạn văn (21). Viết xong bấm xem đáp án mẫu để tự đối chiếu.','wr',[
 T(17,'If we leave early, we will arrive soon. (Dùng so sánh kép)<br>→ The …','The earlier we leave, the sooner we will arrive.','So sánh kép: The + so sánh hơn + S + V, the + so sánh hơn + S + V. early → earlier, soon → sooner.','Viết tiếp: The …'),
 T(18,'We don’t know what we should do to help the orphans. (Dùng từ để hỏi + to V)<br>→ We …','We don’t know what to do to help the orphans.','"what we should do" → <b>what to do</b> (từ để hỏi + to V).','Viết tiếp: We …'),
 T(19,'If you catch a cold, make sure to rest and drink plenty of water. (3–5 từ, dùng "come")<br>→ If you …, make sure to rest and drink plenty of water.','If you come down with a cold, make sure to rest and drink plenty of water.','catch a cold = <b>come down with a cold</b> (bị cảm).','Viết phần còn thiếu'),
 T(20,'If you want to stay healthy, you should …','If you want to stay healthy, you should eat more vegetables and exercise for at least 30 minutes a day.','Câu tự do: dùng should + V nguyên mẫu để đưa lời khuyên. Đây chỉ là một câu mẫu.','Viết tiếp: you should …'),
 T(21,'Write a paragraph (70–80 words) about the drawbacks of living in the city.','Living in the city has several drawbacks. Firstly, the city is often noisy and crowded, so it is hard to relax. Secondly, there are traffic jams during rush hours, which waste a lot of time. In addition, the air is polluted because of vehicles and factories, and this can affect our health. Finally, the cost of living is high, especially housing. Therefore, although the city offers many opportunities, life there can be stressful.','Đoạn mẫu khoảng 75 từ: câu chủ đề → các ý dùng Firstly, Secondly, In addition, Finally → câu kết. Em so dàn ý và từ nối với bài của mình.','Viết đoạn văn 70–80 từ')
],null,true));

return {secs:secs,vocab:{words:[],phrases:[]},tips:{
 pa:'Ôn cách đọc nguyên âm o (/ɒ/, /əʊ/) qua các từ trong Unit 1–3.',
 tv:'Ôn từ vựng Unit 1–3: due date, rush hour, physical activities, junk food…',
 np:'Ôn so sánh kép, từ để hỏi + to V, should, a variety of, optimistic about.',
 gt:'',
 rd:'Đọc cả câu chứa chỗ trống, gạch chân từ khoá trong câu hỏi rồi tìm trong bài.',
 wr:'Ôn các mẫu viết lại câu: so sánh kép, từ để hỏi + to V, cụm động từ come down with.'}};
})()
