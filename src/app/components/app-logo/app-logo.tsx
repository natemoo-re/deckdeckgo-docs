import {Component} from '@stencil/core';

@Component({
  tag: 'app-logo',
  styleUrl: 'app-logo.scss',
  shadow: true
})
export class AppLogo {

  render() {
    return <ion-icon src="/assets/img/deckdeckgo-logo-invert.svg" aria-label="DeckDeckGo Logo"></ion-icon >;
  }
}
