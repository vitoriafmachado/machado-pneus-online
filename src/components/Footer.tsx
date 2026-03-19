import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Axe } from "lucide-react";
import machadoIcon from "@/assets/machado-icon.png";

const WHATSAPP_LINK = "https://wa.me/5531973011770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20pneus.";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background relative overflow-hidden">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-background/5 border border-background/10 rounded-full px-4 py-2 mb-6">
              <Axe className="w-4 h-4 text-primary" />
              <span className="text-background/50 text-xs font-medium uppercase tracking-[0.2em]">
                Fale conosco
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Pronto para <span className="text-primary">rodar</span>?
            </h2>
            <p className="text-background/40 text-lg mb-8 max-w-md mx-auto font-light">
              Entre em contato e encontre o pneu ideal para o seu veículo
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-whatsapp/30 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Fale conosco agora
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer info */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={machadoIcon} alt="Machado Pneus" className="w-7 h-7 object-contain brightness-0 invert opacity-70" />
            <div className="leading-tight">
              <span className="font-heading text-sm font-bold uppercase">Machado Pneus</span>
              <span className="block text-[9px] text-background/40 uppercase tracking-[0.2em]">Contagem — MG</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-background/40">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Contagem — MG
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (31) 97301-1770
            </span>
          </div>

          <p className="text-background/20 text-xs">
            © {new Date().getFullYear()} Machado Pneus Contagem
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
