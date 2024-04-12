import { p as c } from "./ReadParams.BHF6V6wu.js";
const { width: l, height: n, maxHeight: r, theme: d, background: s } = c;
document.documentElement.setAttribute("data-theme", d);
const i = {
    "--excalidraw-width": `${l}px`,
    "--excalidraw-max-width": `${l}px`,
    "--excalidraw-height": `${n}px`,
    "--excalidraw-max-height": `${r}px`,
    "--excalidraw-background": s,
  },
  a = document.querySelector(":root");
Object.entries(i).forEach(([e, t]) => {
  t && a.style.setProperty(e, t);
});
window.listenScroll = (e) => {
  
    window.document.addEventListener("scroll", (t) => {
      const o = t.target.documentElement;
      e({ scrollTop: o.scrollTop, scrollLeft: o.scrollLeft, element: o });
    }, { passive: true, capture: true });
};
window.setScrollTop = (e) => {
  window.document.documentElement.scrollTop = e;
};
window.setScrollLeft = (e) => {
  window.document.documentElement.scrollLeft = e;
};
