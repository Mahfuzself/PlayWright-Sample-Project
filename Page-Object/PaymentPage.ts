import {expect,Locator,Page} from '@playwright/test'
export class PaymentPage{
    readonly payselectionBox : Locator
    readonly payDetailsButton : Locator
    readonly payDetail : Locator
    readonly spAccount : Locator
    readonly spAmmount : Locator
    readonly selectDate : Locator
    readonly spDescription : Locator
    readonly paySaveedButton : Locator
    readonly paymessage : Locator
    constructor(page : Page){
        this.payselectionBox=page.locator('#sp_payee')
        this.payDetailsButton=page.locator('#sp_get_payee_details')
        this.payDetail=page.locator('#sp_payee_details')
        this.spAccount=page.locator('#sp_account')
        this.spAmmount=page.locator('#sp_amount')
        this.selectDate=page.locator('#sp_date')
        this.spDescription=page.locator('#sp_description')
        this.paySaveedButton=page.locator('#pay_saved_payees')
        this.paymessage=page.locator('#alert_content')
    }
    async payment(){
        await this.payselectionBox.selectOption('Apple')
        await this.payDetailsButton.click()
        await expect(this.payDetail).toBeVisible()
        await this.spAccount.selectOption('6')
        await this.spAmmount.type('500')
        await this.selectDate.selectOption('2022-10-03')
        await this.spDescription.type('awaitpay')
        await this.paySaveedButton.click()
    }
    async asserMessage(){
        await expect(this.paymessage).toBeVisible()
        await expect(this.paymessage).toContainText('The payment was successfully submitted')
    }
}