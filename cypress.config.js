const { defineConfig } = require("cypress");
import AllureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://google.com",
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports/html",
      charts: true,
      reportPageTitle: "My Test Suite",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    video: true,
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return config;
    },
  },
});
