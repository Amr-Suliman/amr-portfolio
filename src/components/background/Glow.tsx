"use client";

export default function Glow() {
  return (
    <>
      <div
        className="
        absolute
        -left-40
        top-20

        h-[500px]
        w-[500px]

        rounded-full

        bg-red-700/20

        blur-[180px]

        animate-pulse
      "
      />

      <div
        className="
        absolute
        -right-40
        bottom-0

        h-[450px]
        w-[450px]

        rounded-full

        bg-red-900/20

        blur-[170px]

        animate-pulse
      "
      />
    </>
  );
}