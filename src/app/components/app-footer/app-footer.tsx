import {Component} from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true
})
export class AppLogo {

  render() {
    return <footer>
      <div class="container">
        <div class="start">
          <app-menu-footer></app-menu-footer>
        </div>
        <div class="end">
          <a href="https://twitter.com/deckdeckgo"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="https://github.com/deckgo"><ion-icon name="logo-github"></ion-icon></a>
        </div>
      </div>
    </footer>
  }
}
