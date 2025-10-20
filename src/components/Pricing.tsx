import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Star } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "À partir de 50 000 FCFA",
      desc: "Une présence digitale rapide, élégante et professionnelle.",
      features: [
        "Site vitrine 1 à 3 pages",
        "Design responsive",
        "Hébergement & nom de domaine",
        "Optimisation SEO de base",
      ],
      gradient: "from-blue-100 to-blue-200 dark:from-blue-500/20 dark:to-blue-700/10",
      border: "border-blue-200 dark:border-blue-500/30",
      bg: "bg-white/80 dark:bg-transparent",
    },
    {
      name: "Pro",
      price: "À partir de 100 000 FCFA",
      desc: "Un site web moderne, performant et évolutif pour votre entreprise.",
      features: [
        "Site complet (jusqu'à 10 pages)",
        "Charte graphique personnalisée",
        "SEO avancé + Analytics",
        "Maintenance 1 mois incluse",
      ],
      highlight: true,
      gradient: "from-indigo-100 to-indigo-200 dark:from-indigo-500/30 dark:to-indigo-700/10",
      border: "border-indigo-300 dark:border-indigo-500/40",
      bg: "bg-white/90 dark:bg-indigo-900/20",
    },
    {
      name: "Entreprise",
      price: "Sur devis",
      desc: "Une solution sur mesure adaptée à vos besoins complexes.",
      features: [
        "Fonctionnalités personnalisées",
        "Support & SLA dédié",
        "Sécurité et performance premium",
        "Intégrations API / ERP",
      ],
      gradient: "from-slate-100 to-slate-200 dark:from-slate-500/20 dark:to-slate-700/10",
      border: "border-slate-200 dark:border-slate-500/30",
      bg: "bg-white/80 dark:bg-transparent",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-gray-50 via-blue-50 to-indigo-100 dark:from-[#08152C] dark:via-[#0A1A3F] dark:to-[#0E225A] text-gray-900 dark:text-white mt-10 pt-10 pb-10 overflow-hidden transition-colors duration-500"
    >
      {/* Halo décoratif */}
      <div className="absolute -bottom-40 right-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-400 via-indigo-400 to-slate-300 opacity-20 dark:opacity-10 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Nos tarifs
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Des offres{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-600 bg-clip-text text-transparent">
              flexibles et transparentes
            </span>
            .
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Que vous soyez une startup, une PME ou une grande entreprise, nos
            formules s'adaptent à vos besoins et à votre budget.
          </p>
        </motion.div>

        {/* Grille des tarifs */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-start text-left rounded-2xl border ${plan.border} bg-gradient-to-br ${plan.gradient} ${plan.bg} p-6 sm:p-8 shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 hover:scale-[1.03] transition-all duration-300 ${
                plan.highlight
                  ? "ring-2 ring-indigo-400 dark:ring-indigo-500/60 shadow-indigo-500/20 dark:shadow-indigo-500/30"
                  : ""
              }`}
            >
              {/* Étiquette "Populaire" */}
              {plan.highlight && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500 dark:bg-indigo-600 text-xs font-semibold text-white">
                  <Star className="w-3.5 h-3.5 text-white" />
                  Populaire
                </div>
              )}

              {/* Titre */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {plan.name}
              </h3>

              {/* Prix */}
              <p className="text-2xl sm:text-3xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 dark:from-blue-300 dark:via-indigo-400 dark:to-slate-300 bg-clip-text text-transparent">
                {plan.price}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                {plan.desc}
              </p>

              {/* Liste des avantages */}
              <ul className="flex-1 space-y-3 mb-6 text-sm sm:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bouton CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 text-white shadow-lg hover:shadow-xl"
                    : "border border-blue-500/60 dark:border-blue-400/50 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/40"
                }`}
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Effet lumineux au survol */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-slate-400/0 dark:via-blue-400/10 dark:to-slate-400/0 opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}