'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const stages = [
  {
    key: 'estructura',
    word: 'Estructura',
    en: 'Structure',
    text: 'Levantamos y adaptamos el volumen. Todo lo que después no se ve.',
    src: '/work/obra-01.jpg',
    pos: '50% 55%',
  },
  {
    key: 'superficie',
    word: 'Superficie',
    en: 'Surface',
    text: 'Guarnecido, enlucido y revestimiento. La superficie define el acabado.',
    src: '/work/obra-02.jpg',
    pos: '50% 50%',
  },
  {
    key: 'detalle',
    word: 'Detalle',
    en: 'Detail',
    text: 'Molduras, tallado y ornamento ejecutados a mano sobre el propio muro.',
    src: '/work/arabe-01.jpg',
    pos: '50% 45%',
  },
  {
    key: 'acabado',
    word: 'Acabado',
    en: 'Finish',
    text: 'El mismo espacio, terminado y entregado.',
    src: '/work/obra-v-01.jpg',
    pos: '50% 45%',
  },
];

function Stage({
  stage,
  i,
  progress,
  total,
}: {
  stage: (typeof stages)[number];
  i: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const seg = 1 / total;
  const start = i * seg;
  const end = start + seg;

  // Cross-fade windows: each stage fades in slightly before its segment
  const opacity = useTransform(
    progress,
    [start - seg * 0.45, start + seg * 0.12, end - seg * 0.12, end + seg * 0.35],
    i === 0 ? [1, 1, 1, 0] : i === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start - seg, end + seg], [1.16, 1.0]);
  const clip = useTransform(
    progress,
    [start - seg * 0.5, start + seg * 0.25],
    i === 0 ? ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] : ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)']
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity, clipPath: clip }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={stage.src}
          alt={`${stage.word} — proceso de obra de Romero Obras y Reformas`}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: stage.pos }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function StructureToFinish() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const total = stages.length;
  const barScale = useTransform(p, [0, 1], [0, 1]);

  return (
    <section id="proceso-visual" ref={ref} className="relative h-[420vh] bg-ink md:h-[480vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {stages.map((s, i) => (
          <Stage key={s.key} stage={s} i={i} progress={p} total={total} />
        ))}

        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        <div className="absolute inset-0 grain grain-dark" />

        {/* Stage copy */}
        <div className="relative flex h-full items-end pb-[clamp(64px,13vh,130px)]">
          <div className="shell w-full">
            <div className="flex items-end justify-between gap-8">
              <div className="relative min-h-[230px] w-full min-w-0 md:min-h-[270px]">
                {stages.map((s, i) => {
                  const seg = 1 / total;
                  const start = i * seg;
                  return <StageCopy key={s.key} s={s} p={p} start={start} seg={seg} idx={i} />;
                })}
              </div>

              {/* Stage index rail (desktop) */}
              <ul className="hidden shrink-0 flex-col items-end gap-3 md:flex">
                {stages.map((s, i) => (
                  <RailItem key={s.key} s={s} p={p} i={i} total={total} />
                ))}
              </ul>
            </div>

            {/* Progress line */}
            <div className="mt-10 h-px w-full bg-canvas/15">
              <motion.div
                className="h-px origin-left bg-canvas/70"
                style={{ scaleX: barScale }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageCopy({
  s,
  p,
  start,
  seg,
  idx,
}: {
  s: (typeof stages)[number];
  p: MotionValue<number>;
  start: number;
  seg: number;
  idx: number;
}) {
  const opacity = useTransform(
    p,
    [start - seg * 0.3, start + seg * 0.18, start + seg * 0.82, start + seg * 1.25],
    idx === 0 ? [1, 1, 1, 0] : idx === stages.length - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  const y = useTransform(p, [start - seg * 0.3, start + seg * 0.25], [26, 0]);

  return (
    <motion.div style={{ opacity, y }} className="absolute bottom-0 left-0 right-0">
      <div>
        <p className="label mb-4 text-sand">
          0{idx + 1} — {s.en}
        </p>
        <h2 className="h-section text-canvas">{s.word}</h2>
        <p className="body-lg mt-4 max-w-[38ch] text-canvas/65">{s.text}</p>
      </div>
    </motion.div>
  );
}

function RailItem({
  s,
  p,
  i,
  total,
}: {
  s: (typeof stages)[number];
  p: MotionValue<number>;
  i: number;
  total: number;
}) {
  const seg = 1 / total;
  const start = i * seg;
  const active = useTransform(p, [start - seg * 0.25, start + seg * 0.2, start + seg * 0.9, start + seg * 1.2], [0.3, 1, 1, 0.3]);

  return (
    <motion.li style={{ opacity: active }} className="flex items-center gap-3 text-canvas">
      <span className="text-[0.72rem] tracking-label">{s.word.toUpperCase()}</span>
      <span className="h-px w-6 bg-canvas/60" />
    </motion.li>
  );
}
