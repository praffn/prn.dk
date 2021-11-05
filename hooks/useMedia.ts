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

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
    }

    return () => {
      if (typeof mql.addEventListener === "function") {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, [query]);

  return state;
}
