import type { Config } from 'tailwindcss';
import path from 'path';

// Resolve from this file so the globs hold no matter which cwd starts Next.
const r = (g: string) => path.join(__dirname, g);

const config: Config = {
  content: [r('app/**/*.{ts,tsx}'), r('components/**/*.{ts,tsx}'), r('lib/**/*.{ts,tsx}')],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F2ED',
        canvasAlt: '#EDE8E1',
        ink: '#14130F',
        inkSoft: '#211F1A',
        stone: '#6E6A62',
        stoneLight: '#9B958B',
        line: '#D8D2C8',
        sand: '#B08654',
        terracotta: '#9E5B3D',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        label: '0.18em',
      },
      maxWidth: { shell: '1440px' },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
