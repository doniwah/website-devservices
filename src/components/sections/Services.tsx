import { Globe, Package, Wrench, BarChart3, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application",
    subtitle: "Laravel",
    description: "Aplikasi web custom sesuai kebutuhan bisnis. Dari sistem sederhana sampai yang kompleks.",
    features: ["Dashboard admin", "Manajemen user", "API integration"],
  },
  {
    icon: Package,
    title: "Sistem Stok & Transaksi",
    subtitle: "Inventory Management",
    description: "Kelola stok, transaksi, dan laporan penjualan dalam satu sistem terintegrasi.",
    features: ["Real-time tracking", "Multi lokasi", "Notifikasi stok"],
  },
  {
    icon: Wrench,
    title: "Perbaikan & Lanjutan",
    subtitle: "Bug Fix & Development",
    description: "Melanjutkan project yang tertunda atau memperbaiki sistem yang bermasalah.",
    features: ["Code review", "Bug fixing", "Optimasi performa"],
  },
  {
    icon: BarChart3,
    title: "Dashboard & Laporan",
    subtitle: "Business Intelligence",
    description: "Visualisasi data bisnis yang mudah dipahami untuk pengambilan keputusan.",
    features: ["Grafik interaktif", "Export PDF/Excel", "Auto generate"],
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    subtitle: "Cross-platform",
    description: "Aplikasi mobile yang terintegrasi dengan sistem web Anda.",
    features: ["iOS & Android", "Sync real-time", "Push notification"],
  },
];

const Services = () => {
  return (
    <section id="layanan" className="bg-surface section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Layanan
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Apa yang bisa saya bantu?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Beberapa layanan yang sering saya kerjakan. Tapi tidak terbatas pada ini saja—
            kalau ada kebutuhan lain, kita bisa diskusikan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-background p-6 card-hover"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="mb-4 text-muted-foreground">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
