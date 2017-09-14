import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as _ from 'lodash';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      // Store the attempted URL for redirecting
      this.auth.redirectUrl = state.url;

      return  this.auth.user
                  .take(1)
                  .map(user => _.has(_.get(user, 'roles'), 'admin'))
                  .do(loggedIn => {
                    if (!loggedIn) {
                      console.log('access denied');
                      this.router.navigate(['/login']);
                    }
                });
  }
}
