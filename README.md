
# WSTM Westminster College Development Support

Code and documentation to help support the web team at Westminster College

# Table of Contents

- [How to Run the Code Examples](#how-to-run-the-code-examples)
- [Gradient Overlays for Rows](#gradient-overlays-for-rows)
- [Stats Sliders](#stats-slider)
- [Sticky Button](#sticky-button)

# How to Run the Code Examples
The code examples in this repository can be previewed with the included nodeJS server. Running the examples is completely optional.

## Requirements

- [nodeJS](https://nodejs.dev/en/download/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

To check and see if you already have these installed, run the following commands:
```
node -v
npm -v
```
If you get the version number for each back, you're good to go. If not, visit [Node's download page](https://nodejs.dev/en/download/) and install the version for your system.

## Installing the server
After cloning or downloading this repository, run the following command from the root directory:
```
npm install
```
Node will proceed to download and install all of the necessary modules for the server. 

## Starting and stopping the server
Once everything is installed, run the following command from the project's root directory:
```
npm start
```
Node will start a server. Any files in the `/public/` directory will be available at http://127.0.0.1:8080 in the browser. On MacOS and some other systems, http://localhost:8080 will also work.

_TIP:_ If port 8080 is not available, you can edit `/lib/server.js` and set `const port = 8080` to any port number you'd like.

To stop the server, press `ctrl+C` in the terminal window (or simply end the entire terminal process).

## List of preview URLs available on a running local server
- Stats Slider http://127.0.0.1:8080/stats-slider
- Sticky Button http://127.0.0.1:8080/sticky-button

# Gradient Overlays for Rows
## The request
We were asked to improve control over the gradient overlays found on pages like this one: [WestX3](https://westminstercollege.edu/_dev/westx/westx3.html)

Specifically, the "Griffin Ready" row was mentioned as a good example (screenshot below):
![Screenshot - Griffin Ready Row in Development (before)](/README_images/griffin_before.png)

### Recommended Solution
#### Use percentages in your CSS gradient definition
CSS Gradients can accept percentage parameters, which lets you control where the color-stops are placed (see [Using CSS Gradients > Positioning Color Stops](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients#positioning_color_stops)). For example, on [WestX3](https://westminstercollege.edu/_dev/westx/westx3.html), you could apply the following style and have the colored background extend behind the text:

```css
.griffin-ready-banner{
  linear-gradient(90deg, rgb(245, 245, 245) 35%, rgba(0,0,0,0) 90%), 
  url("https://westminstercollege.edu/_resources/images/default-source/westx/griffin-ready-banner.jpg")
}
```
Screenshot of results:
![Screenshot - Griffin Ready Row in Development (before)](/README_images/griffin_after.png)

### Other Tips
Creating great CSS gradients quickly gets a lot easier with tools like [CSS Gradient](https://cssgradient.io/). Even if you're great at writing them by hand, it's often faster to use a generator when it's anything more complex than a two-color linear gradient.

# Stats Slider

The code example can be found in the [Stats Slider HTML](public/stats-slider.html#L6846) file in the public folder.
The stats sliders uses a JavaScript library called Swiper JS. This documentation will go over the proper workflow to implement the desired stats-slider:

- [Swiper JS installation](#swiper-js-installation)
- [HTML construction](#html-construction)
- [JavaScript initialization](#javascript-initialization)
- [CSS Styling](#css-styling)

## Swiper JS Installation

Additional documentation on Swiper JS can be found here: https://swiperjs.com/
The following steps will demonstrate how to install Swiper JS from CDN:

- Must include the Swiper stylesheet and the script file to the html file.

- Stylesheet goes in the `head`:
  `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />`
- Script goes in the `footer`:
  `<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script> `

## HTML Construction

Swiper JS requires specific constructs to both the markup and the classnames. The structural layout of a swiper feature looks something like this:

```
<!-- Slider main container -->
<div class="swiper stats-slider-swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev stats-slider-prev"></div>
  <div class="swiper-button-next stats-slider-next"></div>

</div>
```

- The JavaScript in Swiper queries the classnames listed above. You must include `swiper`, `swiper-wrapper`,`swiper-slide`, and `swiper-button-prev` `swiper-button-next`. You may **ADD** your own classnames as well.
- It is recommended to built out your swiper-slide cards inside `swiper-slide` with additional HTML elements, to avoid building the `swiper-slide` div itself. This is to prevent confusion on the JS side. For example:
  ```
  <div class="swiper-slide">
      <div class="swiper-card">
      Here is the content.
      </div>
  </div>
  ```
- Although not part of the HTML construction, you might need to define the Swiper size before JS initialization:

```
.swiper {
  width: 100%;
}
```

## JavaScript Initialization

Code Example: [Stats Slider JavaScript](public/_resources/js/stats-slider.js)

To initialize the Swiper, we will need to add some code into a JS file. A JS file was create named `_resources/js/stats-slider.js` and added the script file in the footer of our HTML file **AFTER** the Swiper JS script file (see stats-slider.html for example).

Essentially, Swiper uses a OOP to configure sliders. There is plenty of additional documentation on the Swiper API that can be found here: https://swiperjs.com/swiper-api

For the purposes of this example, the following code only includes what is needed for this example:

```
const swiper = new Swiper('.stats-slider-swiper', {
    // Optional parameters
     loop: true,
    grabCursor: true,
    slidesPerView: 1.5,
    spaceBetween: 0,
    freeMode: true,

    keyboard: {
        enabled: true,
    },

    breakpoints: {
        992: {
            slidesPerView: 3.5
        },
        768: {
            slidesPerView: 2.5
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.stats-slider-next',
        prevEl: '.stats-slider-prev',
    },

});
```

- Notice the query classname ".stats-slider-swiper". Theoretically you could query ".swiper", however this limits you to only having one slider per html file. It is recommended to use the custom classname to prevent this.
- `loop: true` : slider will be cyclical. It is false be default.
- `grabCursor: true` : if true, sets cursor icon to "grab" on hover. Improves usability, optional property.
- `spaceBetween` : sets the space in px between each slide. In this particular example, spaceBetween is set to 0 pixels, therefore you would not need to add this property to the class, but is present only for this example.
- `freeMode: true` : if set to true, this allows the user to move the carousel freely.
- `keyboard` : allows navigation using keyboard. Improves accessibility.
- `SlidesPerView` : sets the default number of swiper-slides in viewport. Using decimals leads to exposing the next slide but that decimal value.
  - `breakpoints` : Breakpoints can be added to customize responsive design. The breakpoint number refers to the amount of pixels. In this example we are setting breakpoints and the number of slides in the viewpoint for each breakpoint.
- `navigation` : queries the nav buttons to enable interactivity. Remember, ".swiper-button-next" and ".swiper-button-prev" must be a part of the classList to be queried appropriately.

## CSS Styling

All the styling for the slider can be found in `styles.css`. There are a few styling that should be pointed out

### Custom Buttons

To make your own custom buttons, you will first have to as an :after pseudo-selector that hide the default arrows.

```
.stats-slider-swiper [class^="swiper-button-"]::after {
  content: "";
}
```

Then you will add your own button markup within the `stats-slider-prev/next` div elements.

```
<div class="swiper-button-prev stats-slider-prev">
            <button>
              <svg
                class="svg-inline--fa fa-circle-chevron-right"
                data-prefix="fas"
                data-icon="circle-chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="swiper-button-next stats-slider-next">
            <button>
              <svg
                class="svg-inline--fa fa-circle-chevron-right"
                data-prefix="fas"
                data-icon="circle-chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"
                ></path>
              </svg>
            </button>
```

Then you may style them accordingly.

### Positioning the Buttons

The navigation buttons use `position: absolute`, so you may move them however you would like. In this example, the styling was as follows. Notice the styling is applied to the custom classname, to prevent duplicated the styling if multiple sliders were present. While these style settings showcase how you can move the buttons, this will not be the final styling for the code example. Please see the next section in the README for applicable styling.

```
.stats-slider-next {
  right: 50px;
}

.stats-slider-prev {
  left: 50px;
}
```

## Creating the "Trail/Ghost" Effect on ends of slider

There are several approaches to this, but the buttons will be our focus. Essentially, the buttons are placed at the ends of the slider, therefore we can match the height and set the width of these `div`s and change the background's opacity to represent this trailing or "ghost" effect. Note that additional styling of these `div`s are added to reposition the `svg` icon inside the parent element.

```
.stats-slider-next {
  right: 0;
  top: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 34%,
    rgba(228, 228, 228, 1) 100%
  );
  width: 400px;
  height: calc(100% + 4rem);
}

.stats-slider-prev {
  left: 0;
  top: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 34%,
    rgba(228, 228, 228, 1) 100%
  );
  width: 400px;
  height: calc(100% + 4rem);
}
```

#### And _Voila!_ You have yourself a stats-slider!

This same concept of using Swiper JS and styling the buttons appropraitely can be applied to other design elements to give off a trail/ghost effect.

# Sticky Button

The code example can be found in [Sticky Button](public/sticky-button.html#L6818) in the public directory.
This documentation will cover how to style a the initial state of the button, as well as using some JavaScript to listen to the HTML DOM to transform the button into a sticky button that will stay on the bottom right side of the page.

- [Initial Styling](#initial-styling)
- [JavaScript](#javascript-for-sticky-button)
- [Sticky Styling](#sticky-styling)

## Initial Styling

The complete styling for the initial state is located in `styles.css`. One styling property to note is the use of the `clip-path` property. The [Clip Path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) property creates a region of the element that gets clipped (liking clipping a piece of paper with scissors). Parts inside where clipped is shown, parts on the outside is not shown.
[Clippy](https://bennettfeely.com/clippy/), a clip-path css generator was used for this specific code example.

```
/**
Sticky Button
*/

.sticky-button-section {
  width: 100%;
  min-height: 500px;
  background-color: #211551;
  /* position: relative is important for the button. Think of this as a reference to where the button will be placed. */
  position: relative;
}

.sticky-button-wrapper {
  width: 100%;
  height: 100%;
}

.sticky-button-content-container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem;
}

.sticky-button-content-headline,
.sticky-button-content-headline-two {
  color: #ffffff;
  font-size: 44px;
  margin: 0.5rem 0;
}

.sticky-button-content-marketing-headline {
  color: #8252c7;
  margin: 1rem 0;
}

.sticky-button-content {
  color: #ffffff;
}

/* Sticky Button Initial State */

.sticky-button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8252c7;
  height: 30%;
  width: 475px;
  /* transition time between initial state and scroll state */
  transition: all 0.5s;
  /* position: absolute will position the element in referrence to the ancestor element (the ancestor element that is position: relative). This allows your to control and move the element anywhere in referrence to said ancestor element. Use properities like  top, botton, left, right to control the position. */
  position: absolute;
  bottom: -2rem;
  right: 0;
  left: auto;
  /* setting for z-index will have this element position over other elements. */
  z-index: 10;
  /* clip path creates a region of the element that gets clipped (liking clipping a piece of paper with scissors). Parts inside where clipped is shown, parts on the outside is not shown. */
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.sticky-button-container__inner-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0 1rem 3rem;
}

.sticky-button-container p {
  color: #211551;
  width: 90%;
}

.sticky-button {
  background: #211551;
  border: none;
  padding: 1rem 1.5rem;
  transition: all 0.5s;
}

.sticky-button a {
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
}

.sticky-button:hover a {
  color: #8252c7;
}
```

## JavaScript for Sticky Button

Code Example: [Sticky Button JavaScript](public/_resources/js/sticky-button.js)

The basic function of the JavaScript is to listen for when the viewport has scrolled past the location of the button. If this condition true runs true, a class is added to the sticky button's classList. Then CSS will take over for the animation.

```
// Query Sticky Button Container
const stickyButtonContainer = document.getElementById("sticky-button-container")

// Captures the y-axis position of the sticky button
let stickyButtonTop = stickyButtonContainer.getBoundingClientRect().top;

window.addEventListener('scroll', () => {

    // If stickyButtonTop plus an additional 400 (to accommadate some additional scroll) is less than the amount of pixels scrolled vertically on the page, then add this classlist
    if (window.scrollY > (stickyButtonTop + 400)) {
        stickyButtonContainer.classList.add('beyond-threshold')
    } else {
        if (stickyButtonContainer.classList.contains('beyond-threshold')) {
            stickyButtonContainer.classList.remove('beyond-threshold')
        }
    }
});
```

## Sticky Styling

Stylings are made to selectors that are children under the `.beyond-threshold` className.

```
/* Sticky Button: Scroll State */

.sticky-button-container.beyond-threshold {
  background: none;
  position: fixed;
  bottom: 2rem;
  height: auto;
  width: auto;
  clip-path: none;
}

.sticky-button-container.beyond-threshold p {
  display: none;
}

.sticky-button-container.beyond-threshold
  .sticky-button-container__inner-container {
  align-items: flex-end;
  padding: 0 2rem 0 0;
  width: 100%;
}

.sticky-button-container.beyond-threshold .sticky-button {
  background-color: #8252c7;
  border-radius: 30px !important;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
}

.sticky-button-container.beyond-threshold .sticky-button:hover a {
  color: #211551;
}
```
