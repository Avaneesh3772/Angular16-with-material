import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';
import { RoleDefinitionComponent } from './role-definition/role-definition.component';
import { RoleComponent } from './role.component';

const routes: Routes = [
  { path: '', children: [
      { path: 'role-definition', component: RoleDefinitionComponent},
      { path: 'role-assignment', component: RoleAssignmentComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
