# WSTM Westminster College Development Support
Code and documentation to support the web team at Westminster College

## Gradient Overlays for Rows
### The request
We were asked to improve control over the gradient overlays found on pages like this one: [WestX3](https://westminstercollege.edu/_dev/westx/westx3.html)

Specifically, the "Griffn Ready" row was mentioned as a good example (screenshot below):
![Screenshot - Griffin Ready Row in Development (before)](/repository/README_images/griffin_before.png)

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
![Screenshot - Griffin Ready Row in Development (before)](/repository/README_images/griffin_after.png)

### Other Tips
Creating great CSS gradients quickly gets a lot easier with tools like [CSS Gradient](https://cssgradient.io/). Even if you're great at writing them by hand, it's often faster to use a generator when it's anything more complex than a two-color linear gradient.
