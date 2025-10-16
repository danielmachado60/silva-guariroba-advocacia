import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";


const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5548991952345"; // Número formatado sem caracteres especiais
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, gostaria de falar com um advogado`;
  const phoneLink = `tel:${phoneNumber}`;

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 mb-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
            aria-label="Enviar mensagem no WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>
          <a
            href={phoneLink}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
            aria-label="Ligar agora"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      )}
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        aria-label="Contato rápido"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="text-3xl">×</span>
        ) : (
          <img 
            src="/images/whatsapp-icon.svg" 
            alt="WhatsApp" 
            className="w-8 h-8" 
          />
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
