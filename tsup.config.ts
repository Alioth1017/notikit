import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['cjs'],
  target: 'node14',
  outDir: 'dist',
  clean: true,
  dts: false,
  banner: {
    js: '#!/usr/bin/env node'
  }
});
