'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Reveal from './Reveal';

// Authentic progression: the SAME pool pavilion project photographed at three
// stages. These are not aligned before/after crops, so we present them as a
// labelled sequence rather than a wipe slider (which would misrepresent them).
const steps = [
  {
    id: 'obra',
    label: 'Obra',
    caption: 'Estructura levantada y revestimiento base en ejecución.',
    src: '/work/obra-01.jpg',
    w: 800,
    h: 530,
  },
  {
    id: 'proceso',
    label: 'Proceso',
    caption: 'Arcos, celosía y superficies trabajadas antes del acabado final.',
    src: '/work/obra-02.jpg',
    w: 800,
    h: 530,
  },
  {
    id: 'resultado',
    label: 'Resultado',
    caption: 'El mismo volumen terminado, integrado con la zona de piscina.',
    src: '/work/obra-v-01.jpg',
    w: 530,
    h: 800,
  },
];

export default function ReformasIntegrales() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="reformas" className="relative bg-canvas py-[clamp(80px,13vh,150px)]">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label mb-6 text-sand">Reformas integrales</p>
              <h2 className="h-section text-ink">
                Reformas integrales,
                <br />
                sin perder detalle.
              </h2>
              <p className="body-lg mt-7 max-w-[44ch] text-stone">
                Ejecutamos reformas completas de viviendas y locales comerciales:
                desde la albañilería y las instalaciones hasta el alicatado, el
                solado, la cocina, el baño y los acabados decorativos.
              </p>
              <p className="body-lg mt-4 max-w-[44ch] text-stone">
                Coordinamos los oficios necesarios con un mismo equipo, para que
                cada fase entre cuando le corresponde y el resultado no dependa
                de la improvisación.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-0 border-t rule">
                {steps.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className="group flex items-center justify-between border-b rule py-4 text-left transition-colors duration-500"
                    aria-pressed={active === i}
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`text-[0.68rem] tracking-label transition-colors duration-500 ${
                          active === i ? 'text-sand' : 'text-stoneLight'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`h-sub transition-colors duration-500 ${
                          active === i ? 'text-ink' : 'text-stoneLight group-hover:text-stone'
                        }`}
                      >
                        {s.label}
                      </span>
                    </span>
                    <span
                      className={`h-px transition-all duration-700 ease-apple ${
                        active === i ? 'w-10 bg-sand' : 'w-4 bg-line'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="relative overflow-hidden bg-canvasAlt">
                {/* Fixed 4:3 stage so portrait/landscape sources swap cleanly */}
                <div className="relative aspect-[4/3] w-full">
                  {steps.map((s, i) => (
                    <motion.div
                      key={s.id}
                      className="absolute inset-0"
                      initial={false}
                      animate={{
                        opacity: active === i ? 1 : 0,
                        scale: active === i ? 1 : 1.04,
                      }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={s.src}
                        alt={`${s.label} — reforma ejecutada por Romero Obras y Reformas`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                  <div className="pointer-events-none absolute inset-0 grain" />

                  <div className="absolute left-5 top-5">
                    <span className="label rounded-full bg-ink/70 px-3.5 py-2 text-canvas backdrop-blur-md">
                      {step.label}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-[52ch] text-[0.9rem] leading-relaxed text-stone">
                {step.caption}
              </p>
              <p className="mt-2 text-[0.72rem] text-stoneLight">
                Mismo proyecto, tres fases de ejecución.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
