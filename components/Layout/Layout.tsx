import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
  description?: string;
}

function Layout({ children, pageTitle, description }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {description ? <meta name="description" content={description} /> : null}
        {pageTitle ? <title>{pageTitle}</title> : null}
      </Head>
      <main>
        {/* <Header/> */}
        <div className="content">{children}</div>
      </main>
    </>
  );
}
