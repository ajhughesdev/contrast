# contrast

#### a website w/ resources for developers
<hr>

I used a template from codewell.cc -- a Figma file, static .json files, and most assets were provided.

The three screen sizes targeted are 414px, 768px, and 1440px. I used media queries in css and javascript to create a responsive design.

### features list

1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app.
- using the provided json files, I fetched the javascript objects and displayed them in unordered lists. all the data is fetched on page load and I used event listeners to display the appropriate resources depending on the tab choosen in the selection bar.

2. Create a form and save the values (on click of Submit button) to an external file.
- the dialog element that appears when pressing "submit resources" is a form re: several inputs. you may test with your own data or you can fill in the form with this information to see the results:

  resource name: Iconmonstr<br>
  description: A free source of SVG and PNG icons.<br>
  resource link: https://iconmonstr.com/<br>
  icon link: https://cdns.iconmonstr.com/wp-content/assets/preview/2020/240/iconmonstr-friend-3.png<br>
  pick "icon" in my custom-styled dropdown menu<br>
  
- when you click submit resource again, you are returned to the main page. refresh the page, and you will see your new resource card rendering with the other resources available. the information is persisted using localStorage.

3. A dropdown accordion style menu is available in the mobile and tablet views. It consists of four categories and each has a subcategory dropdown for further navigation. When in desktop view, alternative menu choices are displayed in the header bar, including "browse" which brings you straight to the resources to peruse.

##### further features and functionalities

- the newly supported dialog element includes a close button in the upper right hand corner that will close the modal without submitting information to localStorage.
- the dev environment was node.js and npm package manager. I used PostCSS to take advantage of future CSS functionalities and to prefix anything needed for cross-browser support.
- the number of rows available in the textarea element in the dialog form modal changes depending on screen size to keep it big enough to hold the placeholder text. this is done through a simple mediaQueryList and the matchMedia method to check the screen's width.
- the "books" and "inpiration" tabs are non-functional on purpose. the design I used from codewell.cc only provided data for the first four categories.

<hr>
I'm super interested in localStorage now and indexedDB now after this project. I assume most online "generators" like resume makers or css generators, etc use a browser storage situation. I thought, way to late in the session to start from scratch, that it would be cool to make some sort of profile generator or social media card maker that takes user input and spits it back out wrapped in html/css for the user to copy or download. 

I know this course focuses on JavaScript but I am particularly proud of how I matched the original design of the site with all the skills I've learned so far with Code Louisville. I will upload some .png files of the mockups so you can compare and refer to them. #pixelperfect? haha jk

![Landing Page - Mobile View](https://user-images.githubusercontent.com/69234359/161306376-61de828a-438c-4856-b999-9e9c25380bb4.png)
![Landing Page - Tablet View](https://user-images.githubusercontent.com/69234359/161306377-e4305dae-12cd-4a3f-80b3-f00a52534a32.png)
![Landing Page - Desktop View](https://user-images.githubusercontent.com/69234359/161306379-f18bc847-5479-4854-a534-e364b5498e7d.png)
![Submit Resource - Desktop View](https://user-images.githubusercontent.com/69234359/161306380-bab3991a-9904-4f18-8935-b788dd230614.png)
