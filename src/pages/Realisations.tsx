import { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Globe, Layers, ArrowUpRight, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
}

interface Category {
  label: string;
  value: string;
  icon: JSX.Element;
  count: number;
}

export default function Realisations(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Création d'identité visuelle - AfriTech",
      category: "logo",
      description: "Identité visuelle complète pour une startup tech innovante",
      image: "/logo1.JPG",
      technologies: ["Illustrator", "Photoshop", "Branding"],
      year: "2024"
    },
    {
      id: 2,
      title: "Site web vitrine - Smart Consulting",
      category: "web",
      description: "Site web corporate responsive avec CMS sur mesure",
      image: "/web1.JPG",
      technologies: ["React", "Tailwind", "Node.js"],
      year: "2024"
    },
    {
      id: 3,
      title: "Design graphique - Flyers promotionnels",
      category: "graphic",
      description: "Campagne print pour lancement de produit",
      image: "/flyer1.JPG",
      technologies: ["InDesign", "Photoshop", "Print"],
      year: "2023"
    },
    {
      id: 4,
      title: "E-commerce moderne - Luxe Beauty",
      category: "web",
      description: "Plateforme e-commerce haut de gamme avec paiement sécurisé",
      image: "/web3.JPG",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      year: "2024"
    },
    {
      id: 5,
      title: "Logo & branding - Nexah Group",
      category: "logo",
      description: "Refonte complète de l'identité visuelle corporate",
      image: "/visite1.JPG",
      technologies: ["Logo Design", "Charte Graphique", "Stationery"],
      year: "2023"
    },
    {
      id: 6,
      title: "Affiche événementielle - Festival Urbain",
      category: "graphic",
      description: "Campagne d'affichage pour événement culturel majeur",
      image: "/flyer1.JPG",
      technologies: ["Affichage", "Événementiel", "Print Grand Format"],
      year: "2024"
    },
  ];

  const categories: Category[] = [
    { 
      label: "Tous les projets", 
      value: "all", 
      icon: <Eye size={16} />,
      count: projects.length 
    },
    { 
      label: "Logo & Branding", 
      value: "logo", 
      icon: <Palette size={16} />,
      count: projects.filter(project => project.category === "logo").length
    },
    { 
      label: "Sites Web", 
      value: "web", 
      icon: <Globe size={16} />,
      count: projects.filter(project => project.category === "web").length
    },
    { 
      label: "Design Graphique", 
      value: "graphic", 
      icon: <Layers size={16} />,
      count: projects.filter(project => project.category === "graphic").length
    },
  ];

  const getFilteredProjects = (): Project[] => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  };

  const filteredProjects = getFilteredProjects();

  const getCategoryBadgeClass = (category: string): string => {
    if (category === "logo") {
      return "bg-purple-500/20 text-purple-300 border border-purple-500/30";
    }
    if (category === "web") {
      return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
    }
    return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
  };

  const getCategoryLabel = (category: string): string => {
    if (category === "logo") {
      return "Branding";
    }
    if (category === "web") {
      return "Web";
    }
    return "Graphisme";
  };

  const handleProjectClick = (projectId: number): void => {
    console.log("Voir projet:", projectId);
    // Implémentez la logique de navigation ici
  };

  const handleFilterClick = (filterValue: string): void => {
    setActiveFilter(filterValue);
  };

  const renderFilterButtons = (): JSX.Element[] => {
    return categories.map((category) => (
      <button
        key={category.value}
        onClick={() => handleFilterClick(category.value)}
        className={`flex items-center gap-3 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 border backdrop-blur-sm ${
          activeFilter === category.value
            ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white shadow-lg shadow-blue-500/25 border-transparent"
            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
        }`}
        aria-pressed={activeFilter === category.value}
        type="button"
      >
        {category.icon}
        <span>{category.label}</span>
        <span className={`px-2 py-1 rounded-full text-xs ${
          activeFilter === category.value 
            ? "bg-white/20" 
            : "bg-white/10"
        }`}>
          {category.count}
        </span>
      </button>
    ));
  };

  const renderProjects = (): JSX.Element[] => {
    return filteredProjects.map((project, index) => (
      <motion.div
        key={project.id}
        className="group flex flex-col h-full bg-gradient-to-br from-white/5 to-white/0 rounded-2xl overflow-hidden border border-white/10 hover:border-white-20 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" 
            aria-hidden="true"
          />
          
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${getCategoryBadgeClass(project.category)}`}>
              {getCategoryLabel(project.category)}
            </span>
          </div>

          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-xs font-medium">
            {project.year}
          </div>

          <div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-hidden="true"
          >
            <div className="bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full p-4 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <button 
            onClick={() => handleProjectClick(project.id)}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-medium transition-all duration-300 group/btn mt-auto"
            type="button"
          >
            <span>Voir le projet</span>
            <ArrowUpRight 
              size={16} 
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" 
            />
          </button>
        </div>
      </motion.div>
    ));
  };

  const renderNoProjectsMessage = (): JSX.Element => (
    <motion.div 
      className="text-center py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-gray-400 text-lg">
        Aucun projet trouvé dans cette catégorie.
      </div>
    </motion.div>
  );

  return (
    <section 
      id="realisations" 
      className="relative bg-gradient-to-br from-[#0A1A3F] via-[#0E225A] to-[#05102A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="realisations-title"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Eye className="w-4 h-4" aria-hidden="true" />
            Notre portfolio
          </div>
          
          <h2 id="realisations-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de projets où créativité et expertise technique 
            se rencontrent pour donner vie à des solutions digitales d&apos;exception.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {renderFilterButtons()}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.length > 0 ? renderProjects() : renderNoProjectsMessage()}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-emerald-400/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et transformons vos idées en réalité digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Démarrer mon projet
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300"
              >
                Voir tous les projets
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div 
        className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
    </section>
  );
}