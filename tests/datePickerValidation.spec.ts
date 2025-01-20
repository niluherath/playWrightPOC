import {NavigationPage} from '../page-objects/navigationPage';
import { test } from '../test-options'
import { expect} from '@playwright/test';



test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {
  

  test('navigate to datepicker', async ({ page, navigationPage }) => {
    await navigationPage.navigateToDatePickerPage()
    await expect(page).toHaveURL('http://localhost:4200/pages/forms/datepicker')

    
  });

  test('navigate table', async ({ page, navigationPage }) => {
    await navigationPage.navigateToTables()
    await expect(page).toHaveURL('http://localhost:4200/pages/tables/smart-table')
    const table = page.locator('nb-card-body')

    const rows = table.locator('tbody tr')
    console.log("row count:"+ await rows.count())
    expect(await rows.count()).toBeGreaterThan(2)
    const colm = table.locator('thead tr th')
    console.log("column count:"+ await colm.count())


    const pages = page.locator('.pagination li a')
    console.log('no of p:', await pages.count() )
    expect(pages).toBeVisible

    let data_found = false

    for(let p=2; p< await pages.count();p++){

      if (p>0){

        await pages.nth(p).click()
      }


      for(let i=0;i<await rows.count();i++){
            const row = rows.nth(i);
            const tds = row.locator('td')
          

            for(let j=0; j< await tds.count();j++){        

              console.log( await tds.nth(j).textContent())  
              
     
            }
            
      }

        await page.waitForTimeout(3000)
   }

  
  });

   });

//is passing 
  test('navigate table', async ({ page, navigationPage }) => {

    await navigationPage.navigateToTables()
    await expect(page).toHaveURL('http://localhost:4200/pages/tables/smart-table')
    await page.getByPlaceholder('First Name').fill('Johnston')
  
   const table = page.locator('nb-card-body')

   const row = page.getByRole('row', {name: "Brown"})
   await expect(row).toContainText("33")
   await expect(row).toContainText("johnstonknight@comtours.com")
   await row.locator('.nb-edit').click()
   await page.locator('input-editor').getByPlaceholder('Age').clear()
   const randomNumber = Math.floor(Math.random() * 100) + 20;
3 
   let age: string = randomNumber.toString();
   await page.locator('input-editor').getByPlaceholder('Age').fill(age)

   //await new Promise(resolve => setTimeout(resolve, 5000));
   await page.locator('.nb-checkmark').click()
   
  });

//is failing
  test('filtering a list ', async ({ page, navigationPage }) => {

    await navigationPage.navigateToTables()
    await expect(page).toHaveURL('http://localhost:4200/pages/tables/smart-table')
   // await page.getByPlaceholder('First Name').fill('Johnston')
   // await page.getByPlaceholder("Age").fill("29")

  
   const table = page.locator('nb-card-body')
   const rows = table.locator("tbody tr")
   console.log("Rows count"+ await rows.count)


   const nameMatch  = rows.filter({
      has: page.locator("td"),
      hasText:"Mark"

   })
   
   await console.log(nameMatch.allTextContents)
   await console.log(nameMatch.count())
   //await expect(nameMatch).toContainText("28")
   await expect(nameMatch).toContainText("mdo@gmail.com")

   await nameMatch.locator('.nb-edit').click()
  //await new Promise(resolve => setTimeout(resolve, 2000));
  await new Promise(resolve => setTimeout(resolve, 5000));
 

   await nameMatch.locator('input-editor').getByPlaceholder('Age').click({ force: true });
   await nameMatch.locator('input-editor').getByPlaceholder('Age').clear({ force: true });
   const randomNumber = Math.random()*100
   let age: string = randomNumber.toString();


   await page.locator('input-editor').getByPlaceholder('Age').fill(age)
   //await page.locator('.nb-checkmark').isVisible()

   //await new Promise(resolve => setTimeout(resolve, 5000));
   await page.locator('.nb-checkmark').click()

  });
  