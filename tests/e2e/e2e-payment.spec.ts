import { test, expect} from '@playwright/test'
import { HomePage } from './../../Page-Object/HomePage'
import { LoginPage } from './../../Page-Object/LoginPage'
import { PaymentPage } from '../../Page-Object/PaymentPage'
import { Navbar } from '../../Page-Object/components/Nebvar'
test.describe('Filter Transctions',()=>{
   let homepage : HomePage
   let loginpage : LoginPage
   let paymentpage:PaymentPage
   let navbar:Navbar
    test.beforeEach(async({page}) =>{
        homepage = new HomePage(page)
        loginpage = new LoginPage(page)
        navbar = new Navbar(page)
        paymentpage = new PaymentPage(page)
         //await page.goto('http://zero.webappsecurity.com/index.html')
         await homepage.visit()
         //await page.click('#signin_button')
         await  homepage.clickonSignin()
         await loginpage.login('username','password')
        // await page.type('#user_login', 'username')
        // await page.type('#user_password', 'password')
        // await page.click('text=Sign in')
        // await await page.waitForTimeout(5000)
    })
    test('Should send new Payment',async({page})=>{
        await navbar.clickOnTab('Pay Bills Tab')
        await paymentpage.payment()
    })
  
})