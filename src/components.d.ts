/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppLogo {}
  interface AppLogoAttributes extends StencilHTMLAttributes {}

  interface AppNavigation {
    'logo': boolean;
    'menuToggle': boolean;
    'navigation': boolean;
  }
  interface AppNavigationAttributes extends StencilHTMLAttributes {
    'logo'?: boolean;
    'menuToggle'?: boolean;
    'navigation'?: boolean;
  }

  interface AppDoc {}
  interface AppDocAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'name': string;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'AppLogo': Components.AppLogo;
    'AppNavigation': Components.AppNavigation;
    'AppDoc': Components.AppDoc;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'app-logo': Components.AppLogoAttributes;
    'app-navigation': Components.AppNavigationAttributes;
    'app-doc': Components.AppDocAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {}
  var HTMLAppLogoElement: {
    prototype: HTMLAppLogoElement;
    new (): HTMLAppLogoElement;
  };

  interface HTMLAppNavigationElement extends Components.AppNavigation, HTMLStencilElement {}
  var HTMLAppNavigationElement: {
    prototype: HTMLAppNavigationElement;
    new (): HTMLAppNavigationElement;
  };

  interface HTMLAppDocElement extends Components.AppDoc, HTMLStencilElement {}
  var HTMLAppDocElement: {
    prototype: HTMLAppDocElement;
    new (): HTMLAppDocElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'app-logo': HTMLAppLogoElement
    'app-navigation': HTMLAppNavigationElement
    'app-doc': HTMLAppDocElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-logo': HTMLAppLogoElement;
    'app-navigation': HTMLAppNavigationElement;
    'app-doc': HTMLAppDocElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
