import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#F9FAFB] dark:bg-[#0A1A3F] transition-colors duration-500 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITRE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0A1A3F] dark:text-gray-100 mb-6"
        >
          À propos de nous
        </motion.h1>

        {/* TEXTE INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          <span className="font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
            Afryzza
          </span>{" "}
          est une jeune startup technologique née d’une passion commune : donner vie aux idées à travers des expériences numériques modernes et percutantes.  
          Nous créons des designs élégants, des sites web performants et des identités visuelles qui laissent une empreinte durable.
        </motion.p>

        {/* SECTION VALEURS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-left max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
              Ce qui nous définit
            </span>
          </h2>
          <ul className="space-y-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-[#2563EB] dark:text-[#34D399]" />,
                title: "Notre Vision",
                text: "Faire du numérique un moteur de transformation pour l’Afrique — un continent créatif, connecté et innovant.",
              },
              {
                icon: <Target className="w-8 h-8 text-[#2563EB] dark:text-[#34D399]" />,
                title: "Notre Mission",
                text: "Accompagner les entreprises et créateurs dans la construction d’une identité forte, authentique et inspirante.",
              },
              {
                icon: <Users className="w-8 h-8 text-[#2563EB] dark:text-[#34D399]" />,
                title: "Nos Valeurs",
                text: "Créativité, rigueur et passion. Trois piliers qui nous guident pour offrir des solutions à la fois esthétiques et efficaces.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 pl-6 py-4 border-l-4"
                style={{
                  borderImage:
                    "linear-gradient(to bottom right, #3B82F6, #6366F1, #34D399) 1",
                }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0A1A3F] dark:text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
