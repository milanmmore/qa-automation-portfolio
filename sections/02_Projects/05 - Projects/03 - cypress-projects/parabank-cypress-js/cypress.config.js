const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // ✅ Ensures BrowserStack finds your test files
    supportFile: false, // ✅ Disable if not using support/index.js
    setupNodeEvents(on, config) {
      // Avoid cy.task if testing on Windows via BrowserStack
      return config;
    },
  },
  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: false,
  videoCompression: 32,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots"
});

