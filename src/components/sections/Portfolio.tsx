import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sistem Inventory Toko Elektronik",
    category: "Web Application",
    problem: "Pemilik toko kesulitan melacak stok di 3 cabang berbeda. Data sering tidak sinkron dan sering terjadi salah kirim barang.",
    solution: "Membangun sistem inventory terpusat dengan fitur transfer antar cabang, alert stok minimum, dan laporan harian otomatis.",
    tech: ["Laravel", "MySQL", "Vue.js", "REST API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Dashboard Penjualan UMKM",
    category: "Business Intelligence",
    problem: "Owner harus rekap manual setiap minggu dari banyak file Excel. Proses ini makan waktu 2-3 jam dan sering salah hitung.",
    solution: "Dashboard real-time yang auto-sync dengan sistem kasir. Visualisasi penjualan, produk terlaris, dan trend bulanan.",
    tech: ["Laravel", "Chart.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Sistem Booking Lapangan Futsal",
    category: "Web Application",
    problem: "Booking via WhatsApp sering double-book. Pelanggan komplain karena jadwal bentrok saat datang.",
    solution: "Sistem booking online dengan kalendar real-time. Customer bisa lihat slot tersedia dan bayar langsung.",
    tech: ["Laravel", "Midtrans", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
  },
  {
    title: "Perbaikan Sistem Klinik",
    category: "Bug Fix & Optimization",
    problem: "Sistem rekam medis yang dibuat developer sebelumnya sering error. Loading lambat dan data kadang hilang.",
    solution: "Audit kode, fix bug kritis, optimasi query database. Waktu loading turun dari 8 detik jadi di bawah 1 detik.",
    tech: ["Laravel", "MySQL", "Redis Cache"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container section-padding">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          Portfolio
        </p>
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Beberapa project yang pernah saya kerjakan
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Setiap project punya cerita dan tantangan unik. Ini beberapa yang bisa saya share.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-xl border border-border bg-background card-hover"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category */}
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {project.title}
              </h3>

              {/* Problem & Solution */}
              <div className="mb-4 space-y-3 text-sm">
                <div>
                  <span className="font-medium text-foreground">Masalah: </span>
                  <span className="text-muted-foreground">{project.problem}</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Solusi: </span>
                  <span className="text-muted-foreground">{project.solution}</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
