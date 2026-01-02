import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-container section-padding">
      <div className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12 md:py-20">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="mb-4 text-3xl font-bold text-background sm:text-4xl">Ada project yang ingin dibicarakan?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-background/80">Ceritakan kebutuhan Anda, kita diskusikan dulu tanpa biaya. Tidak ada komitmen, tidak ada pressure.</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-12 px-8 text-base font-semibold shadow-lg" asChild>
              <a href="https://wa.me/6289603159562?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20tentang%20project%20saya" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat via WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-background/60">Respon cepat, biasanya dalam 1 jam</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
