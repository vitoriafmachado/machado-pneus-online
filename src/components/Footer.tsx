const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background py-12">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center">
            <span className="font-heading text-brand-dark text-sm font-bold">MP</span>
          </div>
          <span className="font-heading text-xl font-bold tracking-wider">MACHADO PNEUS</span>
        </div>
        <p className="text-background/60 mb-2">Contagem - MG</p>
        <p className="text-background/60 mb-4">WhatsApp: (31) 97301-1770</p>
        <p className="text-background/40 text-sm">© {new Date().getFullYear()} Machado Pneus. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
