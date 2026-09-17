import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        ontologyStudio: resolve(__dirname, 'ontology-studio/index.html'),
        organizationOnboarding: resolve(__dirname, 'organization-onboarding/index.html'),
      },
    },
  },
});
