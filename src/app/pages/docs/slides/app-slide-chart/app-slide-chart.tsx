import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slide-chart'
})
export class AppSlideChart {

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
        <main><h1 id="slide-chart">Slide: Chart</h1>
<p>The &quot;Chart&quot; slide let you draw easily charts in your presentation.</p>
<h4 id="layout">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-pie-layout.png" width="450px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-line-layout.png" width="450px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-bar-layout.png" width="450px"/>

<h4 id="usage">Usage</h4>
<p>The &quot;Chart&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-chart/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-slide-chart src=&quot;.&#47;assets&#47;csv&#47;data-pie-chart.csv&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My Pie chart&lt;&#47;h1&gt;<br/>&lt;&#47;deckgo-slide-chart&gt;</code>
    </deckgo-highlight-code><h5 id="slots">Slots</h5>
<p>The slot <code>title</code> is optional.</p>
<h5 id="notes">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="chart-components">Chart components</h4>
<p>The slide &quot;Chart&quot; relies on the charts components <code>&lt;deckgo-pie-chart/&gt;</code>, <code>&lt;deckgo-line-chart/&gt;</code> and  <code>&lt;deckgo-bar-chart/&gt;</code> which are described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="installation">Installation</h4>
<p>The <a href="https://deckdeckgo.com">DeckDeckGo</a> charts components are provided in separate extra library. If you don&#39;t use the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to add the <a href="https://deckdeckgo.com">DeckDeckGo</a> chart to your project, you will need to install and integrate it from a CDN or <a href="https://www.npmjs.com/package/deckdeckgo-charts">npm</a> as described in its <a href="https://github.com/deckgo/deckdeckgo-charts#getting-started">installation guide</a>.</p>
<h4 id="attributes">Attributes</h4>
<p>This component offers the following options which could be set using attributes:</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>type</td>
<td>string</td>
<td>pie</td>
<td>The type of the chart, <code>pie</code>, <code>line</code> or <code>bar</code></td>
</tr>
</tbody></table>
<p>Furthermore, this slide component offers the same attributes as the <a href="https://deckdeckgo.com">DeckDeckGo</a> charts Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-charts">documentation</a> for the details.</p>
<h4 id="theming">Theming</h4>
<p>The following theming options will affect this component if set on its host or parent.</p>
<table>
<thead>
<tr>
<th>CSS4 variable</th>
<th>Default</th>
<th>Note</th>
</tr>
</thead>
<tbody><tr>
<td>--background</td>
<td></td>
<td></td>
</tr>
<tr>
<td>--color</td>
<td></td>
<td></td>
</tr>
<tr>
<td>--slide-padding-top</td>
<td>16px</td>
<td>Padding top of the all slide</td>
</tr>
<tr>
<td>--slide-padding-end</td>
<td>32px</td>
<td>Padding right of the all slide</td>
</tr>
<tr>
<td>--slide-padding-bottom</td>
<td>16px</td>
<td>Padding bottom of the all slide</td>
</tr>
<tr>
<td>--slide-padding-start</td>
<td>32px</td>
<td>Padding left of the all slide</td>
</tr>
<tr>
<td>--zIndex</td>
<td>1</td>
<td>The z-index of the slide</td>
</tr>
<tr>
<td>--slide-chart-margin-top</td>
<td>32px</td>
<td>Margin top of the chart inside its container</td>
</tr>
<tr>
<td>--slide-chart-margin-end</td>
<td>96px</td>
<td>Margin right of the chart inside its container</td>
</tr>
<tr>
<td>--slide-chart-margin-bottom</td>
<td>32px</td>
<td>Margin bottom of the chart inside its container</td>
</tr>
<tr>
<td>--slide-chart-margin-start</td>
<td>32px</td>
<td>Margin left of the chart inside its container</td>
</tr>
</tbody></table>
<p>Furthermore, this slide component offers the exact same CSS4 variables as the <a href="https://deckdeckgo.com">DeckDeckGo</a> charts Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-charts">documentation</a> for the details.</p>
</main>
      </ion-content>
    ];
  }
}
