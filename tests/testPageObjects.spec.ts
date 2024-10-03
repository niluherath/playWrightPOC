import {  expect } from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage';
import { FormLayoutPage } from '../page-objects/formLayoutPage';
import { PageManager } from '../page-objects/pageManager';
import { test } from '../test-options'



  test.describe.only('tagged tests', {
    tag: '@smoke',
  }, () => {

  
test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/pages/iot-dashboard/');
    await expect(page).toHaveTitle('playwright-test-admin Demo Application')
  })


  test('navigate to layouts', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateToNavigationPage();
    const navigateTo = pm.navigateToNavigationPage()
    await navigateTo.navigateToFormLayoutPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/layouts')
  });
  

  test('navigate to datepicker', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateToNavigationPage();
    const navigateTo = pm.navigateToNavigationPage()
    navigateTo.navigateToDatePickerPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

  });

  
  test('submitting the grid form', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateToNavigationPage();
    const navigateTo = pm.navigateToNavigationPage()
    await navigateTo.navigateToFormLayoutPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/layouts')
    const fillOutGridForm = new FormLayoutPage(page) 
    await fillOutGridForm.submitUsingTheGridFormWithCredentials('niluherath@hotmail.com', 'Chem4kids1!','Option 1') 
    await page.screenshot({path:'screenshots/formsLayout.png'})
  });

 
  });
