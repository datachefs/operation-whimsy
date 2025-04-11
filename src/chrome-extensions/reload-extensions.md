# How to Reload Google Chrome

https://stackoverflow.com/questions/9054458/shortcut-for-reloading-extensions-in-chrome

I think the best way to do this is to actually open the popup in a page. To do this use the URL:
chrome-extension://{extension-id}/{page.html}
This allows you to use Chrome Developer tools and when you press refresh the extension is refreshed with the latest code changes. It also updated the extension popup.


Another approach:

#n:: ; This sets the shortcut to Win+n
WinActivate, ahk_class Chrome_WidgetWin_1 ; Activates the Chrome window

Send, ^l ; Focuses the address bar (Ctrl+L)
Send, chrome://extensions/{Enter}

Sleep, 1000 ; Waits for the page to load

Send, {Tab}{Tab}{Tab}{Tab}{Enter} ; Navigates to 'Enable Developer Mode' and hits Enter
return
