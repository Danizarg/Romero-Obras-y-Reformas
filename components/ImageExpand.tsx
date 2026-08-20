'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function ImageExpand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  // Grows from ~68vw to a hard 1400px ceiling: the source is 1500px wide, so it
  // expands dramatically without ever being upscaled past its native pixels.
  const width = useTransform(p, [0, 0.62], ['68vw', 'min(94vw, 1400px)']);
  const radius = useTransform(p, [0, 0.62], ['2px', '0px']);
  const imgScale = useTransform(p, [0, 1], [1.14, 1]);
  const capOpacity = useTransform(p, [0.6, 0.78], [0, 1]);
  const capY = useTransform(p, [0.6, 0.78], [24, 0]);

  return (
    <section ref={ref} className="relative h-[260vh] bg-ink">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, borderRadius: radius }}
          className="relative aspect-[4/3] overflow-hidden bg-inkSoft"
        >
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image
              src="/work/hero-techo-artesonado.jpg"
              alt="Detalle de cornisa y techo de escayola ejecutado por Romero Obras y Reformas"
              fill
              sizes="94vw"
              className="object-cover object-[50%_62%]"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 grain grain-dark" />
        </motion.div>

        <motion.div
          style={{ opacity: capOpacity, y: capY }}
          className="shell mt-8 text-center md:mt-10"
        >
          <p className="h-sub mx-auto max-w-[22ch] text-canvas">
            Cada superficie importa.
          </p>
          <p className="mx-auto mt-3 max-w-[46ch] text-[0.92rem] leading-relaxed text-canvas/55">
            El acabado es lo único que el cliente ve todos los días.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
