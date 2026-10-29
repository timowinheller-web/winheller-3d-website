#!/usr/bin/env python3
"""Erzeugt responsive WebP-Varianten (400/800/1200 px breit) aus einem Bild.
Aufruf: python3 tools/make_images.py quelle.jpg img/katalog/name
Ergebnis: img/katalog/name-400.webp, name-800.webp, name-1200.webp (nur Breiten <= Original)."""
import sys
from PIL import Image

WIDTHS = (400, 800, 1200)

def make(src, base, quality=78):
    im = Image.open(src).convert('RGB')
    out = []
    for w in WIDTHS:
        if w > im.width and w != WIDTHS[0]:
            continue
        r = min(1.0, w / im.width)
        im2 = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
        p = f'{base}-{w}.webp'
        im2.save(p, 'WEBP', quality=quality, method=6)
        out.append((p, im2.size))
    return out

if __name__ == '__main__':
    for p, s in make(sys.argv[1], sys.argv[2]):
        print(p, s)
