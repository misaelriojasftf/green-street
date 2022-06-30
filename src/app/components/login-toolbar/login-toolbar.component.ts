import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/login/panel', title: 'Panel', class: '' },
  { path: '/login/admin', title: 'Admin', class: '' },
  { path: '/login/company', title: 'Company', class: '' },

];
@Component({
  selector: 'login-toolbar',
  templateUrl: './login-toolbar.component.html',
  styleUrls: ['./login-toolbar.component.scss']
})
export class LoginToolbarComponent implements OnInit {
  menuItems: any[];
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
