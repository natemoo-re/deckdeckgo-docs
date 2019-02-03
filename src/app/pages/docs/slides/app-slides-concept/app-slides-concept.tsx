import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slides-concept'
})
export class AppSlidesConcept {

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
        <main><h1 id="concept">Concept</h1>
<p><a href="https://deckdeckgo.com">DeckDeckGo</a> is a deck of slides where each slide is based on a template which has its own layout and behaviour. Their content could be edited and structured using <code>slots</code> and other attributes.</p>
<p>The parent deck should be declared using the tag <code>&lt;deckgo-deck/&gt;</code> and each slide should be added as its children.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;The first slide&lt;&#47;h1&gt;<br/>    &lt;p slot=&quot;content&quot;&gt;<br/>      Hello World 🚀<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-title&gt;<br/><br/>  &lt;deckgo-slide-content&gt;<br/>      &lt;h1 slot=&quot;title&quot;&gt;The second slide&lt;&#47;h1&gt;<br/>  &lt;&#47;deckgo-slide-content&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><p>In the previous example, the presentation contains two slides. The first slide use the template <code>deckgo-slide-title</code> and the second slide use the template <code>deckgo-slide-content</code>.</p>
<h1 id="templates">Templates</h1>
<p><a href="https://deckdeckgo.com">DeckDeckGo</a> provide the following templates:</p>
<ul>
<li><a href="#slide-title">Title</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-title-layout.png" width="200px"/>

<ul>
<li><a href="#slide-content">Content</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-content-layout.png" width="200px"/>

<ul>
<li><a href="#slide-split">Split</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-split-layout.png" width="200px"/>

<ul>
<li><a href="#slide-gif">Gif</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-gif-layout.gif" width="200px"/>

<ul>
<li><a href="#slide-chart">Chart</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-pie-layout.png" width="200px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-line-layout.png" width="200px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-bar-layout.png" width="200px"/>

<ul>
<li><a href="#slide-youtube">Youtube</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-youtube-layout.png" width="200px"/>

<ul>
<li><a href="#slide-code">Code</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-code-layout.gif" width="200px"/>

<ul>
<li><a href="#slide-author">Author</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-author-layout.png" width="200px"/>

<ul>
<li><a href="#slide-qr-code">QR Code</a></li>
</ul>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-qrcode-layout.png" width="200px"/>

<p><em>Note: If you would miss or need further templates, don&#39;t hesitate to open an issue and/or submit a PR, it would be my pleasure to add more options</em></p>
</main>
      </ion-content>
    ];
  }
}
