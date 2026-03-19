import { motion } from "framer-motion";
import tireImg from "@/assets/tire.png";
import { MessageCircle } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5531973011770?text=";

const sizes = [
  { aro: "13", cars: "Palio, Siena, Uno, Celta, Corsa" },
  { aro: "14", cars: "Ford Ka, Fiat Argo, Mobi, Honda Fit, Gol, Renault Clio" },
  { aro: "15", cars: "Ford Fiesta, Polo, Voyage, Gol, Fox, Saveiro" },
  { aro: "16", cars: "Corolla, Civic, Golf, Jetta, Cruze, Onix Plus" },
  { aro: "17", cars: "HRV, Compass, T-Cross, Renegade, Kicks" },
  { aro: "18", cars: "Hilux, S10, Ranger, Amarok, Compass" },
  { aro: "19", cars: "BMW, Mercedes, Audi, Tiguan" },
  { aro: "20", cars: "Hilux SW4, Trailblazer, Land Rover" },
  { aro: "22", cars: "SUVs Premium, Customizados" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const TireSizes = () => {
  return (
    <section id="medidas" className="py-20 md:py-32 bg-background relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Catálogo
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            Escolha a <span className="italic text-primary">medida</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-md mx-auto">
            Selecione o aro do seu veículo e fale direto com a gente pelo WhatsApp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sizes.map((size, i) => {
            const msg = encodeURIComponent(
              `Olá! Gostaria de ver pneus ARO ${size.aro}. Pode me ajudar?`
            );
            return (
              <motion.a
                key={size.aro}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                href={`${WHATSAPP_BASE}${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                    <img
                      src={tireImg}
                      alt={`Pneu ARO ${size.aro}`}
                      className="w-14 h-14 object-contain group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-3xl font-bold text-foreground mb-1">
                      ARO {size.aro}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{size.cars}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 bg-whatsapp/10 text-whatsapp py-3 rounded-xl font-medium text-sm group-hover:bg-whatsapp group-hover:text-primary-foreground transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                  Consultar preço
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TireSizes;
