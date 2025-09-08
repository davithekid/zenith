import { Separator } from "@/components/ui/separator"
import { CardDemo } from "./Card"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm lg:text-2xl leading-none font-bold">Templates</h4>
        <p className="text-muted-foreground text-sm lg:text-sm">
          Adquire templates para ajudar o seu estudo
        </p>
      </div>
      <div className="flex justify-between py-6">
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
      <Separator className="my-4" />
     
    </div>
  )
}
