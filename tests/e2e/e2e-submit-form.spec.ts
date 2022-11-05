import { test, expect } from '@playwright/test'
import { HomePage } from './../../Page-Object/HomePage'
import { FeedbackPage } from './../../Page-Object/FeedbackPage'
test.describe.parallel('Feedback Form', () => {
  let homepage : HomePage
  let feedbackpage : FeedbackPage
  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page)
    feedbackpage = new FeedbackPage(page)
    await homepage.visit()
    await homepage.clickFeedback()
    //await page.goto('http://zero.webappsecurity.com/index.html')
    //await page.click('#feedback')
  })

  // Reset feedback form
  test('Reset feedback form', async ({ page }) => {
    await feedbackpage.fillForm('some name','some email@email.com','some subject','some nice comment about the application')
    await feedbackpage.Resetform()
    await feedbackpage.asserReset()
    //await page.type('#name', 'some name')
    //await page.type('#email', 'some email@email.com')
    //await page.type('#subject', 'some subject')
    // await page.type('#comment', 'some nice comment about the application')
    // await page.click("input[name='clear']")
    //const nameInput = await page.locator('#name')
    //const commentInput = await page.locator('#comment')
    //await expect(nameInput).toBeEmpty()
    // await expect(commentInput).toBeEmpty()
  })

  // Submit feedback form
  test('Submit feedback form', async ({ page }) => {
    await feedbackpage.fillForm('some name','some email@email.com','some subject','some nice comment about the application')
    await feedbackpage.feedbackformSent()
    await feedbackpage.Submittform()
    // await page.type('#name', 'some name')
    // await page.type('#email', 'some email@email.com')
    //await page.type('#subject', 'some subject')
    //await page.type('#comment', 'some nice comment about the application')
    //await page.click("input[type='submit']")
    //await page.waitForSelector('#feedback-title')
  })
})
