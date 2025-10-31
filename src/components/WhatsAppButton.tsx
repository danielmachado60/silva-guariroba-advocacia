import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "5548991952345"; // Número formatado sem caracteres especiais
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, gostaria de falar com um advogado`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        aria-label="Enviar mensagem no WhatsApp"
      >
        <img 
          src="/images/whatsapp-icon.svg" 
          alt="WhatsApp" 
          className="w-8 h-8" 
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
