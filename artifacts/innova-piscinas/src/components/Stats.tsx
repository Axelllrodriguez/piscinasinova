import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-2">+1000</h2>
            <p className="text-2xl font-light text-primary-foreground/80">Piscinas Instaladas</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-2">+15</h2>
            <p className="text-2xl font-light text-primary-foreground/80">Años de Experiencia</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
