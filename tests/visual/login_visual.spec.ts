import{test} from '@playwright/test'
import { HomePage } from '../../Page-Object/HomePage'
import { LoginPage } from '../../Page-Object/LoginPage'
test.describe.only('Visual Regrestion Test',()=>{
    let homepage : HomePage
    let loginpage  : LoginPage
    test.beforeEach(async({page})=>{
         homepage = new HomePage(page)
         loginpage = new LoginPage(page)
         await homepage.visit()
         await homepage.clickonSignin()
    })
    test('Login Message',async({page})=>{
        await loginpage.snapshotLoginform()
    })
    test('Login errorMessage',async({page})=>{
        await loginpage.login('fail','wrongpassword')
        await loginpage.snapshotErrorMessage()
    })
})