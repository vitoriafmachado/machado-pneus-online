import { motion } from "framer-motion";
import tireImg from "@/assets/tire.png";
import { MessageCircle, ArrowUpRight } from "lucide-react";

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
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

const TireSizes = () => {
  return (
    <section id="medidas" className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Catálogo 2026
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Escolha a <span className="text-gradient">medida</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-md mx-auto font-light">
            Selecione o aro e fale direto com a gente pelo WhatsApp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                href={`${WHATSAPP_BASE}${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card rounded-2xl p-5 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                    <img
                      src={tireImg}
                      alt={`Pneu ARO ${size.aro}`}
                      className="w-11 h-11 object-contain group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        ARO {size.aro}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">{size.cars}</p>
                  </div>
                </div>

                <div className="relative mt-4 flex items-center justify-center gap-2 bg-whatsapp/10 text-whatsapp py-2.5 rounded-xl font-medium text-sm group-hover:bg-whatsapp group-hover:text-primary-foreground transition-all duration-300">
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
