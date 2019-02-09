import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  fontSize: number = 16;

  constructor(private storage: Storage) { }

  set(key, value) {
    return this.storage.set(key, value);
  }

  get(key) {
    return this.storage.get(key);
  }

  setFontSize(fontSizeValue) {
    document.documentElement.style.setProperty('--bible-paragraph-font-size', `${fontSizeValue / 10}rem`);
  }
}
