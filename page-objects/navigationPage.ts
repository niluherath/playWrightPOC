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
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click();

    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        groupMenuItem.click()

    }

}
