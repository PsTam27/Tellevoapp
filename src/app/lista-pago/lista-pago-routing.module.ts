import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPagoPage } from './lista-pago.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPagoPageRoutingModule {}
