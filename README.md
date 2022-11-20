<!-- # ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

## Using NPM

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

## Using Yarn

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

### ⚠️

To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 -->
 
 # General Assembly SEI - Project 2

My second project for the Software Engineering Immersive course, a React app pair-coded with GA classmate, [Victoria Olanipekun](http://github.com) in a 48-hour hackathon.

The app has been deployed with Netlify and is available [here](https://drinkard.netlify.app/).

## Brief

Build a React application that consumes any public API.

## Timeframe


48 hours

## Technologies used
 
 * HTML
 * SCSS
 * JavaScript
 * Bulma
 * React.js
 * Github/Git
 * React Spinner
 * React Icons

## Overview

DRINKARD hosts a variety of 25 cocktails. Once the page loads, a "Welcome to DRINAKARD 🍸" displays, with the glass being clickable. If the user clicks on the glass, it will direct him/her to the cocktails page. On the top of the page we devised a navbar which is always present, no matter on which section of the page the user is; this way, the user can either return to the homepage (by clicking on the home icon) or click on the glass to redirect to the cocktail page.

![drinkard](https://user-images.githubusercontent.com/83225952/128079151-677d6296-d12b-4ca4-99c6-f90e619e1358.jpeg)

## Demonstration of the app flow

![drinkard](https://user-images.githubusercontent.com/83225952/139964295-aa9f4cdf-e2bb-4608-9166-c7c584b516ae.gif)

## Process

As we had only 48 hours, we started prospecting free API's online and decided on the [The CocktailDB API](https://www.thecocktaildb.com/api.php), as it was a mutual interest and established that it would be achievable within the timeframe. 
We started pseudocoding and visually displaying the layout of the app on paper for better understanding. We aimed to ensure that the information coming from the API would be displayed on the index page, i.e., the CocktailIndex component (*see Figure 1*); this is further returning a mapped component, called CocktailCard (*see Figure 2*):

*Figure 1* 

![EB09A77A-6D0B-4549-BC6D-EA97310DDBF0](https://user-images.githubusercontent.com/83225952/139101588-b6cc219e-8f86-41ed-8674-667e6963251d.jpeg)

*Figure 2*

![Image 27-10-2021 at 16 48](https://user-images.githubusercontent.com/83225952/139100973-41f68af4-eba2-40ca-b072-3ca6c8d18076.jpg)

The CocktailCard would display a card for each cocktail found, to which I added a lifting effect when hovered over (*see Figure 3*):

![Screenshot 2021-10-27 at 17 29 44](https://user-images.githubusercontent.com/83225952/139107831-eadca2ce-d032-48c2-bd8a-8e9c9a61b323.png)

Hence, clicking on any cocktail, a page will open with corresponding information. 

As per *Figure 4*, we targeted the cocktails by their ids (useParams) and saved the returning data in the state. We then focused on selected keys and styled them creatively (*see Figure 5*).

*Figure 4*

<img width="597" alt="Screenshot 2021-10-27 at 19 45 58" src="https://user-images.githubusercontent.com/83225952/139127700-bc3f22b4-fef8-4eff-8f0a-07d6dd345e70.png">

*Figure 5* 

<img width="710" alt="Screenshot 2021-10-27 at 19 47 09" src="https://user-images.githubusercontent.com/83225952/139127867-12cfc49b-2e14-4b12-a919-c0ba9f5c9c86.png">


## Styling

As it was a new project, we quickly settled for Bulma CSS Framework, which we could learn simultaneously. We kept it simple and 
we decided to go with Bulma CSS Framework for some out-of-the-box styling to manage our time. Serif fonts don't seem to be very en vogue in web development at the moment, but we thought they fit the theme nicely and they work well in this kind of clean and slick interface. The rest of the styling we wanted to keep quite minimal but fun to allow the user interface to be as clear and intuitive as possible.

## Challenges

The API in itself did not appear to be very organised for easy access; for example, each cocktail has distinct ingredients and measures, which made the targeted display of a cocktail difficult.

## Wins

This was our first shot at a public API and we were able to build a functional application with it. In addition, pair-coding has been the most enjoying aspect of this project.

## Future features

Had there been more time, we would have liked to add a suggestions input where the user can provide a feedback on either cocktails, ingredients or anything he/she would have liked to see.

## Key learnings

I believe this project made a serious impact on my knowldge of how to manipulate API endpoints. Teamwork was at the heart of everything.

