import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X, Menu } from "lucide-react";
import logoPath from "@assets/innova_logo_head-1_1779300232995.png";

const links = [
  { label: "Piscinas", href: "#modelos" },
  { label: "Catálogo", href: "#modelos" },
  { label: "Ofertas", href: "#contacto" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        animate={{
          backgroundColor: scrolled ? "rgba(8,14,20,0.88)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)}>
            <img
              src={logoPath}
              alt="Innova Piscinas"
              className="h-10 w-auto"
              data-testid="img-logo"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink key={l.label} href={l.href} label={l.label} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacto"
              data-testid="link-nav-contacto"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors px-4 py-2"
            >
              Consultar
            </a>
            <WhatsAppPill />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Abrir menú"
            data-testid="button-menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-[#080e14] px-8 pt-24 pb-12"
          >
            {/* close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              data-testid="button-menu-close"
            >
              <X size={20} />
            </button>

            <nav className="flex flex-col gap-2 mb-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-3xl font-bold text-white/80 hover:text-white py-3 border-b border-white/8 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              <WhatsAppPill fullWidth />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── NavLink with underline animation ── */
function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-4 py-2 text-sm font-medium text-white/65 hover:text-white transition-colors duration-200"
    >
      {label}
      <motion.span
        className="absolute bottom-1 left-4 right-4 h-px bg-primary rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ originX: 0.5 }}
      />
    </a>
  );
}

/* ── Reusable WhatsApp pill CTA ── */
function WhatsAppPill({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <motion.a
      href="https://wa.me/5493543437295?text=Hola!%20Me%20interesa%20una%20piscina."
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-whatsapp-nav"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center justify-center gap-2.5
        bg-primary hover:bg-accent
        text-white text-sm font-semibold
        rounded-full px-5 py-2.5
        shadow-md shadow-primary/25
        transition-colors duration-300
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {/* WhatsApp icon (inline SVG, no library needed) */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.12 1.523 5.845L0 24l6.335-1.49A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.563 9.563 0 01-4.885-1.338l-.35-.208-3.621.852.9-3.528-.228-.362A9.565 9.565 0 012.4 12c0-5.295 4.305-9.6 9.6-9.6 5.295 0 9.6 4.305 9.6 9.6 0 5.295-4.305 9.6-9.6 9.6z"/>
      </svg>
      WhatsApp
    </motion.a>
  );
}
