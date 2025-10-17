import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mireille T.",
      role: "Fondatrice de MyBeauti",
      text: "Afryzza a complètement transformé notre image de marque. Le logo et le site qu’ils ont créés ont apporté un vrai professionnalisme à notre entreprise.",
      rating: 5,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Serge D.",
      role: "CEO de DSoft Technologies",
      text: "Une équipe talentueuse, réactive et à l’écoute. Le site qu’ils ont développé est rapide, élégant et parfaitement adapté à nos besoins B2B.",
      rating: 5,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      name: "Linda A.",
      role: "Directrice Marketing chez Creative Hub",
      text: "Travailler avec Afryzza a été une expérience fluide. Leur sens du détail et leur créativité sont impressionnants. Je recommande vivement !",
      rating: 5,
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-[#0E225A] via-[#0A1A3F] to-[#08152C] text-white py-10 overflow-hidden"
    >
      {/* Halo décoratif */}
      <div className="absolute -top-40 right-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-emerald-400 opacity-10 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Témoignages Clients
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Ce que disent nos{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
              clients satisfaits
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez les retours de ceux qui nous font confiance pour leur
            transformation digitale.
          </p>
        </motion.div>

        {/* Grille des témoignages */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-start text-left rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0B1B3D]/60 to-[#0A1A3F]/30 p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Icône de citation */}
              <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-70" />

              {/* Texte du témoignage */}
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                “{t.text}”
              </p>

              {/* Infos client */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Initiale dans un cercle coloré */}
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${t.color} text-white font-bold text-lg border border-white/10 shadow-md`}
                >
                  {t.name.charAt(0)}
                </div>

                {/* Détails */}
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                  <div className="flex mt-1">
                    {Array(t.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Lueur subtile */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-emerald-400/0 opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
