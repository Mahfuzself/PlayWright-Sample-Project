import{expect,Locator,Page} from '@playwright/test'
import { AbstaractPage } from './AbstractPage'
export class LoginPage extends AbstaractPage{
  //define selector
  //readonly page : Page
  readonly usernameInput :  Locator
  readonly passwordInput : Locator
  readonly submitButton : Locator
  readonly errorMessage : Locator
  //init selector using constractor
  constructor (page :Page){
    super(page)
    //this.page=page
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')

    
    
  }
  //define loginpage method
 async login(username : string,password : string){
    await this.usernameInput.type(username)
    await this.passwordInput.type(password)
    await this.submitButton.click()
 }
  async AsserterrorMessage(){
    await expect(this.errorMessage).toContainText('Login and/or password are wrong')
  }
  

}