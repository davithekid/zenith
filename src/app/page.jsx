import { AccordionDemo } from "@/components/blocks/Accordion";
import { CardDemo } from "@/components/blocks/Card";
import { Component } from "@/components/blocks/GraficoBarra";
import { AvatarDemo } from "@/components/blocks/Icon";
import { NavigationMenuDemo } from "@/components/blocks/Navbar";
import { SeparatorDemo } from "@/components/blocks/Separator";
import { ModeToggle } from "@/components/themes/botao";

export default function Home() {
  return (
    <>
      <header className="mx-auto container flex justify-between py-6">
        <NavigationMenuDemo />
        <div className="flex gap-4">
          <ModeToggle />
          <AvatarDemo />
        </div>
      </header>


      <section id="templates" className="mx-auto py-10 container ">
        <SeparatorDemo />
        <AccordionDemo />
      </section>
      



    </>
  )
}