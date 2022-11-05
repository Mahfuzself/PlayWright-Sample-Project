import {test,expect} from '@playwright/test'
test.describe('Sign in',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('http://automationpractice.com/index.php')
    })
    test('If Successfull login',async({page})=>{
        await page.click('text=Sign in')
        await page.type('#email','amtp2022@yopmail.com')
        await page.type('#passwd','password')
        await page.click('#SubmitLogin')
    })
    test('If dont Sign in',async({page})=>{
        await page.click('text=Sign in')
        await page.type('#email','amtp2022@yopgmailcom')
        await page.type('#passwd','epassword')
        await page.click('#SubmitLogin')
        const message = await page.locator('.alert alert-danger')
        await expect(message).toContainText('There is 1 error')

    })

})
