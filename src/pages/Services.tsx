import { ServiceCard } from "../components/ServiceCard";
import { Palette, Globe, FileText } from "lucide-react";
import '../index.css';

export default function App() {
  const services = [
    {
      title: "Conception de Logo",
      description: "Créez une identité de marque unique et mémorable qui reflète les valeurs et la vision de votre entreprise.",
      icon: <Palette className="w-6 h-6" />,
      imageUrl: "https://images.unsplash.com/photo-1713616147761-c126f8009c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MDMzNzc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      procedures: [
        {
          step: "Découverte & Consultation",
          description: "Nous échangeons sur votre vision, votre public cible et vos préférences graphiques afin de comprendre vos besoins uniques."
        },
        {
          step: "Développement du concept",
          description: "Nos designers créent plusieurs propositions de logos à partir de votre cahier des charges, explorant différents styles et approches."
        },
        {
          step: "Affinage",
          description: "Vous sélectionnez votre concept préféré et nous le perfectionnons selon vos retours jusqu’à obtenir un résultat parfait."
        },
        {
          step: "Livraison",
          description: "Recevez votre logo final dans plusieurs formats (PNG, SVG, PDF) accompagné d’un guide de marque et des spécifications de couleur."
        }
      ],
      features: [
        "3 à 5 concepts de logo originaux",
        "Révisions illimitées sur le concept sélectionné",
        "Fichiers dans plusieurs formats selon vos besoins",
        "Variations de couleur (couleur, noir et blanc)",
        "Guide de style de marque inclus"
      ],
      pricing: "À partir de 15 000 FCFA"
    },
    {
      title: "Création de Site Web",
      description: "Créez un site web professionnel et responsive qui génère des résultats et offre une expérience utilisateur exceptionnelle.",
      icon: <Globe className="w-6 h-6" />,
      imageUrl: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjAyODAwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      procedures: [
        {
          step: "Analyse des besoins",
          description: "Nous identifions les objectifs, les fonctionnalités requises et les attentes de votre site à travers une consultation détaillée."
        },
        {
          step: "Conception & Maquettage",
          description: "Création de maquettes et wireframes illustrant la mise en page, la navigation et le design global du site."
        },
        {
          step: "Développement",
          description: "Nous développons votre site avec un code propre et optimisé, assurant rapidité, sécurité et adaptabilité sur tous les appareils."
        },
        {
          step: "Tests & Lancement",
          description: "Nous testons toutes les fonctionnalités sur différents navigateurs et appareils avant le lancement officiel."
        },
        {
          step: "Formation & Suivi",
          description: "Nous vous formons à la gestion du site et assurons un suivi complet après la mise en ligne."
        }
      ],
      features: [
        "Design entièrement responsive (mobile, tablette, desktop)",
        "Structure optimisée pour le référencement (SEO)",
        "Formulaires de contact et intégrations personnalisées",
        "1 mois de support gratuit après lancement"
      ],
      pricing: "À partir de 50 000 FCFA"
    },
    {
      title: "Conception de Flyers",
      description: "Des flyers percutants pour particuliers et entreprises, conçus pour attirer l’attention et faire passer votre message efficacement.",
      icon: <FileText className="w-6 h-6" />,
      imageUrl: "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHllciUyMGRlc2lnbnxlbnwxfHx8fDE3NjAzMzc3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      procedures: [
        {
          step: "Collecte du brief",
          description: "Partagez les détails de votre événement ou campagne, votre public cible, votre message et vos exigences spécifiques."
        },
        {
          step: "Création du design",
          description: "Notre équipe conçoit 2 à 3 propositions de flyers avec des visuels percutants et un message clair."
        },
        {
          step: "Révision & Ajustement",
          description: "Choisissez votre design préféré et demandez les modifications nécessaires pour atteindre le rendu final parfait."
        },
        {
          step: "Livraison finale",
          description: "Recevez des fichiers prêts à l’impression (PDF, TIFF) et des versions numériques (PNG, JPG) optimisées pour la diffusion en ligne."
        }
      ],
      features: [
        "2 à 3 concepts de design initiaux",
        "Formats numériques et prêts à l’impression",
        "Tailles personnalisées (A4, A5, sur mesure)",
        "Délai de livraison rapide (3 à 5 jours ouvrés)"
      ],
      pricing: "À partir de 25 000 FCFA"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0A1A3F' }}>

      {/* Section Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-white">Nos Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 mx-auto mb-4 rounded-full" />
            <p className="text-white/70 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services créatifs conçus pour propulser votre marque et atteindre vos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Section d’appel à l’action */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="mb-4 text-white">Prêt à démarrer votre projet ?</h2>
          <p className="text-white/70 mb-8">
            Donnez vie à vos idées dès aujourd’hui. Contactez-nous pour une consultation gratuite et un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
              Nous contacter
            </button>
            <button className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
              Voir notre portfolio
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
