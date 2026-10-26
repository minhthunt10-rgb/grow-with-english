import json,re
D=json.load(open('data.json'))
t=open('template.html',encoding='utf-8').read()
js=json.dumps(D,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
t=t.replace('/*DATA*/','var DATA='+js+';')
open("unit6-ai.html",'w',encoding='utf-8').write(t)
doc='<!doctype html>\n<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>body{margin:0}</style></head><body>\n'+t+'\n</body></html>\n'
open('index-unit6.html','w',encoding='utf-8').write(doc)
open('chk2.js','w').write(re.search(r'<script>(.*)</script>',t,re.S).group(1))
print(len(t))
