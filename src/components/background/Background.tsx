"use client";

import Gradient from "./Gradient";
import Glow from "./Glow";
import Grid from "./Grid";
import Noise from "./Noise";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050505]">
      <Gradient />

      <Glow />

      <Grid />

      <Noise />
    </div>
  );
}