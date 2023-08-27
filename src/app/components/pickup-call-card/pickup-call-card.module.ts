import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
@NgModule({
  declarations: [

    PickupCallCardComponent,
  ],
  exports: [
    PickupCallCardComponent,
  ],
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class PickupCallCardModule{ }