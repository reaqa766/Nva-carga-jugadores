import { Injectable } from '@angular/core';

import { Players } from '../models/player';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';

 import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class PlayeridService {
playerCollection: AngularFirestoreCollection<Players>;
playerDoc: AngularFirestoreDocument<Players>;
players: Observable<Players[]>;
player: Observable<Players>;

   constructor(
     public afs: AngularFirestore) {
      //  this.players = this.afs.collection('players').valueChanges();

      this.playerCollection = this.afs.collection('players', ref => ref.orderBy('name', 'asc'));

      this.players = this.playerCollection.snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Players;
          data.id = a.payload.doc.id;
          return data;
        })
      }))

      //  this.players = this.afs.collection('players', ref => ref);
     }

  getPlayers() {
    return this.players;
}

  addPlayer(player: Players){
  this.playerCollection.add(player);
}

  deletePlayer(player: Players) {
    this.playerDoc = this.afs.doc(`players/${player.id}`);
    this.playerDoc.delete();
  

  }

  updatePlayer(player: Players) {
    this.playerDoc = this.afs.doc(`players/${player.id}`);
    this.playerDoc.update(player);
  }

}