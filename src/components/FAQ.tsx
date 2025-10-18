import { useState, useEffect } from "react";
import type { ChangeEvent, JSX } from "react";
import {
  ChevronDown,
  Mail,
  Monitor,
  Paintbrush,
  LifeBuoy,
  Search,
  Globe,
  X,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: JSX.Element;
  questions: FAQItem[];
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState<FAQCategory[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const faqCategories: FAQCategory[] = [
    {
      title: "Identité Visuelle & Design",
      icon: <Paintbrush className="text-blue-400 w-6 h-6" />,
      questions: [
        {
          question: "Proposez-vous des créations de logo sur mesure ?",
          answer:
            "Oui ! Chaque logo est conçu de manière unique selon votre marque et votre public cible. Nous fournissons plusieurs propositions et ajustements avant validation finale.",
        },
        {
          question: "Offrez-vous des services d'impression ?",
          answer:
            "Oui, nous réalisons aussi des supports physiques : flyers, cartes de visite, affiches et brochures, avec un rendu professionnel et cohérent.",
        },
      ],
    },
    {
      title: "Développement Web",
      icon: <Monitor className="text-indigo-400 w-6 h-6" />,
      questions: [
        {
          question: "Quels types de sites développez-vous ?",
          answer:
            "Nous créons des sites vitrines, e-commerce, portfolios et applications web modernes, sécurisés et optimisés pour la performance.",
        },
        {
          question: "Le site sera-t-il compatible mobile ?",
          answer:
            "Oui, tous nos sites sont 100 % responsive, testés sur plusieurs appareils pour garantir une expérience fluide partout.",
        },
      ],
    },
    {
      title: "Maintenance & Support",
      icon: <LifeBuoy className="text-emerald-400 w-6 h-6" />,
      questions: [
        {
          question: "Proposez-vous une maintenance après livraison ?",
          answer:
            "Absolument. Nous assurons un suivi régulier : mises à jour, sauvegardes automatiques, sécurité, et assistance technique selon vos besoins.",
        },
        {
          question: "Comment contacter votre support ?",
          answer:
            "Vous pouvez nous écrire à support@afryzza.com ou via le formulaire de contact de notre site. Nous répondons dans les plus brefs délais.",
        },
      ],
    },
    {
      title: "Autres Services",
      icon: <Globe className="text-cyan-400 w-6 h-6" />,
      questions: [
        {
          question: "Travaillez-vous avec des clients internationaux ?",
          answer:
            "Oui, Afryzza accompagne des clients dans plusieurs pays grâce à une communication fluide et des outils collaboratifs modernes.",
        },
        {
          question: "Faites-vous des formations professionnelles ?",
          answer:
            "Oui, des formations en design et développement web seront bientôt disponibles en ligne et en présentiel.",
        },
      ],
    },
  ];

  const normalizeText = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const getSuggestions = (text: string): string[] => {
    if (!text.trim()) return [];
    const normalized = normalizeText(text);
    const allQuestions = faqCategories.flatMap((cat) =>
      cat.questions.map((q) => q.question)
    );
    const matches = allQuestions.filter((q) =>
      normalizeText(q).includes(normalized)
    );
    return [...new Set(matches)].slice(0, 5);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCategories(faqCategories);
      setSuggestions([]);
      return;
    }

    const normalizedSearch = normalizeText(searchTerm);
    const filtered = faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (item) =>
            normalizeText(item.question).includes(normalizedSearch) ||
            normalizeText(item.answer).includes(normalizedSearch)
        ),
      }))
      .filter((category) => category.questions.length > 0);

    setFilteredCategories(filtered);
  }, [searchTerm]);

  const toggleAccordion = (index: number): void => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchTerm(value);
    setSuggestions(getSuggestions(value));
    setActiveIndex(null);
  };

  const resetSearch = (): void => {
    setSearchTerm("");
    setSuggestions([]);
    setFilteredCategories(faqCategories);
    setActiveIndex(null);
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-[#08152C] via-[#0A1A3F] to-[#0E225A] min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white"
    >
      {/* Halo décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
            <LifeBuoy className="w-4 h-4" />
            Centre d’aide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Foire aux{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Retrouvez ici les réponses aux questions les plus fréquentes sur nos services
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-16 relative max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="w-full bg-[#0C1A35]/80 backdrop-blur-sm text-white px-6 py-4 pr-12 rounded-2xl border border-blue-400/30 focus:border-emerald-400 focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 placeholder-gray-400 text-lg"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
              {searchTerm && (
                <button
                  onClick={resetSearch}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X size={18} />
                </button>
              )}
              <button className="bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-emerald-400 hover:to-blue-500 text-white p-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute z-50 w-full mt-3 bg-white/95 backdrop-blur-sm rounded-xl border border-blue-500/10 shadow-2xl overflow-hidden">
              {suggestions.map((sugg, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSearchTerm(sugg);
                    setSuggestions([]);
                  }}
                  className="px-6 py-4 hover:bg-blue-50 cursor-pointer text-gray-800 border-b border-gray-100 last:border-b-0 transition-colors duration-200 flex items-center gap-3"
                >
                  <Search className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{sugg}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Liste FAQ */}
        <div className="space-y-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center bg-white/5 px-6 py-5 border-b border-blue-500/20">
                  <div className="mr-4 text-2xl p-3 bg-blue-500/10 rounded-xl">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <div className="divide-y divide-blue-500/10">
                  {category.questions.map((item, index) => {
                    const globalIndex = catIndex * 10 + index;
                    const isOpen = activeIndex === globalIndex;
                    return (
                      <div
                        key={globalIndex}
                        className="transition-all duration-300 hover:bg-blue-500/5"
                      >
                        <button
                          onClick={() => toggleAccordion(globalIndex)}
                          className="w-full flex justify-between items-center px-6 py-5 text-left group"
                        >
                          <span className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors pr-4">
                            {item.question}
                          </span>
                          <span
                            className={`flex-shrink-0 transition-transform duration-300 ${
                              isOpen
                                ? "text-emerald-400 rotate-180"
                                : "text-blue-400"
                            }`}
                          >
                            <ChevronDown size={22} />
                          </span>
                        </button>
                        <div
                          className={`px-6 overflow-hidden transition-all duration-500 ${
                            isOpen
                              ? "max-h-96 pb-6 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="bg-blue-500/5 rounded-xl p-5 border border-blue-500/20">
                            <p className="text-gray-200 leading-relaxed text-lg">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Aucun résultat trouvé</h3>
                <p className="text-gray-400 text-lg mb-6">
                  Nous n'avons trouvé aucune réponse pour{" "}
                  <span className="text-emerald-300">"{searchTerm}"</span>
                </p>
                <button
                  onClick={resetSearch}
                  className="bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-emerald-400 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 inline-flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Réinitialiser
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Support CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-900/60 to-emerald-900/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-blue-500/20 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Besoin d’aide personnalisée ?
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Notre équipe support est disponible 24h/24 et 7j/7 pour répondre à vos questions et accompagner votre projet digital.
            </p>
            <a
              href="mailto:support@afryzza.com"
              className="bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-emerald-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 text-lg mx-auto"
            >
              <Mail /> Contact par Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
