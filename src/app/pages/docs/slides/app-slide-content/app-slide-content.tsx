import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slide-content'
})
export class AppConcept {

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
        <main><h1 id="slide-content">Slide: Content</h1>
<p>The &quot;Content&quot; slide is a simple slide which display its title and content aligned to the start of the page.</p>
<p>This slide could be for example use for the every slides of your presentation where you would like to display content related to your talk.</p>
<h4 id="layout">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-content-layout.png" width="450px"/>

<h4 id="usage">Usage</h4>
<p>The &quot;Content&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-content/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;{'\n'}  &lt;deckgo-slide-content&gt;{'\n'}    &lt;h1 slot=&quot;title&quot;&gt;Something related to my topic&lt;&#47;h1&gt;{'\n'}    &lt;p slot=&quot;content&quot;&gt;{'\n'}      Cool beans{'\n'}    &lt;&#47;p&gt;{'\n'}  &lt;&#47;deckgo-slide-title&gt;{'\n'}&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h5 id="slots">Slots</h5>
<p>Both slots <code>title</code> and <code>content</code> are optional. Without providing one of them, the page will remain empty.</p>
<h5 id="notes">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
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
<td>reveal</td>
<td>boolean</td>
<td>false</td>
<td>Hide the slotted elements <code>li</code>, <code>p</code> an <code>img</code> and display them when navigating using <code>slideNext()</code> or <code>slidePrev()</code> (see <a href="/doc/features/navigation.md">documention</a>)</td>
</tr>
<tr>
<td>reveal-show-first</td>
<td>boolean</td>
<td>false</td>
<td>Show the first elements which would be hidden if <code>reveal</code> is set to <code>true</code></td>
</tr>
</tbody></table>
<h5 id="example">Example</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;{'\n'}  &lt;deckgo-slide-content reveal=&quot;true&quot; reveal-show-first=&quot;true&quot;&gt;{'\n'}    &lt;h1 slot=&quot;title&quot;&gt;Something related to my topic&lt;&#47;h1&gt;{'\n'}    &lt;ul slot=&quot;content&quot;&gt;{'\n'}      &lt;li&gt;Cool&lt;&#47;li&gt;{'\n'}      &lt;li&gt;Beans&lt;&#47;li&gt;{'\n'}    &lt;&#47;p&gt;{'\n'}  &lt;&#47;deckgo-slide-content&gt;{'\n'}&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h4 id="theming">Theming</h4>
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
</tbody></table>
</main>
      </ion-content>
    ];
  }
}