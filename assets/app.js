// Three design directions on one page. Only one version is shown at a time; switching swaps the
// markup, the theme tokens and the dot-space choreography (each version has its own shapes,
// palette and display font). The dot-space look and motion come from the kit and stay as approved.
import { mountSpace, at } from "./kit/dot-space.js";

const phone = at(0.5, 0.3, 0.34, 0.2);
const ball = { wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 };
const hole = { wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) };

const VERSIONS = {
  a: {
    sky: ["#18191b", "#0d0e0f", "#08090a"],
    // accent, light, warm, secondary
    palette: ["#ff6a2b", "#f4f2ee", "#ff9d6e", "#8d959e"],
    font: '700 240px "Inter Tight", system-ui, sans-serif',
    steps: [
      { anchor: "#a-programok", shape: "racket", wide: at(0.835, 0.58, 0.1, 0.28), narrow: phone },
      { anchor: "#a-palyak", shape: "courtLines", wide: at(0.835, 0.6, 0.12, 0.3), narrow: phone },
      // the club's best indoor national championship: 6 gold, 3 silver, 1 bronze
      { anchor: "#a-eredmenyek-title", done: 0.5, shape: { word: "6·3·1" }, wide: at(0.74, 0.5, 0.19, 0.3), narrow: at(0.5, 0.3, 0.3, 0.2) },
      { anchor: "#a-sztarok", shape: "ball", ...ball },
      { anchor: "#a-final", shape: "blackhole", ...hole },
    ],
  },
  b: {
    sky: ["#261c14", "#160f0b", "#0d0907"],
    palette: ["#d9a75e", "#efe6d6", "#d4592c", "#a8957a"],
    font: 'italic 400 260px "Instrument Serif", Georgia, serif',
    steps: [
      // founded by Bogyó László and his wife in 1992
      { anchor: "#b-tortenet-title", done: 0.5, shape: { word: "1992" }, wide: at(0.72, 0.5, 0.2, 0.3), narrow: at(0.5, 0.3, 0.34, 0.2) },
      { anchor: "#b-programok", shape: "racket", wide: at(0.17, 0.58, 0.1, 0.28), narrow: phone },
      { anchor: "#b-palyak", shape: "courtLines", wide: at(0.835, 0.6, 0.12, 0.3), narrow: phone },
      { anchor: "#b-cimlap", shape: "ball", ...ball },
      { anchor: "#b-final", shape: "blackhole", ...hole },
    ],
  },
  c: {
    sky: ["#10305a", "#0a1d38", "#061325"],
    palette: ["#d7f04a", "#ffffff", "#ff8a4c", "#4cb8ee"],
    font: '800 250px "Bricolage Grotesque", system-ui, sans-serif',
    steps: [
      // the ovi-suli programme is for 4–8 year olds
      { anchor: "#c-ovi-title", done: 0.5, shape: { word: "4–8" }, wide: at(0.74, 0.5, 0.2, 0.3), narrow: at(0.5, 0.3, 0.3, 0.2) },
      { anchor: "#c-edzesek", shape: "racket", wide: at(0.835, 0.58, 0.1, 0.28), narrow: phone },
      { anchor: "#c-palyak", shape: "courtLines", wide: at(0.165, 0.6, 0.12, 0.3), narrow: phone },
      { anchor: "#c-csapat", shape: "ball", ...ball },
      { anchor: "#c-final", shape: "blackhole", ...hole },
    ],
  },
};

VERSIONS.d = {
  sky: ["#131411", "#0a0b09", "#060605"],
  palette: ["#d9ff3f", "#f4f7e6", "#b9e02c", "#7d8a52"],
  font: '800 260px "Archivo", system-ui, sans-serif',
  steps: [
    { anchor: "#d-programok", shape: "racket", wide: at(0.835, 0.58, 0.1, 0.28), narrow: phone },
    { anchor: "#d-palyak", shape: "courtLines", wide: at(0.165, 0.6, 0.12, 0.3), narrow: phone },
    // the Champions Bowl world final: 27 countries, a 27-strong Hungarian team
    { anchor: "#d-cb-title", done: 0.5, shape: { word: "27" }, wide: at(0.77, 0.5, 0.16, 0.3), narrow: at(0.5, 0.3, 0.26, 0.2) },
    { anchor: "#d-sztarok", shape: "ball", ...ball },
    { anchor: "#d-final", shape: "blackhole", ...hole },
  ],
};

VERSIONS.e = {
  sky: ["#0d1218", "#070a0e", "#040507"],
  palette: ["#ffb547", "#ffffff", "#ffd08a", "#7f93a8"],
  font: '500 250px "Geist", system-ui, sans-serif',
  steps: [
    { anchor: "#e-edzesek", shape: "racket", wide: at(0.835, 0.58, 0.1, 0.28), narrow: phone },
    { anchor: "#e-palyak", shape: "courtLines", wide: at(0.165, 0.6, 0.12, 0.3), narrow: phone },
    // open every day from 07:00 to 21:00
    { anchor: "#e-nyitva-title", done: 0.5, shape: { word: "07–21" }, wide: at(0.765, 0.5, 0.18, 0.3), narrow: at(0.5, 0.3, 0.32, 0.2) },
    { anchor: "#e-csapat", shape: "ball", ...ball },
    { anchor: "#e-final", shape: "blackhole", ...hole },
  ],
};

VERSIONS.f = {
  sky: ["#0b0d12", "#06070a", "#030405"],
  palette: ["#2f6bff", "#f5f6f8", "#7aa2ff", "#8a93a6"],
  font: '700 260px "Space Grotesk", system-ui, sans-serif',
  steps: [
    { anchor: "#f-ut", shape: "racket", wide: at(0.835, 0.58, 0.1, 0.28), narrow: phone },
    { anchor: "#f-palyak", shape: "courtLines", wide: at(0.165, 0.6, 0.12, 0.3), narrow: phone },
    // competitive juniors train 15 hours a week
    { anchor: "#f-15-title", done: 0.5, shape: { word: "15" }, wide: at(0.77, 0.5, 0.16, 0.3), narrow: at(0.5, 0.3, 0.26, 0.2) },
    { anchor: "#f-csapat", shape: "ball", ...ball },
    { anchor: "#f-final", shape: "blackhole", ...hole },
  ],
};

VERSIONS.g = {
  sky: ["#151515", "#0c0c0c", "#070707"],
  palette: ["#ffffff", "#ececec", "#bcbcbc", "#7c7c7c"],
  font: '800 300px "Barlow Condensed", "Arial Narrow", sans-serif',
  steps: [
    { anchor: "#g-programok", shape: "racket", wide: at(0.835, 0.58, 0.1, 0.28), narrow: phone },
    { anchor: "#g-palyak", shape: "courtLines", wide: at(0.165, 0.6, 0.12, 0.3), narrow: phone },
    // DTK, the club monogram printed on the coaches' shirts
    { anchor: "#g-csapat-title", done: 0.5, shape: { word: "DTK" }, wide: at(0.775, 0.5, 0.17, 0.3), narrow: at(0.5, 0.3, 0.28, 0.2) },
    { anchor: "#g-sztarok", shape: "ball", ...ball },
    { anchor: "#g-final", shape: "blackhole", ...hole },
  ],
};

const root = document.documentElement;
let field = null;
let current = null;

function pick() {
  const v = new URLSearchParams(location.search).get("v");
  return v && VERSIONS[v] ? v : "a";
}

function show(v, { push = false } = {}) {
  if (v === current) return;
  current = v;
  const cfg = VERSIONS[v];
  root.dataset.v = v;
  root.classList.remove("menu-open");
  root.style.setProperty("--space-sky-top", cfg.sky[0]);
  root.style.setProperty("--space-sky-mid", cfg.sky[1]);
  root.style.setProperty("--space-sky-bottom", cfg.sky[2]);
  for (const el of document.querySelectorAll(".ver")) {
    const on = el.dataset.ver === v;
    el.hidden = !on;
    el.inert = !on;
  }
  for (const b of document.querySelectorAll("[data-switch]")) b.setAttribute("aria-current", String(b.dataset.switch === v));
  if (push) history.pushState(null, "", `?v=${v}`);
  scrollTo({ top: 0, behavior: "instant" });

  if (field) {
    // free the old WebGL context right away instead of waiting for garbage collection
    const gl = document.querySelector(".space-field canvas")?.getContext("webgl2") ?? document.querySelector(".space-field canvas")?.getContext("webgl");
    field.destroy();
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  }
  field = mountSpace({ steps: cfg.steps, palette: cfg.palette, font: cfg.font });
  const scope = document.querySelector(`.ver[data-ver="${v}"]`);
  revealAll(scope);
  watchTicks(scope);
}

// chapter ticks (version E): mark the chapter that holds the middle of the screen
let tickIO = null;
function watchTicks(scope) {
  tickIO?.disconnect();
  const links = [...scope.querySelectorAll("[data-ticks] a[href^='#']")];
  if (!links.length) return;
  const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  tickIO = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        for (const a of links) a.setAttribute("aria-current", String(a === byId.get(en.target.id)));
      }
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );
  for (const id of byId.keys()) {
    const el = document.getElementById(id);
    if (el) tickIO.observe(el);
  }
}

document.addEventListener("click", (e) => {
  const sw = e.target.closest("[data-switch]");
  if (sw) {
    e.preventDefault();
    show(sw.dataset.switch, { push: true });
    return;
  }
  if (e.target.closest("[data-menu]")) {
    root.classList.toggle("menu-open");
    return;
  }
  // close the phone menu when one of its links is used
  if (e.target.closest(".menu a")) root.classList.remove("menu-open");
});
addEventListener("popstate", () => show(pick()));
addEventListener("keydown", (e) => {
  if (e.key === "Escape") root.classList.remove("menu-open");
});

// header turns to smoky glass once the page moves
const onScroll = () => root.classList.toggle("scrolled", scrollY > 24);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// gentle entrance for content blocks
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const io = reduce
  ? null
  : new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
function revealAll(scope) {
  for (const el of scope.querySelectorAll(".rv:not(.in)")) {
    if (io) io.observe(el);
    else el.classList.add("in");
  }
}

// segmented toggles (summer / winter, programme groups): buttons with data-tab inside [data-tabs]
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-tab]");
  if (!t) return;
  const group = t.closest("[data-tabs]");
  for (const b of group.querySelectorAll("[data-tab]")) b.setAttribute("aria-selected", String(b === t));
  const scope = group.closest("[data-tabscope]") ?? group.parentElement;
  for (const p of scope.querySelectorAll("[data-panel]")) p.hidden = p.dataset.panel !== t.dataset.tab;
});

// version C: the fact stickers can be picked up and moved
for (const s of document.querySelectorAll("[data-sticker]")) {
  let sx = 0, sy = 0, ox = 0, oy = 0, id = null;
  s.addEventListener("pointerdown", (e) => {
    id = e.pointerId;
    s.setPointerCapture(id);
    sx = e.clientX;
    sy = e.clientY;
    ox = parseFloat(s.style.getPropertyValue("--dx")) || 0;
    oy = parseFloat(s.style.getPropertyValue("--dy")) || 0;
    s.classList.add("held");
  });
  s.addEventListener("pointermove", (e) => {
    if (e.pointerId !== id) return;
    s.style.setProperty("--dx", ox + e.clientX - sx + "px");
    s.style.setProperty("--dy", oy + e.clientY - sy + "px");
  });
  const drop = (e) => {
    if (e.pointerId !== id) return;
    id = null;
    s.classList.remove("held");
  };
  s.addEventListener("pointerup", drop);
  s.addEventListener("pointercancel", drop);
}

show(pick());
