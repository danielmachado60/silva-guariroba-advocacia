import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappLink = "https://wa.me/5548991952345?text=Olá, gostaria de ajuda para meu caso";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/40" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                ADVOCACIA CRIMINAL 24 HORAS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              PRECISANDO DE ADVOGADO CRIMINAL PARA SUA DEFESA OU DE SEU FAMILIAR?
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              Defesa Imediata e Eficaz em Prisão em Flagrante e Audiências de Custódia
            </p>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-white">5 de 5 Estrelas no Google</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-bold shadow-elegant">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  FALAR COM ADVOGADO
                </Button>
              </a>
            </div>

            <p className="text-sm text-white">
              Contato via WhatsApp · 100% Seguro
            </p>
          </div>

          {/* Right Column - Lawyers Image */}
          <div className="relative animate-slide-in flex justify-center w-full">
            <div className="relative overflow-hidden w-full lg:w-[70%]">
              <img 
                src="/images/fotocapa.png"
                alt="Advogados Especializados - Silva Guariroba"
                className="w-full h-auto object-cover bg-transparent"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
