import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


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

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm inline-block">
                ADVOCACIA CRIMINAL 24 HORAS
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight px-4">
              PRECISANDO DE ADVOGADO CRIMINAL PARA SUA DEFESA OU DE SEU FAMILIAR?
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed px-4">
              Defesa Imediata e Eficaz em Prisão em Flagrante e Audiências de Custódia
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 px-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-white text-sm md:text-base">5 de 5 Estrelas no Google</span>
            </div>

            <div className="space-y-2 px-4 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-primary font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-elegant text-sm sm:text-base w-full sm:w-auto"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>FALAR COM ADVOGADO CRIMINALISTA</span>
                </a>
              </div>
              <p className="text-white/80 text-sm">
                Contato via WhatsApp · 100% Seguro
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative z-10">
              <img 
                src="/images/fotocapa.png" 
                alt="Silva & Guariroba Advocacia" 
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute -top-6 -left-6 w-40 h-40 bg-white/5 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
