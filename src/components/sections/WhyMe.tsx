import { Zap, MessageSquare, Settings, Target } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Respon Cepat",
    description: "Chat dibalas dalam hitungan jam, bukan hari. Kalau urgent, langsung saya prioritaskan.",
  },
  {
    icon: MessageSquare,
    title: "Bisa Diskusi Dulu",
    description: "Tidak langsung deal. Kita ngobrol dulu, pahami kebutuhan, baru tentukan langkah selanjutnya.",
  },
  {
    icon: Settings,
    title: "Fleksibel Sesuai Kebutuhan",
    description: "Budget terbatas? Kita bisa mulai dari fitur yang paling penting dulu. Develop bertahap.",
  },
  {
    icon: Target,
    title: "Fokus Solusi",
    description: "Saya tidak sekadar coding. Saya cari tahu masalah sebenarnya, lalu carikan solusi yang tepat.",
  },
];

const WhyMe = () => {
  return (
    <section className="bg-surface section-padding">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Kenapa Memilih Saya
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Bukan sekadar developer, tapi partner untuk bisnis Anda
            </h2>
            <p className="text-lg text-muted-foreground">
              Saya paham bahwa Anda butuh seseorang yang bisa diandalkan, 
              bukan sekadar tukang ketik kode. Berikut beberapa alasan 
              kenapa klien saya betah bekerja sama.
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
