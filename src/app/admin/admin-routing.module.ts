import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CloseQuarterComponent } from './close-quarter/close-quarter.component';
import { LeCalculationComponent } from './le-calculation/le-calculation.component';
import { RoundingModelCalculationComponent } from './rounding-model-calculation/rounding-model-calculation.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: AdminComponent},
      { path: 'close-quarter', component: CloseQuarterComponent},
      { path: 'le-calculation', component: LeCalculationComponent},
      { path: 'rounding-model-calculation', component: RoundingModelCalculationComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
