import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const whatsappLink = "https://wa.me/5548991952345?text=Olá, gostaria de ajuda para meu caso";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src="/images/logo.png" 
                alt="Silva Guairoba Advogados" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <a 
              href="#areas" 
              className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
            >
              Áreas de Atuação
            </a>
            <a 
              href="#casos" 
              className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
            >
              Casos de Sucesso
            </a>
            <a 
              href="#equipe" 
              className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
            >
              Equipe
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href="tel:+5548991952345" 
              className="sm:hidden flex-shrink-0"
            >
              <Button 
                size="sm" 
                className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-elegant whitespace-nowrap h-9 px-3 text-xs"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Ligar
              </Button>
            </a>
            <a 
              href="https://wa.me/5548991952345?text=Olá, gostaria de ajuda para meu caso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block flex-shrink-0"
            >
              <Button 
                size="sm" 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-elegant whitespace-nowrap h-9 px-4 text-xs sm:text-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                <span className="uppercase">Falar com advogado</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
