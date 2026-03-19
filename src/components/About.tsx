import { Heart, Shield, Star } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-brand-dark text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase mb-8">
            Quem <span className="text-brand-yellow">Somos</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Empresa cristã e familiar. Sou Lucas, casado com a Vitória, e vivemos a maternidade e paternidade atípica. Para apoiar minha esposa e nossa família, decidimos empreender e vender pneus pela internet, criando assim a <strong className="text-brand-yellow">Machado Pneus</strong>, há mais de 5 anos no mercado. Juntos, trabalhamos todos os dias para levar qualidade, excelência e confiança em cada atendimento. Será uma honra atender cada um de vocês! Aqui, trabalhamos com respeito, garantia e procedência. Que Deus abençoe a todos. Jesus Cristo é o nosso Senhor. 🙏
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Shield, title: "Garantia", desc: "Todos os pneus com garantia de fábrica e procedência comprovada." },
            { icon: Star, title: "Qualidade", desc: "Trabalhamos apenas com as melhores marcas do mercado." },
            { icon: Heart, title: "Confiança", desc: "Mais de 5 anos atendendo com respeito e transparência." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-brand-dark" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-2">{item.title}</h3>
              <p className="text-primary-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
