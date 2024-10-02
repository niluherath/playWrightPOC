import { test, expect } from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage';


test.describe.only('tagged tests', {
    tag: '@smoke',
  }, () => {

  
test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/pages/iot-dashboard/');
    await expect(page).toHaveTitle('playwright-test-admin Demo Application')
  })

  

  test('navigate to datepicker', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.navigateToDatePickerPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

  });


 
  });
  