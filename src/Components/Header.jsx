import Burger from "../Ui/Burger";
import Logo from "../Ui/Logo";

function Header() {
  return (
    <div className="fixed top-0 z-10  flex h-[10dvh] w-full items-center justify-between px-12 align-middle bg-black">
      <Logo />
      <Burger />
    </div>
  );
}

export default Header;
