import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">DevServices</h3>
            <p className="text-sm text-muted-foreground">Jasa pengembangan aplikasi web untuk UMKM, startup, dan bisnis yang butuh sistem digital yang rapi dan profesional.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Menu</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#layanan" className="transition-colors hover:text-foreground">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#portfolio" className="transition-colors hover:text-foreground">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://wa.me/6289603159562" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Hubungi Saya
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:whyddoni@gmail.com" className="transition-colors hover:text-foreground">
                  whyddoni@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/6289603159562" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  +62 896 0315 9562
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} DevServices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
