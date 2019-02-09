import {Component, Element} from '@stencil/core';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-edit-theming'
})
export class AppEditTheming {

  @Element() el: HTMLElement;

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
        <main><h1 id="app-edit-theming-theming">Theming</h1>
<p><a href="https://deckdeckgo.com">DeckDeckGo</a> offers various theming options which could be set using CSS variables and which are described in their respective slides&#39; templates, see chapter <a href="/slides/concept">concept</a> to begin with.</p>
<p><em>Note: If you would miss or need further theming options, don&#39;t hesitate to open an issue and/or submit a PR, it would be my pleasure to add more theming flexibility and options</em> </p>
</main>
      </ion-content>
    ];
  }
}
