




import {NavigationPage} from '../page-objects/navigationPage';
import { test } from '../test-options'
import { expect } from '@playwright/test';



test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {
  

    test('navigate to tool tip', async ({ page, navigationPage }) => {
      await navigationPage.navigateToTables()

      page.on('dialog', async dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?') 
        dialog.accept()
      });
  
      await page.getByRole('table').locator('tr', {hasText: "mdo@gmail.com"}).locator('.nb-trash').click()
      await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
  
    });



  });