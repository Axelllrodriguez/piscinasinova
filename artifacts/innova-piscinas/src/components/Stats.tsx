import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="relative py-32 overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/pool-night.png"
          alt="Piscina nocturna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-7xl md:text-9xl font-black mb-3 bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">+1000</h2>
            <p className="text-xl md:text-2xl font-light text-white/80 tracking-wide uppercase">Piscinas Instaladas</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-7xl md:text-9xl font-black mb-3 bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">+15</h2>
            <p className="text-xl md:text-2xl font-light text-white/80 tracking-wide uppercase">Años de Experiencia</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
