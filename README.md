# Programming Basics - Project 2

Practice using JavaScript to dynamically change a page displayed in the browser.

## Tasks:
1. Continue with embedding the menu section in the following mockups (mobile first, then desktop using media queries) using HTML and CSS – but the menu cards themselves need to get their information from a backend API (for this step it can be mocked as a hard-coded array of menu item objects which will be provided) and dynamically insert the menu cards into the menu section: https://www.figma.com/file/rVlH2oPkiCBqtXrLJR42Fi/PBG-Project-1
1. __BONUS__: create the backend with an API URL of http://localhost:3000/api/menu-items/ which will use HTTP GET to return an array of menu item objects having id, name, price, description, image URL, and boolean indicating if it is recommended or not. Then update your frontend code above to use the Fetch API to retrieve this information and dynamically do the insertions into the page.

## Some of the concepts covered:
* Converting a static mockup into a web page prototype
* HTML semantic tags
* CSS Flexbox
* JavaScript used to dynamically change a page in the browser
* __BONUS__: JavaScript used on the backend via Node Express
* __BONUS__: JavaScript used to fetch information from a backend API
* __BONUS__: REST APIs (in particular using HTTP GET)

## References:
* Thanks to Deepakshi Kumari, the web page mockup can be found [here](https://www.figma.com/community/file/967341349937129898) and is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
* "How to Section Your HTML" - https://css-tricks.com/how-to-section-your-html/
* "A Complete Guide to Flexbox" - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* JavaScript for beginners: https://youtu.be/PkZNo7MFNFg
* JavaScript DOM manipulation for beginners: https://youtu.be/5fb2aPlgoys
* JavaScript for fetching backend API info: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
* Node and Express course: https://youtu.be/Oe421EPjeBE