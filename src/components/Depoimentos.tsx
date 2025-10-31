import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const depoimentos = [
  {
    id: 1,
    nome: "Daniel Machado",
    data: "2 dias atrás",
    avaliacao: 5,
    texto: "Recebi uma consultoria do Dr. Jonathan e só tenho elogios! Um profissional extremamente competente, atencioso e dedicado. A experiência superou minhas expectativas e, sem dúvida, recomendo de olhos fechados. Nota mil!",
  },
  {
    id: 2,
    nome: "Naara Pereira",
    data: "1 semana atrás",
    avaliacao: 5,
    texto: "Excelente! Atendimento rápido ,esclarecedor .O Dr Jonathan Guariroba transmite muita confiança seriedade ao cliente, me senti amparada pra solucionar a minha questão. Só tenho muito a agradecer pelo trabalho de excelência!! Recomendo! 👏🏻👏🏻👏🏻👏🏻 Nunca vi um advogado tão prestativo em ouvi!!",
  },
  {
    id: 3,
    nome: "Thiago matos",
    data: "2 semanas atrás",
    avaliacao: 5,
    texto: "Excelente atendimento! O escritório demonstrou profissionalismo, agilidade e muita atenção aos detalhes do meu caso. Toda a equipe foi muito prestativa e clara nas orientações, o que transmitiu segurança e confiança durante todo o processo.",
  },
  {
    id: 4,
    nome: "Alessandra",
    data: "2 semanas atrás",
    avaliacao: 5,
    texto: "Além de um excelente profissional é uma pessoa fantástica, sempre pronto pra atender seus clientes da melhor maneira possível, continue assim e sempre terá suce$$o.",
  },
  {
    id: 5,
    nome: "Leidiane Oliveira",
    data: "3 semanas atrás",
    avaliacao: 5,
    texto: "Um excelente atendimento ótimo profissional muito prestativo estou gostando muito do trabalho super indico 👏🏻👏🏻",
  },
  {
    id: 6,
    nome: "Felipe",
    data: "3 semanas atrás",
    avaliacao: 5,
    texto: "Excelente profissional, técnica e pessoalmente. Consultoria com profissionalismo e bom atendimento",
  },
  {
    id: 7,
    nome: "Julio Castro",
    data: "3 semanas atrás",
    avaliacao: 5,
    texto: "Recomendo muito o Dr. Guariroba! Um especialista muito específico na sua área de atuacão!",
  },
  {
    id: 8,
    nome: "Gilmar",
    data: "3 semanas atrás",
    avaliacao: 5,
    texto: "100% no atendimento super indico a clareza é tudo e a maneira de explicar todas as dúvidas.",
  },
    {
    id: 10,
    nome: "Janete Maria",
    data: "um mês atrás",
    avaliacao: 5,
    texto: "Excelente profissional, ágil e eficiente. Super recomendo tem a solução rápida , é transparente e esclarece todas a dúvidas. Sou grata a ele 🙏",
  },
  {
    id: 11,
    nome: "JOAO KLEBER",
    data: "um mese atrás",
    avaliacao: 5,
    texto: "Jonathan Guariroba é um advogado excelente!",
  },
  {
    id: 12,
    nome: "Regiane Melo",
    data: "6 meses atrás",
    avaliacao: 5,
    texto: "Um ótimo profissional\nCauteloso,responsável ,ágil,muito inteligente e preciso que Deus abençoe sempre sua trajetória e vc possa ser usado por Deus pra aliviar corações das mãe aflitas",
  },
  {
    id: 13,
    nome: "Flavia Roberta",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Oq falar dele com toda certeza o melhor Advogado sou grata a todos os dias por ele não descansou um dia se quer no meu caso me deu a liberdade hj cuido dos meus filhos um advogado dedicado e apaixonado pela profissão e em dar o seu melhor .",
  },
  {
    id: 14,
    nome: "Lilian Fernandes",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Excelente Profissional! Dedicado, ágil , indico a todos.\nAdvogado nota 1000!!\nGratidão.",
  },
  {
    id: 15,
    nome: "Ivan Vieira",
    data: "2 anos atrás",
    avaliacao: 5,
    texto: "Ótimo profissional. Está atuando em 3 casos meus e conseguiu dar excelentes resultados. Obrigado pelo trabalho prestado é pelos êxitos que teve nos meus processos. Valeu por tudo e que Deus te abençoe sempre.",
  },
  {
    id: 16,
    nome: "Diego Peres",
    data: "3 semanas atrás",
    avaliacao: 5,
    texto: "Excelente atendimento! Recomendo!",
  },
  {
    id: 17,
    nome: "Rafael",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Um ótimo trabalho,indico pra qualquer pessoa que precisar de advogado",
  },
  {
    id: 18,
    nome: "Giselle Garcia",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Mais do que um excelente profissional. Ele nos trata com respeito, fala a nossa língua, tem paciência pra explicar tudo com detalhes, e também não desiste. Parece que tem sempre um plano B, C e assim por diante. Ele faz o possível pelo processo. Só tenho agradecer por tudo.",
  },
  {
    id: 19,
    nome: "Geovane CM",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Otimo serviço, me salvou de uma grande encrenca indico sem dúvidas !",
  },
  {
    id: 20,
    nome: "Joabe Barbosa",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Excelente profissional. Dr. Guariroba é dedicado, atencioso e um expert no que faz. É um exímio solucionador de problemas. Recomendo de olhos fechados.",
  },
  {
    id: 21,
    nome: "daiane leal",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Um excelente profissional, competência e profissionalismo impecável. Confio plenamente em seus serviços. recomendo de olhos fechados",
  },
  {
    id: 22,
    nome: "Janete Aparacida Santos",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Excelente advogado, ser humano incrível!",
  },
  {
    id: 23,
    nome: "Cláudio Farenzena",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Dr. Jonathan é um excelente e brilhante advogado criminalista, meu colega de profissão, altamente recomendado.",
  },
  {
    id: 24,
    nome: "Maria Fernanda",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Um otimo advogado, obrigado doutor pelo excelente trabalho. Sempre a disposição",
  },
  {
    id: 25,
    nome: "edgar barreto medeiros",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Top demais e daí altas atenção , não abandonam os contratantes depois que fecham o contrato",
  },
  {
    id: 26,
    nome: "Carlos",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Dr Jonathan Um ótimo profissional, muito atencioso e dedicado super recomendo",
  },
  {
    id: 27,
    nome: "Grazi Goncalves",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Dr. Jonathan, muito profissional. Estava com a causa praticamente perdida e ele conseguiu reverter. Obrigada Dr., por tamanho profissionalismo.",
  },
  {
    id: 28,
    nome: "Roadkill961",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Ótimo profissional, recomendo a todos.",
  },
  {
    id: 29,
    nome: "Fernanda Silva",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Um ótimo advogado, sempre a disposição e paciente para esclarecer tudo.",
  },
  {
    id: 30,
    nome: "Breno Beckman",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Ótimo advogado e um grande profissional",
  },
  {
    id: 31,
    nome: "Mateus Souza",
    data: "2 anos atrás",
    avaliacao: 5,
    texto: "Excelente profissional, muito competente.",
  },
  {
    id: 32,
    nome: "Daniel Felipe Machado",
    data: "um ano atrás",
    avaliacao: 5,
    texto: "Um dos melhores advogados da atualidade.",
  },
  {
    id: 33,
    nome: "Ramons Passos",
    data: "3 semanas atrás",
    avaliacao: 5,
    texto: "Excelente!",
  },
  {
    id: 34,
    nome: "Brena Ferreira",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Excelente profissional. Muito atencioso. Recomendo.",
  },
  {
    id: 35,
    nome: "Cida Aparecida cascaes da silva",
    data: "3 semanas atrás",
    avaliacao: 5,
    texto: "Muitos atenciosos",
  },
  {
    id: 36,
    nome: "Anderson Dutra",
    data: "8 meses atrás",
    avaliacao: 5,
    texto: "Excelente profissional!!!!",
  },
  {
    id: 37,
    nome: "Caroline Alves",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Excelente. Inteligentíssimo, honesto, justo. Recomendo.",
  },
  {
    id: 9,
    nome: "Thais Ferreira",
    data: "3 anos atrás",
    avaliacao: 5,
    texto: "Muito profissional um ótimo doutor",
  },
];

const Depoimentos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Autoplay
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 8000);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

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

        <div className="relative">
          {/* Carrossel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {depoimentos.map((depoimento) => (
                <div 
                  key={depoimento.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] xl:flex-[0_0_calc(25%-18px)]"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
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
                    <p className="text-gray-700 mb-4 italic line-clamp-6">"{depoimento.texto}"</p>
                    <div className="flex items-center mt-auto">
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
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 hover:bg-primary hover:text-white"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 hover:bg-primary hover:text-white"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
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
