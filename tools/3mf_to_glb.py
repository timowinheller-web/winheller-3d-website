"""Bambu-3MF mit paint_color pro Dreieck -> kompaktes GLB (eine Teilmesh pro Filament, ohne Normalen)."""
import sys, zipfile, re
import numpy as np
import trimesh, fast_simplification
from scipy.spatial import cKDTree

src, dst = sys.argv[1], sys.argv[2]
TARGET = int(sys.argv[3]) if len(sys.argv) > 3 else 120_000

z = zipfile.ZipFile(src)
name = next(n for n in z.namelist() if n.startswith('3D/Objects/') and n.endswith('.model'))
txt = z.read(name).decode('utf-8')

vx = re.findall(r'<vertex x="([^"]+)" y="([^"]+)" z="([^"]+)"', txt)
V = np.array(vx, dtype=np.float64)
tris = re.findall(r'<triangle v1="(\d+)" v2="(\d+)" v3="(\d+)"(?: paint_color="([0-9A-F]*)")?', txt)
F = np.array([t[:3] for t in tris], dtype=np.int64)

# Bambu-Kodierung: "4" Filament 1, "8" Filament 2, "0C" Filament 3, "1C" Filament 4.
# Unterteilte Dreiecke tragen längere Codes: dort zählt das häufigste Einzel-Filament.
CODE = {'4': 0, '8': 1, '0C': 2, '1C': 3}
def fil(code):
    if not code: return 0
    if code in CODE: return CODE[code]
    counts = [code.count('4'), code.count('8')]
    return int(np.argmax(counts))
C = np.array([fil(t[3]) for t in tris], dtype=np.int8)
print('Original:', len(V), 'Punkte,', len(F), 'Dreiecke, Filamente', np.bincount(C, minlength=4))

# Bambu: Z nach oben -> glTF: Y nach oben; Füße auf 0, mittig
V = V[:, [0, 2, 1]] * np.array([1, 1, -1])
V -= [V[:, 0].mean(), V[:, 1].min(), V[:, 2].mean()]

# Ganze Figur reduzieren, danach Farbe vom nächsten Original-Dreieck übernehmen (keine Lücken an Farbgrenzen)
ratio = 1 - TARGET / len(F)
V2, F2 = fast_simplification.simplify(V.astype(np.float32), F.astype(np.int32), target_reduction=ratio)
cent = V[F].mean(1)
_, idx = cKDTree(cent).query(V2[F2].mean(1))
C2 = C[idx]
print('Reduziert:', len(V2), 'Punkte,', len(F2), 'Dreiecke, Filamente', np.bincount(C2, minlength=4))

scene = trimesh.Scene()
for k in range(4):
    sel = F2[C2 == k]
    if not len(sel): continue
    m = trimesh.Trimesh(V2, sel, process=False)
    m.remove_unreferenced_vertices()
    scene.add_geometry(m, geom_name=f'filament{k+1}', node_name=f'filament{k+1}')
glb = trimesh.exchange.gltf.export_glb(scene, include_normals=False)
open(dst, 'wb').write(glb)
print('GLB:', round(len(glb) / 1e6, 2), 'MB, Höhe', round(V2[:, 1].max() - V2[:, 1].min(), 1), 'mm')
