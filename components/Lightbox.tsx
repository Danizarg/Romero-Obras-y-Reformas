'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Item = { src: string; cat: string };

/**
 * Fullscreen viewer.
 *
 * Deliberately CSS-transition based rather than AnimatePresence: the exit
 * animation there did not reliably complete, which left an invisible
 * `pointer-events: auto` overlay mounted over the whole page. Here the closed
 * state is always `pointer-events-none`, so it can never block the page even
 * mid-transition.
 */
export default function Lightbox({
  items,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  items: Item[];
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const touchX = useRef<number | null>(null);
  const open = index !== null;

  // Keep the last item during the fade-out so the image does not vanish first.
  const [shown, setShown] = useState<Item | null>(null);
  useEffect(() => {
    if (index !== null && items[index]) setShown(items[index]);
  }, [index, items]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onNext, onPrev]);

  if (!shown) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink"
      style={{
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
        pointerEvents: open ? 'auto' : 'none',
        transition:
          'opacity 420ms cubic-bezier(0.16,1,0.3,1), visibility 0ms linear ' +
          (open ? '0ms' : '420ms'),
      }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label="Visor de imágenes"
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx < -50) onNext();
        if (dx > 50) onPrev();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-[var(--shell-x)] py-5">
        <span className="label text-canvas/60">{shown.cat}</span>
        <div className="flex items-center gap-5">
          <span className="text-[0.8rem] tabular-nums text-canvas/60">
            {(index ?? 0) + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            tabIndex={open ? 0 : -1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-canvas/25 text-canvas transition-colors duration-500 hover:border-canvas/70"
          >
            <span aria-hidden className="text-[1.1rem] leading-none">
              &times;
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex-1 px-[var(--shell-x)] pb-6">
        <Image
          key={shown.src}
          src={shown.src}
          alt={`${shown.cat} — Romero Obras y Reformas`}
          fill
          sizes="100vw"
          className="animate-none object-contain"
          priority
        />
      </div>

      <div className="flex items-center justify-center gap-3 pb-7">
        <button
          onClick={onPrev}
          aria-label="Imagen anterior"
          tabIndex={open ? 0 : -1}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-canvas/25 text-canvas transition-colors duration-500 hover:border-canvas/70"
        >
          <span aria-hidden>&larr;</span>
        </button>
        <button
          onClick={onNext}
          aria-label="Imagen siguiente"
          tabIndex={open ? 0 : -1}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-canvas/25 text-canvas transition-colors duration-500 hover:border-canvas/70"
        >
          <span aria-hidden>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
