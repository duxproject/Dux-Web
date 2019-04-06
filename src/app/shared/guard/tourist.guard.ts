import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators'
import { User } from '../services/user/user';

@Injectable({
  providedIn: 'root'
})
 
export class TouristGuard implements CanActivate {
  
  constructor(
    private auth: AuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    
    return this.auth.user.pipe (
      take(1),
      map(data => data && data.roles.tourist ? true : false),
      tap(isTourist => {
        if (!isTourist) {
          console.log('Tourists Only');
          this.router.navigate(['./wrong-route']);
        }
      })
    );
  }
}