




import {NavigationPage} from '../page-objects/navigationPage';
import { test } from '../test-options'
import { expect } from '@playwright/test';



test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {
  

    test('navigate to tool tip', async ({ page, navigationPage }) => {
      await navigationPage.navigateToToolTipPage()
      const toolTipCard = page.locator('nb-card', {hasText: "Tooltip Placements"})
      await toolTipCard.getByRole('button', {name: "Top"}).hover()

      const tooltip = await page.locator('nb-tooltip').textContent()
      expect(tooltip).toEqual('This is a tooltip')  
      
  
    });



  });