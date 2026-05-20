import logoPath from "@assets/innova_logo_head-1_1779300232995.png";

export function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <img src={logoPath} alt="Innova Piscinas" className="h-12 brightness-0 invert" />
            <p className="mt-4 text-white/60 max-w-sm text-sm">
              Especialistas en instalación de piscinas de fibra de vidrio. Transformamos tu patio en un oasis en solo 5 días.
            </p>
          </div>
          
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-white mb-2">Enlaces</h5>
              <a href="#modelos" className="text-white/60 hover:text-primary transition-colors text-sm">Modelos</a>
              <a href="#caracteristicas" className="text-white/60 hover:text-primary transition-colors text-sm">Catálogo</a>
              <a href="#contacto" className="text-white/60 hover:text-primary transition-colors text-sm">Contacto</a>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-white mb-2">Social</h5>
              <a href="https://instagram.com/innovapisc" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors text-sm">Instagram</a>
              <a href="https://wa.me/5493543437295" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors text-sm">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Innova Piscinas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
