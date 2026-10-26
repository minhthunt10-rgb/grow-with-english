import docx,sys
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
        if r.underline: out+='<u>'+t+'</u>'
        else: out+=t
    return out.replace('</u><u>','')
lines=[]
for el in d.element.body.iterchildren():
    tag=el.tag.split('}')[1]
    if tag=='p':
        p=Paragraph(el,d); t=ptext(p).strip()
        if t: lines.append('P['+p.style.name+']: '+t)
    elif tag=='tbl':
        tb=Table(el,d)
        lines.append('TABLE rows=%d cols=%d'%(len(tb.rows),len(tb.columns)))
        for r in tb.rows:
            cells=[]
            prev=None
            for c in r.cells:
                if c._tc is prev: continue
                prev=c._tc
                cells.append(' / '.join(ptext(p) for p in c.paragraphs if p.text.strip()))
            lines.append('  ROW: '+' | '.join(cells))
open('gv_dump.txt','w').write('\n'.join(lines))
print(len(lines))
