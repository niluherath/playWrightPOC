import {NavigationPage} from '../page-objects/navigationPage';
import { test, expect } from '../test-options'



test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {
  

  test('navigate to datepicker', async ({ page, navigationPage }) => {
    await navigationPage.navigateToDatePickerPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

  });


 
  });
  