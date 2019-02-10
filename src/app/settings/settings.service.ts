import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ISettings } from './settings.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  readonly defaults: ISettings = {
    fontSize: 16
  }

  constructor(private storage: Storage) { }

  set(key, value) {
    return this.storage.set(key, value);
  }

  get(key) {
    return this.storage.get(key);
  }

  setFontSize(fontSizeValue) {
    document.documentElement.style.setProperty('--bible-paragraph-font-size', `${(fontSizeValue || this.defaults.fontSize) / 10}rem`);
  }
}
