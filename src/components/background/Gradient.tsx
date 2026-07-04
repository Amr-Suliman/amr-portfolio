"use client";

export default function Gradient() {
  return (
    <>
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top_left,rgba(192,57,43,.18),transparent_45%)]
        "
      />

      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_bottom_right,rgba(192,57,43,.12),transparent_50%)]
        "
      />
    </>
  );
}