# Coffee Guru

This is a simple app that shows hot and iced coffee recipes.

URL: https://ctd-pw.netlify.app/ <br>
API: https://sampleapis.com/api-list/coffee

### Getting Started

1. Navigate to the documents folder on your machine
    - `cd documents`
2. Create a new folder to store this project 
   - `mkdir newFolder`
1. Clone the repository 
   - `git clone https://github.com/nate-j5/ctd-pw-adv.git`
1. Navigate into the folder and launch the project with VSCode (if applicable)
   - `cd ctd-pw-adv`
   - `code .`
1. If you're using VSCode and have [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) installed, click `Go Live` in your code editor to launch a dev server

![alt text](image-3.png)

### Table of Contents

- [Home](#home)
- [Recipe Pages](#recipe-pages)
- [404 Page](#404-page)

# Home

Allows users to view recipes for hot and iced coffee.

![alt text](image.png)

## Breakpoints

The home page has breakpoints at:

- `2560px` - limit container width
- `1440px` - increase container width
- `1280px` - stack title and cards vertically
- `625px` - stack cards vertically

<br> 

# Recipe Pages

The recipe pages fetch recipe data and render the results to the page. Each recipe displays one at a time allowing the user to cycle through options.

## How the script works
1. Check that the DOM is loaded and calls `fetchRecipes()` to retrieve the recipe data.
2. If the request is successful, it converts the response to JSON and stores each recipe in an array. If there's an issue, an alert is displayed and an error message is logged to the console.
3. Next, `renderRecipes()` is called to render the data to the DOM.

4. How `renderRecipes()` works
   1. Sets the `recipe` variable to the current array item based on the `currentIndex` variable
   2. Sets the`recipeContainerList` variable to the `recipe-list` div in the HTML file
   3. Create a variable called `ingredientsList` which contains a list of the ingredients for each recipe (stored in a `ul/li`)
   4. Sets the `currentImageUrl` variable to the item's `image url`
   5. Sets the innerHTML of the `recipe-list` in the HTML file to title, description, and ingredients list of the item
   6. Sets the `currentImageElement` variable to the `current-image` of the img tag in the HTML file
   7. Sets the source of `currentImageElement` to the items's image URL 

5. How `renderArrows()` works
   1. Sets the `arrowsContainer`variable to the `arrows` div in the HTML file.
   2. Adds two buttons to the innerHTML of the `arrowsContainer` div that represent the arrow buttons
   3. Creates `prevButton` and `nextButton` handlers that set `prev-btn` and `next-btn` buttons in the HTML file. 
   4. Adds a `click` event listener to the `prevButton` and `nextButton` elements

6. How `nextItem()` and `prevItem()` work
   1. `nextItem` and `prevItem` increment or decrement the index of the array
   2. `renderRecipes()` is then called to re-render the element with the correct recipe 

Output

![alt text](image-4.png)

## Breakpoints

The recipe pages have breakpoints at:

- `992px` - hide image and center text

<br>

# 404 Page

The 404 is handled by [Netlify](https://www.netlify.com/) which automatically sets any page titled `404.html` to the global 404 page. This is very helpful, but I think it would be good to know how to configure this manually as well. 

## Breakpoints

The 404 page has breakpoints at:

- `1920px` - adjust link size on large devices
- `635px` - adjust 404 image size

## Exiting the Application

Click on the close button located in the top-right corner of the application window. This will also automatically close the live server.

Thanks for reading, if you have any issues please email me at natejohnson005@yahoo.com.