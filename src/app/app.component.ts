import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private isBrowserClient: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settingsService: SettingsService
  ) {
    this.isBrowserClient = document.URL.startsWith('http');

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready()
      .then(() => {
        if (!this.isBrowserClient) {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        }

        this.settingsService.get('fontSize')
          .then((fontSizeValue) => {
            this.settingsService.setFontSize(fontSizeValue);
          });
      });
  }
}
