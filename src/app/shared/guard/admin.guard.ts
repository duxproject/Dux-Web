import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
 
export class AdminGuard implements CanActivate {
  
  constructor(
    private auth: AuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    
    return this.auth.user.pipe (
      take(1),
      map(data => data && data.roles.admin && data.emailVerified ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          console.log('Admins Only');
          this.router.navigate(['./wrong-route']);
        }
      })
    );
  }
}