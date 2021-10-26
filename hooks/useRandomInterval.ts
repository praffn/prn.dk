import { useCallback, useEffect, useRef } from "react";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default function useRandomInterval(
  callback: Function,
  minDelay: number | null,
  maxDelay: number | null
) {
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }

    return () => clearTimeout(timeoutId.current!);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(() => {
    clearTimeout(timeoutId.current!);
  }, []);

  return cancel;
}
