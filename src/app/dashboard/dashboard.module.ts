import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DialogUserinfoComponent } from './dialog-userinfo/dialog-userinfo.component';
import { AngularMaterialModule } from '../shared/modules/AngularMaterial.module';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DialogUserinfoComponent,    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    SharedModule    
  ]
})
export class DashboardModule { }
