import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public  userName: string;
  public  userEmail: string;
  public  userPicture: string;
  public  userId: string;
  public  isLogin: boolean;


  constructor(
    private playersService: PlayersService
  ) {}

  ngOnInit() {
    this.onCheckUserLogin();

    }

  onCheckUserLogin() {
   this.playersService.getAuth().subscirbe( auth => {
     if (auth) {
      this.isLogin = true;
      this.userName = auth.displayname;
      this.userEmail = auth.email;
      this.userPicture = auth.photoUrl;
      this.userId = auth.uid;
    } else {
        this.isLogin = false;

     }
   });

  }

  onLogout() {
    this.playersService.logout();
  }

}
