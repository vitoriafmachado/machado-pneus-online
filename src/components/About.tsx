import { motion } from "framer-motion";
import { Heart, Shield, Star, Axe } from "lucide-react";
import machadoIcon from "@/assets/machado-icon.png";

const features = [
  { icon: Shield, title: "Garantia", desc: "Todos os pneus com garantia de fábrica e procedência comprovada." },
  { icon: Star, title: "Qualidade", desc: "Trabalhamos apenas com as melhores marcas do mercado." },
  { icon: Heart, title: "Confiança", desc: "Mais de 5 anos atendendo com respeito e transparência." },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-brand-dark text-primary-foreground relative overflow-hidden noise">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(0_0%_100%/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%/0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/8 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-2 mb-6">
              <Axe className="w-4 h-4 text-primary" />
              <span className="text-primary-foreground/60 text-xs font-medium uppercase tracking-[0.2em]">
                Nossa história
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
              Quem <span className="text-gradient">somos</span>
            </h2>

            <p className="text-primary-foreground/60 text-lg leading-relaxed font-light">
              Empresa cristã e familiar. Sou Lucas, casado com a Vitória, e vivemos a maternidade e paternidade atípica. Para apoiar minha esposa e nossa família, decidimos empreender e vender pneus pela internet, criando assim a{" "}
              <strong className="text-primary font-semibold">Machado Pneus</strong>, há mais de 5 anos no mercado. Juntos, trabalhamos todos os dias para levar qualidade, excelência e confiança em cada atendimento. Será uma honra atender cada um de vocês! Aqui, trabalhamos com respeito, garantia e procedência. Que Deus abençoe a todos. Jesus Cristo é o nosso Senhor. 🙏
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border border-primary-foreground/10 rounded-3xl rotate-6" />
              <div className="absolute inset-0 border border-primary/20 rounded-3xl -rotate-3" />
              <div className="absolute inset-4 bg-primary-foreground/5 rounded-2xl flex items-center justify-center">
                <img src={machadoIcon} alt="Machado Pneus Contagem" className="w-40 h-40 md:w-52 md:h-52 object-contain brightness-0 invert opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary-foreground/50 font-light leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
