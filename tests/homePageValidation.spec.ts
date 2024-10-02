import { test, expect } from '@playwright/test';


test('validate Home page content', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/iot-dashboard/');

  await expect(page).toHaveTitle('playwright-test-admin Demo Application')
  const light = page.getByText('Roller Shades')
  expect(light).toBeVisible;
});




