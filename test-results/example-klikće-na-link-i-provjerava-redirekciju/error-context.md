# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> klikće na link i provjerava redirekciju
- Location: playwright-tests\example.spec.js:8:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=More information')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('naslov stranice je ispravan', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   await expect(page).toHaveTitle(/Example Domain/);
  6  | });
  7  | 
  8  | test('klikće na link i provjerava redirekciju', async ({ page }) => {
  9  |   await page.goto('/');
> 10 |   await page.click('text=More information');
     |              ^ Error: page.click: Test timeout of 30000ms exceeded.
  11 |   await expect(page).toHaveURL(/iana.org/);
  12 | });
```