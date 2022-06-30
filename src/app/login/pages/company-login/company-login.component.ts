import { Component, OnInit } from '@angular/core';
import { LOGIN_TYPE } from '../../../core/enums/login-type.enums';


@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {

  loginType=LOGIN_TYPE.COMPANY

  constructor() { }

  ngOnInit(): void {
  }

}
