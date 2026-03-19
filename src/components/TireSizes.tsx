import tireImg from "@/assets/tire.png";

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

const TireSizes = () => {
  return (
    <section id="medidas" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase">
            Escolha a <span className="text-brand-red">Medida</span> do Seu Pneu
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Clique na medida e compre direto pelo WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sizes.map((size) => {
            const msg = encodeURIComponent(
              `Olá! Gostaria de ver pneus ARO ${size.aro}. Pode me ajudar?`
            );
            return (
              <a
                key={size.aro}
                href={`${WHATSAPP_BASE}${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border-2 border-brand-yellow rounded-xl p-6 hover:shadow-xl hover:shadow-brand-yellow/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={tireImg} alt={`Pneu ARO ${size.aro}`} className="w-20 h-20 object-contain group-hover:rotate-12 transition-transform duration-300" />
                  <div>
                    <h3 className="font-heading text-3xl font-extrabold text-foreground">
                      ARO {size.aro}
                    </h3>
                    <div className="h-1 w-12 bg-brand-red rounded mt-1" />
                  </div>
                </div>
                <p className="font-heading text-sm font-bold uppercase text-brand-red mb-1">
                  Pra rodar muito com:
                </p>
                <p className="text-muted-foreground text-sm">{size.cars}</p>
                <div className="mt-4 bg-whatsapp text-primary-foreground text-center py-3 rounded-lg font-heading font-bold uppercase tracking-wider text-sm group-hover:brightness-110 transition">
                  Comprar pelo WhatsApp
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TireSizes;
