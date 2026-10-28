
import { cn } from "cn";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";

const NavbarComponent = () => {
  return (
    <section className={cn("py-4")}>
      <div className="container">

        {/* Desktop Menu */}
        <DesktopNavbarComponent/>

        {/* Mobile Menu */}
        <MobileNavbarComponent/>
       
      </div>
    </section>
  );
};
export { NavbarComponent };
