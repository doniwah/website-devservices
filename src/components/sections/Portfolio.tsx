const projects = [
  {
    title: "Sistem Penjadwalan Otomatis dengan Algoritma Genetika",
    category: "Web Application",
    problem: "Dalam sebuah kampus sering terjadi bentrok jadwal ruang kelas karena penjadwalan manual.",
    solution: "Membangun sistem penjadwalan otomatis yang dapat menghindari bentrok jadwal dan memberikan notifikasi kepada dosen dan mahasiswa.",
    tech: ["Laravel", "MySQL", "Vue.js", "REST API"],
    image: "../../dashboard.png",
  },
  {
    title: "Website Profile Organisasi Kampus",
    category: "Web Application",
    problem: "Client ingin merancang dan mengembangkan website profile organisasi kampus yang menarik dan informatif.",
    solution: "Membangun website dengan desain responsif, fitur blog, galeri foto, dan integrasi media sosial untuk meningkatkan visibilitas organisasi.",
    tech: ["Express JS", "Node JS", "MySQL"],
    image: "../../organisasi.jpeg",
  },
  {
    title: "Sistem Inventory Toko Snack",
    category: "Web Application",
    problem: "Client ingin dibuatkan website inventory untuk mengelola master data, barang masuk, barang keluar, dan laporan stok.",
    solution: "Membangun sistem inventory berbasis web dengan fitur lengkap untuk memudahkan pengelolaan stok barang secara real-time.",
    tech: ["React", "Supabase", "Tailwind CSS", "Vercel"],
    image: "../../inventory.png",
  },
  {
    title: "Website Informasi & Pengumpulan Lomba",
    category: "Web Application",
    problem: "Informasi lomba sebelumnya tersebar di berbagai platform dan proses pengumpulan karya masih manual, sehingga membingungkan peserta dan menyulitkan panitia dalam melakukan rekap data.",
    solution:
      "Membangun website terpusat untuk publikasi informasi lomba dan pengumpulan karya secara online. Sistem dilengkapi manajemen lomba, upload karya, validasi data, serta dashboard admin sehingga proses pendaftaran dan penilaian menjadi lebih cepat, rapi, dan terorganisir.",
    tech: ["Laravel", "MySQL"],
    image: "../../epim.jpeg",
  },
  {
    title: "Website Ticketing Online",
    category: "Web Application & Payment Integration",
    problem: "Proses pembayaran tiket masih manual dan tidak efisien.",
    solution: "Menambahkan payment gateway agar pembelian tiket dapat dilakukan secara online, otomatis, dan aman dengan berbagai metode pembayaran.",
    tech: ["Laravel", "MySQL", "Midtrans API"],
    image: "../../aom.jpeg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container section-padding">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Portfolio</p>
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Beberapa project yang pernah saya kerjakan</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Setiap project punya cerita dan tantangan unik. Ini beberapa yang bisa saya share.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="group overflow-hidden rounded-xl border border-border bg-background card-hover">
            {/* Image */}
            <div className="aspect-video overflow-hidden bg-muted">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category */}
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{project.category}</p>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold text-foreground">{project.title}</h3>

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
                  <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
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
