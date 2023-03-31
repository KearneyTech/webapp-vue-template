import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/spanish-lesson');
  console.log('hi');
  await page.screenshot({path: 'screenshot-001.png'});
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Webapp Vue Template - Vite Playground/);
});
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
*/