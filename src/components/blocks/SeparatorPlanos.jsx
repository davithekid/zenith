import { Separator } from "@/components/ui/separator"
import { CardPlanos } from "./CardPlanos"
import Pricing02 from "@/app/pricing/page"
import Stats01Page from "../stats-01/stats-01"

export function SeparatorPlanos() {
  return (
    <div>
      <div className="py-6 gap-8">
        <Pricing02 />
      </div>
      <Stats01Page />
    </div>
  )
}
