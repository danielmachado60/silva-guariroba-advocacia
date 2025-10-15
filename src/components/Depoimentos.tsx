import { Star } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    nome: "Carlos Eduardo",
    data: "Há 1 mês",
    avaliacao: 5,
    texto: "Excelente atendimento! O escritório me ajudou em um caso complexo de direito penal com muita competência e profissionalismo. Recomendo a todos que precisam de um advogado criminalista.",
  },
  {
    id: 2,
    nome: "Juliana Mendes",
    data: "Há 2 semanas",
    avaliacao: 5,
    texto: "Atendimento impecável! Meu marido foi preso em flagrante e a equipe agiu rapidamente, conseguindo sua liberdade na audiência de custódia. Profissionais extremamente competentes.",
  },
  {
    id: 3,
    nome: "Roberto Alencar",
    data: "Há 1 semana",
    avaliacao: 5,
    texto: "Recomendo muito o escritório. Me auxiliaram em um processo de execução penal e o resultado foi além das minhas expectativas. Atendimento personalizado e transparente.",
  },
  {
    id: 4,
    nome: "Fernanda Lima",
    data: "Há 3 dias",
    avaliacao: 5,
    texto: "Profissionais extremamente capacitados e atenciosos. Me senti segura e bem assessorada em todos os momentos do processo. Agradeço imensamente pelo trabalho realizado.",
  },
];

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-2xl text-accent font-semibold mb-2">DEPOIMENTOS REAIS</p>
          <p className="text-xl text-muted-foreground">Confira a opinião de quem já contratou nossos serviços</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {depoimentos.map((depoimento) => (
            <div 
              key={depoimento.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < depoimento.avaliacao ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{depoimento.data}</span>
              </div>
              <p className="text-gray-700 mb-4 italic">"{depoimento.texto}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                  {depoimento.nome.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{depoimento.nome}</p>
                  <div className="flex items-center">
                    <img 
                      src="/images/google-icon.png" 
                      alt="Google" 
                      className="w-4 h-4 mr-1" 
                    />
                    <span className="text-sm text-gray-500">Avaliação no Google</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <a 
            href="https://g.page/r/CQq3Y9X9X9X9EA0/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            <span>Deixe sua avaliação no Google</span>
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Depoimentos;
