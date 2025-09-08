import { Separator } from "@/components/ui/separator"
import { CardDemo } from "./Card"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1 px-6">
        <h4 className="text-sm lg:text-2xl leading-none font-bold">Templates</h4>
        <p className="text-muted-foreground text-sm lg:text-sm">
          Adquire templates para ajudar o seu estudo
        </p>
      </div>
      <div className="flex justify-between py-6 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CardDemo />
        </div>

      </div>
      <Separator className="my-4" />
     
    </div>
  )
}
