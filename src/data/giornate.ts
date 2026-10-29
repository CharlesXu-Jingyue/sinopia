/**
 * The five giornate (day-patches) of the fresco.
 *
 * Geometry is in the pixel space of the source images (IMAGE.width x IMAGE.height).
 * If the fresco is regenerated with the same composition at a higher resolution,
 * keep these numbers and only change IMAGE if the aspect ratio changes; scale the
 * points by the same factor. Seams follow the outlines of figure groups, the way
 * real day-seams did, never through a face or a hand.
 */
import { url } from './url';

export const IMAGE = { width: 1916, height: 821, fresco: url('/images/fresco.webp'), sinopia: url('/images/sinopia.webp') };

export type GiornataId = 'neuroscience' | 'mathematics' | 'vita' | 'engineering' | 'cybernetics';

export interface Giornata {
  id: GiornataId;
  name: string;
  /** What the patch shows, in a few words. */
  scene: string;
  /** Opening line of its block beneath the plaster. */
  lede: string;
  /** Polygon in image pixels. Together the five tile the whole image. */
  polygon: [number, number][];
  /** Where the hover label sits, in percent of the image. */
  label: { x: number; y: number };
  /** Optional code snippet shown in the block. */
  code?: string;
}

export const giornate: Giornata[] = [
  {
    id: 'neuroscience',
    name: 'Neuroscience',
    scene: 'the anatomist and his students',
    lede: '[What the anatomist is showing his students: the questions that start the work.]',
    polygon: [[0,455],[60,440],[100,380],[180,365],[240,355],[300,378],[360,390],[400,445],[470,452],[505,520],[560,565],[610,590],[680,640],[690,821],[0,821]],
    label: { x: 16, y: 86 },
    code: 'spikes = load(session)\nrate = smooth(spikes, sigma=20)   # ms\nplot_raster(spikes, trial=12)',
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    scene: 'the geometer on the steps',
    lede: '[What the geometer is drawing on the slate: the models beneath the ideas.]',
    polygon: [[0,0],[720,0],[720,120],[800,180],[805,300],[830,400],[835,470],[870,480],[880,560],[860,590],[610,590],[560,565],[505,520],[470,452],[400,445],[360,390],[300,378],[240,355],[180,365],[100,380],[60,440],[0,455]],
    label: { x: 21, y: 15 },
    code: 'x_dot = A @ x + B @ u\nJ = sum(x.T @ Q @ x + u.T @ R @ u) * dt\nK = lqr(A, B, Q, R)',
  },
  {
    id: 'vita',
    name: 'Vita',
    scene: 'the woman writing on the steps',
    lede: 'What she writes in her notebook: who I am, the course of a life so far, and notes kept along the way.',
    polygon: [[720,0],[1170,0],[1165,120],[1075,200],[1075,420],[1095,560],[1130,610],[1290,610],[1300,690],[1370,760],[1380,821],[690,821],[680,640],[610,590],[860,590],[880,560],[870,480],[835,470],[830,400],[805,300],[800,180],[720,120]],
    label: { x: 49, y: 7 },
  },
  {
    id: 'engineering',
    name: 'Engineering',
    scene: 'the mechanical knight',
    lede: '[What the engineers are assembling: the brain treated as something that could be built.]',
    polygon: [[1170,0],[1580,0],[1590,250],[1520,330],[1490,420],[1450,520],[1380,560],[1340,640],[1300,690],[1290,610],[1130,610],[1095,560],[1075,420],[1075,200],[1165,120]],
    label: { x: 72, y: 8 },
    code: 'def step(x, u, dt):\n    dx = A @ x + B @ u\n    return x + dt * dx',
  },
  {
    id: 'cybernetics',
    name: 'Cybernetics',
    scene: 'the furnace and the ship',
    lede: '[The self-regulating furnace and the ship steered by its helmsman: feedback, in machines and in brains.]',
    polygon: [[1580,0],[1916,0],[1916,821],[1380,821],[1370,760],[1300,690],[1340,640],[1380,560],[1450,520],[1490,420],[1520,330],[1590,250]],
    label: { x: 92, y: 15 },
  },
];

/** Seam lines drawn over the fresco (the shared edges of the polygons above). */
export const seams: [number, number][][] = [
  [[0,455],[60,440],[100,380],[180,365],[240,355],[300,378],[360,390],[400,445],[470,452],[505,520],[560,565],[610,590]],
  [[610,590],[680,640],[690,821]],
  [[720,0],[720,120],[800,180],[805,300],[830,400],[835,470],[870,480],[880,560],[860,590],[610,590]],
  [[1170,0],[1165,120],[1075,200],[1075,420],[1095,560],[1130,610],[1290,610],[1300,690]],
  [[1580,0],[1590,250],[1520,330],[1490,420],[1450,520],[1380,560],[1340,640],[1300,690]],
  [[1300,690],[1370,760],[1380,821]],
];

export const clipPath = (poly: [number, number][]) =>
  'polygon(' + poly.map(([x, y]) => `${((100 * x) / IMAGE.width).toFixed(2)}% ${((100 * y) / IMAGE.height).toFixed(2)}%`).join(', ') + ')';

export const points = (line: [number, number][]) => line.map(([x, y]) => `${x},${y}`).join(' ');
