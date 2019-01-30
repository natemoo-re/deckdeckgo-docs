import {Component} from '@stencil/core';

@Component({
  tag: 'app-menu-footer',
  styleUrl: 'app-menu-footer.scss',
  shadow: true
})
export class AppMenuFooter {

  render() {
    return <footer>
      <a href="/">
        <app-logo></app-logo>
        <ion-label>DeckDeckGo</ion-label>
      </a>
      <p>
        Created by <a href="https://twitter.com/daviddalbusco">David Dal Busco</a> | Zürich🇨🇭
      </p>
    </footer>
  }
}
