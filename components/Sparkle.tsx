// Inspired by Josh W. Comeau
// https://www.joshwcomeau.com/react/animated-sparkles-in-react/

import { ReactNode, useCallback, useMemo, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import useRandomInterval from "../hooks/useRandomInterval";
import { randomInt } from "../util/random";

interface StarProps {
  points: number;
  size?: number;
  color?: string;
}

function Star({ points, size = 20, color = "black" }: StarProps) {
  const _points = useMemo(() => {
    const outerRadius = Math.floor(size / 2);
    const innerRadius = Math.floor(outerRadius * 0.4);
    const center = Math.max(innerRadius, outerRadius);
    const angle = Math.PI / points;
    const _points = [];
    for (let i = 0; i < points * 2; i++) {
      const radius = i & 1 ? innerRadius : outerRadius;
      _points.push(center + radius * Math.sin(i * angle));
      _points.push(center - radius * Math.cos(i * angle));
    }
    return _points.join(",");
  }, [points, size]);

  return (
    <svg width={size} height={size} fill={color}>
      <polygon points={_points} />
    </svg>
  );
}

function generateStar(size: number) {
  const minSize = Math.floor(size * 0.75);
  const maxSize = Math.floor(size * 1.25);
  const now = Date.now();
  return {
    id: `${now}-${Math.random()}`,
    createdAt: now,
    size: randomInt(minSize, maxSize),
    points: randomInt(4, 6),
    left: randomInt(0, 100),
    top: randomInt(0, 100),
  };
}

function SparklyStar(props: StarProps & { left: number; top: number }) {
  return (
    <span
      className="text-[0px] absolute pointer-events-none z-[1] inline-block -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${props.top}%`, left: `${props.left}%` }}
    >
      <span className="inline-block text-[0px] animate-growshrink">
        <span className="inline-block text-[0px] animate-halfspin">
          <Star {...props} />
        </span>
      </span>
    </span>
  );
}

interface SparkleProps {
  children: ReactNode;
  size?: number;
  color?: string;
  minInterval?: number;
  maxInterval?: number;
}

function Sparkle({
  children,
  size = 20,
  color,
  minInterval = 125,
  maxInterval = 1125,
}: SparkleProps) {
  const [stars, setStars] = useState(() => {
    return new Array(0).fill(0).map(() => generateStar(size));
  });

  const intervalCallback = useCallback(() => {
    setStars((stars) => {
      const now = Date.now();
      const newStar = generateStar(size);
      const newStars = stars.filter((star) => {
        const delta = now - star.createdAt;
        return delta < 1600;
      });
      newStars.push(newStar);
      return newStars;
    });
  }, [size]);

  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    intervalCallback,
    prefersReducedMotion ? null : minInterval,
    prefersReducedMotion ? null : maxInterval
  );

  return (
    <span className="relative inline-block">
      {stars.map((star) => (
        <SparklyStar key={star.id} color={color} {...star} />
      ))}
      <span>{children}</span>
    </span>
  );
}

export default Sparkle;
