import { Injectable } from '@angular/core';

import {AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';



// import 'rxjs/add/observable/throw';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/toPromise';

// import './rxjs-operators';

// import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

loginGoogle() {
  return this.afAuth.auth.signInWithPopup (new firebase.auth.GoogleAuthProvider());
}

getAuth() {
  return this.afAuth.authState.map(auth => auth);
}

logout() {
  return this.afAuth.auth.signOut();
}


}
