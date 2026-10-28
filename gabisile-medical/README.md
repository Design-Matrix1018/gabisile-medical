# Gabisile Medical Facility

Website for Gabisile Medical Facility, a nurse-led private clinic in Isipingo, Durban.

Static site, no build step. Plain HTML, CSS and vanilla JS.

## Structure

```
index.html
css/styles.css
js/main.js
images/
```

## Running locally

Open `index.html` in a browser, or use the Live Server extension in VS Code.

## Notes

- Bookings go through WhatsApp (066 352 6383). The form builds a prefilled `wa.me` link, nothing is stored or posted anywhere.
- Service names and descriptions live in the `SERVICES` array at the top of `js/main.js`. The services list, the IV drip cards, the "Learn more" popups and the booking dropdown are all generated from it.
- Fonts: Bodoni Moda and Jost from Google Fonts.
