import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // 🌗 Bascule du mode (Dark / Light)
  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  // 🌗 Charger le thème initial au premier rendu
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme =
    savedTheme === "dark" || (!savedTheme && prefersDark)
      ? "dark"
      : "light";

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(initialTheme);
  setIsDark(initialTheme === "dark");
}, []);


  // 🌗 Synchroniser le thème global
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
<header
  className="fixed top-0 left-0 w-full z-50 
  bg-white dark:bg-[#0A1A3F]
  border-b border-gray-200 dark:border-[#00FFB2]/20 
  shadow-md dark:shadow-none transition-colors duration-500"
>


      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* LOGO */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/public/images/logo1-removebg-preview.png"
            alt="Afryzza Logo"
            className="w-10 h-10 object-contain"
          />
          <span
            className="text-3xl font-bold tracking-wide 
            text-[#0A1A3F] dark:text-white"
          >
            Afryzza
          </span>
        </a>

        {/* MENU Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[#0A1A3F] dark:text-[#E6F1FF]
              hover:text-[#00FFB2] transition-all
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-[#00FFB2] hover:after:w-full
              after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Bouton Dark/Light Mode */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-[#112240] 
            hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={18} className="text-[#00FFB2]" />
            ) : (
              <Moon size={18} className="text-[#0A1A3F]" />
            )}
          </button>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden flex flex-col justify-center space-y-1"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="block w-6 h-[2px] bg-[#0A1A3F] dark:bg-[#00FFB2]" />
            <span className="block w-6 h-[2px] bg-[#0A1A3F] dark:bg-[#00FFB2]" />
            <span className="block w-6 h-[2px] bg-[#0A1A3F] dark:bg-[#00FFB2]" />
          </button>
        </div>
      </div>

      {/* MENU Mobile slide latéral */}
      {/* MENU Mobile moderne avec fond solide */}
<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* Fond gris/noir semi-opaque derrière le menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 bg-black z-40 md:hidden"
      />

      {/* Contenu du menu (fond solide et lisible) */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="fixed top-0 right-0 w-72 h-full z-50 
        bg-white dark:bg-[#0A1A3F] 
        shadow-2xl border-l border-gray-200 dark:border-[#00FFB2]/20 
        flex flex-col p-6 space-y-8"
      >
        {/* En-tête */}
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/public/images/logo1-removebg-preview.png"
              alt="Afryzza Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="text-2xl font-semibold text-[#0A1A3F] dark:text-gray-100">
              Afryzza
            </span>
          </a>
          <motion.button
            onClick={() => setIsMenuOpen(false)}
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-[#0A1A3F] dark:text-[#00FFB2] text-3xl font-bold"
          >
            ×
          </motion.button>
        </div>

        {/* Liens du menu */}
        <nav className="flex flex-col mt-6 space-y-5">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="text-lg font-medium 
              text-[#0A1A3F] dark:text-[#E6F1FF] 
              hover:text-[#00FFB2] transition-all 
              border-b border-transparent hover:border-[#00FFB2]/50 pb-2"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Bas du menu */}
        <div className="mt-auto pt-6 border-t border-gray-300/40 dark:border-[#00FFB2]/10">
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#00FFB2] font-semibold">Afryzza</span>
          </p>
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>

    </header>
  );
};

export default Header;
