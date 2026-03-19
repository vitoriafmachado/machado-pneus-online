import { motion } from "framer-motion";
import { Heart, Shield, Star, Quote } from "lucide-react";

const features = [
  { icon: Shield, title: "Garantia", desc: "Todos os pneus com garantia de fábrica e procedência comprovada." },
  { icon: Star, title: "Qualidade", desc: "Trabalhamos apenas com as melhores marcas do mercado." },
  { icon: Heart, title: "Confiança", desc: "Mais de 5 anos atendendo com respeito e transparência." },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-brand-dark text-primary-foreground relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-brand-gold font-body text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Nossa história
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Quem <span className="italic text-brand-gold">somos</span>
          </h2>

          <div className="relative">
            <Quote className="w-10 h-10 text-brand-gold/30 mx-auto mb-6" />
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed font-light">
              Empresa cristã e familiar. Sou Lucas, casado com a Vitória, e vivemos a maternidade e paternidade atípica. Para apoiar minha esposa e nossa família, decidimos empreender e vender pneus pela internet, criando assim a{" "}
              <strong className="text-brand-gold font-semibold">Machado Pneus</strong>, há mais de 5 anos no mercado. Juntos, trabalhamos todos os dias para levar qualidade, excelência e confiança em cada atendimento. Será uma honra atender cada um de vocês! Aqui, trabalhamos com respeito, garantia e procedência. Que Deus abençoe a todos. Jesus Cristo é o nosso Senhor. 🙏
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-primary-foreground/60 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
