import { AppProps } from "next/app";
import withDarkMode, { useDarkMode } from "next-dark-mode";
import "../styles/globals.css";
import { useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode.darkModeActive);
  }, [darkMode.darkModeActive]);

  const Layout = (Component as any).layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withDarkMode(MyApp);
