import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <div className="px-3 py-12">

        <AccordionItem value="item-1">
          <AccordionTrigger className={"font-bold"}>Templates informações</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Possuimos varios templates visando a eficiencia de seus estudos.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className={"font-bold"}>Como acessar um template</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Dentro do card, clique em "acessar" que voce será redirecionado para a página do template
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className={"font-bold"}>Qual a vantagem de ter um template?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Eficiencia e tudo.
            </p>
          </AccordionContent>
        </AccordionItem>
        </div>
      </Accordion>
    )
  }
  