import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'app-navigation',
  styleUrl: 'app-navigation.scss',
  shadow: false
})
export class AppNavigation {

  @Prop() logo: boolean = false;
  @Prop() menuToggle: boolean = true;
  @Prop() navigation: boolean = true;

  render() {
    return (<ion-header>
        <ion-toolbar>
          {this.renderLogo()}
          {this.renderMenuToggle()}
          {this.renderNavigation()}
        </ion-toolbar>
      </ion-header>
    );
  }

  private renderLogo() {
    if (this.logo) {
      return <ion-title slot="start">
        <a href="/">
          <app-logo></app-logo>
          <ion-label>DeckDeckGo</ion-label>
        </a>
      </ion-title>;
    } else {
      return null;
    }
  }

  private renderMenuToggle() {
    if (this.menuToggle) {
      return <ion-buttons slot="start">
        <ion-menu-toggle>
          <ion-button>
            <ion-icon slot="icon-only" name="menu"></ion-icon>
          </ion-button>
        </ion-menu-toggle>
      </ion-buttons>;
    } else {
      return null;
    }
  }

  private renderNavigation() {
    if (this.navigation) {
      return <div slot="end">
        <a href="/doc" padding-start padding-end>Docs</a>
        <a href="https://deckdeckgo.com" padding-start padding-end>Demo</a>
        <a href="https://github.com/deckgo" padding-start padding-end>Github</a>
      </div>;
    } else {
      return null;
    }
  }
}
