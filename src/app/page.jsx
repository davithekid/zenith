import { AccordionDemo } from "@/components/blocks/Accordion";
import { CardDemo } from "@/components/blocks/Card";
import { Component } from "@/components/blocks/GraficoBarra";
import { Hero45 } from "@/components/blocks/Hero";
import { AvatarDemo } from "@/components/blocks/Icon";
import { NavigationMenuDemo } from "@/components/blocks/Navbar";
import { SeparatorDemo } from "@/components/blocks/Separator";
import Contact02Page from "@/components/contact-02/contact-02";
import FAQ07 from "@/components/faq-07/faq-07";
import Footer05Page from "@/components/footer-05/footer-05";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";
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
        <Hero45/>
        <SeparatorDemo />
        <Testimonial04/>
        <FAQ07/>
        <Contact02Page/>
      </section>
      
      <Footer05Page />




    </>
  )
}