import { LogoIES } from "../../img";
import { Dropdown } from "../Dropdown";
const Navbar = () => {
  return (
    <div className="w-full h-24 bg-primary flex items-center px-12 justify-between sticky top-0 z-10">
      <LogoIES />
      <div className="flex gap-12 text-white font-bold">
        <a href="/">Home</a>
        <a href="#section1">Keynote Speaker</a>
        <Dropdown />
        <a href="#">Workshop</a>
        <a href="#">Venue</a>
      </div>
    </div>
  );
};

export default Navbar;
