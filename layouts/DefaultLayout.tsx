import { ReactNode } from "react";
import Header from "../components/Header/Header";
import SkipToContent from "../components/SkipToContent/SkipToContent";

interface DefaultLayoutProps {
  readonly children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <SkipToContent href="#main-content" />
      <Header />
      <main id="main-content" className="mx-auto container px-4">
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
