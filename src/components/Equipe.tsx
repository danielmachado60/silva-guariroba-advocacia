import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


const advogados = [
  {
    nome: "JONATHAN GUARIROBA",
    oab: "OAB-SC 54.601",
    foto: "/images/c1.png",
    descricao: [
      "Advogado criminalista altamente qualificado, inscrito na OAB/SC nº 54.601, com vasta experiência e reconhecido por sua atuação estratégica e precisa na defesa de seus clientes. Atualmente, exerce o cargo de Conselheiro representante da OAB/SC no Conselho da Comunidade na Execução Penal de Florianópolis/SC e é Membro Consultivo da Comissão Estadual de Assuntos Prisionais da OAB/SC e Membro consultor da Comissão Especial de Estudo do Direito Penal do Conselho Federal da Ordem dos Advogados do Brasil.",
      "Pós-graduado em Ciências Criminais pela Faculdade CESUSC, Dr. Jonathan possui especializações em Direito Penal, Direito Processual Penal, Execução Penal e Recursos Criminais, com ênfase em Habeas Corpus, Recurso Especial (REsp) e Recurso Extraordinário (RE). Sua expertise destaca-se especialmente em liberdade provisória e prisões cautelares, áreas nas quais desenvolve estratégias eficazes para garantir os direitos e a liberdade de seus clientes.",
      "Com uma visão estratégica e minuciosa, Dr. Jonathan está comprometido em encontrar as melhores soluções jurídicas para cada caso, assegurando uma defesa sólida e eficaz. Se você ou um familiar enfrentam questões criminais, não hesite em buscar uma consultoria especializada. Clique no botão abaixo e fale diretamente com o Dr. Jonathan para obter orientação jurídica imediata e personalizada.",
    ],
  },
  {
    nome: "AUGUSTO ROSA DA SILVA",
    oab: "OAB-SC 69.711",
    foto: "/images/c2.png",
    descricao: [
      "Augusto Rosa Silva é um advogado criminalista altamente respeitado, registrado na OAB/SC sob o número 69.711, com especialização em Execução Penal. Como membro ativo da Comissão Estadual de Assuntos Prisionais da OAB/SC e da Comissão da Advocacia Criminal, ele dedica-se incansavelmente à defesa dos direitos dos apenados, garantindo que cada um receba a justiça que merece.",
      "Seu profundo conhecimento do sistema prisional brasileiro permite que ele ofereça uma representação legal robusta e informada, essencial para aqueles que buscam uma aplicação justa da pena. Augusto está comprometido não apenas com a defesa de seus clientes, mas também com a promoção da efetividade das garantias legais, assegurando que os direitos dos indivíduos sob custódia não sejam comprometidos.",
      "Com uma abordagem ética e dedicada, Augusto Rosa Silva trabalha lado a lado com seus clientes, oferecendo conselhos estratégicos e clareza em cada etapa do processo jurídico. Seu compromisso é com a justiça, o respeito aos direitos humanos e a constante busca por condições mais dignas e iguais para todos no sistema penal. Procurar sua assistência é dar um passo firme em direção a uma representação legal eficiente e com propósito.",
    ],
  },
];

const Equipe = () => {
  const whatsappLink = "https://wa.me/5548991952345?text=Olá, gostaria de agendar uma consultoria";

  return (
    <section id="equipe" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ADVOGADOS ESPECIALIZADOS
          </h2>
          <p className="text-lg text-muted-foreground">
              com histórico comprovado em Direito Criminal para ajudar no seu caso.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {advogados.map((advogado, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center"
            >
              {/* Foto do advogado */}
              <div className="flex items-center justify-center h-full">
                <img 
                  src={advogado.foto}
                  alt={advogado.nome}
                  className="max-h-[700px] w-auto object-contain scale-110"
                />
              </div>
              
              {/* Card com informações */}
              <Card className="h-full shadow-lg">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary">{advogado.nome}</h3>
                    <p className="text-muted-foreground">{advogado.oab}</p>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    {advogado.descricao.map((paragrafo, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {paragrafo}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-primary hover:bg-primary/90 text-accent font-bold w-full sm:w-auto">
                        <FaWhatsapp className="w-4 h-4 mr-2" />
                        ENTRE EM CONTATO
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipe;
