import {Component, Prop, Element} from '@stencil/core';

import {MenuService} from './services/menu/menu.service';
import {Subscription} from 'rxjs';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  @Prop({connect: 'ion-menu-controller'}) lazyMenuController!: HTMLIonMenuControllerElement;

  private subscription: Subscription;

  @Element() el: HTMLElement;

  constructor(private menuService: MenuService) {
    this.menuService = MenuService.getInstance();
  }

  async componentWillLoad() {
    this.subscription = this.menuService.watch().subscribe(async (enable: boolean) => {
      await this.enableMenu(enable);
    });
  }

  async componentDidUnload() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private enableMenu(enable: boolean): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const menuController: HTMLIonMenuControllerElement = this.el.querySelector('ion-menu-controller');
      if (menuController) {
        const isAnimating: boolean = await menuController.isAnimating();

        // Menu can't be disabled or enabled if currently closing or opening
        if (!isAnimating) {
          await menuController.enable(enable);
        }
      }

      resolve();
    });
  }

  private enableMenuOnClose(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const enable: boolean = await this.menuService.isEnable();
      await this.enableMenu(enable);
      resolve();
    });
  }

  render() {
    return ([
      <ion-app>

        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"/>

          <ion-route url="/docs" component="app-introduction"/>
          <ion-route url="/docs/introduction" component="app-introduction"/>
          <ion-route url="/docs/installation" component="app-installation"/>

          <ion-route url="/guide" component="app-concept"/>
          <ion-route url="/guide/concept" component="app-concept"/>
          <ion-route url="/guide/templates" component="app-templates"/>

          <ion-route url="/profile/:name" component="app-profile"/>
        </ion-router>

        <ion-split-pane when="lg">
          <ion-menu side="start" swipeGesture={false} disabled={true} onIonDidClose={() => this.enableMenuOnClose()}>
            <app-navigation logo={true} menuToggle={false} navigation={false}></app-navigation>
            <ion-content>
              <ion-menu-toggle autoHide={false}>
                <ion-list>
                  <ion-item-group>
                    <ion-item-divider>
                      <ion-label>Introduction</ion-label>
                    </ion-item-divider>
                    <ion-item href="/docs/introduction" routerDirection="forward"><ion-label>Getting started</ion-label></ion-item>
                    <ion-item href="/docs/installation" routerDirection="forward"><ion-label>Installation</ion-label></ion-item>

                    <ion-item-divider>
                      <ion-label>Guide</ion-label>
                    </ion-item-divider>
                    <ion-item href="/guide/concept" routerDirection="forward"><ion-label>Concept</ion-label></ion-item>
                    <ion-item href="/guide/templates" routerDirection="forward"><ion-label>Templates</ion-label></ion-item>

                  </ion-item-group>


                  <ion-item href="/profile/hello" routerDirection="forward">Profile</ion-item>
                </ion-list>
              </ion-menu-toggle>

              <app-menu-footer padding></app-menu-footer>
            </ion-content>
          </ion-menu>

          <ion-nav main/>
        </ion-split-pane>

      </ion-app>,
      <ion-menu-controller></ion-menu-controller>
    ]);
  }
}
