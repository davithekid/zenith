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

export function CardDemo() {

  const templates = [
    {
      id: 1,
      title: 'Pomodoro',
      description: 'Técnica para mais foco',
      img: 'https://i.redd.it/4bqvflu73ud81.png',
    },
    {
      id: 2,
      title: 'Pomodoro',
      description: 'Técnica para mais foco',
      img: 'https://i.redd.it/4bqvflu73ud81.png',
    },
    {
      id: 3,
      title: 'Pomodoro',
      description: 'Técnica para mais foco',
      img: 'https://i.redd.it/4bqvflu73ud81.png',
    },
    {
      id: 4,
      title: 'Pomodoro',
      description: 'Técnica para mais foco',
      img: 'https://i.redd.it/4bqvflu73ud81.png',
    },
  ]

  return (
    <>
      {
        templates.map((template) => (
          <div key={template.id}>


            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>{template.title}</CardTitle>
                <CardDescription>
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={template.img} className="rounded mb-2" alt="" />
                <AlertDialogDemo />
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Acessar
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))
      }
    </>
  )
}
