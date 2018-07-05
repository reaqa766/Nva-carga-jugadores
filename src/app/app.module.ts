import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

 import {PlayersService } from './services/players.service';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/players/player/player.component';
import { PlayerListComponent } from './components/players/player-list/player-list.component';
import { PitchersComponent } from './components/pitchers/pitchers.component';
import { PitcherComponent } from './components/pitchers/pitcher/pitcher.component';
import { PitcherListComponent } from './components/pitchers/pitcher-list/pitcher-list.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerseComponent } from './components/players/playerse/playerse.component';
import { PlayerseListComponent } from './components/players/playerse-list/playerse-list.component';
import { PitcherseListComponent } from './components/pitchers/pitcherse-list/pitcherse-list.component';
import { PitcherseComponent } from './components/pitchers/pitcherse/pitcherse.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'pitchers', component: PitchersComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'player/player-list', component: PlayerListComponent },
  { path: 'pitcher', component: PitcherComponent },
  { path: 'pitcher-list', component: PitcherListComponent },
  { path: 'playerse', component: PlayerseComponent },
  { path: 'pitcherse', component: PitcherseComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerComponent,
    PlayerListComponent,
    PitchersComponent,
    PitcherComponent,
    PitcherListComponent,
    AboutComponent,
    RegisterComponent,
    NewsComponent,
    NavbarComponent,
    HomeComponent,
    PlayerseComponent,
    PlayerseListComponent,
    PitcherseListComponent,
    PitcherseComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(routes)
    ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
