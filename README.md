# wstm-frontend-assist

Code and documentation for Westminster College

README pending...

# Stats Slider

The stats sliders uses a JavaScript library called Swiper JS. This documentation will go over the proper workflow to implement the desired stats-slider:

- Swiper JS installation
- HTML construction
- JavaScript initialization
- CSS Styling

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
