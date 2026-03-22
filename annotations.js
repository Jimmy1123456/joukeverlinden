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
    id: "altar-01",
    pitch: -12, yaw: 0,
    title: "The High Altar",
    date: "Consecrated 1704",
    image: "https://images.unsplash.com/photo-1548625149-720754952f98?w=600&q=70",
    content: `Constructed in <strong>1704</strong> under the patronage of Cardinal Benedetto Pamphilj, this <em>Baroque</em> masterpiece features gilded <strong>gold leaf</strong> applied over hand-carved limewood. The central triptych depicts the Ascension in the Neapolitan manner, its pigments sourced from Lapis Lazuli imported via the trading routes of Venice. Restored comprehensively in <strong>1991</strong> by the Opificio delle Pietre Dure, Florence.`,
    links: ["mosaic-apse-11", "dedication-plaque-A", "choir-stalls-08"]
  },
  {
    id: "rose-window-02",
    pitch: 18, yaw: 72,
    title: "The Rose Window",
    date: "c. 1788 · Northern Transept",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70",
    content: `Spanning <strong>8.4 metres</strong> in diameter, this <em>Gothic Revival</em> window was commissioned following the fire of 1785. The glazier Josias Hartmann of Strasbourg employed a <strong>grisaille technique</strong> for the outer lancets whilst reserving saturated ruby and cobalt for the central mandorla. The iconographic programme follows the <em>Biblia Pauperum</em> tradition, pairing Old Testament typologies with New Testament fulfilments.`,
    links: ["lantern-tower-09", "fresco-06", "portal-cartouche-C"]
  },
  {
    id: "pulpit-03",
    pitch: -8, yaw: 145,
    title: "The Hexagonal Pulpit",
    date: "1742 · Attributed to G. B. Tiepolo workshop",
    image: "https://images.unsplash.com/photo-1572896399248-b851e5558c42?w=600&q=70",
    content: `Carved from a single block of <strong>Carrara marble</strong>, the pulpit's six panels illustrate the cardinal virtues in high relief. The <em>trompe l'oeil</em> canopy above — painted, not carved — is the earliest documented use of this illusionistic device within the diocese. The wrought-iron staircase balustrade bears the cipher of <strong>Bishop Lorenzo Foscari</strong>, who funded the commission.`,
    links: ["memorial-tablet-B", "choir-stalls-08", "sacristy-door-10"]
  },
  {
    id: "crypt-04",
    pitch: -35, yaw: 220,
    title: "The Crypt Entrance",
    date: "Pre-Romanesque · est. 9th century",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=70",
    content: `Descending eleven steps below the nave floor, the <strong>crypt</strong> predates the current basilica by nearly five centuries. Dendrochronological analysis of the oak lintel dates its felling to <em>circa 847 CE</em>. The space houses the reliquary of <strong>St. Crispin</strong> — a gilded silver vessel of Mosan craftsmanship — and thirty-two carved column capitals of exceptional <em>zoomorphic</em> complexity.`
  },
  {
    id: "organ-05",
    pitch: 10, yaw: 290,
    title: "The Grand Organ",
    date: "1882 · Cavaillé-Coll, Paris",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70",
    content: `Installed by <strong>Aristide Cavaillé-Coll</strong> in 1882, this four-manual instrument comprises <em>5,847 pipes</em> ranging from 32 feet to the delicate <strong>piccolo</strong> at one inch. The case — in gilded oak — was designed by Eugène Viollet-le-Duc's atelier in deliberate dialogue with the medieval choir stalls below. A full <em>mechanical restoration</em> was completed in 2018, reinstating the original unequal temperament.`
  },
  {
    id: "fresco-06",
    pitch: 30, yaw: 335,
    title: "Vault Frescoes",
    date: "1731–1738 · Luca Giordano (circle of)",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=70",
    content: `Covering <strong>1,200 square metres</strong> of groin vaulting, the fresco cycle depicts the <em>Triumph of Faith</em> in a sweeping illusionistic composition. The foreshortened figures — some measuring six metres in height — employ the <strong>sotto in sù</strong> perspective pioneered by Mantegna and perfected by Pozzo. Infrared reflectography conducted in 2020 revealed three successive compositional changes beneath the final surface.`
  },
  {
    id: "baptistry-07",
    pitch: -20, yaw: 190,
    title: "The Baptistry",
    date: "1512 · Late Renaissance",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&q=70",
    content: `The octagonal <strong>baptismal font</strong> of porphyry and white marble occupies a discrete <em>edicule</em> to the south of the nave. Its cover — a conical structure of gilded copper — was cast by the <strong>Della Robbia workshop</strong> and bears enamelled <em>terracotta</em> roundels of the Baptism of Christ. The mosaic pavement beneath, uncovered during restoration in 1967, preserves a <strong>Roman tessellated floor</strong> of the 2nd century CE.`
  },
  {
    id: "choir-stalls-08",
    pitch: -15, yaw: 36,
    title: "The Choir Stalls",
    date: "1658 · Flemish Craftsmen",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70",
    content: `These <strong>sixty-four misericord stalls</strong> of dark walnut were executed by a Flemish guild under the direction of master carver Pieter van den Berghe. Each misericord — the hinged ledge permitting standing clergy to lean — is carved with a unique <em>grotesque</em> or <strong>bestiary figure</strong>, including a notable pelican in piety and a green man crowned with oak leaves. The canopy tracery above employs the <em>flamboyant Gothic</em> ogee arch in its most exuberant regional expression.`
  },
  {
    id: "lantern-tower-09",
    pitch: 55, yaw: 110,
    title: "The Lantern Tower",
    date: "1623 · Engineer: Domenico Fontana (attr.)",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=70",
    content: `Rising <strong>47 metres</strong> from the crossing floor, the lantern tower admits light through sixteen arched clerestory windows of pale <em>Norman green glass</em>. Its drum is decorated with alternating pilasters of <strong>verde antico</strong> and white marble, a colour scheme consciously echoing the baptistry at Florence. The iron tie-rods installed in <strong>1889</strong> by engineer Gustave Regnault arrested an alarming eastward lean discovered during Victorian structural surveys.`
  },
  {
    id: "sacristy-door-10",
    pitch: -5, yaw: 258,
    title: "The Sacristy Portal",
    date: "c. 1490 · Workshop of Andrea Bregno",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=70",
    content: `This late-<em>Quattrocento</em> doorway exhibits the full repertoire of <strong>all'antica</strong> ornament: egg-and-dart mouldings, acanthus friezes, and winged putti bearing the arms of the Orsini family within a laurel wreath. The door-leaves themselves, of cedar heartwood clad in <strong>repousée bronze</strong>, depict the Life of the Virgin across eight rectangular narrative panels. A <em>cartouche</em> above the lintel bears the inscription <strong>PORTA COELI</strong> — Gate of Heaven — in incised Humanist capitals.`
  },
  {
    id: "mosaic-apse-11",
    pitch: 8, yaw: 18,
    title: "The Apse Mosaic",
    date: "Byzantine · 11th century, restored 1388",
    image: "https://images.unsplash.com/photo-1601999109332-542b18dbec76?w=600&q=70",
    content: `The <strong>semi-dome of the apse</strong> is lined with a <em>Byzantine</em> mosaic of extraordinary preservation, depicting Christ Pantocrator enthroned among the celestial hierarchy. Composed of over <strong>two million tesserae</strong> — of glass, gilt glass, and semi-precious stone — the work demonstrates the <em>gold ground</em> technique transmitted from Constantinople via Southern Italian workshops. A <strong>1388 restoration</strong> under Antipope Clement VII added the donor portrait in the lower right register, identifiable by anachronistic Gothic vestments.`
  },
  {
    id: "treasury-grille-12",
    pitch: -22, yaw: 162,
    title: "The Treasury Grille",
    date: "1701 · Ironmaster Jean Tijou",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=70",
    content: `Wrought by <strong>Jean Tijou</strong> — the Huguenot blacksmith famed for his work at Hampton Court and St Paul's Cathedral — this <em>gilded ironwork</em> screen guards the treasury entrance with a virtuosity of hammered acanthus scrolls, husks, and masks. The gilding employs <strong>fire-gilt mercury amalgam</strong>, a technique now prohibited due to toxicity; its warm lustre has not been replicated by modern electroplating. Tijou's distinctive <em>repousée</em> panels are signed with his monogram in the lower cartouche.`
  },

  // ── INSCRIPTION / TEXT-PANEL HOTSPOTS ────────────────────
  {
    id: "dedication-plaque-A",
    type: "inscription",
    // Four corners [yaw°, pitch°]: top-left, top-right, bottom-right, bottom-left
    corners: [[-18, 6], [2, 6], [2, -4], [-18, -4]],
    title: "Foundation Dedication",
    date: "Carved 1704 · South nave pillar",
    image: "https://images.unsplash.com/photo-1548625149-720754952f98?w=600&q=70",
    content: `This founding inscription records the consecration of the basilica under Cardinal Pamphilj. Cut in <em>Humanist capitals</em> into the limestone pillar face, the lettering follows the model of Roman Imperial inscriptions, each stroke chiselled at a <strong>60° angle</strong> to maximise shadow legibility at nave height. The mason's mark — a small equilateral triangle — appears discreetly below the final line.`,
    transcription: [
      "D · O · M",
      "BASILICAM · HANC · IN · HONOREM",
      "SANCTI · CRISPINI · MARTYRIS",
      "BENEDICTUS · CARD · PAMPHILIVS",
      "A · FUNDAMENTIS · EREXIT",
      "ANNO · SALVTIS · MDCCIV"
    ],
    translation: "To God, the Best and Greatest. This basilica in honour of Saint Crispin the Martyr, Cardinal Benedetto Pamphilj raised from the foundations in the year of salvation 1704."
  },
  {
    id: "memorial-tablet-B",
    type: "inscription",
    corners: [[148, 2], [170, 2], [170, -14], [148, -14]],
    title: "Benefactors' Memorial",
    date: "c. 1756 · Marble tablet, choir aisle",
    image: "https://images.unsplash.com/photo-1572896399248-b851e5558c42?w=600&q=70",
    content: `Commissioned by the Chapter to record major donors of the <strong>1742 choir restoration</strong>, this white Carrara tablet employs a <em>bipartite layout</em>: the upper register names the living benefactors in incised Roman capitals, while the lower commemorates the deceased in a finer, more compressed <strong>italic hand</strong>. The border of intertwined acanthus and laurel is cut in <em>bassorilievo</em> — low relief — after a design attributed to the Foscari workshop.`,
    transcription: [
      "RESTAVRATIONI · CHORI",
      "ANNO · MDCCXLII · PERFECTAE",
      "SVMPTIBVS · FECERVNT",
      "LAVRENTIVS · EP · FOSCARI",
      "ET · FAMILIA · GRIMANI",
      "NECNON · PIIS · MANIBVS",
      "ANDREAE · BARBARIGO · CANO"
    ],
    translation: "To the restoration of the choir, completed in the year 1742, made at the expense of Lorenzo Bishop Foscari and the Grimani family, and likewise to the pious memory of Cantor Andrea Barbarigo."
  },
  {
    id: "portal-cartouche-C",
    type: "inscription",
    corners: [[-6, 18], [6, 18], [6, 11], [-6, 11]],
    title: "Porta Coeli Cartouche",
    date: "c. 1490 · Sacristy doorway lunette",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=70",
    content: `Set within the lunette of the Sacristy Portal, this <em>cartouche</em> inscription is the most formally ambitious lettering in the basilica. The letters are <strong>gilded lead inlay</strong> set into black Belgian marble — a technique known as <em>littera plumbea</em>. Each character is individually cast and hand-fitted. The phrase references the celestial aspirations of the doorway programme, which culminates in the <strong>Assumption relief</strong> above.`,
    transcription: [
      "PORTA · COELI"
    ],
    translation: "Gate of Heaven"
  }
];
