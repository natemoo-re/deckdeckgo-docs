# Publishing

[DeckDeckGo] bundles your presentation as a Progressive Web App which could be hosted on any Web Server or hosting solution.

> Not sure what PWAs are? Check out Ionic's [PWA Overview](https://ionicframework.com/pwa) for more info.

## SEO friendly

It is worth to notice that [DeckDeckGo] is, respectively your slides build with are, SEO friendly. 

Therefore you do **not** need to implement a complex server-side rendering (SSR) hosting solution. 

## Before deploy

Before your final build and most important before deploying online your deck, don't forget to edit the information about your presentation in the following files:

1. Edit the meta tags in the `<head/>` of your `src/index.html` file

2. Generate your icons and replace the respective files in the `assets` folder. For that purpose I suggest you to use the real great tool [RealFaviconGenerator](https://realfavicongenerator.net)

3. Update the information in the `manifest.json` file

[DeckDeckGo]: https://deckdeckgo.com