import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { cmp2PageRoutingModule } from './cmp2-routing.module';
import { cmp2Page} from './cmp2.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    cmp2PageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [cmp2Page]
})
export class cmp2PageModule {}
