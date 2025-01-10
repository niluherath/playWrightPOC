//import { test, expect } from '../test-options'
import {NavigationPage} from '../page-objects/navigationPage';
import { test, expect } from '@playwright/test';










 // test.describe('tagged tests', {
  //  tag: '@smoke',
 // }, () => {

 
  test('navigate to layouts', async ({ page }) => {
    console.log("also here")
    await page.goto("http://localhost:4200/pages/iot-dashboard/")
    const navigationPage = new NavigationPage(page)
    await navigationPage.navigateToDatePickerPage
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

  });


  test('navigate tables', async ({ page }) => {

    await page.goto("http://localhost:4200/pages/iot-dashboard/")
    const navigationPage = new NavigationPage(page)
   // await navigationPage.navigateToTables


  });
  

//  test('navigate to datepicker', async ({ pageManager, page }) => {
   // const pm = new PageManager(page)
  //  pageManager.navigateToNavigationPage();
  //  const navigateTo = pageManager.navigateToNavigationPage()
  //  navigateTo.navigateToDatePickerPage()
  //  await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

  //});

  
 // test('submitting the grid form', async ({ pageManager, page }) => {

    
    
  //  const navigateTo = pageManager.navigateToNavigationPage()
  //  await navigateTo.navigateToFormLayoutPage()
    //has landed on lay out page
  //  await expect(page).toHaveURL('http://localhost:4200/pages/forms/layouts')
   // const fillOutGridForm = new FormLayoutPage(page)
  //  const fillOutGridForm = pageManager.navigateToFormLayoutPage
   //now we need FormLayout page object

   // await fillOutGridForm..submitUsingTheGridFormWithCredentials('niluherath@hotmail.com', 'Chem4kids1!','Option 1') 
  //  await page.screenshot({path:'screenshots/formsLayout.png'})
 // });

 
 // });
