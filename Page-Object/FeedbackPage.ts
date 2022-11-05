
import {expect,Locator,Page} from '@playwright/test'
export class FeedbackPage{
    readonly page : Page
    readonly nameInput : Locator
    readonly emailInput : Locator
    readonly subjiectInput : Locator
    readonly commentInput : Locator
    readonly submitbtn : Locator
    readonly clearbtn :Locator
    readonly feedbackTittle : Locator
    readonly feedbackbtn : Locator
    constructor(page : Page){
      this.page = page
      this.nameInput = page.locator('#name')
      this.emailInput = page.locator('#email')
       this.subjiectInput = page.locator('#subject')
       this.commentInput=page.locator('#comment')
       this.submitbtn=page.locator("input[type='submit']")
       this.clearbtn=page.locator("input[name='clear']")
       this.feedbackTittle=page.locator('#feedback-title')
       //this.feedbackbtn = page.locator('#feedback')
    }
    async fillForm(name : string, email : string, subject : string, comment : string){
        await this.nameInput.type(name)
        await this.emailInput.type(email)
        await this.subjiectInput.type(subject)
        await this.commentInput.type(comment)
        //await this.submitbtn.click()
    }
    async Submittform(){
        await this.submitbtn.click()
    }
    async Resetform(){
        await this.clearbtn.click()
    }
    async asserReset(){
        await expect(this.nameInput).toBeEmpty()
        await expect(this.commentInput).toBeEmpty()
    }
    async feedbackformSent(){
        await expect(this.feedbackTittle).toBeVisible()
    }
}