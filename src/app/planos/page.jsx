import { AccordionPlanos } from "@/components/blocks/AccordionPlanos";
import { AvatarDemo } from "@/components/blocks/Icon";
import { NavigationMenuDemo } from "@/components/blocks/Navbar";
import { SeparatorPlanos } from "@/components/blocks/SeparatorPlanos";
import { ModeToggle } from "@/components/themes/botao";

export default function Planos() {
  return (
    <>
      <header className="mx-auto container flex justify-between py-6">
        <NavigationMenuDemo />
        <div className="flex gap-4">
          <ModeToggle />
          <AvatarDemo />
        </div>
      </header>


      <section className="mx-auto py-10 container">
        <SeparatorPlanos />
        <AccordionPlanos />
      </section>


    </>
  )
}