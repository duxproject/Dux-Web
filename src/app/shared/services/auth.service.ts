import { Injectable, NgZone } from '@angular/core';
import { User } from "./user/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { Observable, of} from 'rxjs';
import { switchMap, first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: Observable<User>; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
          localStorage.setItem('user', JSON.stringify(result.user));
        });
      }).catch((error) => {
        window.alert('Ooops! something went wrong');
      })
  }

  getUser() {
    return this.user;
  }
  GetUser() {
    return this.user.pipe(first()).toPromise();
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert('Please Enter Valid Details.')
      })
  }

  SignUpGuide(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SetUserDataGuide(result.user);
        window.alert('Wait until conformation.');
      }).catch((error) => {
        window.alert('Please Enter Valid Details.')
      })
  }

  SignUpAdmin(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SetUserDataAdmin(result.user);
        window.alert('Wait until conformation.');
      }).catch((error) => {
        window.alert('Please Enter Valid Details.')
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  GoogleSignUp() {
    return this.AuthSignUp(new auth.GoogleAuthProvider());
  }

  GoogleSignUpGuide() {
    return this.AuthSignUpGuide(new auth.GoogleAuthProvider());
  }

  GoogleSignUpAdmin() {
    return this.AuthSignUpAdmin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['/']);
          localStorage.setItem('user', JSON.stringify(result.user));
        })
    }).catch((error) => {
      window.alert(error)
    })
  }

  AuthSignUp(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['./sign-in']);
          localStorage.setItem('user', JSON.stringify(result.user));
        })
        this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  AuthSignUpGuide(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['./sign-in']);
        })
        this.SetUserDataGuide(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  AuthSignUpAdmin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['./sign-in']);
        })

        this.SetUserDataAdmin(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: true,
      roles: {
        tourist: true
      }
    }
    return userRef.set(data, {
      merge: true
    })
  }


  SetUserDataGuide(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: false,
      roles: {
        guide: true
      }
    }
    return userRef.set(data, {
      merge: true
    })
  }

  AcceptUserDataGuide(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: true,

      roles: {
        guide: true
      }
    }
    return userRef.set(data, {
      merge: true
    })
  }

  RemoveUserDataGuide(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: false,
      roles: {
        guide: false
      }
    }
    return userRef.set(data, {
      merge: true
    })
  }

  RemoveUserDataTourist(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: false,
      roles: {
        tourist: false
      }
    }
    return userRef.set(data, {
      merge: true
    })
  }

  SetUserDataAdmin(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: false,
      roles: {
        admin: true
      }
    }
    return userRef.set(data, {
      merge: true
    })
  }

  AcceptUserDataAdmin(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: true,

      roles: {
        admin: true
      }
    }
    return userRef.set(data, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}
