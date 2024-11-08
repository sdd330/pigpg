import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: {
    '.': 'src/index.tsx',
  },
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  ...options,
}));
