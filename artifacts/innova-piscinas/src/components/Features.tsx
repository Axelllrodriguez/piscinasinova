import { motion } from "framer-motion";
import { Clock, ShieldCheck, Waves } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Lista en 5 días",
      desc: "Instalación rápida y eficiente para que empieces a disfrutar desde el primer momento."
    },
    {
      icon: ShieldCheck,
      title: "Garantía de calidad",
      desc: "Materiales premium de fibra de vidrio con alta durabilidad y resistencia."
    },
    {
      icon: Waves,
      title: "Todo incluido",
      desc: "Bomba, filtro y accesorios listos para usar. Sin sorpresas."
    }
  ];

  return (
    <section id="caracteristicas" className="relative py-32 overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-5 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/water-ripple.png')" }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Por qué elegirnos</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Más de 15 años instalando sueños en hogares de toda Argentina.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                <f.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
