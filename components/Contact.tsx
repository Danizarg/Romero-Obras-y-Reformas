'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import Reveal, { MaskLines } from './Reveal';

const tipos = ['Reforma integral', 'Escayola', 'Albañilería', 'Mantenimiento', 'Trabajos árabes', 'Otro'];

export default function Contact() {
  const [tipo, setTipo] = useState(tipos[0]);

  return (
    <section id="contacto" className="relative bg-canvas py-[clamp(80px,13vh,150px)]">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left — pitch + verified details */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label mb-6 text-sand">Contacto</p>
              <h2 className="h-section text-ink">
                <MaskLines lines={['Cuéntanos qué', 'quieres transformar.']} />
              </h2>
              <p className="body-lg mt-7 max-w-[42ch] text-stone">
                Cuéntanos el espacio y el tipo de trabajo. Concertamos una visita,
                lo vemos y preparamos un presupuesto.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-10 border-t rule">
                <div className="flex items-baseline justify-between gap-6 border-b rule py-4">
                  <dt className="label text-stoneLight">Teléfono</dt>
                  <dd>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-[1.05rem] text-ink transition-colors duration-400 hover:text-sand"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b rule py-4">
                  <dt className="label text-stoneLight">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-[0.95rem] text-ink transition-colors duration-400 hover:text-sand"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b rule py-4">
                  <dt className="label text-stoneLight">Dirección</dt>
                  <dd className="text-right text-[0.95rem] leading-relaxed text-stone">
                    {site.address.street}
                    <br />
                    {site.address.town}, {site.address.postcode}
                    <br />
                    {site.address.city} ({site.address.province})
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b rule py-4">
                  <dt className="label text-stoneLight">Horario</dt>
                  <dd className="text-right text-[0.95rem] text-stone">{site.hours}</dd>
                </div>
              </dl>

              <a
                href={`tel:${site.phoneHref}`}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[0.9rem] font-medium text-canvas transition-transform duration-500 ease-apple hover:scale-[1.03]"
              >
                Llamar ahora
              </a>
            </Reveal>
          </div>

          {/* Right — minimal form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <form
                action={`mailto:${site.email}`}
                method="post"
                encType="text/plain"
                className="flex flex-col gap-5 border-t rule pt-8"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nombre" name="nombre" required />
                  <Field label="Teléfono" name="telefono" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" />

                <div className="flex flex-col gap-3">
                  <span className="label text-stoneLight">Tipo de trabajo</span>
                  <div className="flex flex-wrap gap-2">
                    {tipos.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTipo(t)}
                        aria-pressed={tipo === t}
                        className={`rounded-full border px-4 py-2 text-[0.8rem] transition-all duration-500 ease-apple ${
                          tipo === t
                            ? 'border-ink bg-ink text-canvas'
                            : 'border-line text-stone hover:border-stone hover:text-ink'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="tipo" value={tipo} />
                </div>

                <label className="flex flex-col gap-2">
                  <span className="label text-stoneLight">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    placeholder="Qué espacio es, qué se quiere hacer y en qué plazo."
                    className="resize-none border-b rule bg-transparent pb-3 text-[1rem] text-ink outline-none transition-colors duration-400 placeholder:text-stoneLight/70 focus:border-sand"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 self-start rounded-full bg-sand px-8 py-3.5 text-[0.9rem] font-medium text-ink transition-transform duration-500 ease-apple hover:scale-[1.03]"
                >
                  Solicitar presupuesto
                </button>

                <p className="text-[0.75rem] leading-relaxed text-stoneLight">
                  Al enviar se abrirá tu cliente de correo. Si lo prefieres,
                  escríbenos directamente a{' '}
                  <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                    {site.email}
                  </a>
                  .
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="label text-stoneLight">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="border-b rule bg-transparent pb-3 text-[1rem] text-ink outline-none transition-colors duration-400 focus:border-sand"
      />
    </label>
  );
}
