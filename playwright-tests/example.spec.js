const { test, expect } = require('@playwright/test');

test('naslov stranice je ispravan', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('klikće na link i provjerava redirekciju', async ({ page }) => {
  await page.goto('/');
  await page.click('text=More information');
  await expect(page).toHaveURL(/iana.org/);
});