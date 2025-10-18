import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet sticky header avec flou et ombre douce au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-[#0A1A3F]/90 shadow-lg border-b border-blue-900/40"
          : "bg-gradient-to-br from-[#0A1A3F] via-[#0E225A] to-[#05102A]"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        {/* --- Logo --- */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-extrabold text-white text-2xl tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
            Afryzza
          </span>
        </a>

        {/* --- Menu Desktop --- */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition"
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <Link to="/contact">
          <button
            
            className="ml-4 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white font-semibold shadow-md hover:scale-105 hover:shadow-blue-500/25 transition-all duration-300"
          >
            Demander un devis
          </button>
         </Link>
        </nav>

        {/* --- Bouton Mobile --- */}
        <button
          className="lg:hidden text-white hover:text-blue-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Menu Mobile --- */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gradient-to-br from-[#0A1A3F] via-[#0E225A] to-[#05102A] border-t border-blue-900/40 px-6 pb-6"
        >
          <div className="flex flex-col gap-4 mt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-blue-300 font-medium text-base transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Demander un devis
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
