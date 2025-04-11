import asyncio
from playwright.async_api import async_playwright

async def print_links():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()
        await page.goto('https://example.com')

        links = await page.query_selector_all('a')
        for link in links:
            print(await link.get_attribute('href'))

        await browser.close()

asyncio.run(print_links())
