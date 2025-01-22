import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.browserstack.com/');
  await page.getByRole('link', { name: 'Get started free', exact: true }).click();
  await page.getByLabel('Pricing').click();
  await page.getByRole('link', { name: 'Live for Teams' }).click();
  await page.getByRole('button', { name: 'Contact sales' }).click();
  await page.getByRole('textbox', { name: 'Full name * Full name *' }).fill('niluherath@hotmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
});