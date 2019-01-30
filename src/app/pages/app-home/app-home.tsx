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

      <ion-content>
        <main padding>
          <section class="hero">
            <app-logo></app-logo>
            <h1>The <strong>Progressive Web App</strong> alternative for simple presentations</h1>
          </section>

          <section class="overview" padding-top margin-top>
            <p no-margin>
              <p no-margin>Create a lightweight PWA presentation using Web Components, HTML or Markdown and <a href="https://ionicframework.com">Ionic</a> components 🚀Cherry on the cake, DeckDeckGo comes with a <a href="https://deckdeckgo.app">remote control</a> for your presentation 📱</p>
            </p>

            <ul>
              <li><ion-icon name="checkmark" padding-end></ion-icon>Progressive Web App</li>
              <li><ion-icon name="checkmark" padding-end></ion-icon>Predefined templates</li>
              <li><ion-icon name="checkmark" padding-end></ion-icon>Web Components</li>
              <li><ion-icon name="checkmark" padding-end></ion-icon>Lazy loaded content</li>
              <li><ion-icon name="checkmark" padding-end></ion-icon>HTML or Markdown</li>
              <li><ion-icon name="checkmark" padding-end></ion-icon>Free and open source</li>
            </ul>
          </section>

          <section class="cta" text-center padding>
            <div class="cta__primary">
              <h2>Get started now 🔥</h2>
              <code>$ npm init deckdeckgo</code>
            </div>
            <p class="cta__secondary">
              Dive deeper with the <a href="/doc">Getting Started</a> chapter
            </p>
          </section>

          <section class="section">
            <ul>
              <li>
                <ion-icon name="create"></ion-icon>
                <h3>Simple</h3>
                <p>HTML or Markdown, templates based, extra components and features, all you need to easily create, showcase and ship your presentation.</p>
              </li>
              <li>
                <ion-icon name="flash" padding-end></ion-icon>
                <h3>Performant</h3>
                <p>Build for performance and to be SEO friendly, have a look to the Lighthouse score of the DeckDeckGo <a href="https://deckdeckgo.com">demo</a>.</p>
              </li>
              <li>
                <ion-icon name="code" padding-end></ion-icon>
                <h3>Future proof</h3>
                <p>Presentations are bundled and shipped as Progressive Web Apps and based on Web Components.</p>
              </li>
            </ul>
          </section>
        </main>

        <app-footer></app-footer>
      </ion-content>
    ];
  }
}
