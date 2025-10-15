const Footer = () => {
  return (
    <footer className="bg-primary border-t border-accent/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <p className="text-accent/80 text-sm">
              Esse site não faz parte do Google LLC nem do Facebook Inc. e não oferecemos nenhum tipo de serviço oficial do governo. 
              Trabalhamos exclusivamente com serviços jurídicos.
            </p>
          </div>
          
          <div className="border-t border-accent/20 pt-8 text-center">
            <p className="text-accent/70 text-sm mb-2">
              © Jonathan Silva Guariroba Sociedade individual de Advocacia
            </p>
            <p className="text-accent/70 text-sm">
              OAB/SC Nº 8360 - CNPJ 49.319.126/0001-12
            </p>
            <p className="text-accent/70 text-sm mt-4">
              Todos os direitos reservados | Site desenvolvido por{" "}
              <a href="https://www.agenciacod.com.br" className="text-accent hover:underline">
                www.agenciacod.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
