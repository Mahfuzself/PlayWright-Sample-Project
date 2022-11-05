import { HomePage } from './../../Page-Object/HomePage'
import { LoginPage } from '../../Page-Object/LoginPage'
import { test, expect } from '@playwright/test'

test.describe('Transfer Funds and Make Payments', () => {
  let homepage : HomePage
  let loginpage : LoginPage
  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page)
    loginpage = new LoginPage(page)
    //await page.goto('http://zero.webappsecurity.com/index.html')
    await homepage.visit()
    //await page.click('#signin_button')
    await  homepage.clickonSignin()
   // await page.type('#user_login', 'username')
    //await page.type('#user_password', 'password')
   // await page.click('text=Sign in')
   await loginpage.login('username','password')
  })

  test('Transfer funds', async ({ page }) => {
    await page.click('#transfer_funds_tab')
    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '3')
    await page.type('#tf_amount', '500')
    await page.type('#tf_description', 'Test message')
    await page.click('#btn_submit')

    const boardHeader = await page.locator('h2.board-header')
    await expect(boardHeader).toContainText('Verify')
    await page.click('#btn_submit')

    const message = await page.locator('.alert-success')
    await expect(message).toContainText(
      'You successfully submitted your transaction'
    )
  })
})
