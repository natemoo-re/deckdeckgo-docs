import {Component} from '@stencil/core';

import {MenuService} from '../../services/menu/menu.service';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  constructor(private menuService: MenuService) {
    this.menuService = MenuService.getInstance();
  }

  async componentWillLoad() {
    this.menuService.disable();
  }

  render() {
    return [
      <app-navigation logo={true}></app-navigation>,

      <ion-content padding>
        <main>
          <section class="hero">
            <app-logo></app-logo>
            <h1>Create a lightweight presentation using Web Components</h1>
          </section>
        </main>
      </ion-content>
    ];
  }
}
