import { Separator } from "@/components/ui/separator"
import { CardDemo } from "./Card"
import { Component } from "./GraficoBarra"
import { ChartPieSimple } from "./GraficoPizza"

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

      <div className="space-y-1 px-6">
        <h4 className="text-sm lg:text-2xl leading-none font-bold flex justify-center">Dados com templates mais usados</h4>
        <p className="text-muted-foreground text-sm lg:text-sm flex justify-center">
          Templates mais usados conforme usuários
        </p>
      </div>
      <div className="flex py-6 items-center">

        <Component />
        <ChartPieSimple />
      </div>
      <Separator className="my-4" />

    </div>
  )
}
