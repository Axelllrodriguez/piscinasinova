import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "absolute rounded-full pointer-events-none";
      const size = Math.random() * 60 + 20;
      ripple.style.cssText = `
        width:${size}px; height:${size}px;
        left:${e.clientX - size / 2}px; top:${e.clientY - size / 2}px;
        border: 1.5px solid rgba(255,255,255,0.45);
        transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        transform: scale(0);
        opacity: 1;
      `;
      container.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = "scale(3.5)";
        ripple.style.opacity = "0";
      });
      setTimeout(() => ripple.remove(), 1200);
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () => container.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ─── SVG water-distortion filter (hidden, 0×0) ─── */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter id="water-wave" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.012 0.006"
              numOctaves="4"
              seed="3"
              result="turb"
            >
              {/* gently shift base frequency to create organic wave motion */}
              <animate
                attributeName="baseFrequency"
                dur="9s"
                values="0.012 0.006;0.016 0.009;0.013 0.007;0.012 0.006"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ─── Layer 1: fully static background image ─── */}
      <img
        src="/hero-pool.png"
        alt="Piscina hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        style={{ zIndex: 1 }}
      />

      {/* ─── Layer 2: same image clipped to pool area + water distortion filter ─── */}
      {/*
          The pool in the hero image occupies roughly the lower 48% of the frame,
          running diagonally. The clip-path isolates just that water surface region.
          The water-wave SVG filter applies organic turbulence to only this clip.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          clipPath: "polygon(0% 52%, 55% 42%, 100% 50%, 100% 100%, 0% 100%)",
          filter: "url(#water-wave)",
        }}
      >
        <img
          src="/hero-pool.png"
          alt=""
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* ─── Layer 3: gradient overlays ─── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/75"
        style={{ zIndex: 3 }}
      />
      <div
        className="absolute inset-0 bg-primary/25 mix-blend-multiply"
        style={{ zIndex: 4 }}
      />

      {/* ─── Layer 4: text content ─── */}
      <div
        className="relative text-center text-white px-4 max-w-4xl mx-auto mt-20"
        style={{ zIndex: 10 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tight mb-6 leading-none"
        >
          Tu piscina en{" "}
          <span className="text-primary" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
            5 días
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="text-lg md:text-2xl font-light mb-10 text-white/85 max-w-2xl mx-auto"
        >
          Instalamos oasis de fibra de vidrio en todo Argentina.
          <br />
          Disfrutá de un verano diferente con Innova Piscinas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white rounded-full px-10 py-6 text-lg h-auto shadow-lg shadow-primary/30"
            asChild
          >
            <a href="#modelos" data-testid="button-ver-modelos">Ver Modelos</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white bg-white/10 hover:bg-white/20 rounded-full px-10 py-6 text-lg h-auto backdrop-blur-sm"
            asChild
          >
            <a
              href="https://wa.me/5493543437295"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-hero"
            >
              Consultar ahora
            </a>
          </Button>
        </motion.div>
      </div>

      {/* ─── scroll indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/30"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
