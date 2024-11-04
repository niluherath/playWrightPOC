import {Page} from "@playwright/test";
import {NavigationPage} from '../page-objects/navigationPage';
import {FormLayoutPage } from '../page-objects/formLayoutPage';
import {DatepickerPage} from '../page-objects/datePickerPage';

export class PageManager{

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayoutPage: FormLayoutPage
    private readonly datePickerPage: DatepickerPage


    constructor(page: Page){
            this.page = page
            this.navigationPage = new NavigationPage(this.page)
            this.formLayoutPage = new FormLayoutPage(this.page)
            this.datePickerPage = new DatepickerPage(this.page)

    }


    getNavigationPage(): NavigationPage{
        return this.navigationPage
    }


    getDatePickerPage(): DatepickerPage{
        return this.datePickerPage
    }

    getFormLayoutPage(): FormLayoutPage{
        return this.formLayoutPage 

    }

}