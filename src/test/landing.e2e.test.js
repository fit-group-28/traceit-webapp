import puppeteer from "puppeteer";

describe("Landing.js", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    it("Contains the traceit description", async () => {
        await page.goto("http://localhost:1234");
        await page.waitForSelector(".title");
        const text = await page.$eval(".title", (e) => e.textContent);
        expect(text).toContain("TraceIt - Group 281");
    });

    afterAll(() => browser.close());
});