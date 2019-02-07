# Chart

The "Chart" component is an extra component which let you draw charts easily. This Web Component could be use with or without [DeckDeckGo] respectively could be use as a plotter library in any web projects.

To create and draw the charts, this project is using [D3js](https://d3js.org).

## Table of contents

- [Showcase](#showcase)
	- [Pie](#pie)
	- [Donut](#donut)
	- [Compare two graphs](#compare-two-graphs)
	- [Line and area](#line-and-area)
	- [Compare two lines and smoothing effect](#compare-two-lines-and-smoothing-effect)
	- [Compare two lines and display a grid](#compare-two-lines-and-display-a-grid)
	- [Bar](#bar)
	- [Compare multiple bars](#compare-multiple-bars)
- [Getting Started](#getting-started)
	- [Using DeckDeckGo charts from a CDN](#using-deckdeckgo-charts-from-a-cdn)
	- [Install DeckDeckGo charts from NPM](#install-deckdeckgo-charts-from-npm)
	- [Framework integration](#framework-integration)
- [Usage](#usage)
	- [Pie usage](#pie-usage)
		- [CSV](#csv)
			- [Single column](#single-column)
			- [Two columns](#two-columns)
		- [Properties](#properties)
		- [Styling](#styling)
		- [Methods](#methods)
		- [Examples](#examples)
	- [Line usage](#line-usage)
		- [CSV](#csv-1)
			- [Two columns](#two-columns-1)
			- [Three columns](#three-columns)
		- [Properties](#properties-1)
		- [Styling](#styling-1)
		- [Methods](#methods-1)
		- [Examples](#examples-1)
	- [Bar usage](#bar-usage)
		- [CSV](#csv-2)
			- [Multiple columns](#multiple-columns)
		- [Properties](#properties-2)
		- [Styling](#styling-2)
		- [Methods](#methods-2)
		- [Examples](#examples-2)

## Showcase

The following examples are the one provided in the [src/index.html](https://github.com/deckgo/deckdeckgo-charts/tree/master/src/index.html) of this component. If you would like to run them locally, proceed as follow:

```
git clone https://github.com/deckgo/deckdeckgo-charts
cd deckdeckgo-charts
npm install
npm run start
```

### Pie

<deckgo-pie-chart width={500} height={400} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart.csv"></deckgo-pie-chart>

### Donut

<deckgo-pie-chart width={500} height={400} inner-radius={100} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart-single-column.csv"></deckgo-pie-chart>

### Compare two graphs

<deckgo-line-chart width={500} height={400} y-axis-domain="extent" date-pattern="dd.MM.yyyy" src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart-to-compare.csv"></deckgo-line-chart>

### Line and area

<deckgo-line-chart width={500} height={400} smooth={false} ticks={5} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart.csv" date-pattern="dd.MM.yyyy"></deckgo-line-chart>

### Compare two lines and smoothing effect

<div>
  <deckgo-line-chart width={500} height={400} area={false} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart-no-dates.csv"
                    style={{'--deckgo-chart-fill-color': 'none', '--deckgo-chart-stroke': 'var(--ion-color-primary)', '--deckgo-chart-compare-fill-color': 'none', '--deckgo-chart-compare-fill-opacity': '1', '--deckgo-chart-compare-stroke': 'var(--ion-color-secondary)', '--deckgo-chart-compare-stroke-width': '3px'}}></deckgo-line-chart>
</div>

### Compare two lines and display a grid

<div>
  <deckgo-line-chart width={500} height={400} smooth={false} area={false} grid={true} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart-no-dates.csv"
                    style={{'--deckgo-chart-fill-color': 'none', '--deckgo-chart-stroke': 'var(--ion-color-primary)', '--deckgo-chart-compare-fill-color': 'none', '--deckgo-chart-compare-fill-opacity': '1', '--deckgo-chart-compare-stroke': 'var(--ion-color-secondary)', '--deckgo-chart-compare-stroke-width': '3px'}}></deckgo-line-chart>
</div>


### Bar

<div>
  <deckgo-bar-chart width={500} height={400} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-bar-chart-to-compare.csv"
                    style={{'--deckgo-chart-fill-color-bar1': 'var(--ion-color-primary)', '--deckgo-chart-fill-color-bar2': 'var(--ion-color-secondary)', '--deckgo-chart-fill-color-bar3': 'var(--ion-color-tertiary)'}}></deckgo-bar-chart>
</div>
                    
### Compare multiple bars

<div>
  <deckgo-bar-chart width={500} height={400} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart.csv" 
                    style={{'--deckgo-chart-fill-color-bar1': 'var(--ion-color-primary)'}}></deckgo-bar-chart>
</div>

## Getting Started

The [DeckDeckGo] charts Web Component could be use directly in your project from a CDN, using a simple script include, or could be installed from [npm](https://www.npmjs.com/package/deckdeckgo-charts).

### Using DeckDeckGo charts from a CDN

It's recommended to use [unpkg](https://unpkg.com/) to use the [DeckDeckGo] charts from a CDN. To do so, add the following include script in the main HTML file of your project:

```
<script src="https://unpkg.com/deckdeckgo-charts@latest/dist/deckdeckgo-charts.js"></script>
```
### Install DeckDeckGo charts from NPM

Install [DeckDeckGo] charts in your project from [npm](https://www.npmjs.com/package/deckdeckgo-charts) using the following command:

```bash
npm install deckdeckgo-charts
```

### Framework integration

The [Stencil documentation](https://stenciljs.com/docs/overview) provide examples of framework integration for [Angular](https://stenciljs.com/docs/angular), [React](https://stenciljs.com/docs/react), [Vue](https://stenciljs.com/docs/vue) and [Ember](https://stenciljs.com/docs/ember).

## Usage

The main idea behind the [DeckDeckGo] charts is to be able to drop a **csv** file, provide it to the component and let it do the job respectively draw the chart.

### Pie usage

The `<deckgo-pie-chart/>` Web Component draw a Pie chart.

#### CSV

The csv file should contains one or two columns. The values could be provided as `number` or `percent`.

##### Single column

If a single column is used, it should contains the values.

```
60
20
20
```

##### Two columns

If two columns are provided, the first column should contains the description of the value.

```
Wind;53.13%
Solar:1.96%
Geothermal;7.52%
Landfill Gas;15.67%
Biomass;14.79%
Qualified Hydropower;6.93%
```

#### Properties

The `<deckgo-pie-chart/>` expose the following properties:

| Property      | Attribute      | Mandatory | Description | Type                    | Default     |
| ------------- | -------------- | --------- |----------- | ----------------------- | ----------- |
| `src`         | `src`          | X | The path to the source file of the data | `string`                | |
| `width`       | `width`        | X | The width of the chart            | `number`                | |
| `height`      | `height`       | X | The height of the chart            | `number`                | |
| `innerRadius` | `inner-radius` |  | To plot a `donut` instead of a `pie`, provide an inner radius            | `number`                | `0`         |
| `range`       | `range`        |  | A list of custom colors which should be to draw the chart | `string[]` | |
| `separator`   | `separator`    |  | The line separator use in your csv file           | `string`                | `';'`       |

#### Styling

The `<deckgo-pie-chart/>` could be styled using the following CSS4 variables:

| CSS4 variable                      | Default | Note |
| -------------------------- |-----------------|-----------------|
| --deckgo-chart-text-color |  | The color of the labels |
| --deckgo-chart-text-display |  | The display property of the labels |
| --deckgo-chart-path-stroke | | The stroke property of the pie, in case you would like to display a line between the slices |

#### Methods

The `<deckgo-pie-chart/>` expose the following method in case you would like to redraw your chart, for example on resize of the window:

```
draw() => Promise<void>
```

#### Examples

You could find other examples of pie charts in the [src/index.html](https://github.com/deckgo/deckdeckgo-charts/tree/master/src/index.html) of the project.

```
<deckgo-pie-chart width={500} height={400} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart.csv"></deckgo-pie-chart>
```

### Line usage

The `<deckgo-line-chart/>` Web Component draw a line chart.

#### CSV

The csv file should contains two or three columns.

The first column contains the values for the `x` axis. These should be provided as `date` or `number`.

The second and third columns contains the values for the `y` axis. These should be provided as `number`.

##### Two columns

With dates as `x` axis:

```
01.01.2018;5
01.03.2018;10
01.06.2018;8
```

With numbers as `x` axis:

```
1;5
2;10
3;8
```

##### Three columns

The third columns is optional, it could be use in case you would like to plot two charts on the same graph. 

With dates as `x` axis:

```
01.01.2018;5;4
01.03.2018;10;3
01.06.2018;8;19
```

With numbers as `x` axis:

```
1;5;7
2;10;13
3;8;5
```

#### Properties

The `<deckgo-line-chart/>` expose the following properties:

| Property       | Attribute       | Mandatory | Description | Type      | Default                             |
| -------------- | --------------- | --------- | ----------- | --------- | ----------------------------------- |
| `src`         | `src`          | X | The path to the source file of the data | `string`                | |
| `width`       | `width`        | X | The width of the chart            | `number`                | |
| `height`      | `height`       | X | The height of the chart            | `number`                | |
| `marginBottom` | `margin-bottom` |           | The margin bottom of the chart in pixel          | `number`  | `32`                                |
| `marginLeft`   | `margin-left`   |           | The margin left of the chart in pixel           | `number`  | `32`                                |
| `marginRight`  | `margin-right`  |           | The margin right of the chart in pixel           | `number`  | `32`                                |
| `marginTop`    | `margin-top`    |           | The margin top of the chart in pixel           | `number`  | `32`                                |
| `datePattern`  | `date-pattern`  |           | In case the `x` are made of dates, the pattern to be use to parse the dates. Have a look to [date-fns](https://date-fns.org/v2.0.0-alpha.26/docs/parse) for a list of the supported format.           | `string`  | `'yyyy-MM-dd'`                      |
| `yAxisDomain`  | `y-axis-domain` |           | Should the `y` axis plot the values from `0` to `max` or be extended (use `extent`) to cover all values           | `string`  | `max` |
| `smooth`       | `smooth`        |           | Draw a smooth line or a line with edges          | `boolean` | `true`                              |
| `area`         | `area`          |           | Draw the area or just a line           | `boolean` | `true`                              |
| `ticks`        | `ticks`         |           | Specify the ticks of the axis           | `number`  | ``                         |
| `grid`         | `grid`          |           | Draw a grid behin the graph           | `boolean` | `false`                             |
| `separator`   | `separator`    |  | The line separator use in your csv file           | `string`                | `';'`       |

#### Styling

The `<deckgo-line-chart/>` could be styled using the following CSS4 variables:

| CSS4 variable                      | Default | Note |
| -------------------------- |-----------------|-----------------|
| --deckgo-chart-axis-color | black | The color of the axis |
| --deckgo-chart-text-color |  | The color of the labels |
| --deckgo-chart-text-display |  | The display property of the labels |
| --deckgo-chart-fill-color | #3880ff | The fill color of the area of the main chart |
| --deckgo-chart-fill-opacity | | The opacity of the area of the main chart |
| --deckgo-chart-stroke | | The stroke of the area of the main chart |
| --deckgo-chart-stroke-width | | The stroke width of the area of the main chart |
| --deckgo-chart-compare-fill-color | #0cd1e8 | The fill color of the area of the chart to compare |
| --deckgo-chart-compare-fill-opacity | 0.7 | The opacity of the area of the chart to compare |
| --deckgo-chart-compare-stroke | | The stroke of the area of the chart to compare |
| --deckgo-chart-compare-stroke-width | | The stroke width of the area of the chart to compare |
| --deckgo-chart-grid-stroke | #989aa2 | The stroke of the grid |
| --deckgo-chart-grid-stroke-opacity | 0.7 | The stroke opacity of the grid |

#### Methods

The `<deckgo-line-chart/>` expose the following method in case you would like to redraw your chart, for example on resize of the window:

```
draw() => Promise<void>
```

#### Examples

You could find other examples of line charts in the [src/index.html](https://github.com/deckgo/deckdeckgo-charts/tree/master/src/index.html) of the project.

```
<deckgo-line-chart width={500} height={400} date-pattern="dd.MM.yyyy" src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart.csv"></deckgo-line-chart>
```

### Bar usage

The `<deckgo-bar-chart/>` Web Component draw a Bar chart.

#### CSV

The csv file should contains at lest two columns. The values could be provided as `number` or `percent`.

##### Multiple columns

The first column should contains the labels or groups used for the X axis. The other columns are the values use for the Y axis.

```
Group A;5;0;10
Group B;10;6;12
Group C;8;14;8
Group D;14;8;16
Group E;18;4;5
```

#### Properties

The `<deckgo-bar-chart/>` expose the following properties:

| Property       | Attribute       | Mandatory | Description | Type      | Default                             |
| -------------- | --------------- | --------- | ----------- | --------- | ----------------------------------- |
| `src`         | `src`          | X | The path to the source file of the data | `string`                | |
| `width`       | `width`        | X | The width of the chart            | `number`                | |
| `height`      | `height`       | X | The height of the chart            | `number`                | |
| `marginBottom` | `margin-bottom` |           | The margin bottom of the chart in pixel          | `number`  | `32`                                |
| `marginLeft`   | `margin-left`   |           | The margin left of the chart in pixel           | `number`  | `32`                                |
| `marginRight`  | `margin-right`  |           | The margin right of the chart in pixel           | `number`  | `32`                                |
| `marginTop`    | `margin-top`    |           | The margin top of the chart in pixel           | `number`  | `32`                                |
| `separator`   | `separator`    |  | The line separator use in your csv file           | `string`                | `';'`       |

#### Styling

The `<deckgo-bar-chart/>` could be styled using the following CSS4 variables:

| CSS4 variable                      | Default | Note |
| -------------------------- |-----------------|-----------------|
| --deckgo-chart-axis-color | black | The color of the axis |

Furthermore, as the Bar chart could draw dynamically multiple bars, it will generate dynamically the following CSS4 variable for each series of data where `X` is an index between `1` and the number of bars.

| CSS4 variable                      | Default | Note |
| -------------------------- |-----------------|-----------------|
| --deckgo-chart-text-color |  | The color of the labels |
| --deckgo-chart-text-display |  | The display property of the labels |
| --deckgo-chart-fill-color-barX | | The fill color of the bar chart identified with index `X` |
| --deckgo-chart-fill-opacity-baxX | | The opacity of the bar chart identified with index `X` |
| --deckgo-chart-stroke-barX | | The stroke of the bar chart identified with index `X` |
| --deckgo-chart-stroke-width-barX | | The stroke width of the chart identified with index `X` |

#### Methods

The `<deckgo-bar-chart/>` expose the following method in case you would like to redraw your chart, for example on resize of the window:

```
draw() => Promise<void>
```

#### Examples

You could find other examples of bar charts in the [src/index.html](https://github.com/deckgo/deckdeckgo-charts/tree/master/src/index.html) of the project.

```
<deckgo-bar-chart width={500} 
                  height={400}
                   src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart.csv"
                   style="--deckgo-chart-fill-color-bar1: #3880ff;">
</deckgo-bar-chart>
```

[DeckDeckGo]: https://deckdeckgo.com