import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiblePage } from './bible.page';

const routes: Routes = [
  {
    path: '',
    component: BiblePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiblePageRoutingModule {}
