import { test as base } from '@playwright/test';
import {NavigationPage} from './page-objects/navigationPage';
import {DatePickerPage} from './page-objects/datePickerPage';


type TestOptions = {
    globalsQaURL: string
    navigationPage: NavigationPage
    datePickerPage: DatePickerPage

}

export const test = base.extend<TestOptions>({

    globalsQaURL: ['', {option: true}],

    navigationPage : async({page}, use)=>{
        await page.goto("http://localhost:4200/pages/iot-dashboard/")
        const navigationPage = new NavigationPage(page);
        await use(navigationPage);
    },

    datePickerPage : async({page}, use)=>{
        const datePickerPage = new DatePickerPage(page);
        await use(datePickerPage);
    }
   

})







