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
      {/* ─── SVG water-distortion filter (hidden) ─── */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          {/*
            filterRegion set to exact 0-100% so the displaced pixels
            cannot sample from outside the element bounds.
          */}
          <filter
            id="water-wave"
            x="0%" y="0%" width="100%" height="100%"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.010 0.005"
              numOctaves="3"
              seed="5"
              result="turb"
            >
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.010 0.005;0.014 0.008;0.011 0.006;0.010 0.005"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/*
              feComposite "in" clips the displaced output back to
              the alpha of the source — prevents bleed outside element.
            */}
            <feComposite in="displaced" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* ─── Layer 1: static base image ─── */}
      <img
        src="/hero-pool.png"
        alt="Piscina hero background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />

      {/*
        ─── Layer 2: water distortion — masked to the pool surface only ───
        mask-image fades in only over the lower ~35-40% of the frame
        (where the pool water lives in the photo).
        The SVG filter distorts only what's visible through the mask,
        so trees/grass/sky are never touched.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          filter: "url(#water-wave)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 52%, rgba(0,0,0,0.6) 60%, black 68%)",
          maskImage:
            "linear-gradient(to bottom, transparent 52%, rgba(0,0,0,0.6) 60%, black 68%)",
        }}
      >
        <img
          src="/hero-pool.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ─── Layer 3: gradient overlays ─── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/70"
        style={{ zIndex: 3 }}
      />
      <div
        className="absolute inset-0 bg-primary/20 mix-blend-multiply"
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
          <span className="text-primary">5 días</span>
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
    </section>
  );
}
