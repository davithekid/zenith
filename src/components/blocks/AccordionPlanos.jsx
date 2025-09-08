import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionPlanos() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className={"font-bold"}>Planos informações</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        O <strong>Plano Básico</strong> é ideal para quem está começando:
                        oferece acesso limitado às funcionalidades essenciais e suporte por e-mail.
                    </p>
                    <p>
                        O <strong>Plano Premium</strong> amplia sua experiência com relatórios
                        detalhados, suporte prioritário e integração com múltiplas plataformas.
                    </p>
                    <p>
                        Já o <strong>Super Plano Premium</strong> garante acesso total a todas as ferramentas,
                        consultoria personalizada e benefícios exclusivos para sua empresa.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className={"font-bold"}>Como adquirir um plano</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Oferecemos a contratação dos planos de forma totalmente online e segura.
                        A ativação acontece em poucos minutos após a confirmação do pagamento.
                    </p>
                    <p>
                        Todos os clientes têm acesso a um painel exclusivo para acompanhar
                        sua assinatura em tempo real, incluindo status de cobrança e benefícios ativos.
                    </p>

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className={"font-bold"}>Reembolso</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Garantimos a satisfação dos nossos clientes com uma política de
                        reembolso de até <strong>30 dias</strong> após a contratação do plano.
                    </p>
                    <p>
                        Caso queira cancelar, basta solicitar pelo painel do usuário.
                        O estorno será processado em até 5 dias úteis, sem burocracia.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
