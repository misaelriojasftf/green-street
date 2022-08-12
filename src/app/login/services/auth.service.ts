import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserResponse } from '../../core/interfaces/user.interface';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private _: Router,
    private tokenService: TokenService,
  ) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  adminLogin(authData: User): Observable<UserResponse | void> {

    console.log('AUTH', authData);
    return this.http
      .post<UserResponse>(`${environment.apiUrl}/auth/admin/signin`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token)
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }

  panelLogin(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.apiUrl}/auth/panel/signin`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token)
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }
  companyLogin(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.apiUrl}/auth/company/signin`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token)
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }

  logout(): void {
    this.tokenService.remove();
    this.loggedIn.next(false);
    //this.router.navigate(['/login/'])
  }

  private checkToken(): void {
    const userToken = this.tokenService.get$();

    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logout() : this.loggedIn.next(true);
  }

  private saveToken(token: string): void {
    this.tokenService.set$ = token;
  }

  private handleError(err): Observable<never> {
    let errorMessage = "An error occured retrieving data";
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    this.toastr.error(`<span class="now-ui-icons ui-1_bell-53"></span> ${err.message}`, '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-danger alert-with-icon",
      positionClass: 'toast-' + 'bottom' + '-' + 'center'
    });
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
