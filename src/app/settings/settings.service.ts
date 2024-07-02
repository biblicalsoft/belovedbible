import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ISettings } from './settings.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  readonly defaults: ISettings = {
    fontSize: 16
  };

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  private async ensureStorage() {
    if (!this._storage) {
      this._storage = await this.storage.create();
    }
  }

  async set(key: string, value: unknown) {
    await this.ensureStorage();

    if (this._storage) {
      return await this._storage.set(key, value);
    }
  }

  async get(key: string) {
    await this.ensureStorage();

    if (this._storage) {
      return await this._storage.get(key);
    }

    return null;
  }

  async setFontSize(fontSizeValue?: number) {
    const previouslyStoredValue = await this.get('fontSize');

    if (!previouslyStoredValue) {
      this.set('fontSize', fontSizeValue);
    }

    document.documentElement.style.setProperty('--bible-paragraph-font-size', `${(previouslyStoredValue ?? this.defaults.fontSize) / 10}rem`);
  }
}
