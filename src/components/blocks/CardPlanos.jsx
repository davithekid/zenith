import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertDialogDemo } from "./Dialog"
import { description } from "../chart-area-interactive"

export function CardPlanos() {

    const planos = [
        {
            id: 1,
            title: 'Plano Básico',
            description: 'Acesso a templates',
            img: 'https://blog.thenounproject.com/wp-content/uploads/2024/02/notion-header-1-1280x720.png',
            preco: 'R$19,99/mês',
        },
        {
            id: 2,
            title: 'Plano Premium',
            description: 'Acesso a templates e comunidade',
            img: 'https://blog.thenounproject.com/wp-content/uploads/2024/02/notion-header-1-1280x720.png',
            preco: 'R$39,99/mês',
        },
        {
            id: 3,
            title: 'Plano Super Premium',
            description: 'Acesso a templates, comunidades e streams!',
            img: 'https://blog.thenounproject.com/wp-content/uploads/2024/02/notion-header-1-1280x720.png',
            preco: 'R$64,99/mês',
        }
    ]


    return (
        <>
            {
                planos.map((plano) => (
                    <div key={plano.id}>
                        <Card className="w-full max-w-sm">
                            <CardHeader>
                                <CardTitle>{plano.title}</CardTitle>
                                <CardDescription>
                                    {plano.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img src={plano.img} className="rounded mb-2" alt="" />
                                <AlertDialogDemo />
                                <p className="py-2 font-bold">{plano.preco}</p>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" className="w-full">
                                    Comprar
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            }
        </>
    )
}
