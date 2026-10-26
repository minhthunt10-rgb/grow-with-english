import docx,re,json,html
from docx.table import Table
from docx.text.paragraph import Paragraph
import sys
A=sys.argv[1]
d=docx.Document(A)
def ptext(p):
    out=''
    for r in p.runs:
        t=r.text
        if not t: continue
        t=html.escape(t,quote=False)
        out+=('<u>'+t+'</u>') if r.underline else t
    return out.replace('</u><u>','')
def strip(t): return re.sub(r'<[^>]+>','',t)
items=[]
for el in d.element.body.iterchildren():
    tag=el.tag.split('}')[1]
    if tag=='p':
        p=Paragraph(el,d); t=ptext(p).strip()
        if t: items.append(('p',p.style.name,t))
    elif tag=='tbl':
        tb=Table(el,d); rows=[]
        for r in tb.rows:
            cells=[];prev=None
            for c in r.cells:
                if c._tc is prev: continue
                prev=c._tc
                cells.append('\n'.join(ptext(p).strip() for p in c.paragraphs if p.text.strip()))
            rows.append(cells)
        items.append(('t',None,rows))
def blank(t):
    return re.sub(r'\(\s*(\d+)\s*\)\s*_+',r'<span class="blank">(\1) ______</span>',t)
def nl(t): return t.replace('\n','<br>')
ANS=re.compile(r'<u>\s*→\s*([A-D])[^<]*</u>')
def parse_opt_cells(cells):
    num=None;ans=None;opts={}
    for c in cells:
        c=c.strip()
        if not c: continue
        m=re.match(r'^(\d+)\.$',c)
        if m and num is None: num=int(m.group(1)); continue
        m=ANS.search(c) or re.search(r'→\s*([A-D])',c)
        if m and not re.match(r'^[A-D]\.',strip(c)):
            if ans is None: ans='ABCD'.index(m.group(1)); continue
        m=re.match(r'^([A-D])\.\s*(.*)$',strip(c).split('\n')[0]) 
        if m:
            L='ABCD'.index(m.group(1))
            lines=c.split('\n'); first=re.sub(r'^[A-D]\.\s*','',lines[0].strip())
            opts[L]=(first,' '.join(lines[1:]).strip())
    return num,ans,opts
def mk_opts(opts):
    if sorted(opts)!=[0,1,2,3]: return None
    return [opts[i][0] for i in range(4)],[opts[i][1] for i in range(4)]

SECS=[]; cur=None; grp=None; part=None; topic=None; bai=None
tipbuf=[]; tips={}
def tbl_html(rows):
    h='<table>'
    for i,r in enumerate(rows):
        h+='<tr>'+''.join(('<th>' if i==0 else '<td>')+nl(re.sub(r'<u>|</u>','',c))+('</th>' if i==0 else '</td>') for c in r)+'</tr>'
    return h+'</table>'
def new_sec(id,grp_,title,sub,instr,sk,selfcheck=False):
    global cur,grp
    cur={'id':id,'grp':grp_,'title':title,'sub':sub,'instr':instr,'sk':sk,'selfcheck':selfcheck,'qs':[],'groups':[]}
    SECS.append(cur); grp=None
EXSUB={1:'Phát âm',2:'Trọng âm',3:'Từ vựng - ngữ pháp',4:'Đọc thông báo',5:'Sắp xếp đoạn văn',6:'Đọc điền từ',7:'Chọn cụm hợp văn cảnh'}
EXSK={1:'pa',2:'pa',3:'tv',4:'rd',5:'wr',6:'rd',7:'np'}
BAISUB={1:'Chọn đáp án đúng',2:'Điền từ vào đoạn văn',3:'Chọn từ đồng nghĩa',4:'Điền từ trong khung'}
GBAI={1:'Chọn đáp án đúng',2:'Chia động từ',3:'Dịch Anh - Việt',4:'Dịch Việt - Anh'}
TOPICN={'1':'sai khiến chủ động','2':'sai khiến bị động'}
pend=None  # pending question dict awaiting table/vn
bank=None
last_q=None
def add_q(q):
    global last_q
    cur['qs'].append(q); last_q=q
    if grp is not None:
        q['gi']=grp['i']; grp['qs'].append(q)
    return q
def start_group(title):
    global grp
    grp={'i':len(cur['groups']),'title':title,'paras':[],'vi':'','qs':[]}
    cur['groups'].append(grp)

for kind,style,val in items:
    if kind=='p':
        t=val; plain=strip(t)
        if style=='Normal (Web)':
            if plain.startswith('PHẦN A'): part='A'; continue
            if plain.startswith('PHẦN B'): part='B'; continue
            if plain.startswith('PHẦN C'): part='C'; continue
            m=re.match(r'^CHỦ ĐIỂM (\d)',plain)
            if m: topic=m.group(1); tipbuf=[]; bai=None; continue
            m=re.match(r'^BÀI (\d)',plain)
            if m and part in('A','B'):
                bai=int(m.group(1)); pend=None; bank=None
                if part=='A':
                    new_sec('tv%d'%bai,'Từ vựng','Bài %d'%bai,BAISUB[bai],plain.split(':',1)[1].strip().capitalize() if ':' in plain else plain,'tv')
                else:
                    sc= bai>=3
                    new_sec('g%sb%d'%(topic,bai),'Ngữ pháp %s'%topic,'Bài %d'%bai,GBAI[bai],plain.split(':',1)[1].strip().capitalize(),'np',selfcheck=sc)
                    if topic in tips: cur['tip']=tips[topic]
                continue
            m=re.match(r'^Exercise (\d):',plain)
            if m and part=='C':
                n=int(m.group(1)); pend=None
                new_sec('ex%d'%n,'Luyện đề','Exercise %d'%n,EXSUB[n],plain.split(':',1)[1].strip(),EXSK[n]); continue
            if part=='B' and topic and bai is None or (part=='B' and cur and cur['id'].startswith('g') and False):
                pass
            # titles for passages
            if cur and cur['id'] in('tv2','ex4','ex6') and not re.match(r'^(BÀI|Exercise)',plain):
                start_group(re.sub(r'^[①②③④⑤]\s*','',plain)); continue
            if part=='B' and bai is None and topic:  # theory text before BÀI 1
                tipbuf.append('<p>'+t+'</p>'); tips[topic]='<div class="theory">'+''.join(tipbuf)+'</div>'; continue
            if part=='B' and topic and plain.startswith('MẸO'):
                continue
            continue
        if style=='para':
            if cur is None: continue
            if cur['id']=='tv4':
                # bank passage with underlined answers
                ans=re.findall(r'\(\s*(\d+)\s*\)\s*<u>(.*?)</u>',t)
                if ans:
                    start_group(grp_title if False else 'AI IN OUR HOMES') if grp is None else None
                    shown=re.sub(r'\(\s*(\d+)\s*\)\s*<u>.*?</u>',r'(\1) ______',t)
                    grp['paras'].append(blank(nl(shown)))
                    for n,a in ans:
                        add_q({'t':'sel','p':'Chỗ trống (%s)'%n,'a':strip(a).strip(),'bank':bank,'sk':'tv','tp':strip(a).strip()})
                continue
            if grp is None or grp['qs']:
                start_group('')
            grp['paras'].append(blank(nl(t)))
            continue
        if style=='vn':
            vi=re.sub(r'^Dịch:\s*','',t)
            if grp is not None and not grp['qs'] and cur['id']!='tv4': grp['vi']=vi
            elif grp is not None and cur['id']=='tv4' and not any(q.get('vi') for q in grp['qs']): grp['vi']=vi
            elif last_q is not None: last_q['vi']=vi
            continue
        if style=='line':
            if pend is not None and pend.get('await')=='stem':
                pend['stem']=nl(t); pend['await']=None; continue
            if cur and cur['selfcheck'] and last_q is not None:
                last_q['model']=strip(re.sub(r'^→\s*','',t)); continue
            continue
        if style=='q':
            m=ANS.search(t)
            body=ANS.sub('',t).strip()
            body=re.sub(r'^\d+\.\s*','',body)
            if cur['selfcheck']:
                add_q({'t':'trans','p':body,'model':'','sc':False,'sk':'np','tp':''}); continue
            if m and not cur['id'].startswith('g') or (m and cur['id'].startswith('g') and cur['id'][-1]=='1'):
                pend={'t':'mcq','p':body,'a':'ABCD'.index(m.group(1)),'await':None}; continue
            fm=re.search(r'<u>(.+?)</u>\s*\(([^)]*)\)',body)
            if cur['id'].startswith('g') and fm:
                stem=body.replace(fm.group(0),'<span class="blank">______</span> ('+fm.group(2)+')')
                add_q({'t':'fill','p':stem,'a':strip(fm.group(1)).strip(),'sk':'np'}); continue
            if re.match(r'^\d+\.?$',strip(t)):
                pend={'t':'mcq','p':'','a':None,'await':'stem'}; continue
            continue
    else:
        rows=val
        if cur is None:
            continue
        if len(rows)==1 and len(rows[0])==1:
            if cur['id']=='tv4':
                bank=[w.strip() for w in re.split(r'\s*[•·]\s*',strip(rows[0][0])) if w.strip()]
            continue
        if part=='B' and bai is None:
            tipbuf.append(tbl_html(rows)); tips[topic]='<div class="theory">'+''.join(tipbuf)+'</div>'; continue
        cells=[c for r in rows for c in r]
        num,ans,opts=parse_opt_cells(cells)
        o=mk_opts(opts)
        if o is None: continue
        if pend is not None and pend['t']=='mcq':
            q=pend; pend=None
            if q['a'] is None: q['a']=ans
            q['p']=q.get('stem',q['p']) if q.get('stem') else q['p']
            q.pop('await',None); q.pop('stem',None) if False else None
        else:
            q={'t':'mcq','p':'','a':ans}
            if grp is not None: q['p']='Chỗ trống (%d)'%num if num else ''
            elif num: q['p']=''
        q['o'],q['g']=o
        add_q(q)

# post-process
for s in SECS:
    for i,q in enumerate(s['qs']):
        q['n']=i+1
        if q['t']=='mcq':
            q['p']=blank(q['p'])
            q['sk']=s['sk']
            corr=strip(q['o'][q['a']]).strip()
            same=[k for k in range(4) if k!=q['a'] and strip(q['o'][k]).strip()==corr]
            if same: q['alt']=same
            if s['sk']=='tv': q['tp']=corr
            elif s['id'].startswith('ex'): q['tp']='%s, câu %d'%(s['title'],i+1) if s['id']!='ex1' and s['id']!='ex2' else ('phát âm' if s['id']=='ex1' else 'trọng âm')+' câu %d'%(i+1)
            else: q['tp']='%s (%s, câu %d)'%(TOPICN[s['id'][1]],s['title'],i+1)
        elif q['t']=='fill':
            q['tp']='%s (%s, câu %d)'%(TOPICN[s['id'][1]],s['title'],i+1)
        elif q['t']=='sel': q['sk']='tv'
        if s['sk']=='rd' or s['id']=='ex7':
            if q['t']=='mcq' and 'gi' in q:
                g=s['groups'][q['gi']]; q['tp']='%s, bài %d, chỗ trống %d'%(s['title'],q['gi']+1,g['qs'].index(q)+1)
    for g in s['groups']:
        g['html']=''.join('<p>%s</p>'%p for p in g['paras'])
        del g['paras']; g['qs']=[s['qs'].index(q) for q in g['qs']]
# vocab
vocab={'words':[],'phrases':[]}
tabs=[v for k,s,v in items if k=='t']
for rows in tabs:
    if rows and rows[0][:2]==['STT','Từ vựng']:
        for r in rows[1:]: vocab['words'].append([strip(c) for c in r[1:]])
    elif rows and rows[0][:2]==['STT','Cụm từ']:
        for r in rows[1:]: vocab['phrases'].append([strip(c) for c in r[1:]])
json.dump({'secs':SECS,'vocab':vocab},open('data.json','w'),ensure_ascii=False)
for s in SECS:
    print(s['id'],s['grp'],s['title'],len(s['qs']),'groups',len(s['groups']),[q['t'] for q in s['qs']][:1], 'bad' if any((q['t']=='mcq' and q['a'] is None) for q in s['qs']) else '')
print(len(vocab['words']),len(vocab['phrases']))
