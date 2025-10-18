
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  procedures: {
    step: string;
    description: string;
  }[];
  features: string[];
  pricing: string;
  imageUrl: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  procedures,
  features,
  pricing,
  imageUrl,
}: ServiceCardProps) {


  return (
    <Card className="flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-white/10 bg-card h-full">
      {/* Image de couverture */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-emerald-400/20" />
        <div className="absolute bottom-4 left-6 text-white flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-lg">
            {icon}
          </div>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>

      {/* Contenu principal */}
      <CardHeader>
        <CardDescription className="text-white/70">{description}</CardDescription>
        <div className="flex items-center justify-between pt-2">
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-emerald-400/20 text-white border-white/10"
          >
            {pricing}
          </Badge>
        </div>
      </CardHeader>

      {/* Contenu détaillé */}
      <CardContent className="flex flex-col justify-between flex-1 space-y-4">
        <div>
          <h4 className="mb-3 text-white font-semibold">Principales fonctionnalités</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-white/60">
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 bg-clip-text text-transparent mt-1">
                  •
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Accordéon des étapes */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="procedure" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/80">
              Voir le processus
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {procedures.map((procedure, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-1 text-white font-medium">{procedure.step}</h5>
                      <p className="text-white/60">{procedure.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Bouton bien aligné en bas */}
        <Button className="mt-auto w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 hover:opacity-90 text-white border-0">
          Commencer maintenant
        </Button>
      </CardContent>
    </Card>
  );
}
