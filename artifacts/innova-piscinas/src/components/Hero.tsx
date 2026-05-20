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
          className="flex gap-3 justify-center flex-wrap"
        >
          {/* Primary CTA */}
          <motion.a
            href="#modelos"
            data-testid="button-ver-modelos"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-semibold text-base rounded-full px-8 py-4 shadow-xl shadow-primary/40 transition-colors duration-300"
          >
            Ver Modelos
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>

          {/* Ghost CTA */}
          <motion.a
            href="https://wa.me/5493543437295?text=Hola!%20Me%20interesa%20una%20piscina."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-whatsapp-hero"
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-white/35 text-white font-semibold text-base rounded-full px-8 py-4 bg-white/8 backdrop-blur-md transition-colors duration-300"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.12 1.523 5.845L0 24l6.335-1.49A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.563 9.563 0 01-4.885-1.338l-.35-.208-3.621.852.9-3.528-.228-.362A9.565 9.565 0 012.4 12c0-5.295 4.305-9.6 9.6-9.6 5.295 0 9.6 4.305 9.6 9.6 0 5.295-4.305 9.6-9.6 9.6z"/>
            </svg>
            Consultar ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
