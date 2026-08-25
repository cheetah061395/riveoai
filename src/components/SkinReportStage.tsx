"use client";

import { useEffect, useRef, useState } from "react";

import { SkinReportPhoneAlt } from "@/components/SkinReportPhoneAlt";

/**
 * The skin report phone as it appears in the blue section, sized to its column.
 *
 * This replaces a hardcoded `h-[493px] md:h-[533px]` with `scale-[1.08]`. Those
 * numbers were tuned at desktop width and only held there: the phone is a fixed
 * 402px wide, so at 1.08 it wanted 434px while a 390px phone screen minus the
 * section's padding offers about 310. The overflow was clipped, which cut the
 * shade-profile paragraph mid-sentence and ran it into the footer.
 *
 * So the scale is measured instead of assumed, capped at MAX_SCALE so desktop
 * keeps the size it was tuned to, and the container's height is derived from
 * that scale rather than fixed, which is what stops the copy being cut off.
 *
 * The phone is 402x874 but its content ends well before the bottom, so only
 * VISIBLE_HEIGHT of it is worth showing.
 *
 * CROP_TOP shaves the flat top of the frame so it reads as carrying on past
 * the section's top edge. That only works on desktop, where the phone sits
 * beside the heading and does run off the top. Stacked under the heading on a
 * phone there is blue above it, so the same shave reads as a phone with its
 * top cut off. Below md the frame is shown whole, curvature and all.
 */
const PHONE_WIDTH = 402;
const VISIBLE_HEIGHT = 510;
const CROP_TOP = 16;
const MAX_SCALE = 1.08;

export function SkinReportStage() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(MAX_SCALE);
  const [bleedsOffTop, setBleedsOffTop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setBleedsOffTop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      // A zero width means it is not laid out yet or is hidden. Scaling to 0
      // would collapse the phone, so keep the last good value.
      if (!el.clientWidth) return;
      setScale(Math.min(el.clientWidth / PHONE_WIDTH, MAX_SCALE));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cropTop = bleedsOffTop ? CROP_TOP : 0;

  // min-w-0 below matters: as a grid item this defaults to min-width:auto, so
  // the phone could stretch its own column, and the width we then measured was
  // that stretched width. The scale never shrank, so the section overflowed
  // sideways and cut off the heading beside it.
  return (
    <div
      ref={ref}
      className="flex w-full min-w-0 justify-center md:justify-start"
    >
      {/* Sized to the scaled phone so ordinary flex alignment still works.
          Scaling from the top left inside it keeps the maths simple. */}
      <div
        className="relative overflow-hidden"
        style={{
          width: PHONE_WIDTH * scale,
          height: (VISIBLE_HEIGHT - cropTop) * scale,
        }}
      >
        <div
          className="absolute left-0"
          style={{
            top: -cropTop * scale,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <SkinReportPhoneAlt />
        </div>
      </div>
    </div>
  );
}

export default SkinReportStage;
