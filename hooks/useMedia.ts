import { useEffect, useState } from "react";

const isSSR = typeof window === "undefined";

export default function useMedia(query: string, defaultState = false) {
  const [state, setState] = useState(
    isSSR ? defaultState : () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => {
      setState(mql.matches);
    };

    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return state;
}
