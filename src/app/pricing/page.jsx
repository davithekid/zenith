import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

export const plans = [
  {
    name: "Iniciante",
    price: 19,
    description: "Acesso a 5 templates básicos e planos de estudo iniciais.",
    features: [
      "5 templates de estudo",
      "Plano semanal básico",
      "Dicas de foco e produtividade",
      "Guia da técnica Pomodoro",
      "Suporte via email",
    ],
    buttonText: "Começar com 5 templates",
  },
  {
    name: "Avançado",
    price: 29,
    isRecommended: true,
    description: "Acesso a 20 templates, planos detalhados e metodologias avançadas.",
    features: [
      "20 templates de estudo",
      "Plano semanal avançado",
      "Guias de técnicas Pomodoro e Feynman",
      "Mapas Mentais inclusos",
      "Suporte prioritário",
    ],
    buttonText: "Acessar 20 templates avançados",
    isPopular: true,
  },
  {
    name: "Premium",
    price: 49,
    description: "Acesso completo a todos os templates, metodologias e planos profissionais.",
    features: [
      "Todos os templates disponíveis",
      "Planos completos semanais e mensais",
      "Técnicas Pomodoro, Feynman e Revisão Espaçada",
      "Mapas Mentais avançados",
      "Suporte exclusivo e consultoria",
    ],
    buttonText: "Acessar todos os templates",
  },
];


const Pricing02 = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Planos
      </h1>
      <div
        className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative border rounded-lg p-6", {
              "border-2 border-primary py-10": plan.isPopular,
            })}>
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">${plan.price}</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6">
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing02;
