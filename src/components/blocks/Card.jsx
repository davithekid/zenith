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

export function CardDemo() {



  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Pomodoro</CardTitle>
        <CardDescription>
          Templates usando táticas de pomodoro
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img src="https://i.redd.it/4bqvflu73ud81.png" className="rounded" alt="" />
        <p className="py-2">R$ 300,00</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  )
}
