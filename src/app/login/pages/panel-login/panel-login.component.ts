import { Component, OnInit } from '@angular/core';
import { LOGIN_TYPE } from '../../../core/enums/login-type.enums';

@Component({
  selector: 'app-panel-login',
  templateUrl: './panel-login.component.html',
  styleUrls: ['./panel-login.component.scss']
})
export class PanelLoginComponent implements OnInit {
  loginType=LOGIN_TYPE.PANEL

  constructor() { }

  ngOnInit(): void {
  }

}
