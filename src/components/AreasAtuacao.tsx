import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


const areas = [
  {
    image: "/images/1.jpg",
    title: "PRISÃO EM FLAGRANTE",
    description: "Defesa ágil e eficiente em casos de prisão em flagrante. Conte com nossa experiência jurídica para garantir seus direitos e assegurar a melhor estratégia legal para sua situação. Consulte-nos agora mesmo!",
  },
  {
    image: "/images/2.jpg",
    title: "AUDIÊNCIA DE CUSTÓDIA",
    description: "Advogado especializado em audiência de custódia. Protegemos seus direitos e buscamos a liberdade provisória ou medidas justas para sua defesa. Conte com nossa expertise em casos de prisão. Consulte-nos hoje mesmo!",
  },
  {
    image: "/images/3.jpg",
    title: "EXECUÇÃO PENAL",
    description: "A execução penal tem por objetivo efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado e do internado. Ressocialização.",
  },
  {
    image: "/images/4.jpg",
    title: "LEI MARIA DA PENHA",
    description: "Na Lei Maria da Penha, atuamos tanto na defesa do acusado, assegurando seus direitos e garantindo um processo justo, quanto na representação da vítima, buscando a aplicação da lei de para garantir sua proteção e o combate à violência doméstica.",
  },
  {
    image: "/images/5.jpg",
    title: "LAVAGEM DE DINHEIRO",
    description: "A Lei nº 9.613 de 1998 descreve o crime de “lavagem” ou ocultação de bens, muito conhecido como lavagem de dinheiro, que consiste no ato de ocultar ou dissimular a origem ilícita de bens ou valores que sejam frutos de crimes.",
  },
  {
    image: "/images/6.jpg",
    title: "LEI DE DROGAS",
    description: "O crime de tráfico de drogas está previsto no artigo 33 da Lei 11.343/2006, que descreve diversas condutas que caracterizam o ilícito, proibindo qualquer tipo de venda, compra, produção, armazenamento, entrega ou fornecimento, mesmo que gratuito, de drogas sem autorização ou em desconformidade com a legislação.",
  },
  {
    image: "/images/7.jpg",
    title: "CONTRABANDO E DESCAMINHO",
    description: "Comete o crime de contrabando quem importar mercadoria proibida. Em outras palavras, pela redação atual do artigo 334-A do Código Penal, somente é considerado como contrabando a conduta que estiver ligada à uma mercadoria proibida, ou seja, com restrição absoluta de importação/exportação.",
  },
  {
    image: "/images/8.jpg",
    title: "TRIBUNAIS SUPERIORES",
    description: "Os tribunais superiores são considerados a terceira instância, apesar de esse grau de hierarquia não existir formalmente no Poder Judiciário. As decisões tomadas em primeira e segunda instância podem ser revistas pelos tribunais superiores, por meio de recurso.",
  },
];

const AreasAtuacao = () => {
  const whatsappLink = "https://wa.me/5548991952345";

  return (
    <section id="areas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            EVITE CONDENAÇÕES INJUSTAS
          </h2>
          <p className="text-2xl text-accent font-semibold mb-2">PLANTÃO 24 HORAS</p>
          <p className="text-xl text-muted-foreground">Nossas áreas de atuação</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <Card className="h-full overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-elegant flex flex-col">
                <div className="relative h-40 bg-gray-100 overflow-hidden flex-shrink-0">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback para uma cor de fundo caso a imagem não carregue
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #004344 0%, #006466 100%)';
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-2">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {area.description}
                  </p>
                  <a 
                    href={`${whatsappLink}?text=Olá, preciso de ajuda com ${encodeURIComponent(area.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-md shadow-elegant transition-colors duration-200 mt-auto"
                  >
                    <span>Falar com especialista</span>
                    <FaWhatsapp className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary mb-6">Não encontrou o que procurava?</h3>
          <p className="text-muted-foreground mb-6">Entre em contato para falar com um de nossos especialistas</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-elegant"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              FALAR COM ESPECIALISTA CRIMINAL
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
