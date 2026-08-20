'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import { MaskLines } from './Reveal';

const includes = [
  'Rediseño completo de la web',
  'Adaptación a móvil y tablet',
  'Animaciones premium',
  'Portfolio de trabajos realizados',
  'Integración de contacto y presupuesto',
  'Instalación y puesta en marcha',
];

/**
 * Private redesign offer. Only rendered when the URL carries ?proposal=true
 * Read from the browser (not useSearchParams) so the public page stays fully
 * static and never ships this section by default.
 */
export default function Proposal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('proposal');
    setShow(p === 'true' || p === '1');
  }, []);

  if (!show) return null;

  return (
    <section
      id="propuesta"
      className="relative overflow-hidden bg-ink py-[clamp(90px,15vh,170px)]"
    >
      <div className="absolute inset-0 plaster opacity-[0.06]" />
      <div className="absolute inset-0 grain grain-dark" />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="label mb-6 text-sand">Propuesta de rediseño</p>
            <h2 className="h-section text-canvas">
              <MaskLines lines={['Una web a la altura', 'del trabajo', 'que realizáis.']} />
            </h2>
            <p className="body-lg mt-8 max-w-[44ch] text-canvas/62">
              Todo lo que habéis visto en esta página está construido con
              vuestros propios trabajos. Es la misma empresa, presentada como
              merece.
            </p>

            <ul className="mt-10 border-t rule-dark">
              {includes.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                  className="flex items-center gap-4 border-b rule-dark py-3.5 text-[0.95rem] text-canvas/80"
                >
                  <span className="h-px w-5 shrink-0 bg-sand" />
                  {it}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="border rule-dark bg-inkSoft/60 p-8 backdrop-blur-sm md:p-12"
            >
              <div className="flex items-baseline gap-4">
                <span className="label text-canvas/45">Precio habitual</span>
                <span className="text-[1.15rem] text-canvas/35 line-through decoration-canvas/30">
                  500 €
                </span>
              </div>

              <div className="mt-9">
                <p className="label mb-3 text-sand">Oferta de verano</p>
                <p className="text-[clamp(3.4rem,9vw,5.6rem)] font-medium leading-[0.9] tracking-tightest text-canvas">
                  300 €
                </p>
                <p className="mt-4 text-[0.95rem] text-canvas/55">
                  Pago único. Sin cuotas mensuales.
                </p>
              </div>

              <a
                href={`mailto:${site.email}?subject=Rediseño%20web%20—%20Romero%20Obras%20y%20Reformas`}
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-canvas px-8 py-4 text-[0.92rem] font-medium text-ink transition-transform duration-500 ease-apple hover:scale-[1.02]"
              >
                Actualizar la web
              </a>

              <p className="mt-6 text-[0.78rem] leading-relaxed text-canvas/40">
                Incluye la instalación en vuestro dominio actual y la puesta en
                marcha. Los textos y las fotografías se pueden sustituir por
                material propio en alta resolución.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
