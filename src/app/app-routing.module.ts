import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './shared/guards/dashboard.guard';
import { TemplateGuard } from './shared/guards/template.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { RoleGuard } from './shared/guards/role.guard';
import { RestatementGuard } from './shared/guards/restatement.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, 

  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [DashboardGuard]
  },

  { 
    path: 'templates', 
    loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule),
    canLoad: [TemplateGuard]
  },

  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard]
  },

  { 
    path: 'role', 
    loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
    canLoad: [RoleGuard]
  },
    
  { 
    path: 'restatement', 
    loadChildren: () => import('./restatement/restatement.module').then(m => m.RestatementModule),
    canLoad: [RestatementGuard]
  },
  
  {
    path: '**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
