import { useDarkMode } from "next-dark-mode";
import Link from "next/link";
import DarkModeSwitch from "../DarkModeSwitch";

function Header() {
  // const { darkModeActive, switchToLightMode, switchToDarkMode } = useDarkMode();

  // const toggleDarkMode = () => {
  //   if (darkModeActive) {
  //     switchToLightMode();
  //   } else {
  //     switchToDarkMode();
  //   }
  // };

  return (
    <header className="py-4">
      <div className="container px-4 mx-auto py-2 flex items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-display text-3xl text-watermelon hover:underline">
              prn
            </a>
          </Link>
          <div className="ml-4 md:ml-8">
            <DarkModeSwitch />
          </div>
        </div>
        <div className="ml-auto flex space-x-4 items-center">
          <Link href="/resume">
            <a className="button button-link">Résumé</a>
          </Link>
          <a href="mailto:phillip@praffn.dk" className="button button-primary">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
