import { test,expect } from '@playwright/test'
test.describe('Visual Regrestion test',()=>{
    test('Full page Screenshot',async({page})=>{
        await page.goto('https://www.example.com')
        expect(await page.screenshot()).toMatchSnapshot('homepage.png')
    })
    test('Single Element Screenshot',async({page})=>{
        await page.goto('https://www.example.com')
        const PageElement = await page.$('h1');
        expect(await PageElement.screenshot()).toMatchSnapshot('page_title.png')
    })
})

