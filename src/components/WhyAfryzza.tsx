import { motion } from "framer-motion";
import {
  Paintbrush,
  MonitorSmartphone,
  Rocket,
  HeartHandshake,
  Mail,
} from "lucide-react";

export default function PourquoiAfryzza() {
  const raisons = [
    {
      icon: <Paintbrush className="w-10 h-10 text-blue-400" />,
      titre: "Créativité & Design Impactant",
      texte:
        "Nous transformons vos idées en designs uniques et mémorables. Chaque création est pensée pour marquer les esprits et renforcer votre identité visuelle.",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-indigo-400" />,
      titre: "Expertise Technique Moderne",
      texte:
        "Nos sites web sont rapides, sécurisés et parfaitement adaptables à tous les appareils, grâce à une technologie de pointe et un code optimisé.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-emerald-400" />,
      titre: "Accompagnement sur mesure",
      texte:
        "Nous vous guidons à chaque étape : de la conception à la mise en ligne. Notre approche humaine et collaborative garantit votre satisfaction.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-300" />,
      titre: "Innovation & Vision Digitale",
      texte:
        "Afryzza anticipe les tendances pour propulser votre marque vers l’avenir. Design, stratégie et technologie s’allient pour une présence forte et durable.",
    },
  ];

  return (
    <section
      id="why-afryzza"
      className="relative bg-gradient-to-b from-[#08152C] via-[#0A1A3F] to-[#0E225A] text-white py-24 overflow-hidden"
    >
      {/* Halo décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-emerald-400/10 blur-[160px] rounded-full"></div>
      </div>

      {/* --- Contenu principal --- */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium mb-5">
            <Rocket className="w-4 h-4 text-blue-400" />
            Pourquoi nous choisir ?
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Pourquoi{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
              choisir Afryzza
            </span>{" "}
            pour vos projets ?
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Nous unissons créativité, technologie et stratégie pour bâtir des
            expériences digitales qui inspirent, convertissent et perdurent.
          </p>
        </motion.div>

        {/* --- Cartes --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-24">
          {raisons.map((raison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative bg-white/5 border border-blue-500/20 hover:border-blue-400/40 rounded-2xl p-8 text-left shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className="mb-6">{raison.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                {raison.titre}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {raison.texte}
              </p>

              {/* Halo d’hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-indigo-500/0 to-emerald-400/0 group-hover:from-blue-400/10 group-hover:via-indigo-500/10 group-hover:to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* --- CTA “Travaillons ensemble” --- */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-emerald-900/80 border border-blue-500/20 shadow-2xl backdrop-blur-md p-12 sm:p-16 text-center"
        >
          {/* Image de fond floutée */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop')",
            }}
          ></div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Prêt à donner vie à votre{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
                projet digital ?
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Rejoignez les entreprises et créateurs qui ont choisi Afryzza pour
              bâtir une présence en ligne forte, élégante et performante.
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white font-semibold shadow-lg hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-5 h-5" />
              Travaillons ensemble
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
