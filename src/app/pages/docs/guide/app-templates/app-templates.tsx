import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-templates'
})
export class AppTemplates {

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
        <main><h2 id="table-of-contents">Table of contents</h2>
<ul>
<li><a href="#slides">Slides</a><ul>
<li><a href="#slide-title">Slide: Title</a></li>
<li><a href="#slide-content">Slide: Content</a></li>
<li><a href="#slide-split">Slide: Split</a></li>
<li><a href="#slide-gif">Slide: Gif</a></li>
<li><a href="#slide-chart">Slide: Chart</a></li>
<li><a href="#slide-youtube">Slide: Youtube</a></li>
<li><a href="#slide-code">Slide: Code</a></li>
<li><a href="#slide-author">Slide: Author</a></li>
<li><a href="#slide-qr-code">Slide: QR Code</a></li>
</ul>
</li>
<li><a href="#background">Background</a></li>
</ul>
<h2 id="slides">Slides</h2>
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
<h3 id="slide-title">Slide: Title</h3>
<p>The &quot;Title&quot; slide is a simple slide which display its title and content center in the middle of the page.</p>
<p>This slide could be for example use for the very first and last slide of your presentation.</p>
<h4 id="layout">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-title-layout.png" width="450px"/>

<h4 id="usage">Usage</h4>
<p>The &quot;Title&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-title/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My presentation title&lt;&#47;h1&gt;<br/>    &lt;p slot=&quot;content&quot;&gt;<br/>      Hello World 🚀<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-title&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h5 id="slots">Slots</h5>
<p>Both slots <code>title</code> and <code>content</code> are optional. Without providing one of them, the page will remain empty.</p>
<h5 id="notes">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My presentation title&lt;&#47;h1&gt;<br/>    &lt;div slot=&quot;notes&quot;&gt;A note regarding this particular slide&lt;&#47;div&gt;<br/><br/>And another note on a new line about it too.<br/>  &lt;&#47;deckgo-slide-title&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My presentation title&lt;&#47;h1&gt;<br/>    &lt;div slot=&quot;notes&quot; show&gt;A note displayed in the presentation within a modal accessible for anyone&lt;&#47;div&gt;<br/>  &lt;&#47;deckgo-slide-title&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h4 id="attributes">Attributes</h4>
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
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title reveal=&quot;true&quot; reveal-show-first=&quot;true&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My presentation title&lt;&#47;h1&gt;<br/>    &lt;ul slot=&quot;content&quot;&gt;<br/>      &lt;li&gt;Hello&lt;&#47;li&gt;<br/>      &lt;li&gt;World&lt;&#47;li&gt;<br/>      &lt;li&gt;🚀&lt;&#47;li&gt;<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-title&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
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
<h3 id="slide-content">Slide: Content</h3>
<p>The &quot;Content&quot; slide is a simple slide which display its title and content aligned to the start of the page.</p>
<p>This slide could be for example use for the every slides of your presentation where you would like to display content related to your talk.</p>
<h4 id="layout-1">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-content-layout.png" width="450px"/>

<h4 id="usage-1">Usage</h4>
<p>The &quot;Content&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-content/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-content&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;Something related to my topic&lt;&#47;h1&gt;<br/>    &lt;p slot=&quot;content&quot;&gt;<br/>      Cool beans<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-title&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h5 id="slots-1">Slots</h5>
<p>Both slots <code>title</code> and <code>content</code> are optional. Without providing one of them, the page will remain empty.</p>
<h5 id="notes-1">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="attributes-1">Attributes</h4>
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
<h5 id="example-1">Example</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-content reveal=&quot;true&quot; reveal-show-first=&quot;true&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;Something related to my topic&lt;&#47;h1&gt;<br/>    &lt;ul slot=&quot;content&quot;&gt;<br/>      &lt;li&gt;Cool&lt;&#47;li&gt;<br/>      &lt;li&gt;Beans&lt;&#47;li&gt;<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-content&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h4 id="theming-1">Theming</h4>
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
<h3 id="slide-split">Slide: Split</h3>
<p>The &quot;Split&quot; slide is a simple slide which display two panes on the page.</p>
<h4 id="layout-2">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-split-layout.png" width="450px"/>

<h4 id="usage-2">Usage</h4>
<p>The &quot;Split&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-split/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-split&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;Two columns subject&lt;&#47;h1&gt;<br/>    &lt;p slot=&quot;start&quot;&gt;<br/>      The content you want to display on the left side of the page<br/>    &lt;&#47;p&gt;<br/>    &lt;p slot=&quot;end&quot;&gt;<br/>      The content you want to display on the right side of the page<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-split&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h5 id="slots-2">Slots</h5>
<p>Both slots <code>title</code>, <code>start</code> and <code>end</code> are optional. Without providing one of them, the page will remain empty.</p>
<p>The <code>start</code> slot is the content of the left pane respectively the slot <code>end</code> is the content of the right pane.</p>
<p>Note: The slot <code>title</code> is per default hidden even if you provide it. See attributes below if you wish to display it. </p>
<h5 id="notes-2">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="attributes-2">Attributes</h4>
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
<h4 id="theming-2">Theming</h4>
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
<td>--slide-split-background-start</td>
<td></td>
<td>Left split pane background</td>
</tr>
<tr>
<td>--slide-split-color-start</td>
<td></td>
<td>Left split pane color</td>
</tr>
<tr>
<td>--slide-split-background-end</td>
<td></td>
<td>Right split pane background</td>
</tr>
<tr>
<td>--slide-split-color-end</td>
<td></td>
<td>Right split pane color</td>
</tr>
<tr>
<td>--slide-split-padding-top</td>
<td>16px</td>
<td>Padding top of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-padding-end</td>
<td>32px</td>
<td>Padding right of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-padding-bottom</td>
<td>16px</td>
<td>Padding bottom of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-padding-start</td>
<td>32px</td>
<td>Padding left of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-title-padding-top</td>
<td>16px</td>
<td>Padding top of the title of the</td>
</tr>
<tr>
<td>--slide-split-title-padding-end</td>
<td>32px</td>
<td>Padding right of the title of the</td>
</tr>
<tr>
<td>--slide-split-title-padding-bottom</td>
<td>16px</td>
<td>Padding bottom of the title of the</td>
</tr>
<tr>
<td>--slide-split-title-padding-start</td>
<td>32px</td>
<td>Padding left of the title of the</td>
</tr>
<tr>
<td>--slide-padding-start</td>
<td>32px</td>
<td>Modify slotted ul and ol padding-inline-start</td>
</tr>
<tr>
<td>--slide-split-align</td>
<td>inherit</td>
<td>Modify for example to center if you want to align the content in the middle</td>
</tr>
<tr>
<td>--slide-split-text-align</td>
<td>inherit</td>
<td>Modify for example to center if you want to align the text in the middle</td>
</tr>
<tr>
<td>--slide-split-title-display</td>
<td>none</td>
<td>The <code>slot</code> title is per default hidden even if you provide it. If you wish to displays it, modify this attribute</td>
</tr>
<tr>
<td>--zIndex</td>
<td>1</td>
<td>The z-index of the slide</td>
</tr>
</tbody></table>
<h3 id="slide-gif">Slide: Gif</h3>
<p>The &quot;Gif&quot; slide let you add easily a gif, like those provided by <a href="https://giphy.com">Giphy</a>, to your presentation.</p>
<h4 id="layout-3">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-gif-layout.gif" width="450px"/>

<h4 id="for-images-too">For images too</h4>
<p>The slide Gif is useful for Gifs but could be use for any images too, in case you would like for example to display an image fullscreen.</p>
<h4 id="usage-3">Usage</h4>
<p>The &quot;Gif&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-gif/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-slide-gif src=&quot;https:&#47;&#47;media.giphy.com&#47;media&#47;xUA7baWfTjfHGLZc3e&#47;giphy.gif&quot; alt=&quot;My gif&quot; fullscreen=&quot;true&quot;&gt;<br/>  &lt;h1 slot=&quot;title&quot;&gt;My title&lt;&#47;h1&gt;<br/>  &lt;h1 slot=&quot;header&quot;&gt;Hey&lt;&#47;h1&gt;<br/>  &lt;h2 slot=&quot;footer&quot;&gt;It&#039;s a cool gif&lt;&#47;h2&gt;<br/>&lt;&#47;deckgo-slide-gif&gt;</code>
    </deckgo-highlight-code><h4 id="slots-3">Slots</h4>
<p>The slots <code>title</code>, <code>header</code> and <code>footer</code> are both optional. <code>header</code> and <code>footer</code> would be displayed over the gif.</p>
<h5 id="notes-3">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="gif-component">Gif component</h4>
<p>The slide &quot;Gif&quot; relies on the component <code>&lt;deckgo-gif/&gt;</code> which is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="attributes-3">Attributes</h4>
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
<h4 id="theming-3">Theming</h4>
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
<h3 id="slide-chart">Slide: Chart</h3>
<p>The &quot;Chart&quot; slide let you draw easily charts in your presentation.</p>
<h4 id="layout-4">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-pie-layout.png" width="450px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-line-layout.png" width="450px"/>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-chart-bar-layout.png" width="450px"/>

<h4 id="usage-4">Usage</h4>
<p>The &quot;Chart&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-chart/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-slide-chart src=&quot;.&#47;assets&#47;csv&#47;data-pie-chart.csv&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My Pie chart&lt;&#47;h1&gt;<br/>&lt;&#47;deckgo-slide-chart&gt;</code>
    </deckgo-highlight-code><h5 id="slots-4">Slots</h5>
<p>The slot <code>title</code> is optional.</p>
<h5 id="notes-4">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="chart-components">Chart components</h4>
<p>The slide &quot;Chart&quot; relies on the charts components <code>&lt;deckgo-pie-chart/&gt;</code>, <code>&lt;deckgo-line-chart/&gt;</code> and  <code>&lt;deckgo-bar-chart/&gt;</code> which are described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="installation">Installation</h4>
<p>The <a href="https://deckdeckgo.com">DeckDeckGo</a> charts components are provided in separate extra library. If you don&#39;t use the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to add the <a href="https://deckdeckgo.com">DeckDeckGo</a> chart to your project, you will need to install and integrate it from a CDN or <a href="https://www.npmjs.com/package/deckdeckgo-charts">npm</a> as described in its <a href="https://github.com/deckgo/deckdeckgo-charts#getting-started">installation guide</a>.</p>
<h4 id="attributes-4">Attributes</h4>
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
<h4 id="theming-4">Theming</h4>
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
<h3 id="slide-youtube">Slide: Youtube</h3>
<p>The &quot;Youtube&quot; slide let you add easily a <a href="https://youtube.com">Youtube</a> video to your presentation.</p>
<h4 id="layout-5">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-youtube-layout.png" width="450px"/>

<h4 id="usage-5">Usage</h4>
<p>The &quot;Youtube&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-youtube/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-slide-youtube src=&quot;https:&#47;&#47;www.youtube.com&#47;watch?v=oUOjJIfPIjw&quot;&gt;<br/>  &lt;h1 slot=&quot;title&quot;&gt;A 16&#47;9 video&lt;&#47;h1&gt;<br/>&lt;&#47;deckgo-slide-youtube&gt;</code>
    </deckgo-highlight-code><h5 id="slots-5">Slots</h5>
<p>The slot <code>title</code> is optional.</p>
<h5 id="notes-5">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h5 id="youtube-component">Youtube component</h5>
<p>The slide &quot;Youtube&quot; relies on the component <code>&lt;deckgo-youtube/&gt;</code> which is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="attributes-5">Attributes</h4>
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
<h4 id="theming-5">Theming</h4>
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
      <code slot="code">const slide = deck.getElementsByTagName(&#039;deckgo-slide-youtube&#039;);<br/>await slide.play();</code>
    </deckgo-highlight-code><h5 id="pause-the-video">Pause the video</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">const slide = deck.getElementsByTagName(&#039;deckgo-slide-youtube&#039;);<br/>await slide.pause();</code>
    </deckgo-highlight-code><h3 id="slide-code">Slide: Code</h3>
<p>The &quot;Code&quot; slide is a the slide to use if you would like to showcase code during your talk.</p>
<h4 id="layout-6">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-code-layout.gif" width="450px"/>

<h4 id="usage-6">Usage</h4>
<p>The &quot;Code&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-code/&gt;</code>.</p>
<p>You could provide a file URI to the code you want to display or provide it with a slotted element.</p>
<h5 id="usage-with-file-uri">Usage with file URI</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-code src=&quot;https:&#47;&#47;domain.com&#47;path-to-my-code.extension&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My code&lt;&#47;h1&gt;<br/>  &lt;&#47;deckgo-slide-code&gt;<br/>&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h5 id="usage-with-slotted-element">Usage with slotted element</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-code language=&quot;java&quot;&gt;<br/>      &lt;h1 slot=&quot;title&quot;&gt;Manual code&lt;&#47;h1&gt;<br/>      &lt;code slot=&quot;code&quot;&gt;<br/>  interface DeckDeckGoDemo &#123;<br/>    boolean helloWorld();<br/>  &#125;<br/>  &lt;&#47;deckgo-slide-code&gt;<br/>&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h5 id="slots-6">Slots</h5>
<p>The slots <code>title</code> and <code>code</code> are optional.</p>
<p>This template also exposes a slot <code>info</code> which would let you display an information over your code on mobile devices, useful to explain your reader that they should click to switch between vertical and horizontal scrolling. Find an example of the use of that slot on the <a href="https://deckdeckgo.com">DeckDeckGo</a> website.</p>
<h5 id="notes-6">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="code-components">Code components</h4>
<p>The slide &quot;Code&quot; relies on the code component <code>&lt;deckgo-highlight-code/&gt;</code> which is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="installation-1">Installation</h4>
<p>The <a href="https://deckdeckgo.com">DeckDeckGo</a> - Hightlight code component is provided in separate extra library. If you don&#39;t use the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to add the <a href="https://deckdeckgo.com">DeckDeckGo</a> code to your project, you will need to install and integrate it from a CDN or <a href="https://www.npmjs.com/package/deckdeckgo-highlight-code">npm</a> as described in its <a href="https://github.com/deckgo/deckdeckgo-highlight-code#getting-started">installation guide</a>.</p>
<h4 id="attributes-6">Attributes</h4>
<p>At least <code>src</code> or the <code>slot</code> code should be provided in order to render code in this template. It offers the same attributes as the <a href="https://deckdeckgo.com">DeckDeckGo</a> code Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-highlight-code">documentation</a> for the details.</p>
<h5 id="example-with-file-uri">Example with file URI</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-code hide-anchor=&quot;false&quot; src=&quot;https:&#47;&#47;raw.githubusercontent.com&#47;fluster&#47;deckdeckgo&#47;master&#47;src&#47;components&#47;slides&#47;deckdeckgo-slide-code&#47;deckdeckgo-slide-code.tsx&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;Code&lt;&#47;h1&gt;<br/>  &lt;&#47;deckgo-slide-code&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h5 id="example-with-slotted-element">Example with slotted element</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-code language=&quot;java&quot;&gt;<br/>      &lt;h1 slot=&quot;title&quot;&gt;Manual code&lt;&#47;h1&gt;<br/>      &lt;code slot=&quot;code&quot;&gt;interface NumericTest &#123;<br/>    boolean computeTest(int n);<br/>  &#125;<br/><br/>  public static void main(String args[]) &#123;<br/>    NumericTest isEven = (n) -&gt; (n % 2) == 0;<br/>    NumericTest isNegative = (n) -&gt; (n &lt; 0);<br/><br/>    &#47;&#47; Output: false<br/>    System.out.println(isEven.computeTest(5));<br/><br/>    &#47;&#47; Output: true<br/>    System.out.println(isNegative.computeTest(-5));<br/>  &#125;&lt;&#47;code&gt;<br/>  &lt;&#47;deckgo-slide-code&gt;<br/>&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h4 id="theming-6">Theming</h4>
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
</tbody></table>
<p>Furthermore, this slide component offers the exact same CSS4 variables as the <a href="https://deckdeckgo.com">DeckDeckGo</a> - Highlight code Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-highlight-code">documentation</a> for the details.</p>
<h3 id="slide-author">Slide: Author</h3>
<p>The &quot;Author&quot; slide let you introduce the author of the presentation.</p>
<h4 id="layout-7">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-author-layout.png" width="450px"/>

<h4 id="usage-7">Usage</h4>
<p>The &quot;Author&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-author/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-author img-src=&quot;&#47;assets&#47;author.jpeg&quot; img-alt=&quot;My self&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;Author&lt;&#47;h1&gt;<br/>    &lt;div slot=&quot;author&quot;&gt;<br/>      &lt;h2&gt;David&lt;&#47;h2&gt;<br/>      &lt;p&gt;Something about me&lt;&#47;p&gt;<br/>    &lt;&#47;div&gt;<br/>    &lt;div slot=&quot;social-link&quot;&gt;&lt;deckgo-social twitter=&quot;daviddalbusco&quot;&gt;twitter&lt;&#47;deckgo-social&gt;&lt;&#47;div&gt;<br/>  &lt;&#47;deckgo-slide-author&gt;<br/>&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h5 id="slots-7">Slots</h5>
<p>Both slots <code>title</code>, <code>author</code> and <code>social-link</code> are optional, but of course the slide would looks better with at least the slot <code>author</code> would be provided.</p>
<p>Notes: </p>
<ul>
<li><p>The slot <code>title</code> is hidden. If you use the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter, it will be use for the navigation modal</p>
</li>
<li><p>You could provide up to six <code>social-link</code> slots. Each of these could be your custom code or you could use the component <code>&lt;deckgo-social/&gt;</code> to easily provide a link to an external URI.</p>
</li>
</ul>
<h5 id="notes-7">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h5 id="social-components">Social components</h5>
<p>The details of the component <code>&lt;deckgo-social/&gt;</code> is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="attributes-7">Attributes</h4>
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
<td>img-src</td>
<td>string</td>
<td></td>
<td>An image URI, for example a picture of the author. Note: this image will be displayed as a circle.</td>
</tr>
<tr>
<td>img-alt</td>
<td>string</td>
<td></td>
<td>An optional accessibility alt for the image.</td>
</tr>
</tbody></table>
<h5 id="example-2">Example</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-author img-src=&quot;&#47;assets&#47;author.jpeg&quot;&gt;<br/>    &lt;div slot=&quot;author&quot;&gt;<br/>      &lt;h2&gt;David&lt;&#47;h2&gt;<br/>      &lt;p&gt;Something about me&lt;&#47;p&gt;<br/>    &lt;&#47;div&gt;<br/>    &lt;div slot=&quot;social-link&quot;&gt;&lt;deckgo-social twitter=&quot;daviddalbusco&quot;&gt;twitter&lt;&#47;deckgo-social&gt;&lt;&#47;div&gt;<br/>    &lt;div slot=&quot;social-link&quot;&gt;&lt;deckgo-social linkedin=&quot;david-dal-busco&#47;&quot;&gt;linkedin&lt;&#47;deckgo-social&gt;&lt;&#47;div&gt;<br/>    &lt;div slot=&quot;social-link&quot;&gt;&lt;deckgo-social medium=&quot;david.dalbusco&quot;&gt;medium&lt;&#47;deckgo-social&gt;&lt;&#47;div&gt;<br/>  &lt;&#47;deckgo-slide-author&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h4 id="theming-7">Theming</h4>
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
<td>--slide-author-background-start</td>
<td></td>
<td>Left pane background</td>
</tr>
<tr>
<td>--slide-author-color-start</td>
<td></td>
<td>Left pane color</td>
</tr>
<tr>
<td>--slide-author-background-end</td>
<td></td>
<td>Right pane background</td>
</tr>
<tr>
<td>--slide-author-color-end</td>
<td></td>
<td>Right pane color</td>
</tr>
<tr>
<td>--slide-author-padding-top</td>
<td>16px</td>
<td>Padding top of a slide</td>
</tr>
<tr>
<td>--slide-author-padding-end</td>
<td>32px</td>
<td>Padding right of a slide</td>
</tr>
<tr>
<td>--slide-author-padding-bottom</td>
<td>16px</td>
<td>Padding bottom of a slide</td>
</tr>
<tr>
<td>--slide-author-padding-start</td>
<td>32px</td>
<td>Padding left of a slide</td>
</tr>
<tr>
<td>--slide-padding-start</td>
<td>32px</td>
<td>Modify slotted ul and ol padding-inline-start</td>
</tr>
<tr>
<td>--slide-author-align</td>
<td>inherit</td>
<td>Modify for example to center if you want to align the content in the middle</td>
</tr>
<tr>
<td>--slide-author-text-align</td>
<td>inherit</td>
<td>Modify for example to center if you want to align the text in the middle</td>
</tr>
<tr>
<td>--slide-author-img-size</td>
<td>80%</td>
<td>The size of the image of the left pane</td>
</tr>
<tr>
<td>--slide-author-social-padding-top</td>
<td>32px</td>
<td>The spacing between the author description and the social links</td>
</tr>
<tr>
<td>--zIndex</td>
<td>1</td>
<td>The z-index of the slide</td>
</tr>
</tbody></table>
<h2 id="background">Background</h2>
<p>Beside slides and templates, a <a href="https://deckdeckgo.com">DeckDeckGo</a> deck could also contains a customized element <code>background</code> which could be injected using a dedicated <code>slot</code>. This element inherit the length of the all presentation. This option is handy for example in case you would like to have a background which follows your presentation.</p>
<h3 id="example-3">Example</h3>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My presentation title&lt;&#47;h1&gt;<br/>    &lt;p slot=&quot;content&quot;&gt;<br/>      Hello World 🚀<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-title&gt;<br/><br/>  &lt;div class=&quot;circle&quot; slot=&quot;background&quot;&gt;&lt;&#47;div&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><p>where for example the related <code>circle</code> css code could be:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">div.circle &#123;<br/>  position: absolute;<br/>  left: 50%;<br/>  transform: translate(-50%, 0);<br/><br/>  bottom: -10vh;<br/>  width: 800vw;<br/>  height: 100vh;<br/><br/>  border-radius: 50%;<br/>  background: yellow;<br/>  opacity: 0.3;<br/>&#125;</code>
    </deckgo-highlight-code><h3 id="slide-qr-code">Slide: QR Code</h3>
<p>The &quot;QR code&quot; slide is an handy slide in case you would like to display a QR code. It could for example be use as the very last slide of your presentation to display an easy link pointing to your deck, you previously published online. It would allow your audience to get easily your slides without any delay on their phone.</p>
<h4 id="layout-8">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-qrcode-layout.png" width="450px"/>

<h4 id="usage-8">Usage</h4>
<p>The &quot;QR code&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-qrcode/&gt;</code>.</p>
<h5 id="usage-9">Usage</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-qrcode content=&quot;https:&#47;&#47;deckdeckgo.com&quot;&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My QR code&lt;&#47;h1&gt;<br/>    &lt;p slot=&quot;content&quot;&gt;An optional additional content&lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-code&gt;<br/>&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h5 id="slots-8">Slots</h5>
<p>The slots <code>title</code> and <code>content</code> are optional.</p>
<h5 id="notes-8">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="code-components-1">Code components</h4>
<p>The slide &quot;QR Code&quot; relies on the code component <code>&lt;deckgo-qrcode/&gt;</code> which is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="installation-2">Installation</h4>
<p>The <a href="https://deckdeckgo.com">DeckDeckGo</a> - QR Code component is provided in separate extra library. If you don&#39;t use the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to add the <a href="https://deckdeckgo.com">DeckDeckGo</a> QR code to your project, you will need to install and integrate it from a CDN or <a href="https://www.npmjs.com/package/deckdeckgo-qrcode">npm</a> as described in its <a href="https://github.com/deckgo/deckdeckgo-qrcode#getting-started">installation guide</a>.</p>
<h4 id="attributes-8">Attributes</h4>
<p>The attribute <code>content</code> should be provided in order to render a QR code in this template. It offers the same attributes as the <a href="https://deckdeckgo.com">DeckDeckGo</a> QR code Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-qrcode">documentation</a> for the details.</p>
<h5 id="example-without-any-slots">Example without any slots</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-qrcode content=&quot;An encoded text&quot;&gt;<br/>  &lt;&#47;deckgo-slide-code&gt;<br/>&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h4 id="theming-8">Theming</h4>
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
<td>--slide-qrcode-align</td>
<td>center</td>
<td>QR code vertical alignment</td>
</tr>
<tr>
<td>--slide-qrcode-text-align</td>
<td>center</td>
<td>QR code horizontal alignment</td>
</tr>
<tr>
<td>--slide-qrcode-background</td>
<td></td>
<td>QR code column&#39;s background</td>
</tr>
<tr>
<td>--slide-qrcode-title-display</td>
<td>inherit</td>
<td>If you wish to hide the slot=&quot;title&quot;</td>
</tr>
</tbody></table>
<p>Furthermore, this slide component offers the exact same CSS4 variables as the <a href="https://deckdeckgo.com">DeckDeckGo</a> - QR code Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-qrcode">documentation</a> for the details.</p>
</main>
      </ion-content>
    ];
  }
}
