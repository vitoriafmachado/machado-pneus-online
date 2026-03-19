import tireImg from "@/assets/tire.png";

const WHATSAPP_LINK = "https://wa.me/5531973011770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20pneus.";

const Hero = () => {
  return (
    <section className="bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-red/20" />
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
        <div className="flex-1 text-center md:text-left">
          <p className="text-brand-yellow font-heading text-lg uppercase tracking-widest mb-2">Contagem - MG</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight">
            PNEUS COM <br />
            <span className="text-brand-yellow">QUALIDADE</span> E<br />
            <span className="text-brand-red">CONFIANÇA</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-md mx-auto md:mx-0">
            Há mais de 5 anos levando os melhores pneus até você. Empresa cristã e familiar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#medidas"
              className="bg-brand-yellow text-brand-dark font-heading font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition uppercase tracking-wider"
            >
              Ver Medidas
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition uppercase tracking-wider animate-pulse-glow"
            >
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={tireImg} alt="Pneu de qualidade" className="w-72 md:w-96 animate-float drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
