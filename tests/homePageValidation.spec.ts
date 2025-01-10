import { test, expect } from '@playwright/test';

import dotenv from 'dotenv'; 
import { PageManager } from '../page-objects/pageManager';
import { FormLayoutPage } from '../page-objects/formLayoutPage';
import {NavigationPage} from '../page-objects/navigationPage';




test('validate Home page content', async ({ page }) => {
  dotenv.config(); 
  const global_url = process.env.GLOBAL_URL as string;  
  console.log('GLOBAL_URL:', global_url); 

  const user_name = process.env.USER_NAME as string;  
  console.log('user_name:', user_name); 
  await page.goto(global_url);

  await expect(page).toHaveTitle('playwright-test-admin Demo Application')
  const light = page.getByText('Roller Shades')
  expect(light).toBeVisible;
  const lightString = light.textContent()

  console.log(`user_name:', ${lightString})
  console.log(`user_name:', ${lightString}`)



``


});




test('validate Home page drop down', async ({ page }) => {
  dotenv.config(); 
  const global_url = process.env.GLOBAL_URL as string;  
  console.log('GLOBAL_URL:', global_url); 

  const user_name = process.env.USER_NAME as string;  
  console.log('user_name:', user_name); 
  await page.goto(global_url);

  await expect(page).toHaveTitle('playwright-test-admin Demo Application')

  const ddm = page.locator('ngx-header nb-select')
  await ddm.click()

  const optionList = page.locator('nb-option-list nb-option')
  await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
  await optionList.filter({hasText:"Cosmic"}).click()





  



});





