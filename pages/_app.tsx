import { AppProps } from "next/app";
import "../styles/globals.css";
import "tippy.js/dist/tippy.css";
import DefaultLayout from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
