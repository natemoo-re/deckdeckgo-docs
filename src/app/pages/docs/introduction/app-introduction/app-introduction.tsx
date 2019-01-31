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
        <main>
          <section>
            <app-deckdeckgo-docs-markdown></app-deckdeckgo-docs-markdown>
          </section>
        </main>
      </ion-content>
    ];
  }
}
