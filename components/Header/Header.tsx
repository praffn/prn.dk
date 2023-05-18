import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";
import ContactButton from "./ContactButton";

function Header() {
  return (
    <header className="py-4">
      <div className="container px-4 mx-auto py-2 flex items-center">
        <Link
          href="/"
          className="font-display text-3xl text-watermelon hover:underline"
        >
          prn
        </Link>
        <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
          <DarkModeToggle />
          <Link href="/resume" className="button button-link">
            Resume
          </Link>
          <ContactButton email="phillip@praffn.dk">Get in touch</ContactButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
