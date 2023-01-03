// https://docs.cypress.io/guides/references/configuration#Intelligent-Code-Completion

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000'
  },
});
