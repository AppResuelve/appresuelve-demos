import { useState, useEffect } from "react";

/*
  ScallopDivider — semicírculos tipo "festón" entre secciones.

  Props:
    fromColor  — color de la sección de origen (los scallops son de este color
                 y "muerden" hacia la sección siguiente)
    variant    — 'absolute' (default) | 'inline'
                  absolute: se posiciona dentro de la sección con position absoluta
                  inline:   fluye en el documento (para usarlo fuera de un `relative`)
    position   — 'top' (default) | 'bottom'
                  top:    absolute top-0 — scallops cuelgan desde arriba hacia abajo
                  bottom: absolute bottom-0 — scallops cuelgan desde abajo hacia afuera

  Implementación:
    - Desktop (≥640px): viewBox 1440×44, 18 arcos de r=40 → semicírculos amplios y espaciados
    - Mobile  (<640px): viewBox  360×30,  6 arcos de r=30 → pocos semicírculos bien proporcionados
    El viewBox cambia con el breakpoint para que los arcos NO se distorsionen
    con preserveAspectRatio="none".
*/

const DESKTOP = {
  vbW: 1440,
  vbH: 44,
  r: 40,
  count: 18,
};
const MOBILE = {
  vbW: 360,
  vbH: 34,
  r: 30,
  count: 6,
};

function buildPath({ vbW, vbH, r, count }) {
  const d = r * 2;
  // Empezamos desde la esquina top-left, bajamos 3px (línea), luego arcos hacia la izquierda
  const arcs = Array.from(
    { length: count },
    () => `a${r},${r} 0 0,1 -${d},0`,
  ).join(" ");
  return `M0,0 L${vbW},0 L${vbW},3 ${arcs} L0,3 Z`;
}

const PATH_DESKTOP = buildPath(DESKTOP);
const PATH_MOBILE = buildPath(MOBILE);

export function ScallopDivider({ fromColor, variant = "absolute", position = "top" }) {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const cfg = mobile ? MOBILE : DESKTOP;

  let posClass = "w-full";
  if (variant === "absolute") {
    posClass = position === "top"
      ? "absolute top-0 left-0 w-full"
      : "absolute bottom-0 left-0 w-full";
  }

  return (
    <div
      className={`${posClass} overflow-hidden leading-none pointer-events-none`}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${cfg.vbW} ${cfg.vbH}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        style={{ display: "block", width: "100%", height: cfg.vbH }}
      >
        <path d={mobile ? PATH_MOBILE : PATH_DESKTOP} fill={fromColor} />
      </svg>
    </div>
  );
}
