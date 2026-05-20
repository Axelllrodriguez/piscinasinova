import { motion } from "framer-motion";

const testimonials = [
  { name: "Conrado Leguizamon", role: "Cliente verificado", text: "Excelente atención precios y calidad, súper recomendables", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJy8u4EQWVhkaSRq-lmH-OJKYk8L4SmUMzM9IMwDqDm=s120" },
  { name: "poetacontemporaneo", role: "Cliente verificado", text: "Excelente el asesoramiento, muy completo todo, el trabajo que brindan, la información. Son verdaderamente profesionales en el rubro", avatar: "https://lh3.googleusercontent.com/a/AATXAJzlk0T0wcBSls6bm1bnwnOGqhRQIuH_sDeHf_p22A=s40" },
  { name: "Rocío Lescano", role: "Cliente verificada", text: "Exelente servicio! Feliz con mi pile nueva, disfrutando este caluroso verano!", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWVUdzwvnB8tTIK7614fH_Rqw8UKiN1o6zIF_1NXG2zRjQ=s120" },
  { name: "Adrian Collado", role: "Cliente verificado", text: "Excelente atención desde el primer día. Cumplieron con todo lo comprometido. Los instaladores muy eficientes, muy buen trabajo y muy rápidos. Estamos muy conformes. Totalmente recomendables", avatar: "https://lh3.googleusercontent.com/a/ACg8ocIgBCdiM0QQIAeocU1xYoRLsmKxkP5xp1Is-uQisTKj_5Sbqg=s120" },
  { name: "Pachi Lamberghini", role: "Cliente verificada", text: "Atención de 10, quedamos re conformes con la piscina!", avatar: "https://lh3.googleusercontent.com/a/ACg8ocLhPoFxJ_ftYqwduz42iMlATBDwyaA5lC4jY52BQWI_3KNpSg=s64" },
  { name: "Ventas Asesoramiento Innova", role: "Equipo Innova", text: "Muy buen servicio de instalación y postventa", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJm2TxOxd1V2ADhkk5e1tf07WGObnKGDLp3bRUT8-nZ=s120" }
];

function TestimonialColumn({ speed, items }: { speed: number, items: typeof testimonials }) {
  return (
    <div className="flex flex-col gap-6 overflow-hidden h-full relative no-scrollbar">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex flex-col gap-6"
      >
        {[...items, ...items].map((t, i) => (
          <div key={i} className="bg-card p-8 rounded-3xl border border-border/10 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-32 bg-[#0a192f] text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Lo que dicen de nosotros</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Familias que ya disfrutan de su oasis personal.</p>
        </div>

        <div className="h-[600px] grid grid-cols-1 md:grid-cols-3 gap-6 relative mask-image-vertical">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f] z-10 pointer-events-none" />
          
          <TestimonialColumn speed={30} items={testimonials.slice(0, 3)} />
          <TestimonialColumn speed={40} items={testimonials.slice(3, 6)} />
          <TestimonialColumn speed={35} items={testimonials} />
        </div>
      </div>
    </section>
  );
}
