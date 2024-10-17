import { expect } from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage';

import { test } from '../test-options';


test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {

  
test.beforeEach(async({page,  globalsQaURL})=>{
    await page.goto( globalsQaURL);
    await expect(page).toHaveTitle('playwright-test-admin Demo Application')
  })

  

  test('navigate to datepicker', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.navigateToDatePickerPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

  });


 
  });
  