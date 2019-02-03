# Background

Beside slides and templates, a [DeckDeckGo] deck could also contains a customized element `background` which could be injected using a dedicated `slot`. This element inherit the length of the all presentation. This option is handy for example in case you would like to have a background which follows your presentation.

### Example

```
<deckgo-deck>
  <deckgo-slide-title>
    <h1 slot="title">My presentation title</h1>
    <p slot="content">
      Hello World 🚀
    </p>
  </deckgo-slide-title>
  
  <div class="circle" slot="background"></div>
</deckgo-deck>
```

where for example the related `circle` css code could be:

```
div.circle {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  bottom: -10vh;
  width: 800vw;
  height: 100vh;

  border-radius: 50%;
  background: yellow;
  opacity: 0.3;
}
```

[DeckDeckGo]: https://deckdeckgo.com