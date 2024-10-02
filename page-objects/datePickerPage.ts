import {Locator, Page} from "@playwright/test";

    
export class DatepickerPage{

    private readonly page: Page
    
    constructor(page: Page){
            this.page = page


    }


    async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number){
        const calendarInputField = this.page.getByPlaceholder('Form Picker')
        await calendarInputField.click()


        let date = new Date()
        date.setDate(date.getDate()+1)
        const expectedDate = date.getDate.toString()
        


    }

}
