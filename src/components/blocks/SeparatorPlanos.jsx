import { Separator } from "@/components/ui/separator"
import { CardPlanos } from "./CardPlanos"

export function SeparatorPlanos() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm lg:text-2xl leading-none font-bold">Planos</h4>
        <p className="text-muted-foreground text-sm lg:text-sm">
          Confira nossos planos
        </p>
      </div>
      <div className="flex justify-between py-6 gap-8">
        <CardPlanos/>
      </div>
      <Separator className="my-4" />
     
    </div>
  )
}
