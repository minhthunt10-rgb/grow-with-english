(function(){
/* Đề số 11 – "12 đề thi giữa học kì 1 Tiếng Anh 9 Global Success" (CHIA SẺ CHO CỘNG ĐỒNG/ĐỀ + ĐÁP ÁN CƠ BẢN/KHỐI 9/GIUA HKI).
   Bỏ Part A. Listening (câu 1–8 gốc) vì file không có âm thanh. Câu 9–34 gốc → 1–26; phần tìm lỗi sai (35–38 gốc) → 23–26,
   sắp xếp câu (31–34 gốc) → 27–30, viết lại câu (39–40 gốc) → 31–32. Đáp án theo file gốc; câu 10 chấp nhận C hoặc D. */
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
var D='Đề 11';
var secs=[];

secs.push(S('d11a',D,
 'Phát âm','Trọng âm & phát âm','Câu 1–2: chọn từ có trọng âm chính khác. Câu 3–4: chọn từ có phần gạch chân phát âm khác.','pa',[
 M(1,'Chọn từ có trọng âm chính khác:',['accomplish','liveable','minimize','traffic'],'A','pa','trọng âm (câu 1)','accomplish /əˈkʌmplɪʃ/ nhấn âm 2. liveable /ˈlɪvəbl/, minimize /ˈmɪnɪmaɪz/, traffic /ˈtræfɪk/ nhấn âm 1.'),
 M(2,'Chọn từ có trọng âm chính khác:',['pottery','suburb','favourite','collection'],'D','pa','trọng âm (câu 2)','collection /kəˈlekʃn/ nhấn âm 2 (đuôi -tion nhấn âm ngay trước). pottery /ˈpɒtəri/, suburb /ˈsʌbɜːb/, favourite /ˈfeɪvərɪt/ nhấn âm 1.'),
 M(3,'Chọn từ có phần gạch chân phát âm khác:',['<u>h</u>ealthy','<u>h</u>ouse','<u>h</u>appiness','<u>h</u>onest'],'D','pa','âm h câm (câu 3)','honest /ˈɒnɪst/: h câm. healthy, house, happiness: h đọc /h/.'),
 M(4,'Chọn từ có phần gạch chân phát âm khác:',['ar<u>ou</u>nd','undergr<u>ou</u>nd','c<u>ou</u>nsellor','t<u>ou</u>rist'],'D','pa','âm ou (câu 4)','tourist /ˈtʊərɪst/: ou đọc /ʊə/. around, underground, counsellor: ou đọc /aʊ/.')
]));

secs.push(S('d11b',D,
 'Từ vựng – Ngữ pháp','Chọn đáp án đúng','Chọn đáp án đúng cho câu 5–12.','np',[
 M(5,'These local _____ can make very beautiful traditional conical hats.',['artisans','electricians','firefighters','policemen'],'A','tv','artisan (câu 5)','Làm nón lá truyền thống → <b>artisans</b> = nghệ nhân, thợ thủ công. electricians = thợ điện; firefighters = lính cứu hoả; policemen = cảnh sát.'),
 M(6,'Mr Buong lives in the _____, but he works in the city centre, so it takes him 30 minutes to go to work.',['suburbs','downtown','buildings','small house'],'A','tv','suburbs (câu 6)','"but he works in the city centre … 30 minutes" → ông sống ở ngoại ô: <b>the suburbs</b>. downtown = trung tâm (trái ý câu).'),
 M(7,'Can you help me? I don’t know _____ to solve this mathematical problem.',['what','how','whom','which'],'B','np','từ để hỏi + to V (câu 7)','Không biết <b>cách</b> giải bài toán → <b>how to solve</b>. what/which/whom không hợp nghĩa vì sau đó đã có tân ngữ "this problem".'),
 M(8,'If you want to improve your health, you should _____ the fatty food and soft drink.',['cut down on','get on well with','get around','hand in'],'A','np','cụm động từ cut down on (câu 8)','<b>cut down on</b> = cắt giảm (đồ ăn nhiều mỡ, nước ngọt). get on well with = hoà hợp với; get around = đi lại; hand in = nộp.'),
 M(9,'Chọn câu đáp lại phù hợp:<br>– Would you mind showing me the way to the post office?<br>– ______',['Thanks','I beg your pardon.','I don’t know what to do','No, not yet'],'B','gt','hỏi lại khi chưa nghe rõ (câu 9)','Theo đáp án file gốc: <b>I beg your pardon.</b> = Xin lỗi, bạn nói lại được không? (dùng khi chưa nghe rõ, muốn người kia nhắc lại). Các câu còn lại không đáp đúng lời nhờ.'),
 M(10,'Chọn câu đáp lại phù hợp:<br>A: I can take you to the airport if you like.<br>B: ______',['Yes, I do','No, not at all','Thanks','Please do'],'C','gt','đáp lời đề nghị giúp đỡ (câu 10)','Người khác đề nghị giúp → cảm ơn / nhận lời: <b>Thanks</b> (đáp án file gốc). <b>Please do.</b> (Vâng, bạn chở giúp nhé) cũng là cách nhận lời tự nhiên nên được chấp nhận. "Yes, I do", "No, not at all" không hợp.','CD'),
 M(11,'(Gần nghĩa) The underground was <u><b>full of</b></u> people. I couldn’t find a seat.',['full on','empty of','packed with','convenient for'],'C','tv','full of = packed with (câu 11)','full of = đầy, chật kín = <b>packed with</b>. empty of = trống (trái nghĩa); convenient for = thuận tiện cho.'),
 M(12,'(Gần nghĩa) Peter was always <u><b>optimistic</b></u>, even when things were at their worst.',['negative','positive','pessimistic','gloomy'],'B','tv','optimistic = positive (câu 12)','optimistic = lạc quan = <b>positive</b> = tích cực. negative, pessimistic, gloomy đều mang nghĩa tiêu cực.')
]));

var BOX='<div class="instr" style="margin:0 0 8px"><b>for · better · enjoyed · great · in · village</b> (thừa 1 từ)</div>';
var NHA='<p><b>Where did you grow up?</b></p><p>I have a lot of '+B(13)+' memories of the house where I grew up. Now we live in the suburbs, but when I was little, my dad got a job in the countryside and we lived in a big old house on the edge of a '+B(14)+'. We lived there for ten years and I used to go to the village school. We were near the sea and my friends and I often explored the beach and the caves in the cliffs. The area is famous '+B(15)+' its beaches and white cliffs and it was the setting for a popular TV series last year!</p><p>I loved that old house. Some people think it’s lonely to be in the countryside, but I '+B(16)+' being on my own sometimes. If I felt miserable, I could go up to my bedroom and look out of the window. I had a breath-taking view from there across the fields and to the sea. It was very relaxing and made me feel '+B(17)+'. I was really unhappy when we moved to the town!</p>';
secs.push(S('d11c',D,
 'Đọc – điền từ','Đọc hiểu','Điền từ trong khung vào chỗ trống (13–17). Có một từ thừa.','rd',[
 F(13,'Chỗ trống (13)','great','tv','great memories (câu 13)','Trước danh từ "memories" cần tính từ: <b>great</b> memories = nhiều kỷ niệm đẹp.','Gõ từ trong khung'),
 F(14,'Chỗ trống (14)','village','tv','on the edge of a village (câu 14)','"on the edge of a …" + câu sau "the village school" → <b>village</b> = ngôi làng.','Gõ từ trong khung'),
 F(15,'Chỗ trống (15)','for','np','famous for (câu 15)','Cụm cố định <b>famous for</b> sth = nổi tiếng về.','Gõ từ trong khung'),
 F(16,'Chỗ trống (16)','enjoyed','np','enjoy + V-ing (câu 16)','Sau chỗ trống là "being" (V-ing) và câu kể chuyện quá khứ → <b>enjoyed</b> being on my own = thích ở một mình.','Gõ từ trong khung'),
 F(17,'Chỗ trống (17)','better','tv','feel better (câu 17)','"It was very relaxing and made me feel …" → <b>better</b> = dễ chịu hơn. Từ thừa: in.','Gõ từ trong khung')
],[{from:13,to:17,title:'Where did you grow up?',html:NHA}]));

var TRAFFIC='<p>Traffic jams and pollution are two big problems in the city. Traffic jams occur when there are too many cars on the roads, making it difficult for people to move around quickly. To <u><b>solve</b></u> this, cities can encourage people to use public transportation, like buses or trains, instead of driving their own cars. This would reduce the number of vehicles on the roads, easing traffic congestion. Pollution is another issue in cities because there is too much dirty air from vehicles and factories. One solution for this problem is to plant more trees and create more green spaces in the city. Trees provide oxygen and clean the air. By increasing the number of trees, cities can improve air quality and make the environment healthier for everyone. In conclusion, we all need to work together to solve the problems of traffic and pollution. By using public transportation and starting green projects like planting trees, we can make our city environment more sustainable and enjoyable.</p>';
secs.push(S('d11d',D,
 'Đọc hiểu','Đọc hiểu','Câu 18–19: chọn True hoặc False. Câu 20–22: chọn đáp án đúng.','rd',[
 M(18,'Encouraging people to use public transportation can help reduce traffic jams in the city.',['True','False'],'A','rd','True/False (câu 18)','"cities can encourage people to use public transportation … This would <b>reduce the number of vehicles</b> on the roads, easing traffic congestion" → True.'),
 M(19,'Planting more trees in the city will increase pollution levels and worsen air quality.',['True','False'],'B','rd','True/False (câu 19)','Bài viết: trồng cây giúp "<b>improve air quality</b>" (cải thiện chất lượng không khí) → câu nói làm xấu đi là False.'),
 M(20,'According to the passage, cities reduce traffic congestion by _____.',['encouraging more people to drive their own cars.','reducing the number of buses and trains.','promoting the use of public transportation.','building more roads for cars.'],'C','rd','chi tiết (câu 20)','"cities can encourage people to use <b>public transportation</b> … easing traffic congestion" → C.'),
 M(21,'The underlined word <b>solve</b> in the passage probably means _____.',['focus on','deal with','go out','carry out'],'B','tv','solve = deal with (câu 21)','solve = giải quyết = <b>deal with</b>. focus on = tập trung vào; carry out = thực hiện.'),
 M(22,'Which sentence is TRUE according to the passage?',['Pollution is not a problem in cities.','Planting more trees is harmful for the environment.','We should work alone to solve the problems.','To avoid traffic jams, people should use public transport.'],'D','rd','TRUE (câu 22)','Bài khuyên dùng phương tiện công cộng để giảm tắc đường → <b>D</b>. A, B sai với bài; C sai vì bài nói "we all need to <b>work together</b>".')
],[{from:18,to:22,title:'Traffic jams and pollution',html:TRAFFIC}]));

secs.push(S('d11e',D,
 'Tìm lỗi sai','Tìm lỗi sai','Chọn phần gạch chân cần sửa trong mỗi câu (23–26).','np',[
 M(23,'Chọn phần cần sửa:<br>The <u>more old</u> (A) Mrs Mai <u>becomes</u> (B), the <u>more forgetful</u> (C) she <u>feels</u> (D).',['more old','becomes','more forgetful','feels'],'A','np','so sánh kép (câu 23)','old là tính từ ngắn → so sánh hơn là <b>older</b>: The older Mrs Mai becomes, the more forgetful she feels.'),
 M(24,'Chọn phần cần sửa:<br><u>People</u> (A) come <u>out</u> (B) <u>with</u> (C) the flu <u>in winter</u> (D).',['People','out','with','in winter'],'B','np','cụm động từ come down with (câu 24)','Bị (cảm, cúm) là <b>come down with</b>: People come down with the flu in winter. "come out with" = nói ra, tung ra.'),
 M(25,'Chọn phần cần sửa:<br><u>If</u> (A) you <u>trained</u> (B) hard, you <u>might win</u> (C) the first <u>prize</u> (D).',['If','trained','might win','prize'],'B','np','câu điều kiện loại 1 (câu 25)','Câu điều kiện loại 1 với might: If + S + V (hiện tại), S + might + V → <b>train</b>: If you train hard, you might win the first prize.'),
 M(26,'Chọn phần cần sửa:<br>My sister <u>wondered</u> (A) <u>where</u> (B) <u>bought</u> (C) the <u>best</u> (D) cakes.',['wondered','where','bought','best'],'C','np','từ để hỏi + to V (câu 26)','Sau wonder + từ để hỏi dùng <b>to V</b>: My sister wondered where <b>to buy</b> the best cakes.')
]));

secs.push(S('d11f',D,
 'Viết câu','Tự đối chiếu','Câu 27–30: sắp xếp từ thành câu hoàn chỉnh. Câu 31–32: viết lại câu với từ cho sẵn sao cho nghĩa không đổi. Viết xong bấm xem đáp án mẫu để tự đối chiếu.','wr',[
 T(27,'sister / handed down / Her elder / most of her clothes / to Mai','Her elder sister handed down most of her clothes to Mai.','hand down sth to sb = truyền lại, để lại (đồ) cho ai.','Viết câu hoàn chỉnh'),
 T(28,'you / mind / this suitcase / Do / carrying / for me?','Do you mind carrying this suitcase for me?','Do you mind + V-ing …? = Bạn có phiền … không? (lời nhờ giúp đỡ).','Viết câu hoàn chỉnh'),
 T(29,'don\'t feel / you / well, / see a doctor / If / you / should','If you don\'t feel well, you should see a doctor.','Câu điều kiện loại 1 với should: If + S + V, S + should + V.','Viết câu hoàn chỉnh'),
 T(30,'the task gets, / the students / become / The easier / the happier','The easier the task gets, the happier the students become.','So sánh kép: The + so sánh hơn + S + V, the + so sánh hơn + S + V.','Viết câu hoàn chỉnh'),
 T(31,'Alex doesn’t know how he can get to the Thu Le zoo. (TO)<br>→ Alex doesn’t know …','Alex doesn’t know how to get to the Thu Le zoo.','"how he can get" → <b>how to get</b> (từ để hỏi + to V).','Viết tiếp: Alex doesn’t know …'),
 T(32,'Lan Anh often looks after her younger brother after school. (TAKE)<br>→ Lan Anh …','Lan Anh often takes care of her younger brother after school.','look after = <b>take care of</b> = chăm sóc. Chủ ngữ số ít → takes.','Viết tiếp: Lan Anh …')
],null,true));

return {secs:secs,vocab:{words:[],phrases:[]},tips:{
 pa:'Ôn trọng âm từ 2–3 âm tiết, âm h câm (honest) và âm ou (/aʊ/ – /ʊə/).',
 tv:'Ôn từ vựng Unit 1–3: artisan, suburbs, packed with, optimistic, feel better.',
 np:'Ôn từ để hỏi + to V, cụm động từ (cut down on, come down with, hand down), so sánh kép, câu điều kiện loại 1.',
 gt:'Ôn cách hỏi lại (I beg your pardon?) và đáp lời đề nghị giúp đỡ (Thanks / Please do).',
 rd:'Đọc kỹ câu True/False, tìm đúng câu trong bài rồi so từng ý.',
 wr:'Ôn so sánh kép, Do you mind + V-ing, từ để hỏi + to V, take care of.'}};
})()
