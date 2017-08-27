import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.authenticated">Login</button>
      <button (click)="logout()" *ngIf="authService.authenticated">Logout</button>
    </p>`
})
export class AdminLoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.googleLogin().then(() => {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

      // Redirect the user
      this.router.navigate([redirect]);
    });
  }

  logout() {
    this.authService.signOut();
  }

}