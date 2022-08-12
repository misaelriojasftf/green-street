import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoggedGuard implements CanActivate {
  constructor(private authSvc:AuthService,private router:Router){}
  canActivate():Observable<boolean> {
    return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged)=>{
        console.warn('IS LOGGED', isLogged);
        if(!isLogged){
          this.router.navigate(['/login']);
        }
        return isLogged;
      })
    );
  }

}
