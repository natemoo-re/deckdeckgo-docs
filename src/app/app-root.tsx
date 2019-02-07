import {Component, Prop, Element} from '@stencil/core';

import {MenuService} from './services/menu/menu.service';
import {Subscription} from 'rxjs';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  // @ts-ignore
  private treeShakeWorkaroundComponents: any = [
    <deckgo-pie-chart/>,
    <deckgo-line-chart/>,
    <deckgo-bar-chart/>,
    <deckgo-qrcode/>
  ];

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

          <ion-route url="/slides" component="app-concept"/>
          <ion-route url="/slides/concept" component="app-slides-concept"/>
          <ion-route url="/slides/title" component="app-slide-title"/>
          <ion-route url="/slides/content" component="app-slide-content"/>
          <ion-route url="/slides/split" component="app-slide-split"/>
          <ion-route url="/slides/gif" component="app-slide-gif"/>
          <ion-route url="/slides/chart" component="app-slide-chart"/>
          <ion-route url="/slides/youtube" component="app-slide-youtube"/>
          <ion-route url="/slides/code" component="app-slide-code"/>
          <ion-route url="/slides/author" component="app-slide-author"/>
          <ion-route url="/slides/qrcode" component="app-slide-qrcode"/>
          <ion-route url="/slides/background" component="app-slides-background"/>

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
                      <ion-label>Slides</ion-label>
                    </ion-item-divider>
                    <ion-item href="/slides/concept" routerDirection="forward"><ion-label>Concept</ion-label></ion-item>
                    <ion-item href="/slides/title" routerDirection="forward"><ion-label>Title</ion-label></ion-item>
                    <ion-item href="/slides/content" routerDirection="forward"><ion-label>Content</ion-label></ion-item>
                    <ion-item href="/slides/split" routerDirection="forward"><ion-label>Split</ion-label></ion-item>
                    <ion-item href="/slides/gif" routerDirection="forward"><ion-label>Gif</ion-label></ion-item>
                    <ion-item href="/slides/chart" routerDirection="forward"><ion-label>Chart</ion-label></ion-item>
                    <ion-item href="/slides/youtube" routerDirection="forward"><ion-label>Youtube</ion-label></ion-item>
                    <ion-item href="/slides/code" routerDirection="forward"><ion-label>Code</ion-label></ion-item>
                    <ion-item href="/slides/author" routerDirection="forward"><ion-label>Author</ion-label></ion-item>
                    <ion-item href="/slides/qrcode" routerDirection="forward"><ion-label>QR Code</ion-label></ion-item>
                    <ion-item href="/slides/background" routerDirection="forward"><ion-label>Background</ion-label></ion-item>

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
