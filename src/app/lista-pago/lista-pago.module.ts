import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPagoPageRoutingModule } from './lista-pago-routing.module';

import { ListaPagoPage } from './lista-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPagoPageRoutingModule
  ],
  declarations: [ListaPagoPage]
})
export class ListaPagoPageModule {}
