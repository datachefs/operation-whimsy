
---
title: Intro to Chrome Extensions
layout: content
image: cupcakes-reflection.jpg
---

- Manifest
- The **extension service worker** handles and listens for browser events, such as navigating to a new page, removing a bookmark, or closing a tab
- **Content scripts** read and modify the content of a page. To do so, they execute Javascript in the context of a web page. They can also read and modify the DOM of the pages they're injected into. Content Scripts can only use a subset of the Chrome APIs but can indirectly access the rest by exchanging messages with the extension service worker
- various HTML files, such as a popup, an options page, and other HTML pages. 



To load it:

- To start, create a new directory to hold the extension's files 
- To load an unpacked extension in developer mode:
- Go to the Extensions page by entering chrome://extensions in a new tab. 
- Enable Developer Mode by clicking the toggle switch next to Developer mode.
- Click the Load unpacked button and select the extension directory.

- By default, when you load your extension locally, it will appear in the extensions menu Puzzle. Pin your extension to the toolbar to quickly access your extension during development.

- to see this change in the browser you also have to refresh the extension. Go to the Extensions page and click the refresh icon next to the on/off toggle
- use the npm package chrome-types to take advantage of auto-completion for the Chrome API.



## Coding Tricks

console.log("This is a popup!")

https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/

Find the article element
const article = document.querySelector("article");
const text = article.textContent;

const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;
  (date ?? heading).insertAdjacentElement("afterend", badge);

- insertAdjacentElement() used to insert the reading time node after the element.
- The Classlist property used to add CSS class names to the element class attribute.
- Optional chaining used to access an object property that may be undefined or null.
- Nullish coalescing returns the <heading> if the <date> is null or undefined

https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/


## Background.JS

send a message from your background page to a content script with all required data for the script to create proper HTML code or inject the code using chrome.tabs.executeScript.

You can use something like this script in your background.js

chrome.tabs.executeScript({
    code: "$('body').prepend('Some html')"
});
or

chrome.tabs.executeScript({
    file: "insert.js"
});


##  Manifest

For content scripts, add something like:

content_scripts": [
    {
      "js": ["scripts/content.js"],
      "matches": [
        "https://developer.chrome.com/docs/extensions/*",
        "https://developer.chrome.com/docs/webstore/*"
        
JS: the script
Matches: one or more match patterns. These allow the browser to identify which sites to inject the content scripts into.
