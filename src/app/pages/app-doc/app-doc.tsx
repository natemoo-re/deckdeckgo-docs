import {Component} from '@stencil/core';

import {MenuService} from '../../services/menu/menu.service';

@Component({
  tag: 'app-doc',
  styleUrl: 'app-doc.scss'
})
export class AppDoc {

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
          <section class="hero">
            Docs
          </section>
        </main>
      </ion-content>
    ];
  }
}
