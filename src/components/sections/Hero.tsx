import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-container section-padding">
      <div className="max-w-3xl">
        {/* Badge */}

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Bangun Sistem Digital yang <span className="gradient-text">Rapi, Stabil,</span> dan Siap Dipakai
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Saya membantu UMKM dan startup membangun aplikasi web yang terstruktur, mudah dikembangkan, dan sesuai kebutuhan bisnis Anda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" asChild>
            <a href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20tentang%20project%20saya" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Konsultasi Gratis
            </a>
          </Button>
          <Button variant="hero-outline" asChild>
            {/* <a href="#portfolio">
              Lihat Portfolio
              <ArrowRight className="h-5 w-5" />
            </a> */}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Respon cepat</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Diskusi dulu, gratis</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Fleksibel sesuai budget</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
