import AboutUsSection from "@/components/about-us-section";
import Footer05Page from "@/components/footer-05/footer-05";
import Navbar from "@/components/navbar-04/navbar-04";

export default function Sobre() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <AboutUsSection />
            </main>

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}