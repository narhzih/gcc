# How I Built The Design

Hey! So here's how I tackled coding up your design. Pretty straightforward approach but had some fun challenges.

## Tech Stack

Built it with HTML, Tailwind CSS, and vanilla JavaScript. Went with Tailwind because your design had very specific spacing and typography requirements - easier to nail the exact pixel values you had in Figma.

## The Tricky Parts

### That Image Slider Thing

You know, the before/after slider in the hero section? Had to build that from scratch. Basically stacked the two hero images on top of each other, then used CSS `clip-path` to reveal portions based on where you drag the handle.

The magic line is:

```javascript
overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
```

This clips the top image from right to left as you drag. Also had to sync the orange divider line and handle position - both move together based on mouse/touch position.

### Mobile Responsiveness

The design needed completely different layouts on mobile vs desktop. Instead of trying to squeeze the desktop layout, I created separate structures:

-   Desktop: Features in columns around the center image
-   Mobile: Everything stacks vertically (header → image → features → button)

Used Tailwind's `hidden lg:block` and `lg:hidden` classes to show/hide the right layout for each screen size.

The image slider was definitely the most fun part to code. Everything else was just careful attention to the design details and making sure it works smoothly on all screen sizes.
