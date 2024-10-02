import {Locator, Page} from "@playwright/test";
import { HelperBase } from "./helperBase";


    
export class NavigationPage extends HelperBase{

    readonly formLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator

    constructor(page: Page){
            super (page)
            this.formLayoutsMenuItem = page.getByText('Form Layouts')
            this.datePickerMenuItem = page.getByText('Datepicker')
    }

    async navigateToFormLayoutPage(){
        this.selectGroupMenuItem('Forms')
        this.formLayoutsMenuItem.click();
    }

    async navigateToDatePickerPage(){
        this.selectGroupMenuItem('Forms')
        this.datePickerMenuItem.click();

    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        groupMenuItem.click()

    }

    async testingSubmitUsingTheGridFormWithCredentials(){
        const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        await usingTheGridForm.getByRole('textbox', {name: "Email"}).fill('niluherath@hotmail.com')
        await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill('123')
        await usingTheGridForm.getByRole('radio', {name: 'Option 1'}).check({force: true})
        await usingTheGridForm.getByRole('button').click

    }



}
