import{Page} from '@playwright/test'
export class AbstaractPage{
    readonly page : Page
    constructor(page:Page){
        this.page = page
    }
    async wait(time){
        await this.page.waitForTimeout(time)
    }
}