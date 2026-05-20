import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const fields = [
    { id: "name", label: "Nombre completo", type: "text", placeholder: "Juan García" },
    { id: "email", label: "Email", type: "email", placeholder: "juan@email.com" },
    { id: "phone", label: "Teléfono", type: "tel", placeholder: "+54 9 351 000 0000" },
  ];

  return (
    <section
      id="contacto"
      className="relative bg-[#0a0f14] text-white overflow-hidden"
    >
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-28 max-w-6xl">

        {/* ── top label ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.25em] uppercase text-primary mb-6 font-medium"
        >
          Contacto
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── LEFT: headline + info ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10"
            >
              Empecemos a planear
              <br />
              <span className="text-primary">tu verano.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="space-y-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Teléfono</p>
                  <a
                    href="tel:+5403543437295"
                    className="text-xl font-semibold hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    (03543) 437 295
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Ubicación</p>
                  <p className="text-xl font-semibold">Córdoba, Argentina</p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA — editorial style */}
            <motion.a
              href="https://wa.me/5493543437295?text=Hola!%20Me%20interesa%20consultar%20sobre%20una%20piscina."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 hover:border-[#25D366]/60 text-white rounded-2xl px-7 py-4 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle size={18} fill="white" strokeWidth={0} />
              </div>
              <span className="font-medium text-[15px]">Escribinos por WhatsApp</span>
              <ArrowRight
                size={16}
                className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              />
            </motion.a>
          </div>

          {/* ── RIGHT: minimal line-input form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-24 text-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <p className="text-2xl font-semibold">¡Consulta enviada!</p>
                <p className="text-white/50 text-sm">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {fields.map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative py-6 border-b border-white/10"
                  >
                    <label
                      htmlFor={field.id}
                      className={`absolute left-0 transition-all duration-300 pointer-events-none font-medium ${
                        focused === field.id
                          ? "top-1 text-[10px] tracking-widest uppercase text-primary"
                          : "top-6 text-sm text-white/35"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={focused === field.id ? field.placeholder : ""}
                      onFocus={() => setFocused(field.id)}
                      onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                      data-testid={`input-${field.id}`}
                      className="w-full bg-transparent border-none outline-none text-white text-base pt-5 pb-0 placeholder:text-white/20 autofill:bg-transparent"
                      style={{ WebkitBoxShadow: "0 0 0 1000px transparent inset", WebkitTextFillColor: "white" }}
                    />
                    {/* focus line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focused === field.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0, width: "100%" }}
                    />
                  </motion.div>
                ))}

                {/* message textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24 }}
                  className="relative py-6 border-b border-white/10 mb-10"
                >
                  <label
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none font-medium ${
                      focused === "message"
                        ? "top-1 text-[10px] tracking-widest uppercase text-primary"
                        : "top-6 text-sm text-white/35"
                    }`}
                  >
                    ¿Qué estás buscando?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder={focused === "message" ? "Contanos tu idea..." : ""}
                    onFocus={() => setFocused("message")}
                    onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                    data-testid="input-message"
                    className="w-full bg-transparent border-none outline-none text-white text-base pt-5 pb-0 resize-none placeholder:text-white/20"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focused === "message" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0, width: "100%" }}
                  />
                </motion.div>

                {/* submit — minimal pill with arrow */}
                <motion.button
                  type="submit"
                  data-testid="button-submit-contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-4 bg-primary hover:bg-accent text-white font-semibold text-base rounded-full px-8 py-4 transition-colors duration-300 shadow-lg shadow-primary/20"
                >
                  <span>Enviar consulta</span>
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
