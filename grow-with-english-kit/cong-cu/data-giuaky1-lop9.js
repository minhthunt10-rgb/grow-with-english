(function(){
/* Đề kiểm tra giữa HKI lớp 9 (file "(26.10) TEST_ GRADE 9 _ GIỮA HKI.docx"). File gốc không có đáp án: đáp án dưới đây do giáo viên/Claude giải. */
var LL='ABCD';
function M(n,p,o,a,sk,tp,ex,alt){var q={t:'mcq',n:n,p:p,o:o,g:['','','',''],a:LL.indexOf(a),sk:sk,tp:tp,ex:ex};if(alt)q.alt=alt.split('').map(function(c){return LL.indexOf(c)});return q}
function F(n,p,a,sk,tp,ex,ph){return {t:'fill',n:n,p:p,a:a,sk:sk,tp:tp,ex:ex,ph:ph}}
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
var D1='Đề 1 (31 câu)', D2='Đề 2 (40 câu)';
var secs=[];

/* ================= ĐỀ 1 ================= */
secs.push(S('d1p','',
 'Phát âm','Phát âm & trọng âm','Câu 1–2: chọn từ có phần gạch chân phát âm khác. Câu 3–4: chọn từ có trọng âm chính khác.','pa',[
 M(1,'Chọn từ có phần gạch chân phát âm khác:',['visit<u>ed</u>','hand<u>ed</u>','congest<u>ed</u>','preserv<u>ed</u>'],'D','pa','đuôi -ed (câu 1)','Đuôi -ed sau âm /t/, /d/ đọc /ɪd/: visited, handed, congested. preserved đọc /d/.'),
 M(2,'Chọn từ có phần gạch chân phát âm khác:',['garb<u>a</u>ge','distr<u>a</u>ction','b<u>a</u>lance','h<u>a</u>ndicraft'],'A','pa','âm a (câu 2)','garbage /ˈɡɑːbɪdʒ/: a đọc /ɑː/. distraction, balance, handicraft: a đọc /æ/.'),
 M(3,'Chọn từ có trọng âm chính khác:',['suburb','delight','helpline','workshop'],'B','pa','trọng âm 2 âm tiết (câu 3)','delight /dɪˈlaɪt/ nhấn âm 2. suburb, helpline, workshop nhấn âm 1.'),
 M(4,'Chọn từ có trọng âm chính khác:',['handicraft','collector','department','opinion'],'A','pa','trọng âm 3 âm tiết (câu 4)','handicraft /ˈhændikrɑːft/ nhấn âm 1. collector, department, opinion nhấn âm 2.')
]));
secs.push(S('d1g','',
 'Từ vựng – Ngữ pháp','Chọn đáp án đúng','Chọn đáp án đúng để hoàn thành mỗi câu.','np',[
 M(5,'We need to decide ______ to visit the floating market in the Mekong Delta, in the morning or in the afternoon.',['when','what','how','where'],'A','np','từ để hỏi + to V (câu 5)','Phần sau hỏi thời gian "in the morning or in the afternoon" → <b>when</b> + to V.'),
 M(6,'We should not throw trash in the river to ______ water pollution.',['carry out','hand down','cut down on','find out'],'C','tv','cut down on (câu 6)','<b>cut down on</b> = cắt giảm. carry out = thực hiện; hand down = truyền lại; find out = tìm ra.'),
 M(7,'The ______ the computer is, the ______ the price you have to pay.',['more modern – higher','moderner – higher','more modern – more high','moderner – more high'],'A','np','so sánh kép (câu 7)','So sánh kép: The + so sánh hơn ..., the + so sánh hơn ... modern (2 âm tiết) → <b>more modern</b>; high (1 âm tiết) → <b>higher</b>.'),
 M(8,'Teenagers ______ drink coke if they don\'t want to gain weight.',['should','shouldn\'t','can','can\'t'],'B','np','should/shouldn\'t (câu 8)','<b>shouldn\'t</b> = không nên: không nên uống nước ngọt nếu không muốn tăng cân.'),
 M(9,'If Johnny ______ more, he ______ healthier.',['exercised / might feel','will exercise / feel','exercises / might feel','exercises / feels'],'C','np','câu điều kiện loại 1 (câu 9)','Điều kiện loại 1: If + hiện tại đơn (<b>exercises</b>), mệnh đề chính will/may/might + V (<b>might feel</b>).'),
 M(10,'I haven\'t decided ______ to do first tomorrow.',['when','what','where','how'],'B','np','từ để hỏi + to V (câu 10)','"to do" còn thiếu tân ngữ (làm <i>cái gì</i>) → <b>what</b> + to V.'),
 M(11,'<b>A:</b> Can you open the door, please?<br><b>B:</b> ______.',['I beg your pardon.','Go ahead.','Go away.','You\'re welcome.'],'B','gt','đáp lời đề nghị (câu 11)','<b>Go ahead</b> = cứ làm đi / được thôi, dùng để đồng ý. I beg your pardon = xin nhắc lại; Go away = đi đi; You\'re welcome = không có gì.')
]));
secs.push(S('d1v','',
 'Đồng nghĩa – Trái nghĩa','Từ vựng','Câu 12–13: chọn từ GẦN NGHĨA nhất với phần gạch chân. Câu 14–15: chọn từ TRÁI NGHĨA với phần gạch chân.','tv',[
 M(12,'(Gần nghĩa) Lan Anh <u><b>arrived at</b></u> Trieu Le Dinh\'s wedding in China despite her sickness.',['keen on','surprised at','turned up','looked forward'],'C','tv','arrive at = turn up (câu 12)','arrive at = <b>turn up</b> (đến, xuất hiện). keen on = thích; surprised at = ngạc nhiên về; look forward = mong đợi.'),
 M(13,'(Gần nghĩa) I have just <u><b>accomplished</b></u> my assignment, so I can go out for a walk.',['managed','finished','put','delayed'],'B','tv','accomplish = finish (câu 13)','accomplish = <b>finish</b> (hoàn thành). manage = xoay xở; put = đặt; delay = trì hoãn.'),
 M(14,'(Trái nghĩa) I think we should make a greater effort to <u><b>preserve</b></u> our traditional handicraft villages.',['destroy','store','arrange','keep'],'A','tv','preserve ≠ destroy (câu 14)','preserve = bảo tồn ≠ <b>destroy</b> = phá huỷ. store = cất giữ; arrange = sắp xếp; keep = giữ (gần nghĩa).'),
 M(15,'(Trái nghĩa) It\'s clear that the artisan put a great deal of care and <u><b>attention</b></u> into the new product.',['concentration','function','distraction','attraction'],'C','tv','attention ≠ distraction (câu 15)','attention = sự chú ý ≠ <b>distraction</b> = sự xao nhãng. concentration = sự tập trung (gần nghĩa); function = chức năng; attraction = sự thu hút.')
]));
secs.push(S('d1r1','',
 'Đọc điền từ','Đọc hiểu','Đọc đoạn văn và chọn từ phù hợp nhất cho mỗi chỗ trống (16–20).','rd',[
 M(16,'Chỗ trống (16)',['amenities','features','difficulties','inconveniences'],'A','rd','đọc điền từ – câu 16','<b>amenities</b> = tiện ích (trường học, bệnh viện, khu giải trí). features = đặc điểm; difficulties, inconveniences = khó khăn, bất tiện (không phải ưu điểm).'),
 M(17,'Chỗ trống (17)',['weather','nature','atmosphere','environment'],'D','rd','đọc điền từ – câu 17','A more diverse <b>environment</b> = môi trường đa dạng, mang lại nhiều trải nghiệm văn hoá. Chấp nhận cả atmosphere (bầu không khí). weather = thời tiết; nature = thiên nhiên.','C'),
 M(18,'Chỗ trống (18)',['air','noise','water','land'],'A','rd','đọc điền từ – câu 18','Ô nhiễm ảnh hưởng tới sức khoẻ cư dân thành phố → <b>air</b> pollution (ô nhiễm không khí).'),
 M(19,'Chỗ trống (19)',['low','medium','high','safe'],'C','rd','đọc điền từ – câu 19','The <b>high</b> cost of living = chi phí sinh hoạt cao, khớp với "high rent and expensive services".'),
 M(20,'Chỗ trống (20)',['disadvantages','risks','benefits','threats'],'C','rd','đọc điền từ – câu 20','"Despite these challenges" → người ta vẫn chọn thành phố vì nhiều <b>benefits</b> (lợi ích).')
],[{from:16,to:20,title:'City life',html:'<p>Living in a city has many benefits and challenges. One of the main advantages is the availability of '+B(16)+' such as schools, hospitals, and entertainment centers. Cities often provide better job opportunities and higher salaries compared to rural areas. Additionally, cities have a more diverse '+B(17)+' offering various cultural experiences and cuisines. However, city life also has its downsides. One significant issue is '+B(18)+' pollution, which can affect residents\' health. Traffic congestion is another common problem, causing long commuting times and stress. The '+B(19)+' cost of living in cities, including high rent and expensive services, can also be a challenge for many people.</p><p>Despite these challenges, many people choose to live in cities because of the numerous '+B(20)+' offer. In conclusion, city life has both positive and negative aspects, and individuals must weigh these factors to decide if it suits their lifestyle.</p>'}]));

var STRESS='<p>Practical stress management can help students deal with their worries and become more productive, competent and efficient. First of all, students must be able to design and stick to a timetable. Choose a relaxing break between work and study, even if it\'s just taking out time to breathe. In addition, a healthy lifestyle is essential for students. Let\'s drink more water as well as take out time to get some air and exercise. Furthermore, organization is very important in academic life for dealing with stress. By keeping academic notes organized, turning in assignments on time, and keeping track of all deadlines, stress can be reduced to a great extent. Stress can also get worse if a person feels lonely. Therefore, by letting out all your thoughts to someone you trust, you immediately feel a lot better. However, if you feel extremely stressed out, take a break and do something you love. Whether it is painting or listening to music, doing something you enjoy can cheer up your mood and distract you from a stressor. It\'s about time that we students accept that we can achieve just as much in life without all the stress.</p>';
secs.push(S('d1r2','',
 'Đọc – trả lời ngắn','Tự đối chiếu','Đọc đoạn văn và trả lời ngắn các câu hỏi 21–23. Viết xong bấm xem đáp án mẫu để tự đối chiếu.','rd',[
 T(21,'What can students do to lead a healthy lifestyle?','They can drink more water and take time to get some air and exercise.','Dựa vào câu "Let\'s drink more water as well as take out time to get some air and exercise."'),
 T(22,'Can they achieve just as much in life without all the stress?','Yes, they can.','Câu cuối bài: "...we can achieve just as much in life without all the stress."'),
 T(23,'Why is organization important in academic life?','Because it helps students deal with stress: keeping notes organized, turning in assignments on time and keeping track of deadlines can reduce stress to a great extent.','Dựa vào câu "By keeping academic notes organized, ... stress can be reduced to a great extent."')
],[{from:21,to:23,title:'Stress management',html:STRESS}],true));
secs.push(S('d1r3','',
 'Đọc – trắc nghiệm','Đọc hiểu','Đọc lại đoạn văn và chọn đáp án đúng cho câu 24–25.','rd',[
 M(24,'Practical stress management can help students ______.',['deal with stress','have more time','face up to the worst situation','think critically'],'A','rd','đọc hiểu – câu 24','Câu đầu bài: "help students deal with their worries" → <b>deal with stress</b>.'),
 M(25,'Which of the following sentences is TRUE?',['You should stay alone when being under pressure.','When you feel lonely, you should grab someone to talk.','The more lonely you are, the more stress you can have.','It is believed that stress can control itself.'],'C','rd','đọc hiểu – câu 25','Bài viết: "Stress can also get worse if a person feels lonely" → càng cô đơn càng căng thẳng (C). B gần ý "letting out all your thoughts to someone you trust" nên cũng được chấp nhận. A, D sai.','B')
],[{from:24,to:25,title:'Stress management',html:STRESS}]));
secs.push(S('d1w1','',
 'Viết – từ loại','Dạng đúng của từ','Viết dạng đúng của từ trong ngoặc.','wr',[
 F(26,'A good night\'s sleep will improve your <span class="blank">______</span>. (concentrate)','concentration','tv','từ loại: concentration (câu 26)','Sau tính từ sở hữu "your" cần danh từ: concentrate (v) → <b>concentration</b> (n) = sự tập trung.','Nhập dạng đúng của từ'),
 F(27,'Teens should learn to be <span class="blank">______</span> when making a presentation. (confidence)','confident','tv','từ loại: confident (câu 27)','Sau "be" cần tính từ: confidence (n) → <b>confident</b> (adj) = tự tin.','Nhập dạng đúng của từ')
]));
secs.push(S('d1w2','',
 'Viết lại câu','Tự đối chiếu','Hoàn thành câu thứ hai sao cho nghĩa tương tự câu thứ nhất, bắt đầu bằng từ cho sẵn. Viết xong bấm xem đáp án mẫu để tự đối chiếu.','wr',[
 T(28,'You speak English much; your English will be good.<br>→ The more …','The more you speak English, the better your English will be.','So sánh kép: The more + S + V, the + so sánh hơn + S + V. good → better.','Viết tiếp: The more …'),
 T(29,'I decided to reduce fast food and start cooking my own meals.<br>→ I decided to cut …','I decided to cut down on fast food and start cooking my own meals.','reduce = <b>cut down on</b> (cắt giảm).','Viết tiếp: I decided to cut …'),
 T(30,'They are wondering where they can buy traditional handicrafts.<br>→ They are wondering where to …','They are wondering where to buy traditional handicrafts.','Từ để hỏi + to V thay cho mệnh đề "where they can buy".','Viết tiếp: They are wondering where to …'),
 T(31,'Study hard and you will get good marks in this middle term test.<br>→ If you …','If you study hard, you will get good marks in this middle term test.','Câu mệnh lệnh + and + will → điều kiện loại 1: If + hiện tại đơn, will + V.','Viết tiếp: If you …')
],null,true));
secs.slice(0).forEach(function(s){s.grp=D1});

/* ================= ĐỀ 2 ================= */
var d2=[];
d2.push(S('d2p',D2,
 'Phát âm','Phát âm & trọng âm','Câu 1–2: chọn từ có phần gạch chân phát âm khác. Câu 3–4: chọn từ có trọng âm chính khác.','pa',[
 M(1,'Chọn từ có phần gạch chân phát âm khác:',['wind<u>ow</u>','d<u>ow</u>ntown','p<u>ow</u>er','cr<u>ow</u>ded'],'A','pa','âm ow (câu 1)','window /ˈwɪndəʊ/: ow đọc /əʊ/. downtown, power, crowded: ow đọc /aʊ/.'),
 M(2,'Chọn từ có phần gạch chân phát âm khác:',['<u>a</u>ccomplish','<u>a</u>dditional','<u>a</u>nxiety','<u>a</u>ssignment'],'C','pa','âm a đầu từ (câu 2)','anxiety /æŋˈzaɪəti/: a đọc /æ/. accomplish, additional, assignment: a đọc /ə/.'),
 M(3,'Chọn từ có trọng âm chính khác:',['community','delivery','amenity','optimistic'],'D','pa','trọng âm 4 âm tiết (câu 3)','optimistic /ˌɒptɪˈmɪstɪk/ nhấn âm 3. community, delivery, amenity nhấn âm 2.'),
 M(4,'Chọn từ có trọng âm chính khác:',['metro','suburb','delay','mental'],'C','pa','trọng âm 2 âm tiết (câu 4)','delay /dɪˈleɪ/ nhấn âm 2. metro, suburb, mental nhấn âm 1.')
]));
d2.push(S('d2g',D2,
 'Từ vựng – Ngữ pháp','Chọn đáp án đúng','Chọn đáp án đúng cho mỗi câu.','np',[
 M(5,'We need to ______ our use of plastic to help the environment.',['look for','cut down on','remind','get on (well) with'],'B','tv','cut down on (câu 5)','<b>cut down on</b> = cắt giảm. look for = tìm kiếm; remind = nhắc nhở; get on well with = hoà hợp với.'),
 M(6,'There are too many ______ in this classroom; it\'s hard for me to pay attention to the lesson.',['difficulties','distractions','obstacles','omissions'],'B','tv','distraction (câu 6)','<b>distractions</b> = những thứ gây xao nhãng, khiến khó tập trung. difficulties = khó khăn; obstacles = trở ngại; omissions = sự bỏ sót.'),
 M(7,'It is often more ______ to live in the downtown than in the suburbs.',['quite','peaceful','convenient','silent'],'C','tv','convenient (câu 7)','Sống ở trung tâm thường <b>convenient</b> (tiện lợi) hơn ngoại ô. quite là trạng từ; peaceful, silent (yên tĩnh) không đúng với khu trung tâm.'),
 M(8,'They\'re not sure ______ to contact for support with the community event.',['what','who','why','which'],'B','np','từ để hỏi + to V (câu 8)','Liên hệ <i>ai</i> → <b>who</b> + to V.'),
 M(9,'To most people, ______ living means both physical and mental health are functioning well together.',['healthy','unhealthy','health','healthily'],'A','tv','healthy living (câu 9)','Trước danh từ "living" cần tính từ mang nghĩa tích cực → <b>healthy</b> living = lối sống lành mạnh.'),
 M(10,'James and Nga are cleaning up the school yard.<br><b>Nga:</b> "Could you give me a hand with these rubbish bins, James?"<br><b>James:</b> "______"',['Certainly. Where do you want to put them?','Yes, go ahead.','Sure. I don\'t like them much.','I couldn\'t. They\'re over there.'],'A','gt','đáp lời nhờ giúp đỡ (câu 10)','Nga nhờ giúp → James đồng ý và hỏi thêm: <b>Certainly. Where do you want to put them?</b> "Go ahead" dùng để cho phép; C, D không hợp lý.'),
 M(11,'If you ______ time for relaxation, you will avoid feeling overwhelmed.',['will make','make','should make','must make'],'B','np','câu điều kiện loại 1 (câu 11)','Điều kiện loại 1: If + hiện tại đơn (<b>make</b>), will + V.'),
 M(12,'______ the traffic is, ______ the commute becomes for workers.',['The more smooth / the easier','The smoother / the better','The smooth / the good','The most smooth / the best'],'B','np','so sánh kép (câu 12)','So sánh kép: <b>The smoother</b> ..., <b>the better</b> ... smooth 1 âm tiết → smoother (không dùng more smooth).')
]));
d2.push(S('d2a',D2,
 'Thông báo','Đọc điền từ','Đọc thông báo và chọn đáp án đúng cho mỗi chỗ trống (13–16).','rd',[
 M(13,'Chỗ trống (13)',['excited','excitement','exciting','excite'],'A','np','tính từ -ed/-ing (câu 13)','be <b>excited</b> to V = hào hứng làm gì (cảm xúc của người).'),
 M(14,'Chỗ trống (14)',['an','a','the','Ø'],'B','np','mạo từ (câu 14)','<b>a</b> + danh từ đếm được số ít, "wonderful" bắt đầu bằng phụ âm.'),
 M(15,'Chỗ trống (15)',['or','but','and','so'],'A','np','liên từ (câu 15)','Liệt kê các lựa chọn: singing, dancing, <b>or</b> playing an instrument.'),
 M(16,'Chỗ trống (16)',['accepted','forbidden','necessity','optionally'],'A','rd','đọc điền từ – câu 16','donations are <b>accepted</b> = tiền ủng hộ được nhận (bị động be + V3). forbidden = bị cấm (sai nghĩa).')
],[{from:13,to:16,title:'Announcement: School Talent Show',html:'<p>Dear Students and Parents,</p><p>We are '+B(13)+' to announce that our annual School Talent Show will take place on October 10th in the main hall. This is '+B(14)+' wonderful opportunity for students to showcase their talents, whether it\'s singing, dancing, '+B(15)+' playing an instrument.</p><p>The show will begin at 6 PM, and we encourage everyone to come and support our talented students. Admission is free, but donations are '+B(16)+' to support future school events.</p><p>Sincerely,</p>'}]));
d2.push(S('d2l',D2,
 'Sắp xếp thư','Viết','Câu 17: chọn thứ tự đúng của các câu để tạo thành lá thư. Câu 18: chọn câu kết thư phù hợp nhất.','wr',[
 M(17,'Chọn thứ tự đúng của a, b, c:',['a-b-c','c-a-b','a-c-b','c-b-a'],'D','wr','sắp xếp thư (câu 17)','Từ nối chỉ thứ tự: <b>Firstly</b> (c) → <b>In addition</b> (b) → <b>Last but not least</b> (a).'),
 M(18,'Chọn câu kết thư phù hợp nhất:',['Thank you for your attention to this important matter.','If you are interested in participating, please contact us for more details.','We hope everyone enjoys the new playground equipment.','This concludes our monthly financial report.'],'B','wr','câu kết thư (câu 18)','Thư mời tham gia dự án → kết bằng lời mời liên hệ: <b>If you are interested in participating, please contact us for more details.</b> C, D không liên quan.')
],[{from:17,to:18,title:'Dear Community Members,',html:'<p>We would like to inform you about an exciting new community project in our neighborhood that aims to bring people together and make our surroundings greener and cleaner.</p><p>_______________________</p><p>a. Last but not least, volunteers are needed to help with planting, watering, and regular maintenance throughout the year.</p><p>b. In addition, the garden will be located behind the local library, and the first planting day is scheduled for Saturday, August 14th. We hope many families and young people will join us on this meaningful day.</p><p>c. Firstly, we are excited to announce a new community garden project starting next month, which will provide a relaxing space for everyone to enjoy nature and learn about plants.</p>'}]));
d2.push(S('d2r1',D2,
 'Đọc điền từ','Đọc hiểu','Đọc đoạn văn và chọn đáp án đúng cho mỗi chỗ trống (19–24).','rd',[
 M(19,'Chỗ trống (19)',['the','a','an','Ø'],'B','np','mạo từ (câu 19)','make our town <b>a</b> cleaner ... place: "place" là danh từ đếm được số ít, "cleaner" bắt đầu bằng phụ âm.'),
 M(20,'Chỗ trống (20)',['but','and','but also','nor'],'C','np','not only ... but also (câu 20)','Cấu trúc <b>not only ... but also</b> = không những ... mà còn.'),
 M(21,'Chỗ trống (21)',['collect','donate','exchange','deliver'],'B','tv','donate (câu 21)','<b>donate</b> = quyên góp quần áo, đồ chơi, sách cho trẻ em vùng khó khăn. collect (thu gom) cũng hợp lý nên được chấp nhận.','A'),
 M(22,'Chỗ trống (22)',['green space','community house','public park','sports club'],'A','rd','đọc điền từ – câu 22','Dự án khuyến khích trồng thêm cây và hoa → <b>green space</b> (không gian xanh).'),
 M(23,'Chỗ trống (23)',['happiness','success','surprise','experience'],'A','rd','đọc điền từ – câu 23','bring greater <b>happiness</b> to our hometown = mang lại niềm vui cho quê hương; câu sau: "Everyone feels happy...".'),
 M(24,'Chỗ trống (24)',['for','on','in','to'],'D','np','contribute to (câu 24)','<b>contribute to</b> + V-ing = góp phần vào việc gì.')
],[{from:19,to:24,title:'Our Community Projects',html:'<p>Our community always tries to make our town '+B(19)+' cleaner and more beautiful place to live. Every year, volunteers organize charity sales and clean-up campaigns to support local families in need and protect the environment. These meaningful activities not only help people who are less fortunate '+B(20)+' bring neighbours closer together.</p><p>Besides these events, we often '+B(21)+' used clothes, toys, and books for children from disadvantaged areas. Last year, our charity fair was very successful and helped more than one hundred students. This year, we are planning to start a new '+B(22)+' project in the park near the river. The aim is to encourage residents to plant more trees and flowers, creating a fresh and happy environment for everyone.</p><p>Local schools are also taking part in the project by designing posters and holding contests about environmental protection. We hope that these activities will make our community greener, cleaner, and more beautiful. Working together will surely bring greater '+B(23)+' to our hometown and inspire others to do the same. Everyone feels happy when they contribute '+B(24)+' building a better community because it creates a sense of togetherness among people.</p>'}]));
d2.push(S('d2w',D2,
 'Câu đồng nghĩa – Dựng câu','Viết','Câu 25–26: chọn câu gần nghĩa nhất với câu gốc. Câu 27–28: chọn câu được viết đúng từ các từ gợi ý.','wr',[
 M(25,'We had no food left; nevertheless, we continued to walk.',['We had lost our food; nevertheless, we continued to walk.','We had run out of food; nevertheless, we continued to walk.','We had run with our food; nevertheless, we continued to walk.','We couldn\'t buy more food; nevertheless, we continued to walk.'],'B','wr','câu đồng nghĩa (câu 25)','have no food left = <b>run out of food</b> (hết thức ăn).'),
 M(26,'I don\'t know how I can get to the swimming pool.',['I don\'t know how I to get to the swimming pool.','I don\'t know how should I go to the swimming pool.','I don\'t know how to get to the swimming pool.','I find which is the nearest swimming pool.'],'C','np','từ để hỏi + to V (câu 26)','how I can get = <b>how to get</b> (từ để hỏi + to V).'),
 M(27,'you/ want/ take part/ contest/ you/ fill/ this form.',['If you want take part contest, you must filling this form.','You must take part in the contest if you want fill this form.','If you want to taking part in the contest, you must fill this form.','If you want to take part in the contest, you must fill in this form.'],'D','wr','dựng câu (câu 27)','want <b>to</b> V; take part <b>in</b>; must + V nguyên mẫu; fill <b>in</b> a form.'),
 M(28,'There/ be/ many tall buildings/ city/ so/ it/ crowded/ busy.',['There are many tall buildings in the city, so it is very crowded and busy.','There are many tall buildings in the city, because it is very crowded and busy.','There are many tall buildings in the city, but it is very crowded and busy.','There are many tall buildings in the city, although it is very crowded and busy.'],'A','wr','dựng câu (câu 28)','Gợi ý có "so" (vì vậy, chỉ kết quả) → A.')
]));
d2.push(S('d2s',D2,
 'Biển báo','Đọc hiểu','Đọc biển báo/thông báo và chọn đáp án đúng.','rd',[
 M(29,'What does the sign say?<br><img src="bien-bao-camera.png" alt="Biển báo: SECURITY CAMERA IN USE – WARNING" style="max-width:260px;width:100%;margin-top:8px;border-radius:8px">',['Security cameras are not being used in this area.','Security cameras are watching and recording in this area.','There are no security cameras around this building.','Security cameras are only active during the night.'],'B','rd','biển báo (câu 29)','"SECURITY CAMERA IN USE" = camera an ninh <b>đang hoạt động</b>, quan sát và ghi hình khu vực này.'),
 M(30,'What does the sign say?<br><b>"Please recycle paper and plastic in the bins provided."</b>',['Throw paper and plastic in any trash can.','You should recycle paper and plastic in special bins.','Do not recycle paper and plastic.','Use the recycling bins only for glass.'],'B','rd','biển báo (câu 30)','Yêu cầu tái chế giấy và nhựa vào thùng được đặt sẵn → nên tái chế trong <b>thùng riêng</b>.')
]));
var TEEN='<p>Teenagers can maintain a balanced lifestyle by exercising regularly, eating healthily, and taking enough rest. Physical activity is essential for keeping the body fit and strong. It may include cycling, swimming, playing sports, or simply walking to school. Teens are advised to do at least two types of physical activity several times a week to stay energetic and confident.</p><p>Healthy eating also plays a <b>vital</b> role in a teenager\'s life. The body needs food to produce energy and support brain development. A balanced diet should contain the five main food groups: fruit, vegetables, meat, dairy products, and a small amount of sugary foods. Eating properly not only helps maintain a healthy weight but also improves concentration and overall fitness.</p><p>Finally, rest and sleep are both important for good health. Sleep allows the body to repair and recharge itself, while rest helps the mind relax. Activities such as reading, listening to music, or going on a trip can help teenagers <b>relieve</b> stress and regain positive energy for study and daily life.</p>';
d2.push(S('d2r2',D2,
 'Đọc hiểu','Đọc hiểu','Đọc đoạn văn và chọn đáp án đúng cho câu 31–36.','rd',[
 M(31,'What is the main idea of the passage?',['Teenagers should focus only on studying.','Teenagers need exercise, healthy food, and rest for a balanced life.','Eating sugary food helps teenagers relax.','Sleep is more important than exercise.'],'B','rd','ý chính (câu 31)','Câu đầu bài nêu ý chính: exercising regularly, eating healthily, and taking enough rest.'),
 M(32,'Which of the following activities is mentioned as a form of exercise?',['Watching TV.','Cycling.','Reading books.','Playing video games.'],'B','rd','chi tiết (câu 32)','"It may include <b>cycling</b>, swimming, playing sports..."'),
 M(33,'What are the five main food groups mentioned in the passage?',['Fruit, vegetables, meat, dairy, and sugary foods.','Bread, fruit, dairy, fish, and coffee.','Vegetables, candy, meat, milk, and chips.','Fruit, water, rice, meat, and oil.'],'A','rd','chi tiết (câu 33)','"fruit, vegetables, meat, dairy products, and a small amount of sugary foods".'),
 M(34,'According to the passage, why should teenagers rest?',['To relax their mind and relieve stress.','To save energy for the next day.','To have more time for homework.','To eat and drink more.'],'A','rd','chi tiết (câu 34)','"rest helps the mind relax ... relieve stress".'),
 M(35,'The word "vital" in paragraph 2 is CLOSEST in meaning to ______.',['important','unusual','easy','expensive'],'A','tv','vital = important (câu 35)','vital = <b>important</b> (quan trọng, thiết yếu).'),
 M(36,'The word "relieve" in paragraph 3 is OPPOSITE in meaning to ______.',['reduce','decrease','increase','avoid'],'C','tv','relieve ≠ increase (câu 36)','relieve = làm giảm bớt ≠ <b>increase</b> = tăng lên.')
],[{from:31,to:36,title:'A balanced lifestyle',html:TEEN}]));
var HELPER=['despite the weather','He is a delivery person in my neighborhood','I really appreciate his manner','He sometimes asks me about my study'];
d2.push(S('d2c',D2,
 'Điền câu vào đoạn','Đọc hiểu','Chọn cụm từ/câu phù hợp nhất cho mỗi chỗ trống (37–40). Mỗi phương án dùng một lần.','rd',[
 M(37,'Chỗ trống (37)',HELPER,'B','rd','điền câu – câu 37','Câu mở đầu giới thiệu Mr. Nam là ai: <b>He is a delivery person in my neighborhood.</b>'),
 M(38,'Chỗ trống (38)',HELPER,'D','rd','điền câu – câu 38','Tiếp ý "friendly": chú còn <b>hỏi han việc học của em</b>.'),
 M(39,'Chỗ trống (39)',HELPER,'A','rd','điền câu – câu 39','Chăm chỉ, có trách nhiệm: giao hàng <b>despite the weather</b> (bất kể thời tiết).'),
 M(40,'Chỗ trống (40)',HELPER,'C','rd','điền câu – câu 40','Sau ví dụ phải quay lại giao lần hai → <b>I really appreciate his manner</b> (em rất trân trọng cách làm việc của chú).')
],[{from:37,to:40,title:'My favorite community helper',html:'<p>My favorite community helper is Mr. Nam. '+B(37)+'. He is a friendly person. Whenever he delivers something to us, he smiles happily. '+B(38)+'. In addition, he is hard-working and responsible. He delivers goods to my family and other families in the neighborhood '+B(39)+'. Sometimes, he has to return twice to deliver us a parcel because we are not at home. '+B(40)+'. In general, Mr. Nam is a very dedicated community helper who makes our life easy and comfortable.</p>'}]));

return {secs:secs.concat(d2),vocab:{words:[],phrases:[]},tips:{
 pa:'Ôn cách đọc đuôi -ed, các âm a/ow và quy tắc trọng âm từ 2–4 âm tiết.',
 tv:'Ôn từ vựng Unit 1–3 (local community, city life, healthy living), cụm động từ và từ loại.',
 np:'Ôn từ để hỏi + to V, so sánh kép, câu điều kiện loại 1, should/shouldn\'t, mạo từ.',
 gt:'Ôn mẫu câu nhờ giúp đỡ, xin phép và cách đáp lại.',
 rd:'Đọc cả câu chứa chỗ trống, gạch chân từ khoá trong câu hỏi rồi tìm trong bài.',
 wr:'Ôn từ nối (Firstly, In addition, Last but not least) và các mẫu viết lại câu.'}};
})()
