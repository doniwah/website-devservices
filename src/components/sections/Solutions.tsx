import { Code2, Database, Shield, Puzzle } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Sistem berbasis Laravel",
    description: "Framework PHP yang sudah teruji untuk aplikasi bisnis. Stabil, aman, dan mudah dikembangkan.",
  },
  {
    icon: Database,
    title: "Backend rapi & scalable",
    description: "Struktur kode yang bersih sehingga mudah ditambah fitur baru tanpa mengacaukan yang sudah ada.",
  },
  {
    icon: Shield,
    title: "Database aman & terstruktur",
    description: "Data bisnis Anda tersimpan dengan baik. Backup rutin dan akses terkontrol.",
  },
  {
    icon: Puzzle,
    title: "Bisa mulai dari fitur kecil",
    description: "Tidak perlu langsung sistem besar. Mulai dari yang dibutuhkan, kembangkan bertahap.",
  },
];

const Solutions = () => {
  return (
    <section className="section-container section-padding">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Solusi
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Fokus pada hasil, bukan kerumitan teknologi
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Saya tidak akan membombardir Anda dengan istilah teknis yang membingungkan. 
            Yang penting adalah sistem bekerja sesuai kebutuhan Anda.
          </p>
          
          {/* Solutions List */}
          <div className="space-y-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <solution.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent p-8">
            {/* Code Preview Mock */}
            <div className="h-full rounded-xl bg-foreground/95 p-4 shadow-2xl">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <div className="space-y-2 font-mono text-xs">
                <p className="text-primary/80">// Contoh struktur yang rapi</p>
                <p className="text-muted-foreground/80">
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-yellow-400">OrderController</span>
                </p>
                <p className="text-muted-foreground/80 pl-4">
                  <span className="text-blue-400">public function</span>{" "}
                  <span className="text-green-400">store</span>()
                </p>
                <p className="text-muted-foreground/80 pl-8">
                  // Validasi input
                </p>
                <p className="text-muted-foreground/80 pl-8">
                  // Simpan ke database
                </p>
                <p className="text-muted-foreground/80 pl-8">
                  // Kirim notifikasi
                </p>
                <p className="text-muted-foreground/80 pl-8">
                  <span className="text-blue-400">return</span> response;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
