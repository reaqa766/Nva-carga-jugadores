import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  players: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.players = db.collection('players').valueChanges();

  }
}
