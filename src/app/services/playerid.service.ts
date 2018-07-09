import { Injectable } from '@angular/core';

import { PlayerInterface } from '../models/player';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class PlayeridService {
playerCollection: AngularFirestoreCollection<PlayerInterface>;
playerDoc: AngularFirestoreDocument<PlayerInterface>;
players: Observable<PlayerInterface[]>;
player: Observable<PlayerInterface>;

  constructor(
    private afs: AngularFirestore) {
    this.playerCollection = this.afs.collection('players', ref => ref);
     }

    addPlayer(player: PlayerInterface) {
      this.playerCollection.add(player);
    }
    getAllPlayers(): Observable<PlayerInterface[]> {
      this.players = this.playerCollection.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PlayerInterface;
          data.id = action.payload.doc.id;
        });
      });
      return this.players;
      }


    getOnePlayer(idPlayer: string) {
    this.playerDoc =  this.afs.doc<PlayerInterface>(`players/${idPlayer}`);
    this.player = this.playerDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as PlayerInterface;
        data.id = action.payload.id;
        return data;
      }
   }));
   return this.player;
    }

    updateplayer(player: PlayerInterface) {
    this.playerDoc = this.afs.doc(`players/${player.id}`);
    this.playerDoc.update(player);
    }
    deletePlayer(player: PlayerInterface) {
    this.playerDoc = this.afs.doc(`players/${player.id}`);
    this.playerDoc.delete();
    }




}


