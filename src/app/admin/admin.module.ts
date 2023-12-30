import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CloseQuarterComponent } from './close-quarter/close-quarter.component';
import { LeCalculationComponent } from './le-calculation/le-calculation.component';
import { RoundingModelCalculationComponent } from './rounding-model-calculation/rounding-model-calculation.component';
import { AngularMaterialModule } from '../shared/modules/AngularMaterial.module';
import { SharedModule } from '../shared/modules/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    CloseQuarterComponent,
    LeCalculationComponent,
    RoundingModelCalculationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule, 
    SharedModule       
  ]
})
export class AdminModule { }
