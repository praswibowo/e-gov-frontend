import { LogoIES } from "../../img";
import { Dropdown } from "../Dropdown";
import { DropdownWorkshop } from "../Dropdown-workshop";
const Navbar = () => {
  return (
    <div className="w-full h-24 bg-primary flex items-center px-12 justify-between sticky top-0 z-10">
      <LogoIES />
      <div className="flex gap-12 text-white font-bold">
        <a href="/">Home</a>
        <a href="/keynote-speakers">Keynote Speaker</a>
        <Dropdown />
        <DropdownWorkshop />
        <a href="/venue">Venue</a>
      </div>
    </div>
  );
};

export default Navbar;
