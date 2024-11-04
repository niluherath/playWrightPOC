import { test, expect } from '@playwright/test';

import dotenv from 'dotenv'; 
import { PageManager } from '../page-objects/pageManager';
import { FormLayoutPage } from '../page-objects/formLayoutPage';
import {NavigationPage} from '../page-objects/navigationPage';
import {DatepickerPage} from '../page-objects/datePickerPage';


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

});





