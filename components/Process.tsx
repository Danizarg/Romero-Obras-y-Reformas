'use client';

import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { process } from '@/lib/site';
import { MaskLines } from './Reveal';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="proceso" className="relative bg-canvasAlt py-[clamp(80px,13vh,150px)]">
      <div className="absolute inset-0 plaster" />
      <div className="shell relative">
        <p className="label mb-6 text-sand">Proceso</p>
        <h2 className="h-section max-w-[18ch] text-ink">
          <MaskLines lines={['Un proceso claro.', 'Un resultado controlado.']} />
        </h2>
        <p className="body-lg mt-7 max-w-[52ch] text-stone">
          Trabajamos con un proceso estandarizado para que ningún detalle quede
          al azar y cada fase entre en el momento que le corresponde.
        </p>

        <div ref={ref} className="relative mt-16">
          {/* Progress line */}
          <div className="absolute left-0 top-0 h-full w-px bg-line md:left-[9px]">
            <motion.div
              className="h-full w-px origin-top bg-sand"
              style={{ scaleY: p }}
            />
          </div>

          <ol className="flex flex-col">
            {process.map((s, i) => (
              <Stage key={s.n} s={s} i={i} total={process.length} p={p} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Stage({
  s,
  i,
  total,
  p,
}: {
  s: (typeof process)[number];
  i: number;
  total: number;
  p: MotionValue<number>;
}) {
  const at = i / total;
  const opacity = useTransform(p, [at - 0.08, at + 0.06], [0.32, 1]);
  const x = useTransform(p, [at - 0.08, at + 0.06], [10, 0]);
  const dotScale = useTransform(p, [at - 0.05, at + 0.05], [0.6, 1]);

  return (
    <motion.li style={{ opacity }} className="relative border-b rule pb-8 pl-8 pt-8 md:pl-20">
      <motion.span
        style={{ scale: dotScale }}
        className="absolute left-[-3.5px] top-[38px] block h-[7px] w-[7px] rounded-full bg-sand md:left-[6px]"
      />
      <motion.div style={{ x }} className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
        <span className="label w-14 shrink-0 text-stoneLight">{s.n}</span>
        <div>
          <h3 className="h-sub text-ink">{s.name}</h3>
          <p className="mt-2 max-w-[46ch] text-[0.95rem] leading-relaxed text-stone">{s.text}</p>
        </div>
      </motion.div>
    </motion.li>
  );
}
