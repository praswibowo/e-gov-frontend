import { LogoIES } from "../../img";

const Navbar = () => {
  return (
    <div className="w-full h-24 bg-primary flex items-center px-12 justify-between">
      <LogoIES />
      <div className="flex gap-12 text-white font-bold">
        <a href="#">Home</a>
        <a href="#section1">Keynote Speaker</a>
        <a href="#">Poster Session</a>
        <a href="#">Workshop</a>
        <a href="#">Venue</a>
      </div>
    </div>
  );
};

export default Navbar;
