import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import "tippy.js/dist/tippy.css";
import DefaultLayout from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
