import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  fontSize = 16;

  constructor(private settingsService: SettingsService) {
    this.settingsService.get('fontSize')
      .then((fontSizeValue) => this.setFontSize(fontSizeValue));
  }

  changeFontSize(sizeValue) {
    this.settingsService.set('fontSize', sizeValue)
      .then((fontSizeValue) => this.setFontSize(fontSizeValue));
  }

  private setFontSize(fontSizeValue) {
    this.fontSize = fontSizeValue;
    this.settingsService.setFontSize(fontSizeValue);
  }
}
