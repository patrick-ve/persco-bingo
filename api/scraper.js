const fs = require('fs')
const puppeteer = require('puppeteer')
const ProgressBar = require('progress')
const prettier = require('prettier')
const prompts = require('prompts')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  })
  let data
  try {
    const outputFilename = 'www.thuisbezorgd.nl.json'
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0)
    await page.goto('https://www.thuisbezorgd.nl/eten-bestellen-amsterdam-1019')
    try {
      await page.waitForSelector('div.logowrapper img.restlogo.lazy-loaded')
    } catch {
      console.log("Couldn't find div.logowrapper img.restlogo.lazy-loaded")
    }
    const variable1 = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        'div.logowrapper img.restlogo.lazy-loaded'
      )
      return [...elements].map((element) => element.src || null).slice(0)
    })
    console.log({ variable1 })
    data = { variable1 }
    fs.writeFile(
      outputFilename || `./${new Date()}.json`,
      prettier.format(JSON.stringify(data), { parser: 'json' }),
      (err) => {
        if (err) return console.log(err)
      }
    )
    await browser.close()
  } catch (e) {
    await browser.close()
    throw e
  }
})()
