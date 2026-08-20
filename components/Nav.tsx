'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const links = [
  { href: '#proceso-visual', label: 'Proceso' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#artesania', label: 'Artesanía' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-apple ${
        solid || open
          ? 'bg-ink/88 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-[74px]">
        <a
          href="#top"
          className="flex items-baseline gap-2 text-canvas"
          aria-label={`${site.name} — inicio`}
        >
          <span className="text-[0.95rem] font-semibold tracking-tightest">ROMERO</span>
          <span className="hidden text-[0.62rem] tracking-label text-canvas/55 sm:inline">
            OBRAS Y REFORMAS
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.82rem] text-canvas/70 transition-colors duration-300 hover:text-canvas"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full border border-canvas/25 px-5 py-2 text-[0.78rem] text-canvas transition-all duration-500 ease-apple hover:border-canvas/70 hover:bg-canvas hover:text-ink"
          >
            Solicitar presupuesto
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-canvas transition-transform duration-400 ease-apple ${
              open ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-canvas transition-transform duration-400 ease-apple ${
              open ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden bg-ink transition-[max-height,opacity] duration-500 ease-apple md:hidden ${
          open ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="shell flex flex-col gap-1 pb-8 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/8 py-4 text-[1.35rem] font-medium tracking-tightest text-canvas"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-5 rounded-full bg-canvas px-6 py-3.5 text-center text-[0.9rem] font-medium text-ink"
          >
            Llamar {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
