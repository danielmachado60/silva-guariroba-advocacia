import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5548991952345?text=Olá, gostaria de ajuda para meu caso";

  const menuItems = [
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#areas", label: "Áreas de Atuação" },
    { href: "#casos", label: "Casos de Sucesso" },
    { href: "#operacoes", label: "Operações" },
    { href: "#equipe", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

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

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-white/90 hover:text-white transition-colors text-base font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex-shrink-0 text-white p-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-sm border-t border-accent/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className="text-white/90 hover:text-white transition-colors text-base font-medium py-2 border-b border-white/10 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
