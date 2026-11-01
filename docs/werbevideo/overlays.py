# Erzeugt die Text-Einblendungen (720x1280, RGBA) im Winheller-3D-Design
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
W,H=720,1280
D="docs/werbevideo"; F=D+"/fonts"
HEAD=lambda s: ImageFont.truetype(F+"/BarlowCondensed-700-latin.ttf",s)
BODY=lambda s: ImageFont.truetype(F+"/Barlow-500-latin.ttf",s)
BRAND=lambda s: ImageFont.truetype(F+"/Montserrat-600-latin.ttf",s)
TIEF=(30,30,30,255); GOLD=(213,163,74,255); STEIN=(96,93,89,255)

def glass(img, box, r=28, dark=False):
    x0,y0,x1,y1=box
    layer=Image.new("RGBA",(W,H),(0,0,0,0))
    sh=ImageDraw.Draw(layer); sh.rounded_rectangle((x0,y0+14,x1,y1+14),r,fill=(30,30,30,60))
    layer=layer.filter(ImageFilter.GaussianBlur(18))
    img.alpha_composite(layer)
    d=ImageDraw.Draw(img)
    fill=(28,28,28,190) if dark else (255,255,255,165)
    edge=(255,255,255,70) if dark else (255,255,255,200)
    d.rounded_rectangle(box,r,fill=fill,outline=edge,width=2)

def card(name, head, sub, y=940):
    img=Image.new("RGBA",(W,H),(0,0,0,0))
    fh=HEAD(104); fs=BODY(34)
    d=ImageDraw.Draw(img)
    hw=d.textlength(head,font=fh); sw=d.textlength(sub,font=fs)
    pad=36; bw=max(hw,sw)+2*pad+8; bh=104+16+44+2*pad
    x0=(W-bw)/2; y0=y
    glass(img,(x0,y0,x0+bw,y0+bh))
    d=ImageDraw.Draw(img)
    d.rounded_rectangle((x0+pad,y0+pad+8,x0+pad+8,y0+pad+8+96),4,fill=GOLD)
    d.text((x0+pad+28,y0+pad-6),head,font=fh,fill=TIEF)
    d.text((x0+pad+28,y0+pad+112),sub,font=fs,fill=STEIN)
    img.save(f"{D}/ov_{name}.png")

card("figur","Deine Figur.","aus deinem Foto")
card("anhaenger","Dein Anhänger.","mit deinem Namen")
card("ersatzteil","Dein Ersatzteil.","wenn es keins mehr gibt")

# Abspann
img=Image.new("RGBA",(W,H),(0,0,0,0)); d=ImageDraw.Draw(img)
fh=HEAD(118); fb=BRAND(26); fu=BODY(40)
box=(40,120,W-40,120+118*2+40+200)
glass(img,box,dark=True); d=ImageDraw.Draw(img)
x=84; y=150
d.text((x,y),"Dein Bild.",font=fh,fill=(255,255,255,255))
d.text((x,y+112),"Unser Werk.",font=fh,fill=GOLD)
d.rounded_rectangle((x,y+262,x+120,y+266),2,fill=GOLD)
d.text((x,y+290),"Figuren · Schlüsselanhänger · Ersatzteile",font=BODY(30),fill=(185,181,174,255))
d.text((x,y+340),"winheller-3d.com",font=fu,fill=(255,255,255,255))
# Logo-Marke unten
mark=Image.new("RGBA",(W,H),(0,0,0,0)); md=ImageDraw.Draw(mark)
pts=[[(0,0),(54,0),(109.5,84.1),(82.5,125.0)],[(105,0),(161,0),(242.6,123.6),(214.6,166.1)],[(136.2,68.5),(159.2,103.4),(113.8,172.3),(90.7,137.4)],[(301.3,0),(329,0),(251.0,118.2),(237.2,97.2)],[(223.3,0),(251.6,0),(212.3,59.5),(198.2,38.1)]]
s=0.42; ox=(W-329*s)/2; oy=1040
for p in pts: md.polygon([(ox+a*s,oy+b*s) for a,b in p],fill=GOLD)
img.alpha_composite(mark)
t="WINHELLER 3D MANUFAKTUR"; tw=d.textlength(t,font=fb)
d.text(((W-tw)/2,1130),t,font=fb,fill=TIEF)
img.save(f"{D}/ov_ende.png")
print("ok")
