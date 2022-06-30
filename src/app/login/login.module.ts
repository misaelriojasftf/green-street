import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { PanelLoginComponent } from './pages/panel-login/panel-login.component';
import { CompanyLoginComponent } from './pages/company-login/company-login.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from './services/auth.service';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


const components = [AdminLoginComponent, PanelLoginComponent, CompanyLoginComponent, LoginCardComponent];
const services = [AuthService];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, LoginRoutingModule,ComponentsModule,ReactiveFormsModule],
  providers: [...services]

})
export class LoginModule { }
