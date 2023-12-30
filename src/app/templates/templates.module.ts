import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { DialogCreateResourceComponent } from './dialog-create-resource/dialog-create-resource.component';
import { DialogPostCommentsComponent } from './dialog-post-comments/dialog-post-comments.component';
import { AngularMaterialModule } from '../shared/modules/AngularMaterial.module';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  declarations: [
    TemplatesComponent,
    DialogCreateResourceComponent,
    DialogPostCommentsComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    AngularMaterialModule,
    SharedModule,
  ]
})
export class TemplatesModule { }
