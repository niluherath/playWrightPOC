import {Page} from "@playwright/test";

    
export class FormLayoutPage{

    private readonly page: Page
 

    constructor(page: Page){
            this.page = page


    }

    async submitUsingTheGridFormWithCredentials(email: string, password: string, optionText: string){
        const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        console.log(email)
        console.log(password)

        await usingTheGridForm.getByRole('textbox', {name: 'Email'}).waitFor()
        await usingTheGridForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: 'Password'}).fill(password)
        await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true})
      //  await usingTheGridForm.getByRole('button').click

    }

    }


