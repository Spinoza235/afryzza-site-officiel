import { ArrowRight, Rocket, Palette, Code, Brush, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative my-10 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-[#0A1A3F] dark:via-[#0E225A] dark:to-[#05102A] text-gray-900 dark:text-white pt-5 transition-colors duration-500"
    >
      {/* Halo lumineux décoratif */}
      <div className="absolute -top-56 -right-56 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] bg-gradient-to-tr from-blue-400 via-indigo-400 to-emerald-300 opacity-20 dark:opacity-25 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-14 items-center relative z-10">
        {/* === Bloc texte === */}
        <motion.header
          className="text-center lg:text-left space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
            Agence créative digitale
          </div>

          {/* Titre principal */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
            Donnez vie à votre{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
              identité visuelle
            </span>{" "}
            et à vos projets web.
          </h1>

          {/* Texte descriptif */}
          <motion.div
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              Chez{" "}
              <span className="text-gray-900 dark:text-white font-semibold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Afryzza
              </span>
              , nous transformons vos idées en expériences digitales percutantes :
            </p>

            <div className="space-y-2 pl-2 sm:pl-4">
              {[
                { color: "blue", text: "Création de logos & chartes graphiques" },
                { color: "indigo", text: "Conception de sites web modernes & performants" },
                { color: "emerald", text: "Design graphique (flyers, cartes, affiches)" },
              ].map((item, i) => {
                const colorMap: Record<string, { light: string; dark: string }> = {
                  blue: { 
                    light: "bg-blue-500 text-blue-600", 
                    dark: "bg-blue-400 text-blue-300" 
                  },
                  indigo: { 
                    light: "bg-indigo-500 text-indigo-600", 
                    dark: "bg-indigo-400 text-indigo-300" 
                  },
                  emerald: { 
                    light: "bg-emerald-500 text-emerald-600", 
                    dark: "bg-emerald-400 text-emerald-300" 
                  },
                };

                return (
                  <motion.div
                    key={item.text}
                    className={`flex items-center gap-2 sm:gap-3 ${colorMap[item.color].dark.split(" ")[1]}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${colorMap[item.color].light.split(" ")[0]} dark:${colorMap[item.color].dark.split(" ")[0]}`}
                    />
                    <span className="text-xs sm:text-sm lg:text-base">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <p>
              Un accompagnement sur mesure pour révéler le potentiel de votre marque.
            </p>

            {/* Indicateurs de confiance */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {[
                { color: "green", label: "+15 projets livrés" },
                { color: "blue", label: "Satisfaction client 94%" },
                { color: "purple", label: "Support réactif" },
              ].map((item, i) => {
                const colorMap: Record<string, { light: string; dark: string }> = {
                  green: { 
                    light: "bg-green-500", 
                    dark: "bg-green-400" 
                  },
                  blue: { 
                    light: "bg-blue-500", 
                    dark: "bg-blue-400" 
                  },
                  purple: { 
                    light: "bg-purple-500", 
                    dark: "bg-purple-400" 
                  },
                };

                return (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                    <div
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${colorMap[item.color].light} dark:${colorMap[item.color].dark}`}
                    />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#services"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-xs sm:text-sm lg:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Découvrir nos services</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl border-2 border-blue-500/60 dark:border-blue-400/40 text-blue-600 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/20 backdrop-blur-sm hover:bg-blue-200/60 dark:hover:bg-blue-800/40 hover:border-blue-600 dark:hover:border-blue-300 transition-all duration-300 text-xs sm:text-sm lg:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Nous contacter</span>
            </motion.a>
          </motion.div>
        </motion.header>

        {/* === Partie droite - Showcase professionnel MASQUÉ sur mobile === */}
        <motion.div
          className="relative mt-12 lg:mt-0 hidden lg:block"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white/80 dark:bg-gray-800/30 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-2xl">
            
            <motion.div
              className="mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">Identité Visuelle</h3>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl p-4 border border-blue-200 dark:border-blue-500/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-blue-700 dark:text-blue-300 text-sm font-medium">Logo Design</p>
                    <p className="text-blue-600/80 dark:text-blue-400/80 text-xs">Création unique</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Brush className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <p className="text-cyan-700 dark:text-cyan-300 text-sm font-medium">Charte Graphique</p>
                    <p className="text-cyan-600/80 dark:text-cyan-400/80 text-xs">Identité complète</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Grid pour Design Graphique et Sites Web */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Design Graphique - Colonne gauche */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/10 dark:to-pink-500/10 rounded-2xl p-6 border border-purple-200 dark:border-purple-500/20 shadow-inner hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Brush className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-base mb-2 text-center">Design Graphique</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm text-center mb-2">Supports print & digital</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    <span className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">Cartes visite</span>
                    <span className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">Affiches</span>
                    <span className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">Brochures</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-500/10 dark:to-green-500/10 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-500/20 shadow-inner hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-base mb-2 text-center">Sites Web</h3>
                  <p className="text-emerald-700 dark:text-emerald-300 text-sm text-center mb-2">Designs responsives</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    <span className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded text-xs">Vitrines</span>
                    <span className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded text-xs">E-commerce</span>
                    <span className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded text-xs">Applications</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-500/10 dark:to-red-500/10 rounded-2xl p-4 border border-orange-200 dark:border-orange-500/20 text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">Solutions Sur Mesure</h3>
                <p className="text-orange-700 dark:text-orange-300 text-sm">Accompagnement personnalisé pour chaque projet</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl rotate-12 shadow-2xl flex items-center justify-center z-10"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 12 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-white font-bold text-sm text-center px-2">Créatif</div>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl -rotate-6 shadow-2xl flex items-center justify-center z-10"
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-white font-bold text-xs text-center px-1">Innovant</div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-emerald-400/15 dark:from-blue-500/15 dark:to-emerald-500/15 rounded-full blur-xl animate-pulse"></div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-gray-50 dark:from-[#0A1A3F] to-transparent" />
    </section>
  );
}