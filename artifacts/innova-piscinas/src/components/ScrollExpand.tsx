import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollExpand() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 1]);
  const leftX = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-150%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* The expanding image */}
        <motion.div 
          style={{ scale }}
          className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center origin-center z-10"
        >
          <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/pool-overhead.png"
              alt="Piscina expanding view"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Splitting Text */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
          <div className="flex gap-4 md:gap-8 items-center justify-center w-full">
            <motion.h2 
              style={{ x: leftX, opacity: textOpacity }}
              className="text-4xl md:text-7xl lg:text-9xl font-bold text-foreground tracking-tighter whitespace-nowrap"
            >
              Tu Piscina
            </motion.h2>
            <motion.h2 
              style={{ x: rightX, opacity: textOpacity }}
              className="text-4xl md:text-7xl lg:text-9xl font-bold text-primary tracking-tighter whitespace-nowrap"
            >
              en 5 Días
            </motion.h2>
          </div>
        </div>

      </div>
    </section>
  );
}
