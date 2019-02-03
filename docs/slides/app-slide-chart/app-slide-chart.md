# Slide: Chart

The "Chart" slide let you draw easily charts in your presentation.

#### Layout

<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-pie-layout.png" width="450px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-line-layout.png" width="450px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-bar-layout.png" width="450px"/>

#### Usage

The "Chart" slide's Web Component could be integrated using the tag `<deckgo-slide-chart/>`.

```
<deckgo-slide-chart src="./assets/csv/data-pie-chart.csv">
    <h1 slot="title">My Pie chart</h1>
</deckgo-slide-chart>
```

##### Slots

The slot `title` is optional.

##### Notes

Optionally a slot `notes` could be use to add some notes regarding the particular slide. These will be automatically `displayed` in the [remote control](https://deckdeckgo.app).

If you are using the [DeckDeckGo] starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute `show`.

#### Chart components

The slide "Chart" relies on the charts components `<deckgo-pie-chart/>`, `<deckgo-line-chart/>` and  `<deckgo-bar-chart/>` which are described in the components [documentation](https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md).

#### Installation

The [DeckDeckGo] charts components are provided in separate extra library. If you don't use the [DeckDeckGo] starter kit and wish to add the [DeckDeckGo] chart to your project, you will need to install and integrate it from a CDN or [npm](https://www.npmjs.com/package/deckdeckgo-charts) as described in its [installation guide](https://github.com/deckgo/deckdeckgo-charts#getting-started).

#### Attributes

This component offers the following options which could be set using attributes:

| Attribute                      | Type   | Default   | Description   |
| -------------------------- |-----------------|-----------------|-----------------|
| type | string | pie | The type of the chart, `pie`, `line` or `bar` |

Furthermore, this slide component offers the same attributes as the [DeckDeckGo] charts Web Component, see its [documentation](https://github.com/deckgo/deckdeckgo-charts) for the details.

#### Theming

The following theming options will affect this component if set on its host or parent.

| CSS4 variable                      | Default | Note |
| -------------------------- |-----------------|-----------------|
| --background |  |  |
| --color |  |  |
| --slide-padding-top | 16px | Padding top of the all slide |
| --slide-padding-end | 32px | Padding right of the all slide |
| --slide-padding-bottom | 16px | Padding bottom of the all slide |
| --slide-padding-start | 32px | Padding left of the all slide |
| --zIndex | 1 | The z-index of the slide |
| --slide-chart-margin-top | 32px | Margin top of the chart inside its container |
| --slide-chart-margin-end | 96px | Margin right of the chart inside its container |
| --slide-chart-margin-bottom | 32px | Margin bottom of the chart inside its container |
| --slide-chart-margin-start | 32px | Margin left of the chart inside its container |

Furthermore, this slide component offers the exact same CSS4 variables as the [DeckDeckGo] charts Web Component, see its [documentation](https://github.com/deckgo/deckdeckgo-charts) for the details.

[DeckDeckGo]: https://deckdeckgo.com