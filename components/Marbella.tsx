'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/lib/site';
import Reveal, { MaskLines } from './Reveal';

export default function Marbella() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section className="relative bg-canvasAlt py-[clamp(80px,12vh,140px)]">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label mb-6 text-sand">Zona de trabajo</p>
              <h2 className="h-section text-ink">
                <MaskLines lines={['Reformas', 'en Marbella.']} />
              </h2>
              <p className="body-lg mt-7 max-w-[44ch] text-stone">
                Trabajamos desde San Pedro de Alcántara, en Marbella. Viviendas,
                villas, locales comerciales y zonas exteriores.
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t rule pt-7">
                <div>
                  <dt className="label mb-2 text-stoneLight">Base</dt>
                  <dd className="text-[0.98rem] leading-relaxed text-ink">
                    {site.address.town}
                    <br />
                    {site.address.city}, {site.address.province}
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2 text-stoneLight">También</dt>
                  <dd className="text-[0.98rem] leading-relaxed text-ink">
                    Francia
                    <br />
                    Marruecos
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div ref={ref} className="lg:col-span-6">
            <Reveal delay={0.06}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas">
                <motion.div className="absolute inset-[-8%]" style={{ y }}>
                  <Image
                    src="/work/obra-v-01.jpg"
                    alt="Construcción exterior junto a zona de piscina en Marbella"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 grain" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
