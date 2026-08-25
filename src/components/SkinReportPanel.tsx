"use client";

import { useEffect, useRef, useState } from "react";

import { SkinReportPhoneCompact } from "@/components/SkinReportPhoneCompact";

/**
 * The skin report phone, sized to whatever tile it is dropped into.
 *
 * A hardcoded scale does not work here. The phone is a fixed 402px wide but the
 * tile is fluid at roughly a third of the viewport, so any constant is only
 * correct at one window width and clips the report at narrower ones. This
 * measures the tile and derives the scale from it.
 *
 * Measured against the unscaled phone: the matches card starts at 87px and the
 * summary ends at 504px, so cropping 70px off the top opens on the card with a
 * small gap above it. Width is always the binding constraint at this tile
 * aspect, so the content never runs off the bottom.
 */
const PHONE_WIDTH = 402;
const CROP_TOP = 70;

export function SkinReportPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / PHONE_WIDTH);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex justify-center overflow-hidden"
      style={{ background: "#EFEDE9" }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          marginTop: -CROP_TOP * scale,
        }}
      >
        <SkinReportPhoneCompact />
      </div>
    </div>
  );
}

export default SkinReportPanel;
