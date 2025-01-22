import {Locator, Page} from "@playwright/test";
import { HelperBase } from "./helperBase";


    
export class NavigationPage extends HelperBase{

    readonly formLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTable: Locator
    readonly toastr: Locator
    readonly toolTipMenuItem: Locator

    constructor(page: Page){
            super (page)
            this.formLayoutsMenuItem = page.getByText('Form Layouts')
            this.datePickerMenuItem = page.getByText('Datepicker')
            this.smartTable = page.getByText('Smart Table')
            this.toastr = page.getByText('Toastr')
            this.toolTipMenuItem = page.getByText('Tooltip')
    }

    async navigateToFormLayoutPage(){
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenuItem.click();
    }


    async navigateToFormPage(){
      await this.selectGroupMenuItem('Forms')    
      await this.formLayoutsMenuItem.click();


    }

    async navigateToDatePickerPage(){
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click();   

    }

    async navigateToToastrrPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastr.click();   

    }



    

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = await this.page.getByTitle(groupItemTitle)
        await groupMenuItem.click()

    }

    
    async navigateToTables(){
        await this.selectGroupMenuItem('Tables & Data')
        this.smartTable.click()

    }

    



    async navigateToToolTipPage(){
        await this.selectGroupMenuItem('Modal & Overlays')    
        await this.toolTipMenuItem.click();


}

    

}
