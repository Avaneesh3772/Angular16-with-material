import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestatementRoutingModule } from './restatement-routing.module';
import { RestatementComponent } from './restatement.component';
import { InitiateAndDefineComponent } from './initiate-and-define/initiate-and-define.component';
import { RestatedReportsComponent } from './restated-reports/restated-reports.component';
import { TrackComponent } from './track/track.component';
import { TrackAndActionComponent } from './track-and-action/track-and-action.component';
import { AngularMaterialModule } from '../shared/modules/AngularMaterial.module';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  declarations: [
    RestatementComponent,
    InitiateAndDefineComponent,
    RestatedReportsComponent,
    TrackComponent,
    TrackAndActionComponent
  ],
  imports: [
    CommonModule,
    RestatementRoutingModule,
    AngularMaterialModule, 
    SharedModule   
  ]
})
export class RestatementModule { }
