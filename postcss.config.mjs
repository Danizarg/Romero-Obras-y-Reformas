import { fileURLToPath } from 'url';
import path from 'path';

// Resolve the Tailwind config from this file rather than from process.cwd(),
// so the styles build correctly no matter which directory starts Next.
const here = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    tailwindcss: { config: path.join(here, 'tailwind.config.ts') },
    autoprefixer: {},
  },
};
