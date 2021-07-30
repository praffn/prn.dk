import Link from "next/link";

function Header() {
  return (
    <header className="py-4">
      <div className="container px-4 mx-auto py-2 flex items-center">
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <a className="mr-auto font-display text-3xl text-watermelon hover:underline">
              prn
            </a>
          </Link>
        </div>

        <nav className="flex-1 flex justify-center hidden">
          <ul className="flex space-x-16">
            <li>Services</li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="flex-1 flex justify-center">
          {/* <Link href="/"> */}
          <a href="mailto:phillip@praffn.dk" className="ml-auto cta">
            Get in touch
          </a>
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
