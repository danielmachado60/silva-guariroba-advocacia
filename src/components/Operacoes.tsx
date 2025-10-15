import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const operacoes = [
  {
    title: "Operação Mar Aberto",
    description: "A Polícia Federal deflagrou a Operação Mar Aberto, desarticulando uma organização criminosa de tráfico internacional de cocaína. O grupo usava três embarcações de pesca de Itajaí (SC) para transportar toneladas da droga. A ação expôs a logística marítima empregada pelo esquema.",
    link: "https://www.cnnbrasil.com.br/nacional/pf-faz-operacao-contra-grupo-que-traficava-cocaina-em-barcos-de-pesca/",
    image: "/images/b1.png",
  },
  {
    title: "Operação Cartage",
    description: "Operação apreende R$ 30 milhões em bens de suspeitos, incluindo 21 imóveis e 39 veículos. Justiça decreta prisões, monitoramento eletrônico e bloqueio de contas bancárias. Medidas atingem 51 pessoas físicas e jurídicas investigadas.",
    link: "https://ndmais.com.br/seguranca/operacao-em-sc-apreende-cerca-de-r-30-mi-de-criminosos-que-atuavam-com-trafico-internacional/",
    image: "/images/b2.png",
  },
  {
    title: "OPERAÇÃO NEUTRUM",
    description: "A Polícia Federal desmantelou uma quadrilha que traficava drogas sintéticas entre Santa Catarina e Uruguai. A Operação Neutrum cumpriu 57 ordens judiciais no RS e SC, bloqueando R$ 10 milhões em 30 contas bancárias.",
    link: "https://veja.abril.com.br/brasil/policia-federal-descobre-rota-comercial-de-drogas-sinteticas-no-sul",
    image: "/images/b3.png",
  },
];

const Operacoes = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            GRANDES OPERAÇÕES QUE JÁ ATUAMOS
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Ao longo dos anos, o Silva Guariroba Advocacia teve a oportunidade de participar de grandes operações, 
            nas quais nossa atuação foi crucial para a defesa de clientes em casos de ampla repercussão e alta complexidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {operacoes.map((operacao, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group border-border hover:border-accent"
            >
              <div className="relative">
                <img 
                  src={operacao.image}
                  alt={operacao.title}
                  className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{operacao.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {operacao.description}
                </p>
                <a href={operacao.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-accent">
                    VER NOTÍCIA COMPLETA
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operacoes;
