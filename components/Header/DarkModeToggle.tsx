import React, {
  CSSProperties,
  useEffect,
  ReactNode,
  useState,
  useCallback,
  MouseEvent,
} from "react";
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";
import useDarkMode, { DarkModeState } from "../../hooks/useDarkMode";
import {
  animated,
  AnimatedProps,
  useTransition,
  useSpringRef,
  config,
} from "@react-spring/web";

const icons: Record<
  "dark" | "light",
  (props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement
> = {
  dark: ({ style }) => (
    <animated.span className="block absolute w-full h-full" style={style}>
      <MoonIcon />
    </animated.span>
  ),
  light: ({ style }) => (
    <animated.span className="block absolute w-full h-full" style={style}>
      <SunIcon />
    </animated.span>
  ),
};

function DarkModeToggle() {
  const { setDarkModeState, darkModeEnabled, enableSystemMode } = useDarkMode();

  const transitionRef = useSpringRef();
  const transitions = useTransition(darkModeEnabled, {
    ref: transitionRef,
    keys: null,
    config: config.wobbly,
    initial: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -100%, 0)" },
  });

  const currentMode = darkModeEnabled ? "dark" : "light";
  const otherMode = darkModeEnabled ? "light" : "dark";

  function toggle() {
    setDarkModeState(() => otherMode);
  }

  useEffect(() => {
    transitionRef.start();
  }, [transitionRef, darkModeEnabled]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkModeEnabled);
  }, [darkModeEnabled]);

  const toggleSystem = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      enableSystemMode();
    },
    [enableSystemMode]
  );

  const ariaLabel = `Toggle ${otherMode} mode`;

  return (
    <>
      <button
        className="block overflow-hidden rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500"
        onClick={toggle}
        onContextMenu={toggleSystem}
        aria-label={ariaLabel}
      >
        <span className="sr-only">
          Current mode: {currentMode}. Click to change to {otherMode} mode
        </span>
        <span className="block w-5 h-5 relative">
          {transitions((style) => {
            const Page = icons[currentMode];
            return <Page style={style} />;
          })}
        </span>
      </button>
    </>
  );
}

export default DarkModeToggle;
