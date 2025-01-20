import {NavigationPage} from '../page-objects/navigationPage';
import { test } from '../test-options'
import { expect } from '@playwright/test';



test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {
  

    test('navigate to datepicker', async ({ page, navigationPage }) => {
      await navigationPage.navigateToDatePickerPage()
      await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')
  
    });

    test('navigate to form layouts', async ({ page, navigationPage }) => {
     await navigationPage.navigateToFormPage()
     const usingTheGridEmailInput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Email"})
     await usingTheGridEmailInput.fill("niluherath@hotmail.com")
     const usingTheGridPasswordInput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Password"})
     await usingTheGridPasswordInput.fill("Chem4kids1!")
    //generic assertion
     const inputValue = await usingTheGridEmailInput.inputValue()
     expect(inputValue).toEqual('niluherath@hotmail.com')

     //locator assertion
     await expect(usingTheGridEmailInput).toHaveValue('niluherath@hotmail.com')
     const usingTheGridForm = page.locator('nb-card', {hasText:"Using the Grid"})
    // await usingTheGridForm.getByText('Option 1').check()

    await usingTheGridForm.getByRole('radio', {name: "Option 1"}).check({force: true})
    const radioStatus = await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()
    expect(radioStatus).toBeTruthy()
    await usingTheGridForm.getByRole('radio', {name: "Option 2"}).check({force: true})
    expect(await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()).toBeFalsy()
    expect(await usingTheGridForm.getByRole('radio', {name: "Option 2"}).isChecked()).toBeTruthy()



  
    });

 


  });
  