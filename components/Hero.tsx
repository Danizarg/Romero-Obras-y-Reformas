'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '38%']);
  const textFade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Word-by-word mask reveal
  const line1 = ['Del', 'primer', 'muro'];
  const line2 = ['al', 'último', 'detalle.'];

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink"
    >
      {/* 1 – 3: near-black opening, then the image slowly resolves */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale: imgScale, y: imgY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease: EASE, delay: 0.15 }}
        >
          <Image
            src="/work/hero-techo-artesonado.jpg"
            alt="Techo artesonado con molduras de escayola ejecutado por Romero Obras y Reformas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_38%]"
          />
        </motion.div>
      </motion.div>

      {/* Tonal grade — keeps the 1500px source reading as depth, not softness */}
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/70" />
      <div className="absolute inset-0 grain grain-dark" />

      <motion.div
        style={reduce ? undefined : { y: textY, opacity: textFade }}
        className="relative flex h-full flex-col justify-end pb-[clamp(40px,9vh,88px)]"
      >
        <div className="shell">
          <motion.p
            className="label mb-6 text-canvas/55"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          >
            Marbella · San Pedro de Alcántara
          </motion.p>

          <h1 className="h-display max-w-[16ch] text-canvas">
            {[line1, line2].map((line, li) => (
              <span key={li} className="block overflow-hidden pb-[0.06em]">
                {line.map((w, wi) => (
                  <motion.span
                    key={w}
                    className="inline-block"
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 1.25,
                      ease: EASE,
                      delay: 1.05 + li * 0.12 + wi * 0.07,
                    }}
                  >
                    {w}
                    {wi < line.length - 1 ? ' ' : ''}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="body-lg mt-7 max-w-[46ch] text-canvas/70"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 1.75 }}
          >
            Reformas integrales, albañilería, escayola y trabajos decorativos
            artesanales en Marbella y alrededores.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 2.0 }}
          >
            <a
              href="#contacto"
              className="rounded-full bg-canvas px-7 py-3.5 text-[0.9rem] font-medium text-ink transition-transform duration-500 ease-apple hover:scale-[1.03]"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#trabajos"
              className="rounded-full border border-canvas/30 px-7 py-3.5 text-[0.9rem] text-canvas transition-colors duration-500 ease-apple hover:border-canvas/80"
            >
              Ver trabajos
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-7 right-[var(--shell-x)] hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.4 }}
      >
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-canvas/40 to-transparent" />
      </motion.div>
    </section>
  );
}
