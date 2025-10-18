import React from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-[#0A1A3F] via-[#0E225A] to-[#05102A] overflow-hidden px-6"
    >
      {/* Halo décoratif */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-emerald-400 opacity-25 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500 via-blue-400 to-emerald-300 opacity-10 blur-[150px] rounded-full pointer-events-none" />

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/30 shadow-lg"
          >
            <AlertTriangle className="h-16 w-16 text-emerald-400" />
          </motion.div>
        </div>

        <h1 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold mb-4"
        >
          Oups ! Page introuvable
        </motion.h2>

        <p className="text-gray-300 max-w-lg mx-auto mb-8 text-lg leading-relaxed">
          La page que vous recherchez n’existe pas ou a été déplacée.  
          Vérifiez l’URL ou retournez sur la page d’accueil.
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Retour à l’accueil
        </motion.a>
      </motion.div>

      {/* Texte décoratif en bas */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 text-gray-400 text-sm tracking-wide"
      >
        © {new Date().getFullYear()} Afryzza — Tous droits réservés
      </motion.p>
    </section>
  );
}
