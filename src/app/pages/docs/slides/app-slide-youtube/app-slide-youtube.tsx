import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slide-youtube',
  styleUrl: 'app-slides-youtube.scss'
})
export class AppSlideYoutube {

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
        <main><h1 id="slide-youtube">Slide: Youtube</h1>
<p>The &quot;Youtube&quot; slide let you add easily a <a href="https://youtube.com">Youtube</a> video to your presentation.</p>
<h4 id="layout">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-youtube-layout.png" width="450px"/>

<h4 id="usage">Usage</h4>
<p>The &quot;Youtube&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-youtube/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-slide-youtube src=&quot;https:&#47;&#47;www.youtube.com&#47;watch?v=oUOjJIfPIjw&quot;&gt;{'\n'}  &lt;h1 slot=&quot;title&quot;&gt;A 16&#47;9 video&lt;&#47;h1&gt;{'\n'}&lt;&#47;deckgo-slide-youtube&gt;</code>
    </deckgo-highlight-code><h5 id="slots">Slots</h5>
<p>The slot <code>title</code> is optional.</p>
<h5 id="notes">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h5 id="youtube-component">Youtube component</h5>
<p>The slide &quot;Youtube&quot; relies on the component <code>&lt;deckgo-youtube/&gt;</code> which is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
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
<td>The source url, the Youtube url, of the video. Not embeddable url will be automatically converted to embeddable url supported by Youtube.</td>
</tr>
<tr>
<td>width</td>
<td>number</td>
<td>Per default the video width will be calculated according the content size available.</td>
<td>Using this option you would be able to define your own width.</td>
</tr>
<tr>
<td>height</td>
<td>number</td>
<td>Per default the video height will be calculated according the content size available.</td>
<td>Using this option you would be able to define your own height.</td>
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
<h4 id="methods">Methods</h4>
<p>The slide &quot;Youtube&quot; offers extra methods to play and pause the Youtube video clip. These methods are notably used by the [DeckDecGo]&#39;s remote control.</p>
<h5 id="play-the-video">Play the video</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">const slide = deck.getElementsByTagName(&#039;deckgo-slide-youtube&#039;);{'\n'}await slide.play();</code>
    </deckgo-highlight-code><h5 id="pause-the-video">Pause the video</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">const slide = deck.getElementsByTagName(&#039;deckgo-slide-youtube&#039;);{'\n'}await slide.pause();</code>
    </deckgo-highlight-code></main>
      </ion-content>
    ];
  }
}
