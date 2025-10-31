import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AreasAtuacao from "@/components/AreasAtuacao";
import CasosSucesso from "@/components/CasosSucesso";
import Operacoes from "@/components/Operacoes";
import Equipe from "@/components/Equipe";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Depoimentos />
      <AreasAtuacao />
      <CasosSucesso />
      <Operacoes />
      <Equipe />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
