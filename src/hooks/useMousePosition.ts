"use client";

import { useEffect, useState } from "react";

export type NormalizedMouse = {
  x: number;
  y: number;
};

export function useMousePosition(): NormalizedMouse {
  const [mouse, setMouse] = useState<NormalizedMouse>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return mouse;
}