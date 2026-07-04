"use client";

export default function Noise() {
  return (
    <div
      className="
      pointer-events-none
      absolute
      inset-0

      opacity-[0.03]

      mix-blend-soft-light

      [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
      "
    />
  );
}