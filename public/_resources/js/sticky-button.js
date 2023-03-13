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