import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-10 pt-[clamp(60px,9vh,110px)]">
      <div className="absolute inset-0 grain grain-dark" />
      <div className="shell relative">
        <div className="grid gap-10 border-b rule-dark pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[1.05rem] font-semibold tracking-tightest text-canvas">ROMERO</p>
            <p className="label mt-1 text-canvas/45">Obras y Reformas</p>
            <p className="mt-6 max-w-[34ch] text-[0.92rem] leading-relaxed text-canvas/55">
              Reformas integrales, escayola, albañilería y trabajos decorativos
              artesanales en Marbella.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4 text-canvas/45">Contacto</p>
            <ul className="flex flex-col gap-2 text-[0.92rem] text-canvas/75">
              <li>
                <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-canvas">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-canvas"
                >
                  {site.email}
                </a>
              </li>
              <li className="mt-2 leading-relaxed text-canvas/55">
                {site.address.street}
                <br />
                {site.address.town}, {site.address.postcode}
                <br />
                {site.address.city} ({site.address.province})
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-4 text-canvas/45">Secciones</p>
            <ul className="flex flex-col gap-2 text-[0.92rem] text-canvas/75">
              <li><a href="#servicios" className="transition-colors hover:text-canvas">Servicios</a></li>
              <li><a href="#artesania" className="transition-colors hover:text-canvas">Artesanía</a></li>
              <li><a href="#trabajos" className="transition-colors hover:text-canvas">Trabajos</a></li>
              <li><a href="#contacto" className="transition-colors hover:text-canvas">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-4 text-canvas/45">Síguenos</p>
            <ul className="flex flex-col gap-2 text-[0.92rem] text-canvas/75">
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-canvas"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-canvas"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[0.78rem] text-canvas/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
