import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-components-chart'
})
export class AppComponentsChart {

  @Element() el: HTMLElement;

  constructor(private menuService: MenuService) {
    this.menuService = MenuService.getInstance();
  }

  async componentWillLoad() {
    this.menuService.enable();
  }

  async componentDidLoad() {
    await DeckdeckgoDocsUtils.reloadCode(this.el);
  }

  render() {
    return [
      <app-navigation></app-navigation>,

      <ion-content padding>
        <main><h1 id="chart">Chart</h1>
<p>The &quot;Chart&quot; component is an extra component which let you draw charts easily. This Web Component could be use with or without <a href="https://deckdeckgo.com">DeckDeckGo</a> respectively could be use as a plotter library in any web projects.</p>
<p>To create and draw the charts, this project is using <a href="https://d3js.org">D3js</a>.</p>
<h2 id="table-of-contents">Table of contents</h2>
<ul>
<li><a href="#getting-started">Getting Started</a><ul>
<li><a href="#using-deckdeckgo-charts-from-a-cdn">Using DeckDeckGo charts from a CDN</a></li>
<li><a href="#install-deckdeckgo-charts-from-npm">Install DeckDeckGo charts from NPM</a></li>
<li><a href="#framework-integration">Framework integration</a></li>
</ul>
</li>
<li><a href="#showcase">Showcase</a><ul>
<li><a href="#pie">Pie</a></li>
<li><a href="#donut">Donut</a></li>
<li><a href="#compare-two-graphs">Compare two graphs</a></li>
<li><a href="#line-and-area">Line and area</a></li>
<li><a href="#compare-two-lines-and-smoothing-effect">Compare two lines and smoothing effect</a></li>
<li><a href="#compare-two-lines-and-display-a-grid">Compare two lines and display a grid</a></li>
<li><a href="#bar">Bar</a></li>
<li><a href="#compare-multiple-bars">Compare multiple bars</a></li>
</ul>
</li>
<li><a href="#usage">Usage</a><ul>
<li><a href="#pie-usage">Pie usage</a><ul>
<li><a href="#csv">CSV</a><ul>
<li><a href="#single-column">Single column</a></li>
<li><a href="#two-columns">Two columns</a></li>
</ul>
</li>
<li><a href="#properties">Properties</a></li>
<li><a href="#styling">Styling</a></li>
<li><a href="#methods">Methods</a></li>
<li><a href="#examples">Examples</a></li>
</ul>
</li>
<li><a href="#line-usage">Line usage</a><ul>
<li><a href="#csv-1">CSV</a><ul>
<li><a href="#two-columns-1">Two columns</a></li>
<li><a href="#three-columns">Three columns</a></li>
</ul>
</li>
<li><a href="#properties-1">Properties</a></li>
<li><a href="#styling-1">Styling</a></li>
<li><a href="#methods-1">Methods</a></li>
<li><a href="#examples-1">Examples</a></li>
</ul>
</li>
<li><a href="#bar-usage">Bar usage</a><ul>
<li><a href="#csv-2">CSV</a><ul>
<li><a href="#multiple-columns">Multiple columns</a></li>
</ul>
</li>
<li><a href="#properties-2">Properties</a></li>
<li><a href="#styling-2">Styling</a></li>
<li><a href="#methods-2">Methods</a></li>
<li><a href="#examples-2">Examples</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="getting-started">Getting Started</h2>
<p>The <a href="https://deckdeckgo.com">DeckDeckGo</a> charts Web Component could be use directly in your project from a CDN, using a simple script include, or could be installed from <a href="https://www.npmjs.com/package/deckdeckgo-charts">npm</a>.</p>
<h3 id="using-deckdeckgo-charts-from-a-cdn">Using DeckDeckGo charts from a CDN</h3>
<p>It&#39;s recommended to use <a href="https://unpkg.com/">unpkg</a> to use the <a href="https://deckdeckgo.com">DeckDeckGo</a> charts from a CDN. To do so, add the following include script in the main HTML file of your project:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;script src=&quot;https:&#47;&#47;unpkg.com&#47;deckdeckgo-charts@latest&#47;dist&#47;deckdeckgo-charts.js&quot;&gt;&lt;&#47;script&gt;</code>
    </deckgo-highlight-code><h3 id="install-deckdeckgo-charts-from-npm">Install DeckDeckGo charts from NPM</h3>
<p>Install <a href="https://deckdeckgo.com">DeckDeckGo</a> charts in your project from <a href="https://www.npmjs.com/package/deckdeckgo-charts">npm</a> using the following command:</p>
<deckgo-highlight-code language="bash">
      <code slot="code">npm install deckdeckgo-charts</code>
    </deckgo-highlight-code><h3 id="framework-integration">Framework integration</h3>
<p>The <a href="https://stenciljs.com/docs/overview">Stencil documentation</a> provide examples of framework integration for <a href="https://stenciljs.com/docs/angular">Angular</a>, <a href="https://stenciljs.com/docs/react">React</a>, <a href="https://stenciljs.com/docs/vue">Vue</a> and <a href="https://stenciljs.com/docs/ember">Ember</a>.</p>
<h2 id="showcase">Showcase</h2>
<p>The following examples are the one provided in the <a href="src/index.html">src/index.html</a> of this component. If you would like to run them locally, proceed as follow:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">git clone https:&#47;&#47;github.com&#47;deckgo&#47;deckdeckgo-charts{'\n'}cd deckdeckgo-charts{'\n'}npm install{'\n'}npm run start</code>
    </deckgo-highlight-code><h3 id="pie">Pie</h3>
<p><deckgo-pie-chart width={500} height={400} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart.csv"></deckgo-pie-chart></p>
<h3 id="donut">Donut</h3>
<p><deckgo-pie-chart width={500} height={400} inner-radius={100} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart-single-column.csv"></deckgo-pie-chart></p>
<h3 id="compare-two-graphs">Compare two graphs</h3>
<p><deckgo-line-chart width={500} height={400} y-axis-domain="extent" date-pattern="dd.MM.yyyy" src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart-to-compare.csv"></deckgo-line-chart></p>
<h3 id="line-and-area">Line and area</h3>
<p><deckgo-line-chart width={500} height={400} smooth={false} ticks={5} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart.csv" date-pattern="dd.MM.yyyy"></deckgo-line-chart></p>
<h3 id="compare-two-lines-and-smoothing-effect">Compare two lines and smoothing effect</h3>
<div>
  <deckgo-line-chart width={500} height={400} area={false} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart-no-dates.csv"
                    style={{'--deckgo-chart-fill-color': 'none', '--deckgo-chart-stroke': 'var(--ion-color-primary)', '--deckgo-chart-compare-fill-color': 'none', '--deckgo-chart-compare-fill-opacity': '1', '--deckgo-chart-compare-stroke': 'var(--ion-color-secondary)', '--deckgo-chart-compare-stroke-width': '3px'}}></deckgo-line-chart>
</div>

<h3 id="compare-two-lines-and-display-a-grid">Compare two lines and display a grid</h3>
<div>
  <deckgo-line-chart width={500} height={400} smooth={false} area={false} grid={true} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-line-chart-no-dates.csv"
                    style={{'--deckgo-chart-fill-color': 'none', '--deckgo-chart-stroke': 'var(--ion-color-primary)', '--deckgo-chart-compare-fill-color': 'none', '--deckgo-chart-compare-fill-opacity': '1', '--deckgo-chart-compare-stroke': 'var(--ion-color-secondary)', '--deckgo-chart-compare-stroke-width': '3px'}}></deckgo-line-chart>
</div>


<h3 id="bar">Bar</h3>
<div>
  <deckgo-bar-chart width={500} height={400} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-bar-chart-to-compare.csv"
                    style={{'--deckgo-chart-fill-color-bar1': 'var(--ion-color-primary)', '--deckgo-chart-fill-color-bar2': 'var(--ion-color-secondary)', '--deckgo-chart-fill-color-bar3': 'var(--ion-color-tertiary)'}}></deckgo-bar-chart>
</div>

<h3 id="compare-multiple-bars">Compare multiple bars</h3>
<div>
  <deckgo-bar-chart width={500} height={400} src="https://raw.githubusercontent.com/fluster/deckdeckgo-charts/master/showcase/data-pie-chart.csv" 
                    style={{'--deckgo-chart-fill-color-bar1': 'var(--ion-color-primary)'}}></deckgo-bar-chart>
</div>

<h2 id="usage">Usage</h2>
<p>The main idea behind the <a href="https://deckdeckgo.com">DeckDeckGo</a> charts is to be able to drop a <strong>csv</strong> file, provide it to the component and let it do the job respectively draw the chart.</p>
<h3 id="pie-usage">Pie usage</h3>
<p>The <code>&lt;deckgo-pie-chart/&gt;</code> Web Component draw a Pie chart.</p>
<h4 id="csv">CSV</h4>
<p>The csv file should contains one or two columns. The values could be provided as <code>number</code> or <code>percent</code>.</p>
<h5 id="single-column">Single column</h5>
<p>If a single column is used, it should contains the values.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">60{'\n'}20{'\n'}20</code>
    </deckgo-highlight-code><h5 id="two-columns">Two columns</h5>
<p>If two columns are provided, the first column should contains the description of the value.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">Wind;53.13%{'\n'}Solar:1.96%{'\n'}Geothermal;7.52%{'\n'}Landfill Gas;15.67%{'\n'}Biomass;14.79%{'\n'}Qualified Hydropower;6.93%</code>
    </deckgo-highlight-code><h4 id="properties">Properties</h4>
<p>The <code>&lt;deckgo-pie-chart/&gt;</code> expose the following properties:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Attribute</th>
<th>Mandatory</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>src</code></td>
<td><code>src</code></td>
<td>X</td>
<td>The path to the source file of the data</td>
<td><code>string</code></td>
<td></td>
</tr>
<tr>
<td><code>width</code></td>
<td><code>width</code></td>
<td>X</td>
<td>The width of the chart</td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>height</code></td>
<td><code>height</code></td>
<td>X</td>
<td>The height of the chart</td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>innerRadius</code></td>
<td><code>inner-radius</code></td>
<td></td>
<td>To plot a <code>donut</code> instead of a <code>pie</code>, provide an inner radius</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>range</code></td>
<td><code>range</code></td>
<td></td>
<td>A list of custom colors which should be to draw the chart</td>
<td><code>string[]</code></td>
<td></td>
</tr>
<tr>
<td><code>separator</code></td>
<td><code>separator</code></td>
<td></td>
<td>The line separator use in your csv file</td>
<td><code>string</code></td>
<td><code>&#39;;&#39;</code></td>
</tr>
</tbody></table>
<h4 id="styling">Styling</h4>
<p>The <code>&lt;deckgo-pie-chart/&gt;</code> could be styled using the following CSS4 variables:</p>
<table>
<thead>
<tr>
<th>CSS4 variable</th>
<th>Default</th>
<th>Note</th>
</tr>
</thead>
<tbody><tr>
<td>--deckgo-chart-text-color</td>
<td></td>
<td>The color of the labels</td>
</tr>
<tr>
<td>--deckgo-chart-text-display</td>
<td></td>
<td>The display property of the labels</td>
</tr>
<tr>
<td>--deckgo-chart-path-stroke</td>
<td></td>
<td>The stroke property of the pie, in case you would like to display a line between the slices</td>
</tr>
</tbody></table>
<h4 id="methods">Methods</h4>
<p>The <code>&lt;deckgo-pie-chart/&gt;</code> expose the following method in case you would like to redraw your chart, for example on resize of the window:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">draw() =&gt; Promise&lt;void&gt;</code>
    </deckgo-highlight-code><h4 id="examples">Examples</h4>
<p>You could find other examples of pie charts in the <a href="src/index.html">src/index.html</a> of the project.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-pie-chart width=&#123;500&#125; height=&#123;400&#125; src=&quot;https:&#47;&#47;raw.githubusercontent.com&#47;fluster&#47;deckdeckgo-charts&#47;master&#47;showcase&#47;data-pie-chart.csv&quot;&gt;&lt;&#47;deckgo-pie-chart&gt;</code>
    </deckgo-highlight-code><h3 id="line-usage">Line usage</h3>
<p>The <code>&lt;deckgo-line-chart/&gt;</code> Web Component draw a line chart.</p>
<h4 id="csv-1">CSV</h4>
<p>The csv file should contains two or three columns.</p>
<p>The first column contains the values for the <code>x</code> axis. These should be provided as <code>date</code> or <code>number</code>.</p>
<p>The second and third columns contains the values for the <code>y</code> axis. These should be provided as <code>number</code>.</p>
<h5 id="two-columns-1">Two columns</h5>
<p>With dates as <code>x</code> axis:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">01.01.2018;5{'\n'}01.03.2018;10{'\n'}01.06.2018;8</code>
    </deckgo-highlight-code><p>With numbers as <code>x</code> axis:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">1;5{'\n'}2;10{'\n'}3;8</code>
    </deckgo-highlight-code><h5 id="three-columns">Three columns</h5>
<p>The third columns is optional, it could be use in case you would like to plot two charts on the same graph. </p>
<p>With dates as <code>x</code> axis:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">01.01.2018;5;4{'\n'}01.03.2018;10;3{'\n'}01.06.2018;8;19</code>
    </deckgo-highlight-code><p>With numbers as <code>x</code> axis:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">1;5;7{'\n'}2;10;13{'\n'}3;8;5</code>
    </deckgo-highlight-code><h4 id="properties-1">Properties</h4>
<p>The <code>&lt;deckgo-line-chart/&gt;</code> expose the following properties:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Attribute</th>
<th>Mandatory</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>src</code></td>
<td><code>src</code></td>
<td>X</td>
<td>The path to the source file of the data</td>
<td><code>string</code></td>
<td></td>
</tr>
<tr>
<td><code>width</code></td>
<td><code>width</code></td>
<td>X</td>
<td>The width of the chart</td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>height</code></td>
<td><code>height</code></td>
<td>X</td>
<td>The height of the chart</td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>marginBottom</code></td>
<td><code>margin-bottom</code></td>
<td></td>
<td>The margin bottom of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>marginLeft</code></td>
<td><code>margin-left</code></td>
<td></td>
<td>The margin left of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>marginRight</code></td>
<td><code>margin-right</code></td>
<td></td>
<td>The margin right of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>marginTop</code></td>
<td><code>margin-top</code></td>
<td></td>
<td>The margin top of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>datePattern</code></td>
<td><code>date-pattern</code></td>
<td></td>
<td>In case the <code>x</code> are made of dates, the pattern to be use to parse the dates. Have a look to <a href="https://date-fns.org/v2.0.0-alpha.26/docs/parse">date-fns</a> for a list of the supported format.</td>
<td><code>string</code></td>
<td><code>&#39;yyyy-MM-dd&#39;</code></td>
</tr>
<tr>
<td><code>yAxisDomain</code></td>
<td><code>y-axis-domain</code></td>
<td></td>
<td>Should the <code>y</code> axis plot the values from <code>0</code> to <code>max</code> or be extended (use <code>extent</code>) to cover all values</td>
<td><code>string</code></td>
<td><code>max</code></td>
</tr>
<tr>
<td><code>smooth</code></td>
<td><code>smooth</code></td>
<td></td>
<td>Draw a smooth line or a line with edges</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>area</code></td>
<td><code>area</code></td>
<td></td>
<td>Draw the area or just a line</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>ticks</code></td>
<td><code>ticks</code></td>
<td></td>
<td>Specify the ticks of the axis</td>
<td><code>number</code></td>
<td>``</td>
</tr>
<tr>
<td><code>grid</code></td>
<td><code>grid</code></td>
<td></td>
<td>Draw a grid behin the graph</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>separator</code></td>
<td><code>separator</code></td>
<td></td>
<td>The line separator use in your csv file</td>
<td><code>string</code></td>
<td><code>&#39;;&#39;</code></td>
</tr>
</tbody></table>
<h4 id="styling-1">Styling</h4>
<p>The <code>&lt;deckgo-line-chart/&gt;</code> could be styled using the following CSS4 variables:</p>
<table>
<thead>
<tr>
<th>CSS4 variable</th>
<th>Default</th>
<th>Note</th>
</tr>
</thead>
<tbody><tr>
<td>--deckgo-chart-axis-color</td>
<td>black</td>
<td>The color of the axis</td>
</tr>
<tr>
<td>--deckgo-chart-text-color</td>
<td></td>
<td>The color of the labels</td>
</tr>
<tr>
<td>--deckgo-chart-text-display</td>
<td></td>
<td>The display property of the labels</td>
</tr>
<tr>
<td>--deckgo-chart-fill-color</td>
<td>#3880ff</td>
<td>The fill color of the area of the main chart</td>
</tr>
<tr>
<td>--deckgo-chart-fill-opacity</td>
<td></td>
<td>The opacity of the area of the main chart</td>
</tr>
<tr>
<td>--deckgo-chart-stroke</td>
<td></td>
<td>The stroke of the area of the main chart</td>
</tr>
<tr>
<td>--deckgo-chart-stroke-width</td>
<td></td>
<td>The stroke width of the area of the main chart</td>
</tr>
<tr>
<td>--deckgo-chart-compare-fill-color</td>
<td>#0cd1e8</td>
<td>The fill color of the area of the chart to compare</td>
</tr>
<tr>
<td>--deckgo-chart-compare-fill-opacity</td>
<td>0.7</td>
<td>The opacity of the area of the chart to compare</td>
</tr>
<tr>
<td>--deckgo-chart-compare-stroke</td>
<td></td>
<td>The stroke of the area of the chart to compare</td>
</tr>
<tr>
<td>--deckgo-chart-compare-stroke-width</td>
<td></td>
<td>The stroke width of the area of the chart to compare</td>
</tr>
<tr>
<td>--deckgo-chart-grid-stroke</td>
<td>#989aa2</td>
<td>The stroke of the grid</td>
</tr>
<tr>
<td>--deckgo-chart-grid-stroke-opacity</td>
<td>0.7</td>
<td>The stroke opacity of the grid</td>
</tr>
</tbody></table>
<h4 id="methods-1">Methods</h4>
<p>The <code>&lt;deckgo-line-chart/&gt;</code> expose the following method in case you would like to redraw your chart, for example on resize of the window:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">draw() =&gt; Promise&lt;void&gt;</code>
    </deckgo-highlight-code><h4 id="examples-1">Examples</h4>
<p>You could find other examples of line charts in the <a href="src/index.html">src/index.html</a> of the project.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-line-chart width=&#123;500&#125; height=&#123;400&#125; date-pattern=&quot;dd.MM.yyyy&quot; src=&quot;https:&#47;&#47;raw.githubusercontent.com&#47;fluster&#47;deckdeckgo-charts&#47;master&#47;showcase&#47;data-line-chart.csv&quot;&gt;&lt;&#47;deckgo-line-chart&gt;</code>
    </deckgo-highlight-code><h3 id="bar-usage">Bar usage</h3>
<p>The <code>&lt;deckgo-bar-chart/&gt;</code> Web Component draw a Bar chart.</p>
<h4 id="csv-2">CSV</h4>
<p>The csv file should contains at lest two columns. The values could be provided as <code>number</code> or <code>percent</code>.</p>
<h5 id="multiple-columns">Multiple columns</h5>
<p>The first column should contains the labels or groups used for the X axis. The other columns are the values use for the Y axis.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">Group A;5;0;10{'\n'}Group B;10;6;12{'\n'}Group C;8;14;8{'\n'}Group D;14;8;16{'\n'}Group E;18;4;5</code>
    </deckgo-highlight-code><h4 id="properties-2">Properties</h4>
<p>The <code>&lt;deckgo-bar-chart/&gt;</code> expose the following properties:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Attribute</th>
<th>Mandatory</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>src</code></td>
<td><code>src</code></td>
<td>X</td>
<td>The path to the source file of the data</td>
<td><code>string</code></td>
<td></td>
</tr>
<tr>
<td><code>width</code></td>
<td><code>width</code></td>
<td>X</td>
<td>The width of the chart</td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>height</code></td>
<td><code>height</code></td>
<td>X</td>
<td>The height of the chart</td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>marginBottom</code></td>
<td><code>margin-bottom</code></td>
<td></td>
<td>The margin bottom of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>marginLeft</code></td>
<td><code>margin-left</code></td>
<td></td>
<td>The margin left of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>marginRight</code></td>
<td><code>margin-right</code></td>
<td></td>
<td>The margin right of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>marginTop</code></td>
<td><code>margin-top</code></td>
<td></td>
<td>The margin top of the chart in pixel</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>separator</code></td>
<td><code>separator</code></td>
<td></td>
<td>The line separator use in your csv file</td>
<td><code>string</code></td>
<td><code>&#39;;&#39;</code></td>
</tr>
</tbody></table>
<h4 id="styling-2">Styling</h4>
<p>The <code>&lt;deckgo-bar-chart/&gt;</code> could be styled using the following CSS4 variables:</p>
<table>
<thead>
<tr>
<th>CSS4 variable</th>
<th>Default</th>
<th>Note</th>
</tr>
</thead>
<tbody><tr>
<td>--deckgo-chart-axis-color</td>
<td>black</td>
<td>The color of the axis</td>
</tr>
</tbody></table>
<p>Furthermore, as the Bar chart could draw dynamically multiple bars, it will generate dynamically the following CSS4 variable for each series of data where <code>X</code> is an index between <code>1</code> and the number of bars.</p>
<table>
<thead>
<tr>
<th>CSS4 variable</th>
<th>Default</th>
<th>Note</th>
</tr>
</thead>
<tbody><tr>
<td>--deckgo-chart-text-color</td>
<td></td>
<td>The color of the labels</td>
</tr>
<tr>
<td>--deckgo-chart-text-display</td>
<td></td>
<td>The display property of the labels</td>
</tr>
<tr>
<td>--deckgo-chart-fill-color-barX</td>
<td></td>
<td>The fill color of the bar chart identified with index <code>X</code></td>
</tr>
<tr>
<td>--deckgo-chart-fill-opacity-baxX</td>
<td></td>
<td>The opacity of the bar chart identified with index <code>X</code></td>
</tr>
<tr>
<td>--deckgo-chart-stroke-barX</td>
<td></td>
<td>The stroke of the bar chart identified with index <code>X</code></td>
</tr>
<tr>
<td>--deckgo-chart-stroke-width-barX</td>
<td></td>
<td>The stroke width of the chart identified with index <code>X</code></td>
</tr>
</tbody></table>
<h4 id="methods-2">Methods</h4>
<p>The <code>&lt;deckgo-bar-chart/&gt;</code> expose the following method in case you would like to redraw your chart, for example on resize of the window:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">draw() =&gt; Promise&lt;void&gt;</code>
    </deckgo-highlight-code><h4 id="examples-2">Examples</h4>
<p>You could find other examples of bar charts in the <a href="src/index.html">src/index.html</a> of the project.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-bar-chart width=&#123;500&#125; {'\n'}                  height=&#123;400&#125;{'\n'}                   src=&quot;https:&#47;&#47;raw.githubusercontent.com&#47;fluster&#47;deckdeckgo-charts&#47;master&#47;showcase&#47;data-pie-chart.csv&quot;{'\n'}                   style=&quot;--deckgo-chart-fill-color-bar1: #3880ff;&quot;&gt;{'\n'}&lt;&#47;deckgo-bar-chart&gt;</code>
    </deckgo-highlight-code></main>
      </ion-content>
    ];
  }
}