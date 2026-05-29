import { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Menu, X } from "lucide-react";

const navLink = [
  { href: "#about", lable: "About" },
  { href: "#project", lable: "Project" },
  { href: "#skill", lable: "Skills" },
  { href: "#contact", lable: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, SetIsMobileMenuOpen] = useState(false);
  const [IsScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0  ${IsScrolled ? "glass-strong" : "bg-transparent py-5 "} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary">
          MT <span className="text-primary">.</span>
        </a>

        {/* Destop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.lable}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <a href="#contact" className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => SetIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col">
            {navLink.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => SetIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2">
                {link.lable}
              </a>
            ))}
            <a href="#contact">
              <Button className="w-full">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
