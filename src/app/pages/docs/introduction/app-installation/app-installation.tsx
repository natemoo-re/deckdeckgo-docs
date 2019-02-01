import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-installation',
  styleUrl: 'app-installation.scss'
})
export class AppInstallation {

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
        <main><h1 id="installation">Installation</h1>
<p>The <a href="https://deckdeckgo.com">DeckDeckGo</a> presentation tool, without any tooling and features offered by its starter kit, could be installed in any project too.</p>
<p>If you wish to do so, use it directly in your project from a CDN, using a simple script include, or install it from <a href="https://www.npmjs.com/package/deckdeckgo">npm</a>.</p>
<h2 id="table-of-contents">Table of contents</h2>
<ul>
<li><a href="#using-deckdeckgo-from-a-cdn">Using DeckDeckGo from a CDN</a></li>
<li><a href="#install-deckdeckgo-from-npm">Install DeckDeckGo from npm</a></li>
<li><a href="#framework-integration">Framework integration</a></li>
</ul>
<h2 id="using-deckdeckgo-from-a-cdn">Using DeckDeckGo from a CDN</h2>
<p>It&#39;s recommended to use <a href="https://unpkg.com/">unpkg</a> to use the <a href="https://deckdeckgo.com">DeckDeckGo</a> from a CDN. To do so, add the following include script in the main HTML file of your project:</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;script src=&quot;https://unpkg.com/deckdeckgo@latest/dist/deckdeckgo.js&quot;&gt;&lt;/script&gt;</code>
    </deckgo-highlight-code><h2 id="install-deckdeckgo-from-npm">Install DeckDeckGo from NPM</h2>
<p>Install <a href="https://deckdeckgo.com">DeckDeckGo</a> in your project from <a href="https://www.npmjs.com/package/deckdeckgo">npm</a> using the following command:</p>
<deckgo-highlight-code language="bash">
      <code slot="code">npm install deckdeckgo</code>
    </deckgo-highlight-code><h2 id="framework-integration">Framework integration</h2>
<p>The <a href="https://stenciljs.com/docs/overview">Stencil documentation</a> provide examples of framework integration for <a href="https://stenciljs.com/docs/angular">Angular</a>, <a href="https://stenciljs.com/docs/react">React</a>, <a href="https://stenciljs.com/docs/vue">Vue</a> and <a href="https://stenciljs.com/docs/ember">Ember</a>.</p>
</main>
      </ion-content>
    ];
  }
}
