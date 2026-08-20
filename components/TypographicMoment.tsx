'use client';

import { motion } from 'framer-motion';

const words = ['Estructura.', 'Superficie.', 'Acabado.'];

export default function TypographicMoment() {
  return (
    <section className="relative overflow-hidden bg-ink py-[clamp(110px,22vh,240px)]">
      <div className="absolute inset-0 grain grain-dark" />
      <div className="shell relative">
        <h2 className="h-display text-canvas">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true, margin: '-18% 0px -18% 0px' }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: i * 0.14 }}
                style={{ color: i === words.length - 1 ? '#B08654' : undefined }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
