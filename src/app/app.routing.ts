import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MAIN_ROUTER_PATH } from './core/enums/routing.enums';
import { CheckLoginGuard } from './core/guards/check-login.guard';
import { CheckLoggedGuard } from './core/guards/check-logged.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: MAIN_ROUTER_PATH.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule),
        canActivate:[CheckLoggedGuard]
      }]
  },
  {
    path: MAIN_ROUTER_PATH.LOGIN,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    //canActivate:[CheckLoginGuard],
    // TODO: ADD GUARD
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: MAIN_ROUTER_PATH.DASHBOARD
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
