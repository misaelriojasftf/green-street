import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { CompanyLoginComponent } from './pages/company-login/company-login.component';
import { PanelLoginComponent } from './pages/panel-login/panel-login.component';

const routes: Routes = [
  {
    path: 'panel',
    component: PanelLoginComponent,
  },
  {
    path: 'admin',
    component: AdminLoginComponent,
  },
  {
    path: 'company',
    component: CompanyLoginComponent,
  },
  {
    path: '',
    redirectTo: 'panel'
  },
  {
    path: '**',
    redirectTo: 'panel'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
