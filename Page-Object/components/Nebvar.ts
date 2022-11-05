import {expect,Locator,Page} from '@playwright/test'
export class Navbar{
    readonly page : Page
    readonly accountSummary:Locator
    readonly accountActivity : Locator
    readonly transferFunds : Locator
    readonly payBills : Locator
    readonly myMoneyApp : Locator
    readonly onlineStatement : Locator
   
    constructor(page : Page){
        this.page = page
        this.accountSummary = page.locator('#account_summary_tab')
        this.accountActivity = page.locator('#account_activity_tab')
        this.transferFunds = page.locator('#transfer_funds_tab')
        this.payBills = page.locator('#pay_bills_tab')
        this.myMoneyApp = page.locator('#money_map_tab')
        this.onlineStatement = page.locator('#online_statements_tab')
    }
    async clickOnTab(tabName){
        switch(tabName){
            case "Account Summary Tab":
            await this.accountSummary.click()
            break
            case "Account Activity Tab":
            await this.accountActivity.click()
            break
            case "Transfer Fund Tab":
                await this.transferFunds.click()
                break
            case "Pay Bills Tab":
                await this.payBills.click()
                break
            case "Money Map Tab":
                await this.myMoneyApp.click()
                break
            case "Online Statement Tab":
                await this.onlineStatement.click()
                break
            default :
            throw new Error('This Tab does not exist...')

        }
    }
  
    //     await page.selectOption('#sp_payee','Apple')
    //     await page.click('#sp_get_payee_details')
    //    await page.waitForSelector('#sp_payee_details')
    //    await page.selectOption('#sp_account','6')
    //    await page.type('#sp_amount','500')
    //    await page.selectOption('#sp_date','2022-10-03')
    //    await page.type('#sp_description','some description')
    //    await page.click('#pay_saved_payees')
    //    const message = await page.locator('#alert_content')
    //    await expect(message).toContainText('The payment was successfully submitted.')
        

        
    
   
     
}