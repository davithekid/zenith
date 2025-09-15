import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "Templates informações",
    answer:
      "Possuimos varios templates visando a eficiencia de seus estudos.",
  },
  {
    question: "Como acessar um template",
    answer:
      "Dentro do card, clique em 'acessar' que voce será redirecionado para a página do template.",
  },
  {
    question: "Qual a vantagem de ter um template?",
    answer:
      "Eficiencia e tudo.",
  },

];

const FAQ07 = () => {
  return (
    <div className="flex items-center justify-center px-6 py-12 m-20">
      <div className="w-full max-w-2xl">
        <h2
          className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
          Perguntas frequentes
        </h2>
        <p className="mt-2 text-xl text-muted-foreground">
          Clique nas perguntas para obter a resposta
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 sm:mt-10 space-y-4"
          defaultValue="question-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}>
                  {question}
                  <PlusIcon
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ07;
