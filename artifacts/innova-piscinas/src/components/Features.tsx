import { motion } from "framer-motion";
import { Clock, ShieldCheck, Waves } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Lista en 5 días",
      desc: "Instalación rápida y eficiente para que empieces a disfrutar."
    },
    {
      icon: ShieldCheck,
      title: "Garantía de calidad",
      desc: "Materiales premium de fibra de vidrio con alta durabilidad."
    },
    {
      icon: Waves,
      title: "Todo incluido",
      desc: "Bomba, filtro y accesorios listos para usar."
    }
  ];

  return (
    <section id="caracteristicas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <f.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
