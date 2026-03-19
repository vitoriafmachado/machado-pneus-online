import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import machadoIcon from "@/assets/machado-icon.png";

const WHATSAPP_LINK = "https://wa.me/5531973011770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20pneus.";

const navItems = [
  { label: "Início", href: "#" },
  { label: "Medidas", href: "#medidas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
    >
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={machadoIcon} alt="Machado Pneus" className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300" />
          <div className="leading-tight">
            <span className="font-heading text-base font-bold tracking-tight text-foreground uppercase">Machado Pneus</span>
            <span className="block text-[10px] font-body text-muted-foreground uppercase tracking-[0.25em]">Contagem — MG</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-whatsapp text-primary-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-whatsapp/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border/30"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp text-primary-foreground px-5 py-3 rounded-full font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Fale pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
