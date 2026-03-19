import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TireSizes from "@/components/TireSizes";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TireSizes />
      <About />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
