"use client";

import { useCallback, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

import { Placeholder } from "@/components/Placeholder";

const CHIP =
  "font-display text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-none bg-ink text-shell";

const LAYER =
  "absolute inset-0 w-full h-full object-cover pointer-events-none";

export type CompareSliderProps = {
  /** Omit to render a labelled Placeholder in this layer instead. */
  baseSrc?: string;
  baseAlt: string;
  baseLabel: string;
  overlaySrc?: string;
  overlayAlt: string;
  overlayLabel: string;
  ariaLabel: string;
  /** Starting divider position, as a percentage from the left edge. */
  initial?: number;
};

/**
 * Drag-to-compare frame. The overlay image sits on top of the base image and is
 * clipped to the divider position, so dragging wipes between the two exposures.
 * The visually-hidden range input keeps the control reachable by keyboard.
 */
export function CompareSlider({
  baseSrc,
  baseAlt,
  baseLabel,
  overlaySrc,
  overlayAlt,
  overlayLabel,
  ariaLabel,
  initial = 55,
}: CompareSliderProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(initial);

  const setFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    if (rect.width === 0) return;
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      draggingRef.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setFromClientX(event.clientX);
    },
    [setFromClientX],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      setFromClientX(event.clientX);
    },
    [setFromClientX],
  );

  const endDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);

  return (
    <div
      ref={frameRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-none border border-ink/15 cursor-ew-resize select-none touch-none"
    >
      {baseSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={baseSrc} alt={baseAlt} className={LAYER} draggable={false} />
      ) : (
        <Placeholder
          label={baseAlt}
          tone="warm"
          labelAlign="bottom"
          className={LAYER}
        />
      )}

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {overlaySrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={overlaySrc}
            alt={overlayAlt}
            className={LAYER}
            draggable={false}
          />
        ) : (
          <Placeholder
            label={overlayAlt}
            tone="light"
            labelAlign="bottom"
            className={LAYER}
          />
        )}
        <div className={`absolute top-3 left-3 ${CHIP}`}>{overlayLabel}</div>
      </div>

      <div className={`absolute top-3 right-3 ${CHIP}`}>{baseLabel}</div>

      <div
        className="absolute top-0 bottom-0 w-px bg-accent pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-accent text-ink flex items-center justify-center text-xs font-bold">
          ⇆
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(event) => setPos(Number(event.target.value))}
        aria-label={ariaLabel}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 accent-accent opacity-0 pointer-events-none focus-visible:opacity-100 focus-visible:pointer-events-auto"
      />
    </div>
  );
}

export default CompareSlider;
