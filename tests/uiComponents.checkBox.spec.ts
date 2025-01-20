import {NavigationPage} from '../page-objects/navigationPage';
import { test } from '../test-options'
import { expect } from '@playwright/test';



test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {
  

    test('navigate to toastr', async ({ page, navigationPage }) => {
      await navigationPage.navigateToToastrrPage()
      await expect(page).toHaveURL('http://localhost:4200/pages/modal-overlays/toastr')
      //check box is visually hidden
      await page.getByRole('checkbox', {name:"Hide on click"}).uncheck({force: true})
      await page.getByRole('checkbox', {name:"Prevent arising of duplicate toast"}).check({force: true})

      //uncheck all check boxes
      const allBoxes = page.getByRole('checkbox')
        for(const box of await allBoxes.all()){

            await box.uncheck({force: true})
            expect(await box.isChecked()).toBeFalsy()
        }

  
    });



  });
  