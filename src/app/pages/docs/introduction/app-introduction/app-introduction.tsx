import {Component} from '@stencil/core';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-introduction',
  styleUrl: 'app-introduction.scss'
})
export class AppIntroduction {

  constructor(private menuService: MenuService) {
    this.menuService = MenuService.getInstance();
  }

  async componentWillLoad() {
    this.menuService.enable();
  }

  render() {
    return [
      <app-navigation></app-navigation>,

      <ion-content padding>
        <main><h1 id="getting-started">Getting Started</h1>
<p><a href="https://deckdeckgo.com">DeckDeckGo</a> provides a <a href="https://github.com/deckgo/create-deckdeckgo">CLI</a> and a <a href="https://github.com/deckgo/deckdeckgo-starter">starter kit</a>.</p>
<p>To get started and <strong>to create your presentation</strong>, run the following command and follow the prompt:</p>
<deckgo-highlight-code language="bash">
      <code slot="code">npm%20init%20deckdeckgo</code>
    </deckgo-highlight-code><p>Once your presentation created, go to your new project&#39;s folder and start editing your slides and content for your talk 😉</p>
</main>
      </ion-content>
    ];
  }
}
