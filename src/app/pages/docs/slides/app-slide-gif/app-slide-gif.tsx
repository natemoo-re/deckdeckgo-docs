import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slide-gif'
})
export class AppSlideGif {

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
        <main><h1 id="slide-gif">Slide: Gif</h1>
<p>The &quot;Gif&quot; slide let you add easily a gif, like those provided by <a href="https://giphy.com">Giphy</a>, to your presentation.</p>
<h4 id="layout">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-gif-layout.gif" width="450px"/>

<h4 id="for-images-too">For images too</h4>
<p>The slide Gif is useful for Gifs but could be use for any images too, in case you would like for example to display an image fullscreen.</p>
<h4 id="usage">Usage</h4>
<p>The &quot;Gif&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-gif/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-slide-gif src=&quot;https:&#47;&#47;media.giphy.com&#47;media&#47;xUA7baWfTjfHGLZc3e&#47;giphy.gif&quot; alt=&quot;My gif&quot; fullscreen=&quot;true&quot;&gt;{'\n'}  &lt;h1 slot=&quot;title&quot;&gt;My title&lt;&#47;h1&gt;{'\n'}  &lt;h1 slot=&quot;header&quot;&gt;Hey&lt;&#47;h1&gt;{'\n'}  &lt;h2 slot=&quot;footer&quot;&gt;It&#039;s a cool gif&lt;&#47;h2&gt;{'\n'}&lt;&#47;deckgo-slide-gif&gt;</code>
    </deckgo-highlight-code><h4 id="slots">Slots</h4>
<p>The slots <code>title</code>, <code>header</code> and <code>footer</code> are both optional. <code>header</code> and <code>footer</code> would be displayed over the gif.</p>
<h5 id="notes">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="gif-component">Gif component</h4>
<p>The slide &quot;Gif&quot; relies on the component <code>&lt;deckgo-gif/&gt;</code> which is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
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
<td>src</td>
<td>string</td>
<td></td>
<td>The source url, the src, of the Gif. Could be an embeddable external url or a local one.</td>
</tr>
<tr>
<td>alt</td>
<td>string</td>
<td></td>
<td>And alt information could be provided for accessibility reason.</td>
</tr>
<tr>
<td>fullscreen</td>
<td>number</td>
<td>false</td>
<td>If set to true, the gif width and height will be related to the slide width and height respectively will be fullscreen.</td>
</tr>
</tbody></table>
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
</tbody></table>
</main>
      </ion-content>
    ];
  }
}
