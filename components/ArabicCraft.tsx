'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { MaskLines } from './Reveal';

// Progressive closeness achieved with FOUR DISTINCT photographs rather than a
// digital zoom — the source files are 800px wide, so magnifying them would go
// soft. Different framings keep every step at native sharpness.
const steps = [
  { id: 'superficie', label: 'Superficie', src: '/work/arabe-01.jpg', text: 'Un techo completo resuelto en yeso tallado, pieza a pieza.' },
  { id: 'patron', label: 'Patrón', src: '/work/arabe-06.jpg', text: 'La geometría se replantea sobre el propio muro antes de tallar.' },
  { id: 'tallado', label: 'Tallado', src: '/work/arabe-03.jpg', text: 'El relieve se trabaja a mano, en fresco, sin moldes en serie.' },
  { id: 'espacio', label: 'Espacio', src: '/work/arabe-v-01.jpg', text: 'El resultado deja de parecer decoración y pasa a ser arquitectura.' },
];

export default function ArabicCraft() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.4 });

  return (
    <section id="artesania" ref={ref} className="relative h-[380vh] bg-canvasAlt">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 plaster" />
        <div className="absolute inset-0 grain" />

        <div className="shell relative w-full">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            {/* Copy */}
            <div className="lg:col-span-5">
              <p className="label mb-5 text-sand">Trabajos árabes</p>
              <h2 className="h-section text-ink">
                <MaskLines lines={['El detalle', 'también', 'se construye.']} />
              </h2>

              <div className="relative mt-8 h-[86px] md:h-[92px]">
                {steps.map((s, i) => (
                  <StepCopy key={s.id} s={s} i={i} p={p} total={steps.length} />
                ))}
              </div>

              <p className="mt-6 max-w-[42ch] text-[0.92rem] leading-relaxed text-stone">
                Un oficio que hemos ejecutado en Andalucía y también fuera de
                España, en Francia y Marruecos.
              </p>

              {/* Step rail */}
              <ul className="mt-8 flex gap-5">
                {steps.map((s, i) => (
                  <StepDot key={s.id} s={s} i={i} p={p} total={steps.length} />
                ))}
              </ul>
            </div>

            {/* Visual — capped at native resolution so it never upscales */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[800px] overflow-hidden bg-canvas shadow-[0_40px_90px_-40px_rgba(20,19,15,0.45)]">
                {steps.map((s, i) => (
                  <StepImage key={s.id} s={s} i={i} p={p} total={steps.length} />
                ))}
                <div className="pointer-events-none absolute inset-0 grain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useWindow(p: MotionValue<number>, i: number, total: number) {
  const seg = 1 / total;
  const start = i * seg;
  const end = start + seg;
  return useTransform(
    p,
    [start - seg * 0.4, start + seg * 0.15, end - seg * 0.15, end + seg * 0.4],
    i === 0 ? [1, 1, 1, 0] : i === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
}

function StepImage({ s, i, p, total }: { s: (typeof steps)[number]; i: number; p: MotionValue<number>; total: number }) {
  const opacity = useWindow(p, i, total);
  const seg = 1 / total;
  const scale = useTransform(p, [i * seg - seg, i * seg + seg * 1.5], [1.05, 1.0]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={s.src}
          alt={`${s.label} — trabajo decorativo tallado de Romero Obras y Reformas`}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

function StepCopy({ s, i, p, total }: { s: (typeof steps)[number]; i: number; p: MotionValue<number>; total: number }) {
  const opacity = useWindow(p, i, total);
  const seg = 1 / total;
  const y = useTransform(p, [i * seg - seg * 0.4, i * seg + seg * 0.2], [18, 0]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-0">
      <p className="h-sub text-ink">{s.label}</p>
      <p className="mt-2 max-w-[38ch] text-[0.95rem] leading-relaxed text-stone">{s.text}</p>
    </motion.div>
  );
}

function StepDot({ s, i, p, total }: { s: (typeof steps)[number]; i: number; p: MotionValue<number>; total: number }) {
  const opacity = useWindow(p, i, total);
  const dim = useTransform(opacity, (v) => 0.28 + v * 0.72);
  const w = useTransform(opacity, (v) => `${18 + v * 26}px`);

  return (
    <li className="flex flex-col gap-2">
      <motion.span style={{ width: w }} className="block h-px bg-ink" />
      <motion.span style={{ opacity: dim }} className="label text-ink">
        {s.label}
      </motion.span>
    </li>
  );
}
