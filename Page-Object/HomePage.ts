import {expect,Locator,Page} from '@playwright/test'
export class HomePage{
    readonly page : Page
    readonly signinButton : Locator
    readonly searchBox : Locator
    readonly feedback : Locator
  constructor (page : Page){
    this.page = page
    this.signinButton = page.locator('#signin_button')
    this.searchBox = page.locator('#searchTerm')
    this.feedback = page.locator('#feedback')
  }
  async visit (){
   await this.page.goto('http://zero.webappsecurity.com/')
  // await this.feedback.click()
}
     async  clickonSignin(){
     this.signinButton.click()
   }
   async  clickFeedback(){
    await this.feedback.click();
   }
   async searchPage(usersearch: string){
      await this.searchBox.type(usersearch)
      await this.page.keyboard.press('Enter')
   }
}