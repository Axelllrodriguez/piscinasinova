import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const images = [
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piscinas_fibra_akuma.png",
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piscinas_fibra_tulum.png",
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piscinas_fibra_spa.png",
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/galeria_piscinas_tulum_02.jpg",
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piletas-de-fibra-_0002_Capa-4-1500x630.jpg",
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piletas-de-fibra-_0005_Capa-1-1500x630.jpg",
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/slide_piscinas_03-1500x630.jpg",
  "https://www.innovapiscinas.com.ar/web/wp-content/uploads/OFERTA_picinas_fibra_cordoba-1500x630.jpg"
];

export function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotateX = useTransform(smoothProgress, [0, 0.5], [15, 0]);
  const rotateZ = useTransform(smoothProgress, [0, 0.5], [20, 0]);
  
  const x1 = useTransform(smoothProgress, [0, 1], ["-20%", "20%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["20%", "-20%"]);
  const x3 = useTransform(smoothProgress, [0, 1], ["-10%", "30%"]);

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden relative perspective-[1000px]">
      
      <div className="container mx-auto px-4 mb-20 text-center relative z-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">La Pileta de tus Sueños</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Instalación rápida, limpia y garantizada en 5 días.
        </p>
      </div>

      <motion.div 
        style={{ rotateX, rotateZ }}
        className="flex flex-col gap-8 mx-auto w-[120vw] -ml-[10vw]"
      >
        <motion.div style={{ x: x1 }} className="flex gap-8 w-max">
          {[...images, ...images].slice(0, 5).map((src, i) => (
            <GalleryImage key={`r1-${i}`} src={src} />
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-8 w-max -ml-[20vw]">
          {[...images, ...images].slice(3, 8).map((src, i) => (
            <GalleryImage key={`r2-${i}`} src={src} />
          ))}
        </motion.div>
        
        <motion.div style={{ x: x3 }} className="flex gap-8 w-max">
          {[...images, ...images].slice(1, 6).map((src, i) => (
            <GalleryImage key={`r3-${i}`} src={src} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function GalleryImage({ src }: { src: string }) {
  return (
    <motion.div 
      whileHover={{ y: -20 }}
      className="w-[20rem] md:w-[30rem] h-[16rem] md:h-[24rem] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 relative group"
    >
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      <img src={src} alt="Piscina Innova" className="w-full h-full object-cover" />
    </motion.div>
  );
}
