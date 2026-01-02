import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import WhyMe from "@/components/sections/WhyMe";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Problems />
        <Solutions />
        <Services />
        <Portfolio />
        <WhyMe />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
