import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import tireImg from "@/assets/tire.png";

const WHATSAPP_LINK = "https://wa.me/5531973011770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20pneus.";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-gold/15 rounded-full blur-[100px]" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-brand-gold font-body text-sm font-semibold uppercase tracking-[0.3em] mb-6"
          >
            Contagem — MG · Desde 2019
          </motion.span>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-[0.95] mb-6">
            Pneus com{" "}
            <span className="italic text-brand-gold">qualidade</span>
            <br />
            e confiança
          </h1>

          <p className="text-primary-foreground/60 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 font-light leading-relaxed mb-10">
            Empresa cristã e familiar, há mais de 5 anos levando os melhores pneus até você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#medidas"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-base hover:shadow-xl hover:shadow-primary/30 transition-shadow"
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
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-primary-foreground px-8 py-4 rounded-full font-medium text-base hover:shadow-xl hover:shadow-whatsapp/30 transition-shadow"
            >
              <MessageCircle className="w-5 h-5" />
              Comprar pelo WhatsApp
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-[80px] scale-75" />
            <img
              src={tireImg}
              alt="Pneu de qualidade Machado Pneus"
              className="relative w-64 md:w-80 lg:w-96 animate-float drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-primary-foreground/40" />
      </motion.div>
    </section>
  );
};

export default Hero;
