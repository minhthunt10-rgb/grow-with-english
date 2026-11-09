/* Bài tập TỪ VỰNG trong SGK + SBT Tiếng Anh 7 Global Success – Unit 4, Unit 5.
   Nguồn: SGK tr. 40–48, 50–58; SBT tr. 28–30, 36–37 (chỉ lấy bài từ vựng, bỏ phát âm / ngữ pháp / viết câu).
   Kiểu câu: fill (gõ, có thể có khung từ), mcq (chọn 1), multi (chọn nhiều), qty (gõ số lượng – chấm mềm), ws (tìm chữ), cw (ô chữ). */
var BAI = [
/* ===================== BÀI 1 · UNIT 4 · SGK ===================== */
{t:'Unit 4 · Music and Arts · SGK', sub:'Getting Started · A Closer Look 1 · Looking Back', parts:[
 {name:'Hoàn thành câu với từ trong khung', src:'SGK tr. 41 · Getting Started, bài 3', kind:'fill',
  lead:'Chạm vào ô trống rồi chạm từ trong khung (hoặc tự gõ). Mỗi từ dùng một lần.',
  bank:['photos','like','different from','art gallery','musical instruments'], qs:[
  {s:'Nick wants to go to a(n) ___ next weekend.', a:['art gallery'], vi:'Nick muốn đi tới một phòng trưng bày nghệ thuật vào cuối tuần tới.'},
  {s:'You can use your smartphone to take ___.', a:['photos'], vi:'Bạn có thể dùng điện thoại thông minh để chụp ảnh. (take photos: chụp ảnh)'},
  {s:'This photo is very bright. It is ___ that dark one.', a:['different from'], vi:'Bức ảnh này rất sáng. Nó khác với bức ảnh tối kia. (different from: khác với)'},
  {s:'Nick and Trang agree that taking photos is not ___ painting.', a:['like'], vi:'Nick và Trang đồng ý rằng chụp ảnh không giống như vẽ tranh. (like: giống như)'},
  {s:'My friend David is very talented. He plays three ___.', a:['musical instruments'], vi:'Bạn mình David rất tài năng. Bạn ấy chơi được ba loại nhạc cụ.'}
 ]},
 {name:'Viết từ đúng dưới mỗi tranh', src:'SGK tr. 41 · Getting Started, bài 4', kind:'fill',
  lead:'Nhìn tranh, chọn từ trong khung (hoặc tự gõ).',
  bank:['camera','water puppet show','art gallery','painting','musical instruments','paintbrush'], qs:[
  {img:'u4-sgk4-1.jpg', a:['paintbrush','a paintbrush'], vi:'paintbrush: cọ vẽ'},
  {img:'u4-sgk4-2.jpg', a:['camera'], vi:'camera: máy ảnh'},
  {img:'u4-sgk4-3.jpg', a:['painting'], vi:'painting: bức tranh (vẽ bằng màu)'},
  {img:'u4-sgk4-4.jpg', a:['musical instruments','musical instrument'], vi:'musical instruments: nhạc cụ'},
  {img:'u4-sgk4-5.jpg', a:['water puppet show','water puppetry'], vi:'water puppet show: buổi biểu diễn múa rối nước'},
  {img:'u4-sgk4-6.jpg', a:['art gallery'], vi:'art gallery: phòng trưng bày nghệ thuật'}
 ]},
 {name:'Xếp từ vào cột Người hay Nơi chốn', src:'SGK tr. 42 · A Closer Look 1, bài 1', kind:'mcq', inline:true,
  lead:'Mỗi từ chỉ <b>người (People)</b> hay <b>nơi chốn (Places)</b>? Chạm cột đúng.', qs:[
  {p:'art gallery', o:['People','Places'], a:1, vi:'art gallery: phòng trưng bày nghệ thuật → nơi chốn'},
  {p:'composer', o:['People','Places'], a:0, vi:'composer: nhà soạn nhạc → người'},
  {p:'concert hall', o:['People','Places'], a:1, vi:'concert hall: phòng hoà nhạc → nơi chốn'},
  {p:'musician', o:['People','Places'], a:0, vi:'musician: nhạc sĩ, nhạc công → người'},
  {p:'actress', o:['People','Places'], a:0, vi:'actress: nữ diễn viên → người'},
  {p:'painter', o:['People','Places'], a:0, vi:'painter: hoạ sĩ → người'},
  {p:'artist', o:['People','Places'], a:0, vi:'artist: nghệ sĩ → người'},
  {p:'puppet theatre', o:['People','Places'], a:1, vi:'puppet theatre: nhà hát múa rối → nơi chốn'}
 ]},
 {name:'Ghép động từ với từ / cụm từ', src:'SGK tr. 42 · A Closer Look 1, bài 2', kind:'multi',
  lead:'Mỗi động từ ở cột A đi với từ nào ở cột B? <b>Một động từ có thể đi với nhiều hơn một từ</b> – chạm chọn tất cả các từ đúng.', qs:[
  {p:'compose', o:['a show','a photo','the guitar','a portrait','music'], a:[4], vi:'compose music: soạn nhạc'},
  {p:'paint', o:['a show','a photo','the guitar','a portrait','music'], a:[3], vi:'paint a portrait: vẽ một bức chân dung'},
  {p:'perform', o:['a show','a photo','the guitar','a portrait','music'], a:[0,4], vi:'perform a show: biểu diễn một chương trình · perform music: biểu diễn âm nhạc'},
  {p:'play', o:['a show','a photo','the guitar','a portrait','music'], a:[2,4], vi:'play the guitar: chơi đàn ghi-ta · play music: chơi nhạc'},
  {p:'take', o:['a show','a photo','the guitar','a portrait','music'], a:[1], vi:'take a photo: chụp một bức ảnh'}
 ]},
 {name:'Chọn từ đúng để hoàn thành câu', src:'SGK tr. 42 · A Closer Look 1, bài 3', kind:'mcq', inline:true,
  lead:'Chạm vào từ / cụm từ đúng.', qs:[
  {p:'The little girl’s ___ of her kitten shows a lot of talent.', o:['drawing','photography'], a:0, vi:'Bức vẽ chú mèo con của cô bé cho thấy nhiều tài năng. (drawing: bức vẽ · photography: nhiếp ảnh)'},
  {p:'Van Cao was a great Vietnamese ___. He was also a painter and poet.', o:['scientist','composer'], a:1, vi:'Văn Cao là một nhạc sĩ vĩ đại của Việt Nam. Ông cũng là hoạ sĩ và nhà thơ.'},
  {p:'The Louvre in Paris is the world’s largest ___.', o:['museum','puppet theater'], a:0, vi:'Bảo tàng Louvre ở Paris là bảo tàng lớn nhất thế giới.'},
  {p:'The orchestra will perform its final ___ of the season tomorrow.', o:['portrait','concert'], a:1, vi:'Dàn nhạc sẽ biểu diễn buổi hoà nhạc cuối cùng của mùa diễn vào ngày mai.'},
  {p:'Did you see the film <i>Amazon Jungle</i> on TV last night? The ___ was excellent.', o:['photography','drawing'], a:0, vi:'Tối qua bạn có xem phim “Rừng rậm Amazon” trên TV không? Phần hình ảnh (quay phim) rất xuất sắc.'}
 ]},
 {name:'Từ / cụm từ đi với động từ', src:'SGK tr. 48 · Looking Back, bài 1', kind:'multi',
  lead:'Ví dụ: play – <i>the piano, the violin, the cello</i>. Chọn <b>tất cả</b> từ / cụm từ đi được với mỗi động từ (mỗi câu có 3 đáp án đúng).', qs:[
  {p:'draw', o:['a picture','a song','a portrait','a cartoon','music','a poem'], a:[0,2,3], vi:'draw a picture / a portrait / a cartoon: vẽ một bức tranh / chân dung / tranh hoạt hình'},
  {p:'perform', o:['a photo','a play','a show','a letter','music','a museum'], a:[1,2,4], vi:'perform a play / a show / music: biểu diễn một vở kịch / một chương trình / âm nhạc'},
  {p:'write', o:['a song','a poem','the guitar','a letter','a photo','a museum'], a:[0,1,3], vi:'write a song / a poem / a letter: viết một bài hát / bài thơ / lá thư'},
  {p:'watch', o:['a film','a poem','a play','a puppet show','a paintbrush','the guitar'], a:[0,2,3], vi:'watch a film / a play / a puppet show: xem phim / xem kịch / xem múa rối'}
 ]},
 {name:'Điền từ vào đoạn văn', src:'SGK tr. 48 · Looking Back, bài 2', kind:'fill',
  lead:'Đoạn văn về Bảo tàng Louvre. Điền một từ / cụm từ trong khung vào mỗi chỗ trống.',
  bank:['exhibition','art collections','paintings','works of art','visitors'], qs:[
  {s:'The Louvre Museum is the world’s largest art museum. It is in Paris, France. It has one of the most impressive (1) ___ in history.', a:['art collections'], vi:'Nó có một trong những bộ sưu tập nghệ thuật ấn tượng nhất trong lịch sử.'},
  {s:'The museum opened on 10 August 1793 with a(n) (2) ___ of 537 paintings.', a:['exhibition'], vi:'Bảo tàng mở cửa ngày 10/8/1793 với một cuộc triển lãm 537 bức tranh.'},
  {s:'The Louvre Museum now contains more than 380,000 objects, and displays 35,000 (3) ___.', a:['works of art'], vi:'Hiện nay bảo tàng có hơn 380.000 hiện vật và trưng bày 35.000 tác phẩm nghệ thuật.'},
  {s:'It exhibits sculptures, objects of art, (4) ___, drawings, and other valuable works.', a:['paintings'], vi:'Bảo tàng trưng bày tượng điêu khắc, đồ vật nghệ thuật, tranh, bản vẽ và những tác phẩm quý khác.'},
  {s:'It is the world’s most visited museum. About 25,000 (5) ___ come to see it per day. Most of them are foreign tourists.', a:['visitors'], vi:'Khoảng 25.000 khách tham quan đến xem mỗi ngày, phần lớn là du khách nước ngoài.'}
 ]}
]},

/* ===================== BÀI 2 · UNIT 4 · SBT ===================== */
{t:'Unit 4 · Music and Arts · SBT', sub:'Vocabulary: bài 1–6 (SBT tr. 28–30)', parts:[
 {name:'Tìm từ trong bảng chữ cái', src:'SBT tr. 28 · B1', kind:'ws',
  lead:'Tìm 10 từ trong bảng. Chạm <b>chữ cái đầu</b> rồi chạm <b>chữ cái cuối</b> của từ (từ có thể nằm ngang, dọc hoặc chéo).',
  grid:['WAGALLERYB','MDRFPUPPET','UCCTRPIANO','SAOGIHELPR','IMNAQSTZEW','CECCBCTGFG','IRETHJNKLN','AAROTIOYQX','NSTRSMNVTZ','INSTRUMENT'],
  qs:[
  {w:'singer', at:[8,4,3,9], vi:'singer: ca sĩ'},
  {w:'piano', at:[2,5,2,9], vi:'piano: đàn piano'},
  {w:'gallery', at:[0,2,0,8], vi:'gallery: phòng trưng bày'},
  {w:'instrument', at:[9,0,9,9], vi:'instrument: nhạc cụ'},
  {w:'musician', at:[1,0,8,0], vi:'musician: nhạc sĩ, nhạc công'},
  {w:'camera', at:[2,1,7,1], vi:'camera: máy ảnh'},
  {w:'actor', at:[4,3,8,3], vi:'actor: diễn viên (nam)'},
  {w:'puppet', at:[1,4,1,9], vi:'puppet: con rối'},
  {w:'artist', at:[0,1,5,6], vi:'artist: nghệ sĩ, hoạ sĩ'},
  {w:'concert', at:[2,2,8,2], vi:'concert: buổi hoà nhạc'}
 ]},
 {name:'Điền từ / cụm từ trong khung', src:'SBT tr. 29 · B2', kind:'fill',
  lead:'Mỗi từ / cụm từ trong khung dùng một lần.',
  bank:['musical instruments','prefer','artistic','art museum','folk music','rock music'], qs:[
  {s:'I’ve heard that the ___ in Pho Duc Chinh Street, Ho Chi Minh City is a very interesting one.', a:['art museum'], vi:'Mình nghe nói bảo tàng mỹ thuật ở đường Phó Đức Chính, TP. Hồ Chí Minh rất thú vị.'},
  {s:'Many teenagers prefer ___ because it is lively and exciting.', a:['rock music'], vi:'Nhiều bạn tuổi teen thích nhạc rock hơn vì nó sôi động và hào hứng.'},
  {s:'– Do you like ___? – Yes. It’s traditional and emotional.', a:['folk music'], vi:'– Bạn có thích nhạc dân gian không? – Có. Nó mang tính truyền thống và giàu cảm xúc.'},
  {s:'Which do you ___: watching pop music in person or live on TV?', a:['prefer'], vi:'Bạn thích cái nào hơn: xem nhạc pop trực tiếp hay xem truyền hình trực tiếp trên TV?'},
  {s:'Traditional ___ of Viet Nam include the flute, the monochord (Dan Bau), the T’rung, drums, and others.', a:['musical instruments'], vi:'Nhạc cụ truyền thống của Việt Nam gồm sáo, đàn bầu, đàn T’rưng, trống, …'},
  {s:'I’m not as ___ as my brother. He plays the guitar very well.', a:['artistic'], vi:'Mình không có năng khiếu nghệ thuật bằng anh trai. Anh ấy chơi ghi-ta rất giỏi.'}
 ]},
 {name:'Nối người nổi tiếng với nghề nghiệp', src:'SBT tr. 29 · B3', kind:'mcq', inline:true,
  lead:'Mỗi người ở cột A làm nghề gì ở cột B?', qs:[
  {p:'Nguyen Du', o:['painter','singer','actor','poet','composer'], a:3, vi:'Nguyễn Du – nhà thơ (poet), tác giả Truyện Kiều.'},
  {p:'Bui Xuan Phai', o:['painter','singer','actor','poet','composer'], a:0, vi:'Bùi Xuân Phái – hoạ sĩ (painter), nổi tiếng với tranh phố cổ Hà Nội.'},
  {p:'Thanh Hoa', o:['painter','singer','actor','poet','composer'], a:1, vi:'Thanh Hoa – ca sĩ (singer).'},
  {p:'Pham Tuyen', o:['painter','singer','actor','poet','composer'], a:4, vi:'Phạm Tuyên – nhạc sĩ, nhà soạn nhạc (composer).'},
  {p:'Tom Cruise', o:['painter','singer','actor','poet','composer'], a:2, vi:'Tom Cruise – diễn viên (actor).'}
 ]},
 {name:'Chọn đáp án đúng A, B, C hoặc D', src:'SBT tr. 29 · B4', kind:'mcq', qs:[
  {p:'My uncle’s house is full of interesting pieces of art. It’s ___ a museum.', o:['similar','like','as','than'], a:1, vi:'Nhà chú mình đầy những tác phẩm nghệ thuật thú vị. Nó giống như một bảo tàng. (be like + danh từ: giống như)'},
  {p:'This film is not ___ the original story.', o:['as interesting as','as interesting than','more interesting like','as interesting like'], a:0, vi:'Bộ phim này không hay bằng câu chuyện gốc. (not as + tính từ + as: không … bằng)'},
  {p:'The audience ___ wildly when the band appeared on stage.', o:['smiled','sounded','applauded','cried'], a:2, vi:'Khán giả vỗ tay cuồng nhiệt khi ban nhạc xuất hiện trên sân khấu. (applaud: vỗ tay)'},
  {p:'To ___ successfully, they have to practise the play many times.', o:['perform','play','sing','dance'], a:0, vi:'Để biểu diễn thành công, họ phải tập vở kịch nhiều lần. (perform: biểu diễn)'},
  {p:'Turn the TV off. The show is ___.', o:['exciting','peaceful','tiring','boring'], a:3, vi:'Tắt TV đi. Chương trình chán quá. (boring: nhàm chán)'},
  {p:'Mozart was one of the most famous ___ of classical music.', o:['actors','composers','artists','makers'], a:1, vi:'Mozart là một trong những nhà soạn nhạc cổ điển nổi tiếng nhất. (composer: nhà soạn nhạc)'},
  {p:'– Did you enjoy the play? – Yes. It was ___ from the previous version.', o:['like','similar','different','same'], a:2, vi:'– Bạn có thích vở kịch không? – Có. Nó khác với phiên bản trước. (different from: khác với)'},
  {p:'Because I was sitting in the back row of the theatre, I couldn’t see the ___.', o:['painters','musicians','composers','writers'], a:1, vi:'Vì ngồi ở hàng ghế cuối nhà hát nên mình không nhìn thấy các nhạc công. (musician: nhạc công, nhạc sĩ)'}
 ]},
 {name:'Điền một từ vào chỗ trống', src:'SBT tr. 30 · B5', kind:'fill',
  lead:'Gõ <b>một từ</b> phù hợp vào mỗi chỗ trống.', qs:[
  {s:'The leading ___ had to change her costume more than 10 times during the play.', a:['actress'], vi:'Nữ diễn viên chính phải thay trang phục hơn 10 lần trong vở kịch. (“her” → nữ: actress)'},
  {s:'My sister’s personality is very different ___ mine.', a:['from'], vi:'Tính cách của chị mình rất khác với mình. (different from: khác với)'},
  {s:'– Do you know who ___ <i>The Last Supper</i>? – Yes. It’s Leonardo da Vinci.', a:['painted'], vi:'– Bạn có biết ai đã vẽ bức “Bữa tối cuối cùng” không? – Có, đó là Leonardo da Vinci. (paint → painted)'},
  {s:'Her ___ talent showed itself at an early age in her drawings of animals, which were wonderful for a child of 6.', a:['artistic'], vi:'Năng khiếu nghệ thuật của cô ấy bộc lộ từ nhỏ qua những bức vẽ con vật, rất tuyệt vời với một đứa trẻ 6 tuổi.'},
  {s:'The children assembled on stage to ___ the national anthem.', a:['sing'], vi:'Các em nhỏ tập trung trên sân khấu để hát quốc ca. (sing the national anthem: hát quốc ca)'},
  {s:'– What musical ___ do you like best? – The Beatles.', a:['group','band'], vi:'– Bạn thích nhóm nhạc nào nhất? – The Beatles. (musical group / band: nhóm nhạc, ban nhạc)'},
  {s:'Paintings and drawings are not the same thing. They are quite ___.', a:['different'], vi:'Tranh màu và tranh vẽ chì không giống nhau. Chúng khá khác nhau.'},
  {s:'A ___ is a room or building which is used for showing works of art.', a:['gallery','museum'], vi:'Phòng trưng bày là căn phòng hoặc toà nhà dùng để trưng bày tác phẩm nghệ thuật. (gallery)'}
 ]},
 {name:'Điền một từ chỉ nhóm', src:'SBT tr. 30 · B6', kind:'fill',
  lead:'Ví dụ: Alison has dogs, cats, goldfish, and many other <u>pets</u>. Gõ <b>một từ</b> chỉ nhóm chung.', qs:[
  {s:'My sister likes to watch <i>Mickey Mouse</i>, <i>Donald Duck</i>, and other ___.', a:['cartoons'], vi:'Em gái mình thích xem Chuột Mickey, Vịt Donald và các phim hoạt hình khác. (cartoon: phim hoạt hình)'},
  {s:'I like science fiction, but I never watch thriller or horror ___.', a:['films','movies'], vi:'Mình thích phim khoa học viễn tưởng nhưng không bao giờ xem phim giật gân hay phim kinh dị.'},
  {s:'Michael Jackson, Bob Dylan, and Britney Spears are among the ___ I like best.', a:['singers'], vi:'Michael Jackson, Bob Dylan và Britney Spears là những ca sĩ mình thích nhất.'},
  {s:'Old people generally enjoy traditional, classical, or country ___.', a:['music'], vi:'Người lớn tuổi thường thích nhạc truyền thống, nhạc cổ điển hoặc nhạc đồng quê.'},
  {s:'Chris is a very good pianist and can also play a number of other musical ___.', a:['instruments'], vi:'Chris chơi piano rất giỏi và còn chơi được nhiều nhạc cụ khác.'}
 ]}
]},

/* ===================== BÀI 3 · UNIT 5 · SGK ===================== */
{t:'Unit 5 · Food and Drink · SGK', sub:'Getting Started · A Closer Look 1 · Looking Back', parts:[
 {name:'Đồ ăn hay đồ uống?', src:'SGK tr. 51 · Getting Started, bài 3', kind:'mcq', inline:true,
  lead:'Các từ lấy từ bài hội thoại “At a Vietnamese restaurant”. Ví dụ: pork → <b>Food</b>, juice → <b>Drink</b>. Chạm cột đúng.', qs:[
  {p:'rice', o:['Food','Drink'], a:0, vi:'rice: cơm, gạo'},
  {p:'lemonade', o:['Food','Drink'], a:1, vi:'lemonade: nước chanh'},
  {p:'roast chicken', o:['Food','Drink'], a:0, vi:'roast chicken: gà quay'},
  {p:'green tea', o:['Food','Drink'], a:1, vi:'green tea: trà xanh'},
  {p:'fried vegetables', o:['Food','Drink'], a:0, vi:'fried vegetables: rau xào'},
  {p:'mineral water', o:['Food','Drink'], a:1, vi:'mineral water: nước khoáng'},
  {p:'fried tofu', o:['Food','Drink'], a:0, vi:'fried tofu: đậu phụ rán'},
  {p:'winter melon juice', o:['Food','Drink'], a:1, vi:'winter melon juice: nước bí đao'},
  {p:'spring rolls', o:['Food','Drink'], a:0, vi:'spring rolls: nem rán, chả giò'},
  {p:'canh chua', o:['Food','Drink'], a:0, vi:'canh chua: món canh chua (một loại soup – món ăn)'},
  {p:'shrimp', o:['Food','Drink'], a:0, vi:'shrimp: tôm'}
 ]},
 {name:'Nối tranh với cụm từ chỉ số lượng', src:'SGK tr. 52 · A Closer Look 1, bài 1', kind:'mcq', inline:true,
  lead:'Nhìn tranh, chọn cụm từ đúng (mỗi cụm dùng một lần).', qs:[
  {img:'u5-sgk1-1.jpg', o:['a kilo (kg) of beef','a teaspoon (tsp) of salt','a litre (l) of water','a tablespoon (tbsp) of sugar','200 grams (g) of flour','400 millilitres (ml) of milk'], a:1, vi:'a teaspoon (tsp) of salt: một thìa cà phê muối'},
  {img:'u5-sgk1-2.jpg', o:['a kilo (kg) of beef','a teaspoon (tsp) of salt','a litre (l) of water','a tablespoon (tbsp) of sugar','200 grams (g) of flour','400 millilitres (ml) of milk'], a:5, vi:'400 millilitres (ml) of milk: 400 mi-li-lít sữa'},
  {img:'u5-sgk1-3.jpg', o:['a kilo (kg) of beef','a teaspoon (tsp) of salt','a litre (l) of water','a tablespoon (tbsp) of sugar','200 grams (g) of flour','400 millilitres (ml) of milk'], a:0, vi:'a kilo (kg) of beef: một ki-lô-gam thịt bò'},
  {img:'u5-sgk1-4.jpg', o:['a kilo (kg) of beef','a teaspoon (tsp) of salt','a litre (l) of water','a tablespoon (tbsp) of sugar','200 grams (g) of flour','400 millilitres (ml) of milk'], a:2, vi:'a litre (l) of water: một lít nước'},
  {img:'u5-sgk1-5.jpg', o:['a kilo (kg) of beef','a teaspoon (tsp) of salt','a litre (l) of water','a tablespoon (tbsp) of sugar','200 grams (g) of flour','400 millilitres (ml) of milk'], a:3, vi:'a tablespoon (tbsp) of sugar: một thìa canh đường'},
  {img:'u5-sgk1-6.jpg', o:['a kilo (kg) of beef','a teaspoon (tsp) of salt','a litre (l) of water','a tablespoon (tbsp) of sugar','200 grams (g) of flour','400 millilitres (ml) of milk'], a:4, vi:'200 grams (g) of flour: 200 gam bột mì'}
 ]},
 {name:'Món ăn hay nguyên liệu?', src:'SGK tr. 52 · A Closer Look 1, bài 2', kind:'mcq', inline:true,
  lead:'Mỗi từ là <b>món ăn (Dishes)</b> hay <b>nguyên liệu (Ingredients)</b>?', qs:[
  {p:'spring rolls', o:['Dishes','Ingredients'], a:0, vi:'spring rolls: nem rán → món ăn'},
  {p:'omelette', o:['Dishes','Ingredients'], a:0, vi:'omelette: trứng tráng → món ăn'},
  {p:'butter', o:['Dishes','Ingredients'], a:1, vi:'butter: bơ → nguyên liệu'},
  {p:'onions', o:['Dishes','Ingredients'], a:1, vi:'onions: hành tây → nguyên liệu'},
  {p:'pancakes', o:['Dishes','Ingredients'], a:0, vi:'pancakes: bánh kếp → món ăn'},
  {p:'pepper', o:['Dishes','Ingredients'], a:1, vi:'pepper: hạt tiêu → nguyên liệu'}
 ]},
 {name:'Món ăn, nguyên liệu hay đơn vị đo?', src:'SGK tr. 58 · Looking Back, bài 1', kind:'mcq', inline:true,
  lead:'Ví dụ: pancakes → <b>Dishes</b>, flour → <b>Ingredients</b>, gram (g) → <b>Units of measurement</b>.', qs:[
  {p:'omelette', o:['Dishes','Ingredients','Units of measurement'], a:0, vi:'omelette: trứng tráng → món ăn'},
  {p:'kilo (kg)', o:['Dishes','Ingredients','Units of measurement'], a:2, vi:'kilo (kg): ki-lô-gam → đơn vị đo'},
  {p:'butter', o:['Dishes','Ingredients','Units of measurement'], a:1, vi:'butter: bơ → nguyên liệu'},
  {p:'beef noodle soup', o:['Dishes','Ingredients','Units of measurement'], a:0, vi:'beef noodle soup: phở bò → món ăn'},
  {p:'teaspoon (tsp)', o:['Dishes','Ingredients','Units of measurement'], a:2, vi:'teaspoon (tsp): thìa cà phê → đơn vị đo'},
  {p:'salt', o:['Dishes','Ingredients','Units of measurement'], a:1, vi:'salt: muối → nguyên liệu'},
  {p:'spring rolls', o:['Dishes','Ingredients','Units of measurement'], a:0, vi:'spring rolls: nem rán → món ăn'},
  {p:'litre (l)', o:['Dishes','Ingredients','Units of measurement'], a:2, vi:'litre (l): lít → đơn vị đo'},
  {p:'onions', o:['Dishes','Ingredients','Units of measurement'], a:1, vi:'onions: hành tây → nguyên liệu'},
  {p:'roast chicken', o:['Dishes','Ingredients','Units of measurement'], a:0, vi:'roast chicken: gà quay → món ăn'},
  {p:'millilitre (ml)', o:['Dishes','Ingredients','Units of measurement'], a:2, vi:'millilitre (ml): mi-li-lít → đơn vị đo'},
  {p:'sugar', o:['Dishes','Ingredients','Units of measurement'], a:1, vi:'sugar: đường → nguyên liệu'}
 ]},
 {name:'Đọc công thức, viết câu', src:'SGK tr. 58 · Looking Back, bài 2', kind:'qty',
  lead:'<b>Peter’s omelette</b> – Ingredients: eggs: 5 · tomatoes: 2 · cold water: 2 tbsp · butter: 40 g · onion: 5 g · salt: 1 tsp · pepper: 1 tsp.<br>Ví dụ: cold water: 2 tbsp → <i>We need two tablespoons of cold water.</i><br>Viết câu bắt đầu bằng <b>We need</b>. Số có thể viết bằng chữ hoặc bằng số (five / 5); đơn vị viết đầy đủ hoặc viết tắt (grams / g).', qs:[
  {p:'eggs: 5', a:['We need five eggs.'], vi:'Chúng ta cần năm quả trứng.'},
  {p:'tomatoes: 2', a:['We need two tomatoes.'], vi:'Chúng ta cần hai quả cà chua.'},
  {p:'butter: 40 g', a:['We need forty grams of butter.'], vi:'Chúng ta cần 40 gam bơ.'},
  {p:'onion: 5 g', a:['We need five grams of onion.','We need five grams of onions.'], vi:'Chúng ta cần 5 gam hành tây.'},
  {p:'salt: 1 tsp', a:['We need a teaspoon of salt.','We need one teaspoon of salt.'], vi:'Chúng ta cần một thìa cà phê muối.'},
  {p:'pepper: 1 tsp', a:['We need a teaspoon of pepper.','We need one teaspoon of pepper.'], vi:'Chúng ta cần một thìa cà phê hạt tiêu.'}
 ]}
]},

/* ===================== BÀI 4 · UNIT 5 · SBT ===================== */
{t:'Unit 5 · Food and Drink · SBT', sub:'Vocabulary: bài 1–4 (SBT tr. 36–37)', parts:[
 {name:'Viết tên đồ ăn, đồ uống dưới tranh', src:'SBT tr. 36 · B1', kind:'fill',
  lead:'Nhìn tranh và chữ cái đầu cho sẵn, gõ từ / cụm từ. Ví dụ: tofu.', qs:[
  {img:'u5-sbt1-1.jpg', h:'p…', a:['pancakes','pancake'], vi:'pancakes: bánh kếp'},
  {img:'u5-sbt1-2.jpg', h:'n…', a:['noodles'], vi:'noodles: mì, bún, miến (sợi)'},
  {img:'u5-sbt1-3.jpg', h:'g… t…', a:['green tea'], vi:'green tea: trà xanh'},
  {img:'u5-sbt1-4.jpg', h:'l…', a:['lemonade'], vi:'lemonade: nước chanh'},
  {img:'u5-sbt1-5.jpg', h:'p…', a:['pepper'], vi:'pepper: hạt tiêu'},
  {img:'u5-sbt1-6.jpg', h:'b… n… s…', a:['beef noodle soup'], vi:'beef noodle soup: phở bò'},
  {img:'u5-sbt1-7.jpg', h:'j…', a:['juice'], vi:'juice: nước ép hoa quả'},
  {img:'u5-sbt1-8.jpg', h:'s… r…', a:['spring rolls','spring roll'], vi:'spring rolls: nem rán, chả giò'}
 ]},
 {name:'Giải ô chữ', src:'SBT tr. 36 · B2', kind:'cw',
  lead:'Nhìn tranh, gõ tên đồ ăn / đồ uống vào từng hàng (hàng 1 đã làm mẫu: <b>sauce</b>). Các chữ ở <b>cột xanh</b> ghép thành một món ăn – gõ món đó ở câu cuối.',
  rows:[[1,4,'sauce'],[2,3,'cake'],[3,0,'lemonade'],[4,1,'noodles'],[5,4,'water'],[6,3,'fish'],[7,2,'rice'],[8,3,'cheese'],[9,2,'beef'],[10,1,'sausage']],
  qs:[
  {row:2, img:'u5-cw-2.jpg', a:['cake'], vi:'cake: bánh ngọt'},
  {row:3, img:'u5-cw-3.jpg', a:['lemonade'], vi:'lemonade: nước chanh'},
  {row:4, img:'u5-cw-4.jpg', a:['noodles'], vi:'noodles: mì, bún (sợi)'},
  {row:5, img:'u5-cw-5.jpg', a:['water'], vi:'water: nước'},
  {row:6, img:'u5-cw-6.jpg', a:['fish'], vi:'fish: cá'},
  {row:7, img:'u5-cw-7.jpg', a:['rice'], vi:'rice: cơm'},
  {row:8, img:'u5-cw-8.jpg', a:['cheese'], vi:'cheese: phô mai'},
  {row:9, img:'u5-cw-9.jpg', a:['beef'], vi:'beef: thịt bò'},
  {row:10, img:'u5-cw-10.jpg', a:['sausage'], vi:'sausage: xúc xích'},
  {row:0, p:'Món ăn ở cột xanh là:', a:['sandwiches','sandwich'], vi:'sandwiches: bánh mì kẹp'}
 ]},
 {name:'Viết số lượng dưới mỗi tranh', src:'SBT tr. 37 · B3', kind:'qty',
  lead:'Ví dụ: sauce: 1 tbsp → <i>a tablespoon of sauce</i>. Số có thể viết bằng chữ hoặc bằng số; đơn vị viết đầy đủ hoặc viết tắt đều được.', qs:[
  {p:'beef: 2 kg', a:['two kilos of beef'], vi:'hai ki-lô-gam thịt bò'},
  {p:'milk: 800 ml', a:['eight hundred millilitres of milk'], vi:'800 mi-li-lít sữa'},
  {p:'salt: 1 tsp', a:['a teaspoon of salt'], vi:'một thìa cà phê muối'},
  {p:'sugar: 20 g', a:['twenty grams of sugar'], vi:'20 gam đường'},
  {p:'water: 2 l', a:['two litres of water'], vi:'hai lít nước'}
 ]},
 {name:'Nối cụm từ chỉ số lượng với danh từ', src:'SBT tr. 37 · B4', kind:'mcq', inline:true,
  lead:'Mỗi cụm ở cột A đi với danh từ nào ở cột B?', qs:[
  {p:'a tin of', o:['mineral water','soup','chocolate','beef','tuna','eggs'], a:4, vi:'a tin of tuna: một hộp cá ngừ'},
  {p:'a carton of', o:['mineral water','soup','chocolate','beef','tuna','eggs'], a:5, vi:'a carton of eggs: một hộp (giấy) trứng'},
  {p:'a slice of', o:['mineral water','soup','chocolate','beef','tuna','eggs'], a:3, vi:'a slice of beef: một lát thịt bò'},
  {p:'a bowl of', o:['mineral water','soup','chocolate','beef','tuna','eggs'], a:1, vi:'a bowl of soup: một bát súp / canh'},
  {p:'a bar of', o:['mineral water','soup','chocolate','beef','tuna','eggs'], a:2, vi:'a bar of chocolate: một thanh sô-cô-la'},
  {p:'a bottle of', o:['mineral water','soup','chocolate','beef','tuna','eggs'], a:0, vi:'a bottle of mineral water: một chai nước khoáng'}
 ]}
]}
];
