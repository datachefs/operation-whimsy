import asyncio
from playwright.async_api import async_playwright

async def print_css_rules():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()
        await page.goto('https://example.com')

        css_rules = await page.evaluate("""
        () => {
            const styleSheets = Array.from(document.styleSheets);
            return styleSheets.map((styleSheet) => {
                const rules = Array.from(styleSheet.cssRules || []);
                return rules.map((rule) => rule.cssText);
            });
        }
        """)

        print(css_rules)

        await browser.close()

asyncio.run(print_css_rules())
