const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},

    baseUrl: 'https://www.sowe.pl/',
    experimentalRunAllSpecs: true,
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    hideXHRInCommandLog: true,
    video: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    retries: {
      runMode: 4,
      openMode: 4,
    },
  },
});
