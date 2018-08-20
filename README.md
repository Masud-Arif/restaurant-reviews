# Restaurant Reviews
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Yuribenjamin/restaurant-reviews/blob/master/LICENSE)

Udacity's Google Developer Challenger Scholarship - Front End Web Development

```
    [+] AUTOR:      Ibrahim Ragab
    [+] EMAIL:      Abrahammoustafa@hotmail.co.uk
    [+] Github:     https://github.com/Yuribenjamin
    [+] twitter:    @AbrahamRagab

```

## Summary

For the Restaurant Reviews projects, incrementally convert a static webpage to a mobile-ready web application. take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. also add a service worker to begin the process of creating a seamless offline experience for your users.

## How to run the project

1. Download or clone the repository in your machine:

> `https://github.com/Yuribenjamin/restaurant-reviews.git`

2. Running a simple local HTTP server
    - Download [python](https://www.python.org/)
    - Check python version `python -V`
    - If you running Python 2.x Run `python -m SimpleHTTPServer 8000`
    - If you running Python 3.x Run `python -m SimpleHTTPServer 8000`
    - Terminal ouput `Serving HTTP on 0.0.0.0 port 8000 ...`

3. Then navigate to the browser and enter `http://localhost:8000/`

## Dependencies

- The starter code is provided by Udacity for the Udacity FEND's students.
- The map diplayed form [Leafletjs](https://leafletjs.com/) open-source JavaScript library for mobile-friendly interactive maps && [mapbox](https://www.mapbox.com/)open source mapping platform for custom designed maps.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for Accessibility issues.
- [Normalize.css](https://necolas.github.io/normalize.css/).
- [Favicon & App Icon Generator](https://www.favicon-generator.org/).

## Project specifications

**Responsive Design**

- Is the site UI compatible with a range of display sizes? -- All content is responsive and displays on a range of display sizes. -- Content should make use of available screen real estate and should display correctly at all screen sizes. --An image's associated title and text renders next to the image in all viewport sizes.
-Are images responsive? -- Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
-Are application elements visible and usable in all viewports? -- On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

**Accessibility**

- Are images accessible? -- All content-related images include appropriate alternate text that clearly describes the content of the image.
-Is focus used appropriately to allow easy navigation of the site? -- Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
-Are site elements defined semantically? -- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

**Offline Availability**

-Are pages that have been visited available offline? --When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

## Licence
The contents of this repository are covered under the [MIT License](https://rem.mit-license.org/).