import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-concept'
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
        <main><h1 id="concept">Concept</h1>
<p><a href="https://deckdeckgo.com">DeckDeckGo</a> is a deck of slides where each slide is based on a template which has its own layout and behaviour. Their content could be edited and structured using <code>slots</code> and other attributes.</p>
<p>The parent deck should be declared using the tag <code>&lt;deckgo-deck/&gt;</code> and each slide should be added as its children.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;<br/>  &lt;deckgo-slide-title&gt;<br/>    &lt;h1 slot=&quot;title&quot;&gt;The first slide&lt;/h1&gt;<br/>    &lt;p slot=&quot;content&quot;&gt;<br/>      Hello World 🚀<br/>    &lt;/p&gt;<br/>  &lt;/deckgo-slide-title&gt;<br/><br/>  &lt;deckgo-slide-content&gt;<br/>      &lt;h1 slot=&quot;title&quot;&gt;The second slide&lt;/h1&gt;<br/>  &lt;/deckgo-slide-content&gt;<br/>&lt;/deckgo-deck&gt;</code>
    </deckgo-highlight-code><p>In the previous example, the presentation contains two slides. The first slide use the template <code>deckgo-slide-title</code> and the second slide use the template <code>deckgo-slide-content</code>.</p>
<p>All templates and their options are described in the following chapters.</p>
</main>
      </ion-content>
    ];
  }
}
