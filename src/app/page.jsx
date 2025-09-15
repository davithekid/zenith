import { SeparatorDemo } from "@/components/blocks/Separator";
import CarouselSlides from "@/components/Carrossel/carrossel";
import Contact02Page from "@/components/contact-02/contact-02";
import FAQ07 from "@/components/faq-07/faq-07";
import Footer05Page from "@/components/footer-05/footer-05";
import HeroPrincipal from "@/components/hero-07/hero-07";
import Navbar from "@/components/navbar-04/navbar-04";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";

export default function Home() {
  return (
    <>
      <header className="mx-auto container flex justify-between py-6">
        <Navbar />
      </header>


      <section id="templates" className="mx-auto py-10 container ">
        <HeroPrincipal/>
        <SeparatorDemo />
        <Testimonial04/>
        <FAQ07/>
        <Contact02Page/>
      </section>
      
      <Footer05Page />




    </>
  )
}