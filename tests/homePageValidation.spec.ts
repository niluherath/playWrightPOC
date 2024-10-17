import { test, expect } from '@playwright/test';

import dotenv from 'dotenv'; 


test('validate Home page content', async ({ page }) => {
  dotenv.config(); 
  const global_url = process.env.GLOBAL_URL as string;  
  console.log('GLOBAL_URL:', global_url); 

 await page.goto(global_url);

  await expect(page).toHaveTitle('playwright-test-admin Demo Application')
  const light = page.getByText('Roller Shades')
  expect(light).toBeVisible;
});





