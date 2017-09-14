import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './user';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  user: BehaviorSubject<User> = new BehaviorSubject(null);

  authState: any = null;

  redirectUrl: string = null;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {

    this.afAuth.authState
      .switchMap(auth => {
        if (auth) {
          /// signed in
          return this.db.object('users/' + auth.uid);;
        } else {
          /// not signed in
          return Observable.of(null);
        }
      })
      .subscribe(user => {
        this.user.next(new User(user));
      });
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });

  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

    ///// SignIn - SignOut Process /////
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.afAuth.auth.signInWithPopup(provider)
        .then(credential =>  {
            this.updateUser(credential.user);
        });
    }

    signOut() {
      this.afAuth.auth.signOut();
    }

    //// Update user data ////
    /// updates database with user info after login
    /// only runs if user role is not already defined in database
    private updateUser(authData) {
      const userData = new User(authData);
      const ref = this.db.object('users/' + authData.uid);
      ref.take(1)
        .subscribe(user => {
          if (!user.roles) {
            ref.update(userData);
          }
      });
    }

}
