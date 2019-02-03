import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slides-background'
})
export class AppSlidesBackground {

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
        <main><h1 id="background">Background</h1>
<p>Beside slides and templates, a <a href="https://deckdeckgo.com">DeckDeckGo</a> deck could also contains a customized element <code>background</code> which could be injected using a dedicated <code>slot</code>. This element inherit the length of the all presentation. This option is handy for example in case you would like to have a background which follows your presentation.</p>
<h3 id="example">Example</h3>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;My presentation title&lt;&#47;h1&gt;<br/>    &lt;p slot=&quot;content&quot;&gt;<br/>      Hello World 🚀<br/>    &lt;&#47;p&gt;<br/>  &lt;&#47;deckgo-slide-title&gt;<br/><br/>  &lt;div class=&quot;circle&quot; slot=&quot;background&quot;&gt;&lt;&#47;div&gt;<br/>&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><p>where for example the related <code>circle</code> css code could be:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">div.circle &#123;<br/>  position: absolute;<br/>  left: 50%;<br/>  transform: translate(-50%, 0);<br/><br/>  bottom: -10vh;<br/>  width: 800vw;<br/>  height: 100vh;<br/><br/>  border-radius: 50%;<br/>  background: yellow;<br/>  opacity: 0.3;<br/>&#125;</code>
    </deckgo-highlight-code></main>
      </ion-content>
    ];
  }
}
