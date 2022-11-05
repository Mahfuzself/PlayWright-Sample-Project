import {test,expect} from '@playwright/test'
test.describe('Search Result',()=>{
    test('Should find Search result ',async({page})=>{
        await page.goto('http://automationpractice.com/index.php')
        await page.type('#search_query_top','DREES')
        await page.keyboard.press('Enter')
        
    })
})