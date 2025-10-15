import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contato = () => {
  const whatsappLink = "https://wa.me/5548991952345?text=Olá, gostaria de ajuda para meu caso";

  return (
    <section className="py-24 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NÓS PODEMOS TE AJUDAR!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Conte com nossa expertise em direito criminal para uma defesa sólida em todas as instâncias 
            de seu processo através de um atendimento com atualização constante do seu caso.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-elegant text-lg px-8 py-6">
              FALE CONOSCO AGORA
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Endereço</p>
                <p className="text-white/80">
                  Av. Eng. Max de Souza - Coqueiros<br />
                  Florianópolis - SC, CEP 88080-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Telefone</p>
                <p className="text-white/80">(48) 99195-2345</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">E-mail</p>
                <p className="text-white/80">contato@jrsilva.adv.br</p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <Instagram className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Instagram</p>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:underline"
                >
                  @jrsilva.adv
                </a>
              </div>
            </div> */}
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Nossos Diferenciais</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">Tradição jurídica e luta pelos direitos dos nossos clientes</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">Escritório altamente especializado em Direito Criminal</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">Constante atualização sobre seu caso em todas as etapas</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">Plantão 24 horas para atendimento de emergência</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-elegant">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.1234567890!2d-48.5432109!3d-27.5945678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQwLjQiUyA0OMKwMzInMzUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Silva Guariroba Advocacia"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contato;
