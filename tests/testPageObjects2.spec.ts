import {  expect } from '@playwright/test';
import { FormLayoutPage } from '../page-objects/formLayoutPage';
import { PageManager } from '../page-objects/pageManager';
import { test } from '../test-options'



  test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {




  test('navigate to layouts', async ({ page, homePage }) => {
    const pm = new PageManager(page)
    pm.navigateToNavigationPage();
    const navigateTo = pm.navigateToNavigationPage()
    await navigateTo.navigateToFormLayoutPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/layouts')
  });
  

  test('navigate to datepicker', async ({ page, homePage }) => {
    const pm = new PageManager(page)
    pm.navigateToNavigationPage();
    const navigateTo = pm.navigateToNavigationPage()
    navigateTo.navigateToDatePickerPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

  });

  
  test('submitting the grid form', async ({ page, homePage }) => {
    const pm = new PageManager(page)
    pm.navigateToNavigationPage();
    const navigateTo = pm.navigateToNavigationPage()
    await navigateTo.navigateToFormLayoutPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/layouts')
    const fillOutGridForm = new FormLayoutPage(page) 
    await fillOutGridForm.submitUsingTheGridFormWithCredentials('niluherath@hotmail.com', 'Chem4kids1!','Option 1') 
    await page.screenshot({path:'screenshots/formsLayout.png'})
  });

 
  });
