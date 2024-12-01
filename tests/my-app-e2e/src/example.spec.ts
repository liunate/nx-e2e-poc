import { test, expect } from '@playwright/test';

// import the utility function
import { sum } from '@e2e/shared';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');

  // use the utility function, expect it to sum up to 987
  expect(sum(1, 2)).toBe(3);

  // expect something never exist, change the text
  expect(await page.locator('h1').innerText()).toContain('Welcome to my-app!');
});
