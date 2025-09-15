import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../themes/botao";
import { AvatarDemo } from "../blocks/Icon";

const Navbar = () => {
  return (
    <div className="bg-muted">
      <nav
        className="fixed top-6 inset-x-4 h-16 z-100  bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex rounded-full">
              Login
            </Button>
            <Button className="rounded-full">Registrar</Button>
            <ModeToggle/>
            <AvatarDemo/>

            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
