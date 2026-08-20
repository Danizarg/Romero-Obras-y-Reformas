'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { gallery } from '@/lib/site';
import Reveal from './Reveal';
import Lightbox from './Lightbox';

const cats = ['Todos', 'Reforma Integral', 'Escayola', 'Trabajos Árabes', 'Detalle', 'Exterior'] as const;

export default function Gallery() {
  const [cat, setCat] = useState<string>('Todos');
  const [open, setOpen] = useState<number | null>(null);

  const items = gallery.filter((g) => cat === 'Todos' || g.cat === cat);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    setOpen(null);
  }, [cat]);

  return (
    <section id="trabajos" className="relative bg-canvas py-[clamp(80px,13vh,150px)]">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label mb-6 text-sand">Trabajos realizados</p>
              <h2 className="h-section max-w-[16ch] text-ink">Obra construida.</h2>
            </div>
            <p className="max-w-[38ch] text-[0.92rem] leading-relaxed text-stone">
              Una selección de trabajos ejecutados por el equipo, agrupados por tipo
              de intervención.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="no-bar mt-10 flex gap-2 overflow-x-auto pb-1">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[0.78rem] transition-all duration-500 ease-apple ${
                  cat === c
                    ? 'border-ink bg-ink text-canvas'
                    : 'border-line text-stone hover:border-stone hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-2.5 md:grid-cols-6 md:gap-3">
          {items.map((g, i) => (
            <motion.button
              key={g.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: (i % 6) * 0.05 }}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden bg-canvasAlt ${
                g.span === 'wide' ? 'col-span-2 md:col-span-4' : 'col-span-1 md:col-span-2'
              } ${
                g.span === 'tall'
                  ? 'aspect-[3/4]'
                  : g.span === 'wide'
                    ? 'aspect-[16/9]'
                    : 'aspect-[4/3]'
              }`}
              aria-label={`Ampliar imagen — ${g.cat}`}
            >
              <Image
                src={g.src}
                alt={`${g.cat} — trabajo de Romero Obras y Reformas`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1100ms] ease-apple group-hover:scale-[1.045]"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/20" />
              <span className="label absolute bottom-3 left-3 translate-y-1 text-canvas opacity-0 transition-all duration-500 ease-apple group-hover:translate-y-0 group-hover:opacity-100">
                {g.cat}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={items.map((g) => ({ src: g.src, cat: g.cat }))}
        index={open}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </section>
  );
}
