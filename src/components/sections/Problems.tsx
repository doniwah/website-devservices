import { AlertCircle, FileWarning, Bug, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Stok tidak sinkron",
    description: "Data stok di lapangan beda dengan di sistem. Akhirnya harus cek manual setiap hari.",
  },
  {
    icon: FileWarning,
    title: "Laporan masih manual",
    description: "Setiap akhir bulan harus rekap dari awal. Rawan salah hitung dan makan waktu.",
  },
  {
    icon: Bug,
    title: "Website ada tapi banyak bug",
    description: "Sudah bayar developer lain, tapi hasilnya tidak sesuai. Minta revisi susah.",
  },
  {
    icon: TrendingDown,
    title: "Aplikasi tidak scalable",
    description: "Bisnis makin besar, tapi sistem tidak bisa mengikuti. Perlu bikin ulang dari nol.",
  },
];

const Problems = () => {
  return (
    <section className="bg-surface section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Masalah Umum
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Pernah mengalami ini?
          </h2>
          <p className="text-lg text-muted-foreground">
            Banyak bisnis menghadapi kendala serupa. Kabar baiknya, semua ini bisa diatasi 
            dengan sistem yang tepat.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
