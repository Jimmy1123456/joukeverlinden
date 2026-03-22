// ═══════════════════════════════════════════════════════
//  annotations.js — Heritage 360° Viewer · Content File
//
//  Edit this file to update all text, hotspot positions,
//  images, and panel content without touching the viewer.
//
//  SITE_CONFIG  → top-bar title, panel header, meta line
//  HOTSPOTS     → all point and inscription annotations
// ═══════════════════════════════════════════════════════

// ── Site identity ────────────────────────────────────────
const SITE_CONFIG = {
  siteTitle:    "St. Crispin's Basilica \u00a0·\u00a0 Digital Archive",
  siteSubtitle: "Est. MDCCIV — Interactive Heritage Survey",
  panelLabel:   "Annotated Points of Interest",
  panelHeading: "Architectural Survey",
  panelMeta:    "12 documented features \u00b7 circa 847 CE – 1882",
  panoramaFile: "theroom.jpg",   // default panorama loaded on startup
  defaultYaw:   0,               // starting horizontal angle in degrees
  defaultPitch: 0,               // starting vertical angle in degrees
  defaultZoom:  90               // starting FOV in degrees (20–120)
};

// ── Annotations ──────────────────────────────────────────
//
//  Point hotspot fields:
//    id       (string)   unique identifier
//    pitch    (number)   vertical angle in degrees (+up / -down)
//    yaw      (number)   horizontal angle in degrees
//    title    (string)   short label shown in panel + tooltip
//    date     (string)   date / location line
//    image    (string)   URL or relative path for the panel thumbnail
//    content  (string)   HTML body text (bold, em, etc. allowed)
//    links    (string[]) optional — IDs of related hotspots shown as
//                        clickable chips at the bottom of the panel entry
//    zoom     (number)   optional — FOV in degrees (20–120) applied when
//                        navigating to this hotspot; omit to use default 90°
//
//  Inscription hotspot — all of the above except pitch/yaw, plus:
//    type         "inscription"
//    corners      [[yaw,pitch], [yaw,pitch], [yaw,pitch], [yaw,pitch]]
//                 top-left → top-right → bottom-right → bottom-left
//                 (fly-to centre is derived automatically from corners[0] and corners[2])
//    transcription  (string[])  one entry per line of the inscription
//    translation    (string)    English rendering shown below transcription
// ─────────────────────────────────────────────────────────

const HOTSPOTS = [
  {
    id:    "hotspot-1774180683546",
    title: "A1",
    date:  "",
    pitch: -5.2, yaw: 162,
    zoom: 20,
    content: `whole coly`,
  },
  {
    id:    "A2",
    title: "A2",
    date:  "",
    pitch: -4.5, yaw: 172.2,
    zoom: 30,
    content: ``,
  },
  {
    id:    "A3",
    title: "A3",
    date:  "",
    pitch: -6.1, yaw: 179.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "A4",
    title: "A4",
    date:  "",
    pitch: -3.4, yaw: 186.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "A5",
    title: "A5",
    date:  "",
    pitch: -1.4, yaw: 196.2,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181072377",
    title: "A6",
    date:  "",
    pitch: -1.8, yaw: 206.8,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181136312",
    title: "A7",
    date:  "",
    pitch: 25.1, yaw: 190.4,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181155649",
    title: "A8",
    date:  "",
    pitch: 18.4, yaw: 193.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181184098",
    title: "A9",
    date:  "",
    pitch: 23.8, yaw: 197.8,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181221015",
    title: "A10",
    date:  "",
    pitch: 32.4, yaw: 198.8,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181251139",
    title: "A11",
    date:  "",
    pitch: 26.4, yaw: 205.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181276113",
    title: "A12",
    date:  "",
    pitch: 29.6, yaw: 209.4,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181399647",
    title: "B1",
    date:  "",
    pitch: -6.1, yaw: 215.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181421980",
    title: "B2",
    date:  "",
    pitch: -8.5, yaw: 220.2,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181447148",
    title: "B3",
    date:  "",
    pitch: -7, yaw: 227,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181475873",
    title: "B4",
    date:  "",
    pitch: 9.1, yaw: 220.2,
    zoom: 30,
    content: ``,
  },
  {
    id:    "hotspot-1774181530410",
    title: "C1",
    date:  "",
    pitch: -10.5, yaw: 284,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181546702",
    title: "C2",
    date:  "",
    pitch: -9, yaw: 291.2,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181569461",
    title: "C3",
    date:  "",
    pitch: -8.3, yaw: 296,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181590951",
    title: "C4",
    date:  "",
    pitch: -9.9, yaw: 301.8,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181621709",
    title: "C5",
    date:  "",
    pitch: -5.5, yaw: 306,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181649218",
    title: "C6",
    date:  "",
    pitch: -5.5, yaw: 310,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181681242",
    title: "C7",
    date:  "",
    pitch: -6.7, yaw: 313.8,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181741443",
    title: "D1",
    date:  "",
    pitch: -7.5, yaw: 319.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181771118",
    title: "D2",
    date:  "",
    pitch: -7.6, yaw: 325.2,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181799406",
    title: "D3",
    date:  "",
    pitch: -7.5, yaw: 331.8,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181825639",
    title: "D4",
    date:  "",
    pitch: -9.4, yaw: 341.6,
    zoom: 35,
    content: ``,
  },
  {
    id:    "hotspot-1774181854226",
    title: "D5",
    date:  "",
    pitch: -9.1, yaw: 352,
    zoom: 35,
    content: ``,
  },
  {
    id:    "hotspot-1774181883281",
    title: "D6",
    date:  "",
    pitch: -7.9, yaw: 0.8,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181906301",
    title: "D7",
    date:  "",
    pitch: -3.4, yaw: 18,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181946871",
    title: "D8",
    date:  "",
    pitch: 13.3, yaw: 321,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774181992435",
    title: "D9",
    date:  "",
    pitch: 20.1, yaw: 327.2,
    zoom: 35,
    content: ``,
  },
  {
    id:    "hotspot-1774182024041",
    title: "D10",
    date:  "",
    pitch: 13.7, yaw: 335.4,
    zoom: 35,
    content: ``,
  },
  {
    id:    "hotspot-1774182075334",
    title: "D11",
    date:  "",
    pitch: 20.9, yaw: 344.8,
    zoom: 35,
    content: ``,
  },
  {
    id:    "hotspot-1774182101476",
    title: "D12",
    date:  "",
    pitch: 8.5, yaw: 357.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774182127538",
    title: "D13",
    date:  "",
    pitch: 22.4, yaw: 359.4,
    zoom: 35,
    content: ``,
  },
  {
    id:    "hotspot-1774182164347",
    title: "D14",
    date:  "",
    pitch: 20.2, yaw: 18.6,
    zoom: 20,
    content: ``,
  },
  {
    id:    "hotspot-1774182185642",
    title: "D15",
    date:  "",
    pitch: 21.7, yaw: 27.2,
    zoom: 20,
    content: ``,
  },
  {
    type: "inscription",
    id:    "inscription-1774182291805",
    title: "T5 Da zal wel kunne zijn",
    date:  "",
    corners: [[323.34, 10.33], [331.08, 10.33], [331.08, 6.86], [323.34, 6.86]],
    zoom: 20,
    content: ``,
    transcription: [
      "Da zal wel kunne zijn"
    ],
    translation: "It could be like that"
  },
  {
    type: "inscription",
    id:    "inscription-1774182436495",
    title: "T1",
    date:  "",
    corners: [[156.22, 11.45], [179.9, 11.45], [179.9, 8.61], [156.22, 8.61]],
    zoom: 33,
    content: ``,
    transcription: [
      "Gelukkig zijn zij die buien"
    ],
    translation: "Happy are those ..."
  },
  {
    type: "inscription",
    id:    "inscription-1774182579654",
    title: "T2",
    date:  "",
    corners: [[156.83, 8.41], [180.58, 8.41], [180.58, 5.48], [156.83, 5.48]],
    zoom: 33,
    content: ``,
    transcription: [

    ],
    translation: ""
  },
  {
    type: "inscription",
    id:    "inscription-1774182632829",
    title: "T4",
    date:  "",
    corners: [[186.69, 12.78], [206.04, 12.78], [206.04, 9.76], [186.69, 9.76]],
    zoom: 27,
    content: ``,
    transcription: [
      "Jury salutam"
    ],
    translation: ""
  },
  {
    type: "inscription",
    id:    "inscription-1774182685391",
    title: "T4",
    date:  "",
    corners: [[194.25, 9.76], [212.22, 9.76], [212.22, 6.67], [194.25, 6.67]],
    zoom: 25,
    content: ``,
    transcription: [

    ],
    translation: ""
  }
];

