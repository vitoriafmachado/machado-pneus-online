import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Axe } from "lucide-react";
import tireImg from "@/assets/tire.png";

const WHATSAPP_LINK = "https://wa.me/5531973011770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20pneus.";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark noise">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] z-[1]" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[130px] z-[1]" />

      {/* Marquee ticker */}
      <div className="absolute top-20 left-0 right-0 overflow-hidden z-[2] opacity-[0.04]">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-heading text-[12rem] font-extrabold uppercase text-primary-foreground mx-8">
            MACHADO PNEUS • CONTAGEM MG • MACHADO PNEUS • CONTAGEM MG •
          </span>
          <span className="font-heading text-[12rem] font-extrabold uppercase text-primary-foreground mx-8">
            MACHADO PNEUS • CONTAGEM MG • MACHADO PNEUS • CONTAGEM MG •
          </span>
        </div>
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-2 mb-8"
          >
            <Axe className="w-4 h-4 text-primary" />
            <span className="text-primary-foreground/70 font-body text-xs font-medium uppercase tracking-[0.2em]">
              Contagem — MG · Desde 2019
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-primary-foreground leading-[0.95] mb-6 tracking-tight">
            Pneus com
            <br />
            <span className="text-gradient">qualidade</span>
            <br />
            e confiança
          </h1>

          <p className="text-primary-foreground/50 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 font-light leading-relaxed mb-10">
            Empresa cristã e familiar, há mais de 5 anos levando os melhores pneus até você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#medidas"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Ver Medidas
              <ArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-foreground/5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-whatsapp" />
              WhatsApp
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 mt-12 justify-center lg:justify-start"
          >
            {[
              { num: "5+", label: "Anos" },
              { num: "9", label: "Medidas" },
              { num: "100%", label: "Online" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary">{s.num}</span>
                <span className="block text-primary-foreground/40 text-xs uppercase tracking-widest mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute inset-[-30px] border border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-[-60px] border border-primary/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-75" />
            <img
              src={tireImg}
              alt="Pneu de qualidade Machado Pneus Contagem"
              className="relative w-64 md:w-80 lg:w-96 animate-float drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/30 text-[10px] uppercase tracking-[0.3em] font-body">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary-foreground/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
