import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>

        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>

        <ion-split-pane when="lg">
          <ion-menu side="start" swipeGesture={false}>
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>Start Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-menu-toggle autoHide={false}>
                <ion-list>
                  <ion-item href="/" routerDirection="root">Home</ion-item>
                  <ion-item href="/" routerDirection="root">Home again</ion-item>
                  <ion-item href="/profile/hello" routerDirection="root">Profile</ion-item>
                </ion-list>
              </ion-menu-toggle>
            </ion-content>
          </ion-menu>

          <ion-nav main/>

        </ion-split-pane>

      </ion-app>
    );
  }
}
