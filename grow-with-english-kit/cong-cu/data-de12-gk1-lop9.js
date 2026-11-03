(function(){
/* Đề số 12 – "12 đề thi giữa học kì 1 Tiếng Anh 9 Global Success" (CHIA SẺ CHO CỘNG ĐỒNG/ĐỀ + ĐÁP ÁN CƠ BẢN/KHỐI 9/GIUA HKI).
   Đề không có phần Nghe. Đánh số liên tục 1–35 (I: 1–5, II: 6–15, III: 16–20, IV: 21–25, V: 26–30, VI: 31–32, VII: 33–35).
   Sửa theo nội dung bài vì đáp án file gốc sai: câu 15 (gốc II.10 ghi B) → A; câu 26 (gốc V.1 ghi A) → B; câu 28 (gốc V.3 ghi D) → C.
   Câu 21 chấp nhận C (file gốc) hoặc D (make a stop). */
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
var D='Đề 12';
var secs=[];

secs.push(S('d12a',D,
 'Phát âm','Phát âm','Chọn từ có phần gạch chân phát âm khác (câu 1–5).','pa',[
 M(1,'Chọn từ có phần gạch chân phát âm khác:',['constr<u>u</u>ct','c<u>u</u>ltural','r<u>u</u>sh-hour','poll<u>u</u>te'],'D','pa','âm u (câu 1)','pollute /pəˈluːt/: u đọc /uː/. construct, cultural, rush-hour: u đọc /ʌ/.'),
 M(2,'Chọn từ có phần gạch chân phát âm khác:',['<u>o</u>cean','rem<u>o</u>te','<u>o</u>ccasion','metr<u>o</u>'],'C','pa','âm o (câu 2)','occasion /əˈkeɪʒn/: o đọc /ə/. ocean, remote, metro: o đọc /əʊ/.'),
 M(3,'Chọn từ có phần gạch chân phát âm khác:',['site<u>s</u>','park<u>s</u>','stop<u>s</u>','downtown<u>s</u>'],'D','pa','đuôi -s (câu 3)','downtowns: trước s là âm /n/ (hữu thanh) → /z/. sites, parks, stops: trước s là /t/, /k/, /p/ → /s/.'),
 M(4,'Chọn từ có phần gạch chân phát âm khác:',['arriv<u>ed</u>','unit<u>ed</u>','crowd<u>ed</u>','recommend<u>ed</u>'],'A','pa','đuôi -ed (câu 4)','arrived: đuôi -ed đọc /d/. united, crowded, recommended: động từ tận cùng t, d → -ed đọc /ɪd/.'),
 M(5,'Chọn từ có phần gạch chân phát âm khác:',['of<u>t</u>en','ti<u>t</u>le','lis<u>t</u>en','whis<u>t</u>le'],'B','pa','âm t câm (câu 5)','title /ˈtaɪtl/: t đọc /t/. often, listen, whistle: t câm.')
]));

secs.push(S('d12b',D,
 'Từ vựng – Ngữ pháp','Chọn đáp án đúng','Chọn đáp án đúng cho câu 6–15.','np',[
 M(6,'The tourists wondered where _____ the traditional crafts in the village market.',['should buy','buying','to buy','to bought'],'C','np','từ để hỏi + to V (câu 6)','Sau wonder + từ để hỏi dùng <b>to V</b> (nguyên mẫu): where <b>to buy</b>. "to bought" sai vì sau to phải là động từ nguyên mẫu.'),
 M(7,'Alice asked me how _____ to the nearest shopping mall.',['to get','getting','should get','got'],'A','np','từ để hỏi + to V (câu 7)','how + <b>to get</b> to … = cách đi đến …'),
 M(8,'This traditional craft has been _____ from parents to children over many generations.',['set up','set at','passed down','pass away'],'C','np','pass down (câu 8)','Truyền từ cha mẹ sang con cái qua nhiều thế hệ → <b>passed down</b> (bị động: has been passed down). set up = thành lập; pass away = qua đời.'),
 M(9,'Mr Ba thinks the bigger the city is, _____ the cost of living is.',['higher','the higher','the highest','highest'],'B','np','so sánh kép (câu 9)','So sánh kép: The + so sánh hơn …, <b>the + so sánh hơn</b> … → the higher.'),
 M(10,'Alex rarely uses the bus, so his mother often _____ him up at school.',['gets','looks','turns','picks'],'D','np','pick up (câu 10)','<b>pick sb up</b> = đón ai. look up = tra cứu; turn up = xuất hiện; get up = thức dậy.'),
 M(11,'I’m learning English _____ I want to get a good job after school.',['but','because','so','therefore'],'B','np','liên từ because (câu 11)','Vế sau là lý do học tiếng Anh → <b>because</b> = vì.'),
 M(12,'_____ the exam is over and we accomplished our work, we still have to be at school some days.',['Though','Because','However','Despite'],'A','np','though + mệnh đề (câu 12)','Hai vế trái ngược (thi xong rồi nhưng vẫn phải đến trường) + sau chỗ trống là mệnh đề → <b>Though</b>. Despite + danh từ/V-ing; However đứng đầu câu có dấu phẩy.'),
 M(13,'I think we should have _____ living, both physical and mental health.',['healthily','health','unhealthy','healthy'],'D','tv','từ loại: healthy (câu 13)','Trước danh từ "living" cần tính từ, nghĩa tích cực → <b>healthy</b> living = lối sống lành mạnh.'),
 M(14,'Don’t be shy when you _____ mistakes because we can learn from our mistakes.',['take','make','do','get'],'B','tv','make mistakes (câu 14)','Cụm cố định <b>make mistakes</b> = mắc lỗi.'),
 M(15,'_____ living is difficult to achieve if someone has many things to do.',['Well-balanced','Badly balanced','Healthy','Happy'],'A','tv','well-balanced living (câu 15)','Khi có quá nhiều việc phải làm thì khó đạt được lối sống <b>cân bằng</b> → <b>Well-balanced</b> living. (File gốc ghi B "badly balanced" nhưng không hợp nghĩa: lối sống mất cân bằng không phải là điều khó đạt được.)')
]));

secs.push(S('d12c',D,
 'Từ loại','Dạng đúng của từ','Viết dạng đúng của từ trong ngoặc (16–20).','tv',[
 F(16,'I got stuck in traffic due to a <span class="blank">______</span> road, causing delays in reaching my destination. (CONGEST)','congested','tv','từ loại: congested (câu 16)','Trước danh từ "road" cần tính từ: congest (v) → <b>congested</b> = tắc nghẽn.','Nhập dạng đúng của từ'),
 F(17,'The <span class="blank">______</span> site near my house is active now, with the constant noise of machinery and workers. (CONSTRUCT)','construction','tv','construction site (câu 17)','Cụm danh từ <b>construction site</b> = công trường xây dựng.','Nhập dạng đúng của từ'),
 F(18,'The city\'s clean environment and excellent infrastructure make it a highly <span class="blank">______</span> place for residents and visitors alike. (LIVE)','liveable','tv','từ loại: liveable (câu 18)','Sau trạng từ "highly" và trước danh từ "place" cần tính từ: <b>liveable</b> (BrE) / livable (AmE) = đáng sống.','Nhập dạng đúng của từ',['livable']),
 F(19,'The dust from the construction site made my eyes <span class="blank">______</span> and irritated, causing discomfort throughout the day. (ITCH)','itchy','tv','từ loại: itchy (câu 19)','make + O + <b>tính từ</b>, song song với "irritated": itch (n, v) → <b>itchy</b> = ngứa.','Nhập dạng đúng của từ'),
 F(20,'We decided to spend the evening at the new <span class="blank">______</span> centre, enjoying games, movies, and live performances. (ENTERTAIN)','entertainment','tv','entertainment centre (câu 20)','Cụm danh từ <b>entertainment centre</b> = trung tâm giải trí.','Nhập dạng đúng của từ')
]));

var THU='<p>I am writing about the short stop that your trucks '+B(21)+' around my house on their way to the north. When the trucks of your company have a short '+B(22)+' there, the drivers have left lots of garbage on the ground after their refreshment. When the trucks leave the place, the ground is '+B(23)+' of trash and a few minutes later there is bad smell and flies all over the place. I myself, '+B(24)+' the people living around here, would urge that your company should tell your drivers to clean up all the trash on the ground before leaving. '+B(25)+' you do something about it and soon, we will have to report this to the local authority. I am looking forward to hearing from you and seeing positive response from your company.</p>';
secs.push(S('d12d',D,
 'Đọc – điền từ','Đọc hiểu','Chọn đáp án A, B, C hoặc D điền vào chỗ trống (21–25).','rd',[
 M(21,'Chỗ trống (21)',['produce','do','take','make'],'C','tv','take/make a stop (câu 21)','"the short stop that your trucks … around my house" → dừng chân: <b>take</b> a stop (đáp án file gốc). <b>make</b> a stop cũng là cụm đúng nên được chấp nhận.','CD'),
 M(22,'Chỗ trống (22)',['break','relax','advertise','entertain'],'A','tv','have a break (câu 22)','"have a short …" → <b>have a short break</b> = nghỉ chân một lát.'),
 M(23,'Chỗ trống (23)',['crowded','filled','fond','full'],'D','tv','full of (câu 23)','Sau chỗ trống là "of" → <b>full of</b> = đầy. crowded with, filled with, fond of (thích) không hợp.'),
 M(24,'Chỗ trống (24)',['as well as','as far as','as soon as','as long as'],'A','np','as well as (câu 24)','"I myself, <b>as well as</b> the people living around here" = tôi, cũng như những người sống quanh đây.'),
 M(25,'Chỗ trống (25)',['Although','Unless','Because','If'],'B','np','unless (câu 25)','"<b>Unless</b> you do something about it …, we will have to report" = Nếu công ty không làm gì thì chúng tôi sẽ phải báo chính quyền.')
],[{from:21,to:25,title:'A letter of complaint',html:THU}]));

var CITY='<p>Twenty years ago, people tried to leave the suburbs for cities but nowadays many people are reluctant to make such a move. They say that compared to suburban areas, city life has many drawbacks.</p><p>The high cost of living is the first disadvantage. The bigger the city is, the higher the living cost is. Accommodation and petrol are expensive. Food and drinks are also pricey. Apart from that, city people seem to suffer from more noise and air pollution. The densely populated neighbourhoods, busy traffic, and big construction sites make cities noisy and dusty. These are harmful to people’s health, such as increasing their stress levels, disturbing their sleep and making <u><b>them</b></u> suffer from breathing problems.</p><p>Lack of space is another drawback of city life. House prices are high in the city, so people tend to live in smaller houses or in apartment blocks. Many cities lack spaces for outdoor activities; therefore, teenagers often hang out at shopping malls or in entertainment complexes instead of doing sports outdoors.</p><p>The cities\' authorities are trying to overcome these problems. However, they still have a long way to go before they can reduce living costs and pollution, and increase green space to make all cities in the world more liveable places.</p>';
secs.push(S('d12e',D,
 'Đọc hiểu','Đọc hiểu','Đọc bài và chọn đáp án đúng (26–30).','rd',[
 M(26,'What is the passage mainly about?',['The reasons for moving to the suburbs.','The disadvantages of city life.','The high cost of living in cities.','The causes of pollution in cities.'],'B','rd','ý chính (câu 26)','Đoạn 1: "city life has many <b>drawbacks</b>", các đoạn sau lần lượt nêu từng bất lợi → <b>The disadvantages of city life</b>. C, D chỉ là một ý nhỏ. (File gốc ghi A nhưng bài không nói về lý do chuyển ra ngoại ô.)'),
 M(27,'Why does the author mention “accommodation, petrol, food, and drinks” in paragraph 2?',['To give examples of high living costs.','To explain how convenient city life is.','To describe what city people often lack.','To suggest city people save money.'],'A','rd','mục đích chi tiết (câu 27)','Ngay sau câu "The high cost of living is the first disadvantage", tác giả kể các thứ đắt đỏ → <b>ví dụ cho chi phí sinh hoạt cao</b>.'),
 M(28,'What does the word “them” in paragraph 2 refer to?',['bad effects','stress levels','city people','construction sites'],'C','rd','từ quy chiếu (câu 28)','"These are harmful to <b>people’s</b> health, such as increasing their stress levels, disturbing their sleep and making <b>them</b> suffer from breathing problems" → them = những người sống ở thành phố (<b>city people</b>). (File gốc ghi D nhưng công trường không thể "bị khó thở".)'),
 M(29,'According to the passage, teenagers often hang out at shopping malls because _____.',['they find shopping malls interesting','they have few places outdoor to play','they prefer them to entertainment complexes','their houses are too small'],'B','rd','chi tiết (câu 29)','"Many cities <b>lack spaces for outdoor activities</b>; therefore, teenagers often hang out at shopping malls" → B.'),
 M(30,'Which of the following is NOT mentioned about city authorities?',['They are trying to find solutions to city problems.','They all want to solve problems for all the world’s cities.','They hope to lower the costs of living in cities.','They reduced pollution levels in cities by half last year.'],'D','rd','NOT mentioned (câu 30)','Bài chỉ nói chính quyền đang cố gắng và "còn một chặng đường dài" để giảm ô nhiễm, không hề nói đã <b>giảm một nửa năm ngoái</b> → D.')
],[{from:26,to:30,title:'City life',html:CITY}]));

secs.push(S('d12f',D,
 'Viết câu','Tự đối chiếu','Câu 31–32: viết câu hoàn chỉnh từ gợi ý. Câu 33–35: viết lại câu sao cho nghĩa không đổi. Viết xong bấm xem đáp án mẫu để tự đối chiếu.','wr',[
 T(31,'If Lan / not / want / gain / weight, / she / should / eat / much fast food.','If Lan doesn’t want to gain weight, she shouldn’t eat much fast food.','Câu điều kiện loại 1 với should: If + S + doesn’t + V, S + should not + V. want + to V.','Viết câu hoàn chỉnh'),
 T(32,'If / he / want / save / electricity bills, / must / turn / all / electrical equipment / before / go out.','If he wants to save electricity bills, he must turn off all electrical equipment before he goes out.','Câu điều kiện loại 1 với must; turn off = tắt; before + mệnh đề (he goes out) hoặc before going out.','Viết câu hoàn chỉnh'),
 T(33,'Take these pills or you might feel better.<br>→ If you …','If you take these pills, you might feel better.','Câu mệnh lệnh → câu điều kiện loại 1: If + S + V, S + might + V. (Câu gốc trong file viết "or" nhưng ý là uống thuốc thì sẽ khỏe hơn.)','Viết tiếp: If you …'),
 T(34,'Could you tell me where I can find more information about this specialty?<br>→ Could you tell me …','Could you tell me where to find more information about this specialty?','"where I can find" → <b>where to find</b> (từ để hỏi + to V).','Viết tiếp: Could you tell me …'),
 T(35,'Hanoi capital city is generally not as exciting as Hue city.<br>→ Hue city is …','Hue city is generally more exciting than Hanoi capital city.','not as + adj + as → đổi chủ ngữ, dùng so sánh hơn: <b>more exciting than</b>.','Viết tiếp: Hue city is …')
],null,true));

return {secs:secs,vocab:{words:[],phrases:[]},tips:{
 pa:'Ôn âm u, o, đuôi -s/-es, đuôi -ed và các chữ t câm (often, listen, whistle).',
 tv:'Ôn từ loại Unit 1–3: congested, construction, liveable, itchy, entertainment; make mistakes, full of.',
 np:'Ôn từ để hỏi + to V, so sánh kép, cụm động từ (pass down, pick up), liên từ because / though / unless.',
 rd:'Tìm ý chính ở câu đầu đoạn; với từ quy chiếu (them, it) thì đọc lại câu ngay trước.',
 wr:'Ôn câu điều kiện loại 1 với should / must / might, từ để hỏi + to V, so sánh hơn.'}};
})()
