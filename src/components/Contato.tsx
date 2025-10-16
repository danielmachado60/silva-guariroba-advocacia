import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


const Contato = () => {
  const whatsappLink = "https://wa.me/5548991952345?text=Olá, gostaria de ajuda para meu caso";

  return (
    <section className="py-12 md:py-24 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
            NÓS PODEMOS TE AJUDAR!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 px-4">
            Conte com nossa expertise em direito criminal para uma defesa sólida em todas as instâncias 
            de seu processo através de um atendimento com atualização constante do seu caso.
          </p>
          <div className="px-4 flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-primary font-bold shadow-elegant text-lg px-6 md:px-8 py-4 md:py-6 flex items-center gap-2">
                <FaWhatsapp className="w-5 h-5" />
                <span>FALE CONOSCO AGORA</span>
              </Button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Informações de Contato</h3>
            
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 justify-center md:justify-start">
              <div className="flex justify-center md:justify-start">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-1" />
              </div>
              <div>
                <p className="font-semibold mb-1">Endereço</p>
                <p className="text-white/80 text-sm md:text-base">
                  Av. Eng. Max de Souza - Coqueiros<br />
                  Florianópolis - SC, CEP 88080-000
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 justify-center md:justify-start">
              <div className="flex justify-center md:justify-start">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-1" />
              </div>
              <div>
                <p className="font-semibold mb-1">Telefone</p>
                <p className="text-white/80 text-sm md:text-base">(48) 99195-2345</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 justify-center md:justify-start">
              <div className="flex justify-center md:justify-start">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-1" />
              </div>
              <div>
                <p className="font-semibold mb-1">E-mail</p>
                <p className="text-white/80 text-sm md:text-base">contato@jrsilva.adv.br</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Nossos Diferenciais</h3>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90 text-sm md:text-base">Tradição jurídica e luta pelos direitos dos nossos clientes</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90 text-sm md:text-base">Escritório altamente especializado em Direito Criminal</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90 text-sm md:text-base">Constante atualização sobre seu caso em todas as etapas</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90 text-sm md:text-base">Plantão 24 horas para atendimento de emergência</p>
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
