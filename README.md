[![Netlify Status](https://api.netlify.com/api/v1/badges/ad460622-c6e5-41d2-a77c-1f0192c7b8e6/deploy-status)](https://app.netlify.com/projects/madegglabs/deploys)

# madegglabs.com

[Public website for Mad Egg Labs](https://madegglabs.com) built with the following:

- HTML
- CSS
- JavaScript

Content is managed in [Sanity.io](https://www.sanity.io/@okSpIQONS) and deployed on [Netlify](https://www.netlify.com/) using [Astro](https://astro.build/)’s Static Site Generation (SSG) feature.

Deploy content schema changes by running the following from within the `/studio` directory: `npx sanity@latest deploy`

Deploy the site by merging changes to the `main` branch or by publishing content from within Sanity.

[Pa11y CI](https://github.com/pa11y/pa11y-ci), [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), and [Lychee](https://github.com/lycheeverse/lychee) are set up to run in parallel with deploys (i.e., they’re non-blocking currently).
