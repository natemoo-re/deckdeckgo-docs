# Concept

[DeckDeckGo] is a deck of slides where each slide is based on a template which has its own layout and behaviour. Their content could be edited and structured using `slots` and other attributes.

The parent deck should be declared using the tag `<deckgo-deck/>` and each slide should be added as its children.

```
<deckgo-deck>
  <deckgo-slide-title>
    <h1 slot="title">The first slide</h1>
    <p slot="content">
      Hello World 🚀
    </p>
  </deckgo-slide-title>
  
  <deckgo-slide-content>
      <h1 slot="title">The second slide</h1>
  </deckgo-slide-content>
</deckgo-deck>
```

In the previous example, the presentation contains two slides. The first slide use the template `deckgo-slide-title` and the second slide use the template `deckgo-slide-content`.

# Templates

[DeckDeckGo] provide the following templates:

* [Title](#slide-title)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-title-layout.png" width="200px"/>

* [Content](#slide-content)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-content-layout.png" width="200px"/>

* [Split](#slide-split)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-split-layout.png" width="200px"/>

* [Gif](#slide-gif)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-gif-layout.gif" width="200px"/>

* [Chart](#slide-chart)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-pie-layout.png" width="200px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-line-layout.png" width="200px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-bar-layout.png" width="200px"/>

* [Youtube](#slide-youtube)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-youtube-layout.png" width="200px"/>

* [Code](#slide-code)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-code-layout.gif" width="200px"/>

* [Author](#slide-author)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-author-layout.png" width="200px"/>

* [QR Code](#slide-qr-code)

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-qrcode-layout.png" width="200px"/>

*Note: If you would miss or need further templates, don't hesitate to open an issue and/or submit a PR, it would be my pleasure to add more options*

[DeckDeckGo]: https://deckdeckgo.com 