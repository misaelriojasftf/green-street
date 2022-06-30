import { Component, OnInit } from '@angular/core';
import { LOGIN_TYPE } from '../../../core/enums/login-type.enums';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginType=LOGIN_TYPE.ADMIN

  constructor() { }

  ngOnInit(): void {
  }


}
