import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cmp2Page } from './cmp2.page';

const routes: Routes = [
  {
    path: '',
    component: cmp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class cmp2PageRoutingModule {}
