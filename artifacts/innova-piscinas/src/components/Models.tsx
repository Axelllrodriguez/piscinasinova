import { motion } from "framer-motion";

const models = [
  {
    name: "Akumal",
    description: "Diseño minimalista con playa húmeda integrada.",
    image: "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piscinas_fibra_akuma.png"
  },
  {
    name: "Tulum",
    description: "Elegancia clásica, escaleras amplias y gran capacidad.",
    image: "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piscinas_fibra_tulum.png"
  },
  {
    name: "Spa · Jacuzzi",
    description: "Relajación total. Hidromasaje para 6 personas.",
    image: "https://www.innovapiscinas.com.ar/web/wp-content/uploads/piscinas_fibra_spa.png"
  }
];

export function Models() {
  return (
    <section id="modelos" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Modelos</h2>
          <p className="text-lg text-muted-foreground">Diseños pensados para cada estilo de vida.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <motion.div 
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30">
                <div className="aspect-[4/3] overflow-hidden bg-white p-8 flex items-center justify-center">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{model.name}</h3>
                  <p className="text-muted-foreground">{model.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
