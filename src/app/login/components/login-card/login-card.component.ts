import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_TYPE } from '../../../core/enums/login-type.enums';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent {

  @Input() public loginType: string;
  loading = false;
  loginForm = this.formBuilder.group(
    {
      username: [''],
      password: [''],
    }
  );

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }


  onLogin() {
    switch (this.loginType) {
      case LOGIN_TYPE.ADMIN:
        this.onAdminLogin();
        break;
      case LOGIN_TYPE.COMPANY:
        this.onCompanyLogin();
        break;
      case LOGIN_TYPE.PANEL:
        this.onPanelLogin();
        break;
      default:
        break;
    }
  }

  onAdminLogin() {
    const formValue = this.loginForm.value;
    this.loading = true;
    this.authService.adminLogin(formValue).subscribe({
      next: (res) => {
        this.loading = false;
        if (res) {
          this.router.navigate(['/']);
        }
      },
      error: (_) => {
        this.loading = false;
      }
    }
    );
  }
  onPanelLogin() {
    const formValue = this.loginForm.value;
    console.log(formValue);
    this.loading = true;
    this.authService.panelLogin(formValue).subscribe({
      next: (res) => {
        this.loading = false;
        if (res) {
          this.router.navigate(['/']);
        }
      },
      error: (_) => {
        this.loading = false;
      }
    }
    );
  }
  onCompanyLogin() {
    const formValue = this.loginForm.value;
    console.log(formValue);
    this.loading = true;
    this.authService.companyLogin(formValue).subscribe({
      next: (res) => {
        this.loading = false;
        if (res) {
          this.router.navigate(['/']);
        }
      },
      error: (_) => {
        this.loading = false;
      }
    }
    );
  }
}
