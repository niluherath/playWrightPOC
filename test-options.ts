import {test as base} from '@playwright/test'

export type TestOptions = {
    globalsQaURL: string
    homePage: string

}

export const test = base.extend<TestOptions>({

    globalsQaURL: ['', {option: true}],

    homePage : [async({page}, use)=>{

        await page.goto('http://localhost:4200/pages/iot-dashboard/');
        await use('')
    }, {auto:true}]
})



