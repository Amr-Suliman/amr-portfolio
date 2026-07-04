"use client";

import { useMemo } from "react";

import { useMousePosition } from "./useMousePosition";

export function useParallax(speed = 0.03) {
  const { x, y } = useMousePosition();

  return useMemo(
    () => ({
      x: x * speed,
      y: y * speed,
    }),
    [x, y, speed]
  );
}