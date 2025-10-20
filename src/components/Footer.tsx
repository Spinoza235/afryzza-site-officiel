import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Logo from '../assets/image/logo_afryzza.png';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://web.facebook.com/hamedluchardor.mefire",
      label: "Facebook",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-800 mb-1 text-gray-300 text-sm w-full"> {/* Ajout de w-full */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-700">
        {/* Bloc gauche : logo + slogan */}
        <div className="text-center md:text-left">
          <img
            src={Logo} 
            alt="Afryzza Logo"
            className="mx-auto md:mx-0 w-28 h-auto"
          />
          <p className="text-teal-400 italic mt-2">
            "Nous donnons vie à votre idée."
          </p>
        </div>

        {/* Bloc central : liens rapides */}
        <ul className="flex flex-wrap justify-center gap-4 text-gray-400">
          {[
            { href: "/", name: "Home" },
            { href: "/services", name: "Services" },
            { href: "/about", name: "À propos" },
            { href: "/contact", name: "Contact" },
          ].map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="relative group hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Bloc droit : contact + réseaux */}
        <div className="flex flex-col items-center md:items-end gap-2 text-gray-400">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a
              href="mailto:afryzza237@gmail.com"
              className="hover:text-white relative group"
            >
              contact@afryzza.com
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a
              href="tel:+237672116339"
              className="hover:text-white relative group"
            >
              +237 672 11 63 39
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            <a
              href="https://wa.me/237672116339"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white relative group"
            >
              WhatsApp
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-3 mt-2">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              let iconColor = "";
              if (social.label === "Facebook") iconColor = "#1877F2";
              if (social.label === "LinkedIn") iconColor = "#0A66C2";
              if (social.label === "Instagram") iconColor = "#E1306C";

              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-slate-700 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-emerald-400 transition-all"
                >
                  <Icon size={18} color={iconColor} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ligne du bas */}
      <div className="text-center py-4 border-t border-slate-700 text-gray-400 w-full"> {/* Ajout de w-full */}
        <p>© {new Date().getFullYear()} Afryzza — Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;