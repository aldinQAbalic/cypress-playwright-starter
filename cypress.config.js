const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Ovdje stavi bazni URL stranice koju testiraš,
    // pa u testovima koristiš samo relativne putanje (cy.visit("/"))
    baseUrl: "https://example.com",

    setupNodeEvents(on, config) {
      // ovdje se dodaju custom node event listeneri (plugini) ako zatrebaju
      return config;
    },

    // koliko dugo čekati na elemente prije nego test padne
    defaultCommandTimeout: 6000,

    // snimanje videa lokalno (možeš ugasiti na false ako ne treba)
    video: false,
  },
});
