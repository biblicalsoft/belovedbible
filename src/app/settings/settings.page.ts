import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  fontSize = 16;

  constructor(private settingsService: SettingsService) {
    this.settingsService.get('fontSize')
      .then((fontSizeValue: number) => this.setFontSize(fontSizeValue));
  }

  changeFontSize(sizeValue: number) {
    this.settingsService.set('fontSize', sizeValue)
      .then((fontSizeValue: number) => this.setFontSize(fontSizeValue));
  }

  private setFontSize(fontSizeValue: number) {
    this.fontSize = fontSizeValue;
    this.settingsService.setFontSize(fontSizeValue);
  }
}
