import { FaGithub, FaLinkedin,FaTelegram } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Meta-12", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/meta-sok-b22942388/", label: "LinkedIn" },
  { icon: FaTelegram, href: "https://t.me/Metasokakun", label: "Telegram" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skill", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              MT<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Meta Sok. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
