import { AccordionPlanos } from "@/components/blocks/AccordionPlanos";
import { AvatarDemo } from "@/components/blocks/Icon";
import { SeparatorPlanos } from "@/components/blocks/SeparatorPlanos";
import Footer05Page from "@/components/footer-05/footer-05";
import Navbar from "@/components/navbar-04/navbar-04";
import { ModeToggle } from "@/components/themes/botao";

export default function Planos() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="mx-auto py-10 container">
        <SeparatorPlanos />
      </section>
      
      <footer>
        <Footer05Page />
      </footer>

    </>
  )
}