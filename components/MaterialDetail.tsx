'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { materials } from '@/lib/site';
import Reveal from './Reveal';

export default function MaterialDetail() {
  const [active, setActive] = useState(0);
  const m = materials[active];

  return (
    <section className="relative bg-canvas py-[clamp(80px,12vh,140px)]">
      <div className="shell">
        <Reveal>
          <p className="label mb-6 text-sand">Materiales</p>
          <h2 className="h-section max-w-[16ch] text-ink">Con qué trabajamos.</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="border-t rule">
              {materials.map((mat, i) => (
                <button
                  key={mat.id}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group block w-full border-b rule py-5 text-left"
                >
                  <span className="flex items-center justify-between gap-6">
                    <span
                      className={`text-[clamp(1.5rem,3vw,2.3rem)] font-medium tracking-tightest transition-colors duration-500 ${
                        active === i ? 'text-ink' : 'text-stoneLight group-hover:text-stone'
                      }`}
                    >
                      {mat.name}
                    </span>
                    <motion.span
                      className="h-px bg-sand"
                      initial={false}
                      animate={{ width: active === i ? 44 : 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </span>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.span
                        className="block overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="mt-3 block max-w-[42ch] text-[0.92rem] leading-relaxed text-stone">
                          {mat.text}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvasAlt">
              {materials.map((mat, i) => (
                <motion.div
                  key={mat.id}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.05 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={mat.image}
                    alt={`${mat.name} — material trabajado por Romero Obras y Reformas`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    style={{ objectPosition: mat.focus }}
                  />
                </motion.div>
              ))}
              <div className="pointer-events-none absolute inset-0 grain" />
              <div className="absolute bottom-5 left-5">
                <span className="label rounded-full bg-canvas/85 px-3.5 py-2 text-ink backdrop-blur-md">
                  {m.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
