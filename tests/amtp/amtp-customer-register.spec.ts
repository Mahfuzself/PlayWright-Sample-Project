import {test,expect} from '@playwright/test'
test('amtp-Register',async({page})=>{
    await page.goto('http://automationpractice.com/index.php')
    await page.click('text=Sign in')
    await page.type('#email_create','amtpa2022@yopmail.com')
    await page.click('#SubmitCreate')
    await page.click('#id_gender1')
    await page.type('#customer_firstname','Mahfuz')
    await page.type('#customer_lastname','Alam')
    await page.type('#passwd','password')
    await page.selectOption('#days','29')
    await page.selectOption('#months','10')
    await page.selectOption('#years','1996')
    await await page.type('#company','amtfarm')
    await page.type('#address1','H-11')
    await page.type('#city','USA')
    await page.selectOption('#id_state','5')
    await page.type('#postcode','00000')
    await page.selectOption('#id_country','21')
    await page.type('#other','Some information')
    await page.type('#phone','01854650027')
    await page.type('#phone_mobile','01568703919')
    await page.type('#alias','mirpur,dhaka')
    await page.click('#submitAccount')



})