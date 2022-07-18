# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png);

### Links

- Solution URL: [source code](https://github.com/SilvanosEric/fem-interactive-rating-component)
- Live Site URL: [website](https://silvanoseric.github.io/fem-interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwindcss.com/)
- Flexbox
- CSS Grid
- Mobile-first workflow
- [BEM](http://getbem.com/)
- [CUBE CSS](https://cube.fyi/)

### What I learned

- Aligning flow items in an individual grid square
- Aligning flow items in all grid squares
- Aligning a grid


### Continued development

- CUBE CSS - [Grouping](https://cube.fyi/grouping.html#grouping)

### Useful resources

- [Difference between aling-items and align-content in CSS Grid](https://stackoverflow.com/questions/40740553/what-is-the-difference-between-align-items-vs-align-content-in-grid-layout) - This allowed me to differentiate between aligning items(align-items) in a grid square and aligning the whole grid (align-content). It also went into how to align inside a single grid square.

- [Aspect ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) - Allowed me to only provide a width for the rating circles, and the height was calculated automatically

- [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) - used to indicate that an element can be focused.

- [Get the Index of a Child node using JavaScript](https://bobbyhadz.com/blog/javascript-get-child-node-index) - the main highlight of the article is on indexes, but what I found really usedful is the [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) static method that allowed me to use highter order functions on an array consisting of HTML elements.

## Author

- Frontend Mentor - [@SilvanosEric](https://www.frontendmentor.io/profile/SilvanosEric)
