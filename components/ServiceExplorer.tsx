'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { services } from '@/lib/site';
import Reveal from './Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="servicios" className="relative overflow-hidden bg-ink py-[clamp(80px,13vh,150px)]">
      <div className="shell">
        <Reveal>
          <p className="label mb-6 text-sand">Servicios</p>
          <h2 className="h-section max-w-[18ch] text-canvas">
            Cuatro oficios,
            <br />
            un solo equipo.
          </h2>
        </Reveal>

        {/* Selector — horizontal rail (swipeable on mobile) */}
        <Reveal delay={0.08}>
          <div className="no-bar mt-12 flex gap-2 overflow-x-auto pb-1 md:mt-16 md:gap-3">
            {services.map((sv, i) => (
              <button
                key={sv.id}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-[0.82rem] transition-all duration-600 ease-apple md:px-6 md:py-3 ${
                  active === i
                    ? 'border-canvas bg-canvas text-ink'
                    : 'border-canvas/22 text-canvas/65 hover:border-canvas/50 hover:text-canvas'
                }`}
              >
                {sv.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.72, ease: EASE }}
              >
                <h3 className="h-sub whitespace-pre-line text-canvas">{s.headline}</h3>
                <p className="body-lg mt-5 max-w-[46ch] text-canvas/62">{s.body}</p>
                <ul className="mt-8 border-t rule-dark">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="border-b rule-dark py-3.5 text-[0.9rem] text-canvas/78"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-2 text-[0.88rem] text-sand transition-opacity duration-400 hover:opacity-70"
                >
                  Consultar este servicio
                  <span aria-hidden>→</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual — one large + two supporting, all within native resolution */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="grid grid-cols-3 gap-2.5 md:gap-3"
              >
                <motion.div
                  className="relative col-span-3 aspect-[16/10] overflow-hidden bg-inkSoft"
                  initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  transition={{ duration: 1.05, ease: EASE }}
                >
                  <Image
                    src={s.images[0]}
                    alt={`${s.name} — trabajo de Romero Obras y Reformas`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 grain grain-dark" />
                </motion.div>

                {[s.images[1], s.images[2], s.portrait].map((src, i) => (
                  <motion.div
                    key={src}
                    className="relative aspect-[3/4] overflow-hidden bg-inkSoft"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.12 + i * 0.07 }}
                  >
                    <Image
                      src={src}
                      alt={`${s.name} — detalle`}
                      fill
                      sizes="(max-width: 1024px) 33vw, 19vw"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
