/**
 * Kits (camiseta titular) de cada club, para dibujarlos en el componente TeamKit.
 * Data-driven: cada equipo declara color primario, secundario y un patrón.
 * Sumar/variar un equipo es una línea acá; el render no cambia. La clave es el
 * slug del rival (ai_opponents.slug); el equipo del usuario usa "river".
 */
export type KitPattern = "solid" | "stripes" | "hoops" | "band" | "vband" | "sash" | "halves";

export type Kit = {
  primary: string; // color de fondo de la camiseta
  secondary: string; // color del patrón / detalle
  pattern: KitPattern;
};

// paleta reutilizable
const WHITE = "#f3f3f1";
const RED = "#d2232a";
const BLUE = "#16357f";
const CELESTE = "#6cb4e4";
const GOLD = "#f4c20d";
const YELLOW = "#f4d50a";
const GREEN = "#138a43";
const BLACK = "#1d1d1f";
const NAVY = "#0c2747";
const GARNET = "#6d1f2c";
const BROWN = "#6e4327";
const PURPLE = "#5b2a86";
const ORANGE = "#e8741e";
const CREAM = "#efe7cf";
const PINK = "#e85aa0";

const KITS: Record<string, Kit> = {
  // ---- el usuario ----
  river: { primary: WHITE, secondary: RED, pattern: "sash" },

  // ---- Primera ----
  boca: { primary: BLUE, secondary: GOLD, pattern: "band" },
  racing: { primary: WHITE, secondary: CELESTE, pattern: "stripes" },
  independiente: { primary: RED, secondary: WHITE, pattern: "solid" },
  "san-lorenzo": { primary: "#13357b", secondary: "#b41f2e", pattern: "stripes" },
  velez: { primary: WHITE, secondary: "#1f3a93", pattern: "sash" },
  estudiantes: { primary: WHITE, secondary: RED, pattern: "stripes" },
  "talleres-cba": { primary: WHITE, secondary: NAVY, pattern: "stripes" },
  lanus: { primary: GARNET, secondary: WHITE, pattern: "solid" },
  huracan: { primary: WHITE, secondary: RED, pattern: "band" },
  "rosario-central": { primary: NAVY, secondary: GOLD, pattern: "stripes" },
  argentinos: { primary: RED, secondary: WHITE, pattern: "band" },
  "defensa-justicia": { primary: GREEN, secondary: YELLOW, pattern: "stripes" },
  newells: { primary: RED, secondary: BLACK, pattern: "halves" },
  "gimnasia-lp": { primary: WHITE, secondary: NAVY, pattern: "band" },
  banfield: { primary: GREEN, secondary: WHITE, pattern: "stripes" },
  tigre: { primary: NAVY, secondary: RED, pattern: "band" },
  "belgrano-cba": { primary: CELESTE, secondary: CELESTE, pattern: "solid" },
  colon: { primary: RED, secondary: BLACK, pattern: "stripes" },
  ferro: { primary: GREEN, secondary: WHITE, pattern: "band" },

  // ---- Segunda ----
  "godoy-cruz": { primary: "#13294b", secondary: WHITE, pattern: "sash" },
  "atletico-tucuman": { primary: CELESTE, secondary: WHITE, pattern: "stripes" },
  instituto: { primary: RED, secondary: WHITE, pattern: "stripes" },
  "union-sf": { primary: RED, secondary: WHITE, pattern: "halves" },
  platense: { primary: WHITE, secondary: BROWN, pattern: "band" },
  aldosivi: { primary: GREEN, secondary: YELLOW, pattern: "stripes" },
  "san-martin-sj": { primary: GREEN, secondary: BLACK, pattern: "stripes" },
  patronato: { primary: RED, secondary: BLACK, pattern: "stripes" },
  temperley: { primary: CELESTE, secondary: WHITE, pattern: "solid" },
  quilmes: { primary: WHITE, secondary: BLUE, pattern: "band" },
  chacarita: { primary: RED, secondary: BLACK, pattern: "stripes" },
  moron: { primary: WHITE, secondary: RED, pattern: "vband" },
  almagro: { primary: "#1f3a93", secondary: WHITE, pattern: "band" },
  atlanta: { primary: "#1f3a93", secondary: YELLOW, pattern: "stripes" },
  "nueva-chicago": { primary: GREEN, secondary: BLACK, pattern: "halves" },
  "all-boys": { primary: WHITE, secondary: BLACK, pattern: "band" },
  "gimnasia-j": { primary: WHITE, secondary: "#1f5fbf", pattern: "stripes" },
  olimpo: { primary: BLACK, secondary: YELLOW, pattern: "stripes" },
  arsenal: { primary: "#b41f2e", secondary: CELESTE, pattern: "halves" },
  "defensores-belgrano": { primary: NAVY, secondary: RED, pattern: "solid" },

  // ---- Tercera (solo Copa) ----
  "central-cordoba": { primary: WHITE, secondary: BLACK, pattern: "stripes" },
  "independiente-rivadavia": { primary: "#1f3a93", secondary: WHITE, pattern: "stripes" },
  "barracas-central": { primary: RED, secondary: WHITE, pattern: "stripes" },
  sarmiento: { primary: GREEN, secondary: GREEN, pattern: "solid" },
  "deportivo-riestra": { primary: BLACK, secondary: WHITE, pattern: "stripes" },
  "san-martin-tuc": { primary: WHITE, secondary: RED, pattern: "band" },
  "gimnasia-mendoza": { primary: WHITE, secondary: BLACK, pattern: "band" },
  "deportivo-madryn": { primary: GREEN, secondary: WHITE, pattern: "band" },
  "atletico-rafaela": { primary: CELESTE, secondary: WHITE, pattern: "stripes" },
  "chaco-for-ever": { primary: BLACK, secondary: RED, pattern: "stripes" },
  agropecuario: { primary: GREEN, secondary: WHITE, pattern: "solid" },
  "tristan-suarez": { primary: GREEN, secondary: WHITE, pattern: "halves" },
  "estudiantes-rc": { primary: CELESTE, secondary: WHITE, pattern: "halves" },
  "sportivo-belgrano": { primary: GREEN, secondary: WHITE, pattern: "stripes" },
  acassuso: { primary: CELESTE, secondary: RED, pattern: "stripes" },
  colegiales: { primary: WHITE, secondary: RED, pattern: "band" },
  midland: { primary: GREEN, secondary: WHITE, pattern: "sash" },
  "crucero-del-norte": { primary: RED, secondary: WHITE, pattern: "solid" },
  camioneros: { primary: "#1f3a93", secondary: WHITE, pattern: "solid" },
  "san-miguel": { primary: GREEN, secondary: WHITE, pattern: "band" },
  excursionistas: { primary: GREEN, secondary: WHITE, pattern: "vband" },
  "argentino-merlo": { primary: WHITE, secondary: CELESTE, pattern: "stripes" },
  claypole: { primary: GREEN, secondary: RED, pattern: "stripes" },
  "sportivo-barracas": { primary: RED, secondary: "#1f3a93", pattern: "stripes" },
  "sportivo-rincon": { primary: "#1f3a93", secondary: YELLOW, pattern: "band" },
  "real-pilar": { primary: NAVY, secondary: WHITE, pattern: "solid" },

  // ---- Internacionales (colores reales de cada club) ----
  // Brasil
  flamengo: { primary: RED, secondary: BLACK, pattern: "hoops" },
  palmeiras: { primary: GREEN, secondary: WHITE, pattern: "solid" },
  "sao-paulo": { primary: WHITE, secondary: RED, pattern: "band" },
  corinthians: { primary: WHITE, secondary: BLACK, pattern: "solid" },
  gremio: { primary: CELESTE, secondary: BLACK, pattern: "stripes" },
  "internacional-bra": { primary: RED, secondary: WHITE, pattern: "solid" },
  cruzeiro: { primary: BLUE, secondary: WHITE, pattern: "solid" },
  fluminense: { primary: GARNET, secondary: GREEN, pattern: "stripes" },
  "vasco-da-gama": { primary: WHITE, secondary: BLACK, pattern: "sash" },
  botafogo: { primary: BLACK, secondary: WHITE, pattern: "stripes" },
  "atletico-mineiro": { primary: WHITE, secondary: BLACK, pattern: "stripes" },
  bahia: { primary: BLUE, secondary: RED, pattern: "band" },
  "athletico-paranaense": { primary: RED, secondary: BLACK, pattern: "stripes" },
  fortaleza: { primary: BLUE, secondary: RED, pattern: "stripes" },
  santos: { primary: WHITE, secondary: BLACK, pattern: "solid" },
  juventude: { primary: GREEN, secondary: WHITE, pattern: "stripes" },
  coritiba: { primary: GREEN, secondary: WHITE, pattern: "band" },
  cuiaba: { primary: GREEN, secondary: GOLD, pattern: "stripes" },
  goias: { primary: GREEN, secondary: WHITE, pattern: "halves" },

  // Uruguay
  penarol: { primary: GOLD, secondary: BLACK, pattern: "band" },
  "nacional-uru": { primary: WHITE, secondary: BLUE, pattern: "band" },
  danubio: { primary: WHITE, secondary: BLACK, pattern: "band" },
  "defensor-sporting": { primary: PURPLE, secondary: WHITE, pattern: "stripes" },
  "liverpool-uru": { primary: NAVY, secondary: BLACK, pattern: "stripes" },
  "montevideo-wanderers": { primary: WHITE, secondary: "#1f3a93", pattern: "stripes" },
  "cerro-uru": { primary: CELESTE, secondary: WHITE, pattern: "band" },
  "plaza-colonia": { primary: WHITE, secondary: GREEN, pattern: "band" },
  "montevideo-city": { primary: CELESTE, secondary: WHITE, pattern: "solid" },

  // Paraguay
  olimpia: { primary: WHITE, secondary: BLACK, pattern: "band" },
  "cerro-porteno": { primary: RED, secondary: BLUE, pattern: "stripes" },
  libertad: { primary: WHITE, secondary: BLACK, pattern: "stripes" },
  "nacional-par": { primary: WHITE, secondary: BLUE, pattern: "stripes" },
  "guarani-par": { primary: YELLOW, secondary: BLACK, pattern: "stripes" },
  "sportivo-luqueno": { primary: "#1f3a93", secondary: WHITE, pattern: "stripes" },
  "sol-de-america": { primary: BLUE, secondary: RED, pattern: "halves" },
  "doce-de-octubre": { primary: YELLOW, secondary: GREEN, pattern: "band" },

  // Colombia
  "atletico-nacional": { primary: GREEN, secondary: WHITE, pattern: "stripes" },
  millonarios: { primary: BLUE, secondary: WHITE, pattern: "band" },
  "once-caldas": { primary: WHITE, secondary: RED, pattern: "stripes" },
  "deportivo-cali": { primary: GREEN, secondary: WHITE, pattern: "band" },
  "junior-bar": { primary: RED, secondary: WHITE, pattern: "stripes" },
  "independiente-santa-fe": { primary: RED, secondary: WHITE, pattern: "solid" },
  "america-de-cali": { primary: RED, secondary: WHITE, pattern: "band" },
  "deportes-tolima": { primary: GOLD, secondary: GARNET, pattern: "stripes" },
  "independiente-medellin": { primary: RED, secondary: BLUE, pattern: "stripes" },

  // Chile
  "colo-colo": { primary: WHITE, secondary: BLACK, pattern: "band" },
  "u-de-chile": { primary: BLUE, secondary: WHITE, pattern: "solid" },
  "universidad-catolica": { primary: WHITE, secondary: BLUE, pattern: "sash" },
  "union-espanola": { primary: RED, secondary: WHITE, pattern: "solid" },
  huachipato: { primary: BLACK, secondary: "#1f3a93", pattern: "stripes" },
  cobreloa: { primary: ORANGE, secondary: WHITE, pattern: "solid" },
  palestino: { primary: WHITE, secondary: GREEN, pattern: "band" },
  "audax-italiano": { primary: GREEN, secondary: WHITE, pattern: "sash" },

  // Ecuador
  "independiente-del-valle": { primary: NAVY, secondary: WHITE, pattern: "stripes" },
  "liga-de-quito": { primary: WHITE, secondary: "#2a2d34", pattern: "solid" },
  "barcelona-sc": { primary: YELLOW, secondary: BLACK, pattern: "band" },
  emelec: { primary: BLUE, secondary: WHITE, pattern: "band" },
  "deportivo-cuenca": { primary: RED, secondary: WHITE, pattern: "band" },
  aucas: { primary: RED, secondary: YELLOW, pattern: "halves" },
  delfin: { primary: CELESTE, secondary: NAVY, pattern: "stripes" },
  "el-nacional-ecu": { primary: RED, secondary: BLUE, pattern: "band" },
  orense: { primary: YELLOW, secondary: GREEN, pattern: "stripes" },

  // Perú
  universitario: { primary: CREAM, secondary: GARNET, pattern: "band" },
  "alianza-lima": { primary: NAVY, secondary: WHITE, pattern: "band" },
  "sporting-cristal": { primary: CELESTE, secondary: WHITE, pattern: "solid" },
  melgar: { primary: RED, secondary: BLACK, pattern: "stripes" },
  cienciano: { primary: RED, secondary: WHITE, pattern: "solid" },
  "sport-huancayo": { primary: RED, secondary: WHITE, pattern: "halves" },
  "sport-boys": { primary: PINK, secondary: NAVY, pattern: "band" },

  // Bolivia
  "the-strongest": { primary: YELLOW, secondary: BLACK, pattern: "stripes" },
  bolivar: { primary: CELESTE, secondary: WHITE, pattern: "solid" },
  "always-ready": { primary: RED, secondary: BLACK, pattern: "band" },
  blooming: { primary: CELESTE, secondary: WHITE, pattern: "stripes" },
  "nacional-potosi": { primary: PURPLE, secondary: WHITE, pattern: "stripes" },
  "oriente-petrolero": { primary: GREEN, secondary: WHITE, pattern: "solid" },
  wilstermann: { primary: RED, secondary: WHITE, pattern: "band" },

  // Venezuela
  "caracas-fc": { primary: RED, secondary: WHITE, pattern: "stripes" },
  monagas: { primary: NAVY, secondary: GARNET, pattern: "halves" },
  "deportivo-tachira": { primary: GOLD, secondary: BLACK, pattern: "band" },
  carabobo: { primary: GARNET, secondary: NAVY, pattern: "stripes" },
  "deportivo-la-guaira": { primary: ORANGE, secondary: BLACK, pattern: "stripes" },
  "estudiantes-merida": { primary: WHITE, secondary: RED, pattern: "stripes" },
  "zamora-ven": { primary: RED, secondary: BLACK, pattern: "stripes" },

  // ---- Mundial de Clubes: campeones de otras confederaciones ----
  // UEFA
  "real-madrid": { primary: WHITE, secondary: GOLD, pattern: "solid" },
  "manchester-city": { primary: CELESTE, secondary: WHITE, pattern: "solid" },
  "bayern-munich": { primary: RED, secondary: WHITE, pattern: "solid" },
  "paris-sg": { primary: NAVY, secondary: RED, pattern: "band" },
  "liverpool-eng": { primary: RED, secondary: WHITE, pattern: "solid" },
  "inter-milan": { primary: BLUE, secondary: BLACK, pattern: "stripes" },
  // Concacaf
  "club-america": { primary: CREAM, secondary: NAVY, pattern: "solid" },
  monterrey: { primary: "#13294b", secondary: WHITE, pattern: "stripes" },
  "los-angeles-fc": { primary: BLACK, secondary: GOLD, pattern: "band" },
  "leon-mex": { primary: GREEN, secondary: WHITE, pattern: "solid" },
  "seattle-sounders": { primary: GREEN, secondary: NAVY, pattern: "solid" },
  // AFC (Asia)
  "al-hilal": { primary: BLUE, secondary: WHITE, pattern: "solid" },
  "al-ain": { primary: PURPLE, secondary: WHITE, pattern: "solid" },
  "urawa-reds": { primary: RED, secondary: BLACK, pattern: "solid" },
  "ulsan-hyundai": { primary: NAVY, secondary: CELESTE, pattern: "solid" },
  "jeonbuk-motors": { primary: GREEN, secondary: WHITE, pattern: "stripes" },
  // CAF (África)
  "al-ahly": { primary: RED, secondary: WHITE, pattern: "solid" },
  "mamelodi-sundowns": { primary: YELLOW, secondary: BLACK, pattern: "solid" },
  "wydad-casablanca": { primary: RED, secondary: WHITE, pattern: "band" },
  "esperance-tunis": { primary: RED, secondary: YELLOW, pattern: "band" },
  zamalek: { primary: WHITE, secondary: RED, pattern: "band" },
  // OFC (Oceanía)
  "auckland-city": { primary: NAVY, secondary: CELESTE, pattern: "stripes" },
  "wellington-phoenix": { primary: BLACK, secondary: YELLOW, pattern: "solid" },
  "hienghene-sport": { primary: WHITE, secondary: GREEN, pattern: "band" },
  "lautoka-fiji": { primary: BLUE, secondary: GOLD, pattern: "band" },
};

const DEFAULT_KIT: Kit = { primary: "#2a2d34", secondary: "#c9ced4", pattern: "solid" };

/** Kit de un club por slug; cae a un kit neutro si no está mapeado. */
export function getKit(slug: string | null | undefined): Kit {
  return (slug && KITS[slug]) || DEFAULT_KIT;
}
