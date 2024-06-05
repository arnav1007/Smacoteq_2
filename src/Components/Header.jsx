import { useParams } from "react-router";
import Burger from "../Ui/Burger";
import Logo from "../Ui/Logo";

function Header() {

  return (
    <div
      className={`fixed top-0 z-10 flex h-[10dvh] w-full items-center justify-between bg-main  px-12 align-middle`}
    >
      <Logo />
      <Burger />
    </div>
  );
}

export default Header;
