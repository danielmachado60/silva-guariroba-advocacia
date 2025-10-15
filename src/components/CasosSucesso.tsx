import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const casos = [
  {
    title: "Prisão Preventiva Revogada",
    subtitle: "Ministro Gilmar Mendes do STF Concede Habeas Corpus",
    description: "Homem Preso em Flagrante por Tráfico de Drogas, Resistência, Desobediência e Tentativa de Homicídio Contra Policiais.",
    link: "https://www.conjur.com.br/2022-set-01/gilmar-revoga-preventiva-baseada-apenas-merito-traficancia/",
    image: "/images/a1.png",
  },
  {
    title: "Gilmar Mendes Revoga Prisão Preventiva",
    subtitle: "Réu Primário por Falta de Fundamentação",
    description: " Um homem, preso em flagrante com drogas como ecstasy, maconha, cocaína e crack, teve sua prisão preventiva revogada pelo Ministro Gilmar Mendes, do STF. A decisão se baseou na falta de justificativa suficiente para manter a prisão. ",
    link: "https://web.abracrim.adv.br/antecipacao-de-pena-gilmar-revoga-prisao-preventiva-de-reu-primario-por-ausencia-de-fundamento/",
    image: "/images/a2.png",
  },
  {
    title: "Condenação por Roubo Agravado é Anulada",
    subtitle: "STF Concede Habeas Corpus",
    description: "STF Absolve Réu Condenado por Roubo Circunstanciado pelo Uso de Arma de Fogo e Concurso de Pessoas",
    link: "https://www.conjur.com.br/2023-mai-20/mendonca-anula-condenacao-baseada-reconhecimento-foto/",
    image: "/images/a3.png",
  },
];

const CasosSucesso = () => {
  return (
    <section id="casos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            HISTÓRICO COMPROVADO
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Nosso escritório possui um histórico comprovado de defesa em casos que ganharam grande visibilidade, 
            tendo sempre o cuidado de respeitar a ética e a legislação. Confira abaixo alguns dos resultados positivos 
            alcançados, que foram destaque na imprensa:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {casos.map((caso, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group border-border hover:border-accent"
            >
              <div className="relative h-auto overflow-hidden">
                <img 
                  src={caso.image}
                  alt={caso.title}
                  className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary mb-2">{caso.title}</CardTitle>
                <p className="text-sm font-semibold text-accent">{caso.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {caso.description}
                </p>
                <a href={caso.link} target="_blank" rel="noopener noreferrer">
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

export default CasosSucesso;
