const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './playwright-tests',

  use: {
    baseURL: 'https://example.com',
    headless: true,
  },

  reporter: 'list',
});