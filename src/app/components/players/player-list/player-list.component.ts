import { Component, OnInit } from '@angular/core';

import { Players  } from '../../../models/player';

import { PlayeridService  } from '../../../services/playerid.service';

import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Players[];
  idPlayer: string;
  editState: boolean = false;
  playerToEdit: Players;
  player: Players = {
  id: '',
  name: '',
  Avg: '' ,
  BBOLAS:'' ,
  BBOLASP: '',
  BR:'' ,
  Birdthdate: '',
  CA: '',
  CE: '',
  CLIMP: '',
  CSUC: '',
  EFECT: '',
  Gldate: '',
  HPERM: '',
  HR: '',
  INNP: '',
  PCHE: '',
  PCHESR: '',
  Position: '',
  VB: '',
  hits: '',
  hitsPerm:'',
  lastname: '',
  team: '',

 //TEMPORADA
VBte: '',
hitste: '',
Avgte: '',
BBOLASte: '',
BRte: '',
CAte: '',
CEte: '',
HRte: '',

BBOLASPte: '',
CLIMPte: '',
CSUCte: '',
EFECTte: '',
hitsPermte:'',
HPERMte: '',
INNPte: ''
   };


  constructor(
    private playeridService: PlayeridService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.playeridService.getPlayers().subscribe(players => {
      // console.log(players);
      this.players = players;
    })


  };

   deletePlayer(event, player: Players){
   this.playeridService.deletePlayer(player);
  

}

  editPlayer(event, player: Players) {
  this.editState = true;
  this.playerToEdit = player;

}

  updatePlayer(player: Players){
  this.playeridService.updatePlayer(player);
  this.clearState();
}

  clearState() {
  this.editState = false;
  this.playerToEdit = null;
}


    // this.getDetallesPlayer();
  }

  // getDetallesPlayer() {
  //   this.idPlayer = this.route.snapshot.params['id'];
  //   this.playerIdService.getOnePlayer(this.idPlayer).subscribe( player => this.player = player);
  // }

  // onModificarPlayer({value}: {value: PlayerInterface}) {
  //   value.id = this.idPlayer;
  //   this.playeridService.updateplayer(value);
  //   this.router.navigate(['/details/' + this.idPlayer]);
  // }


  // onSavePlayer({value}: {value: PlayerInterface}) {
  // console.log(value);
  // }

  // }



