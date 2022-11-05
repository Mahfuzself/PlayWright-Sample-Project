
import {test,expect} from '@playwright/test'
import { LoginPage } from './../../Page-Object/LoginPage'
import { HomePage } from './../../Page-Object/HomePage'
test.describe('Currency Exchange from',async() => {
    let homepage : HomePage
    let loginpage : LoginPage
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        loginpage = new LoginPage(page)
       await homepage.visit()
      await  homepage.clickonSignin()
        //await page.goto('http://zero.webappsecurity.com/index.html')
        //await page.click('#signin_button')
        await loginpage.login('username','password')
        //await page.type('#user_login', 'username')
        //await page.type('#user_password', 'password')
        //await page.click('text=Sign in')
      })
      test('Should change Currency Exchange',async({page})=>{
          await page.click('#pay_bills_tab')
          await page.click('text=Purchase Foreign Currency')
          await page.selectOption('#pc_currency','EUR')
          const rate = await page.locator('#sp_sell_rate')
          await expect(rate).toContainText('1 euro')
          await page.type('#pc_amount','1000')
          await page.click('#pc_inDollars_true')
          await page.click('#pc_calculate_costs')
          const conversion= await page.locator('#pc_conversion_amount')
          await expect(conversion).toContainText('1000.00 U.S. dollar (USD)')
          await page.click('#purchase_cash')
          const message = await page.locator('#alert_content')
          await expect(message).toBeVisible()
          await expect(message).toContainText('Foreign currency cash was successfully purchased.')
          
      })
})