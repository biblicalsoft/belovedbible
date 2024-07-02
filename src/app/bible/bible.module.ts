import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BiblePage } from './bible.page';

import { BiblePageRoutingModule } from './bible-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BiblePageRoutingModule,
    SharedModule
  ],
  declarations: [BiblePage]
})
export class BiblePageModule {}
