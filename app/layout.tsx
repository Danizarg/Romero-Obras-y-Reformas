import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://romerobrasyreformas.com'),
  title: 'Reformas en Marbella | Romero Obras y Reformas',
  description:
    'Reformas integrales, albañilería, escayola, mantenimiento y trabajos decorativos especializados en Marbella y San Pedro de Alcántara.',
  openGraph: {
    title: 'Reformas en Marbella | Romero Obras y Reformas',
    description:
      'Reformas integrales, albañilería, escayola, mantenimiento y trabajos decorativos especializados en Marbella.',
    locale: 'es_ES',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#14130F',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: site.name,
  telephone: site.phone,
  email: site.email,
  url: 'https://romerobrasyreformas.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: `${site.address.town}, ${site.address.city}`,
    postalCode: site.address.postcode,
    addressRegion: site.address.province,
    addressCountry: 'ES',
  },
  areaServed: 'Marbella, Málaga',
  sameAs: [site.social.facebook, site.social.x],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
