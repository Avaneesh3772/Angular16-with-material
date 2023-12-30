import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthNamePipe } from '../pipes/month-name.pipe';


@NgModule({
  declarations: [
    MonthNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MonthNamePipe
  ]
})
export class SharedModule { }
