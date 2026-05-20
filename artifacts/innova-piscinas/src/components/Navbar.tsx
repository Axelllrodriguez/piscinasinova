import { Link } from "wouter";
import logoPath from "@assets/innova_logo_head-1_1779300232995.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <img src={logoPath} alt="Innova Piscinas" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#modelos" className="text-foreground/80 hover:text-primary transition-colors">Piscinas</a>
          <a href="#caracteristicas" className="text-foreground/80 hover:text-primary transition-colors">Catálogo</a>
          <a href="#contacto" className="text-foreground/80 hover:text-primary transition-colors">Ofertas</a>
          <a href="#contacto" className="text-foreground/80 hover:text-primary transition-colors">Contacto</a>
        </nav>
        <Button className="bg-primary hover:bg-accent text-white" asChild>
          <a href="https://wa.me/5493543437295" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}
