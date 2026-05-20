import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Minimal ripple logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handlePointerMove = (e: PointerEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "absolute rounded-full border border-white/40 pointer-events-none";
      
      const size = Math.random() * 40 + 20;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - size/2}px`;
      ripple.style.top = `${e.clientY - size/2}px`;
      ripple.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
      ripple.style.transform = "scale(0)";
      ripple.style.opacity = "1";
      
      container.appendChild(ripple);
      
      requestAnimationFrame(() => {
        ripple.style.transform = "scale(3)";
        ripple.style.opacity = "0";
      });
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () => container.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
        <img 
          src="/hero-pool.png" 
          alt="Piscina hero background" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Tu piscina en <br/><span className="text-primary-foreground">5 días</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl font-light mb-10 text-white/90 max-w-2xl mx-auto"
        >
          Instalamos oasis de fibra de vidrio en todo Argentina. Disfrutá de un verano diferente con Innova Piscinas.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button size="lg" className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg h-auto" asChild>
            <a href="#modelos">Ver Modelos</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
