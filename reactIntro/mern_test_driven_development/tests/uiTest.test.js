const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');

let driver = new webdriver.Builder().forBrowser('firefox').build();

const TIMEOUT = 30000000
// Implement timeouts so the pages actually wait for each other
driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
    TIMEOUT, script: TIMEOUT } )

const sleep = ms => new Promise(r => setTimeout(r, ms));

beforeEach(async () => {
    await driver.get("http://localhost:3000")
})

afterAll(async () => {
    await driver.quit()
})

describe('test UI', () => {
    // it('should load the browser', async () => {
    //     const layout = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('layoutComponent')))).getTagName()
    //     // console.log(layout)
    //     await sleep(2000)

    //     assert.equal(layout, 'div')
    // })
    // it('should navigate to posts and find posts on the page', async () => {
    //     const posts = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('postsLink')))).click()
    //     // console.log(layout)
        
    //     const post = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('postTitleComponent')))).getText()
    //     assert(post, 'Another Post')

        
    // })
    it('should navigate to create and create a post', async () => {
        const create = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('createLink')))).click()
        // console.log(layout)
        
        const titleInput = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('titleInput')))).sendKeys("A new Post from Test")
        const descriptionInput = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('descriptionInput')))).sendKeys("a new desc from test")
        const button = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('submitButton')))).click()
        await sleep(2000)

        const post = await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('postTitleComponent'))))
        const posts = await driver.wait(driver.findElements(By.className('postTitleComponent')))
        
        
        

    })
}) 