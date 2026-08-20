'use client';

import Image from 'next/image';
import Reveal, { MaskLines } from './Reveal';

// Only operational strengths that appear on the current site. No invented
// customer counts, review scores, awards or certifications.
const points = [
  {
    t: 'Equipo multidisciplinar',
    d: 'Albañilería, escayola, instalaciones y acabados coordinados por un mismo equipo, sin subcontratar la responsabilidad.',
  },
  {
    t: 'Reforma completa',
    d: 'Capacidad para asumir el proyecto entero, de la demolición a la entrega, en vivienda y en local comercial.',
  },
  {
    t: 'Oficio especializado',
    d: 'Trabajo decorativo tallado sobre yeso y mortero, un oficio artesanal que muy pocas empresas ejecutan.',
  },
  {
    t: 'Fuera de Andalucía',
    d: 'Trabajos realizados también en Francia y Marruecos, además de nuestra zona habitual en la provincia de Málaga.',
  },
];

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-ink py-[clamp(80px,13vh,150px)]">
      <div className="absolute inset-0 grain grain-dark" />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label mb-6 text-sand">Por qué Romero</p>
              <h2 className="h-section text-canvas">
                <MaskLines lines={['Construcción', 'con oficio.']} />
              </h2>
              <p className="body-lg mt-7 max-w-[42ch] text-canvas/62">
                Somos un equipo de profesionales de la construcción con procesos
                de trabajo definidos y una atención concreta al acabado.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mt-10 aspect-[4/3] w-full max-w-[520px] overflow-hidden bg-inkSoft">
                <Image
                  src="/work/arabe-03.jpg"
                  alt="Trabajo de tallado decorativo en ejecución"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 grain grain-dark" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t rule-dark">
              {points.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.06}>
                  <div className="grid gap-3 border-b rule-dark py-8 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-5">
                      <h3 className="h-sub text-canvas">{p.t}</h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="max-w-[46ch] text-[0.95rem] leading-relaxed text-canvas/60">
                        {p.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
