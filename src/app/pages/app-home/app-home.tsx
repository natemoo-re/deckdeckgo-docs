import {Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

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
