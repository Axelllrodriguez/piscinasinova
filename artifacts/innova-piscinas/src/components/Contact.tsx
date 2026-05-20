import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contacto" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Empecemos a planear tu verano</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Dejanos tu consulta y nos pondremos en contacto a la brevedad para asesorarte.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">Teléfono</h4>
                <p className="text-muted-foreground">(03543) 437 295</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Dirección</h4>
                <p className="text-muted-foreground">Córdoba, Argentina</p>
              </div>
              <div className="pt-4">
                <Button className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white" size="lg" asChild>
                  <a href="https://wa.me/5493543437295" target="_blank" rel="noreferrer">
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-3xl shadow-xl border border-border/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2">Nombre completo</label>
                <Input placeholder="Tu nombre" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="tu@email.com" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <Input type="tel" placeholder="Tu número" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <Textarea placeholder="Contanos qué estás buscando..." className="bg-background min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full" size="lg">Enviar Consulta</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
