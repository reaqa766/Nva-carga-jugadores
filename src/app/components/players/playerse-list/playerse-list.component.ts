import { Component, OnInit } from '@angular/core';

import { Players  } from '../../../models/player';

import { PlayeridService  } from '../../../services/playerid.service';

import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-playerse-list',
  templateUrl: './playerse-list.component.html',
  styleUrls: ['./playerse-list.component.css']
})
export class PlayerseListComponent implements OnInit {
  players: Players[];
  idPlayer: string;
  editState: boolean = false;
  playerToEdit: Players;
  player: Players = {
  id: '',
  name: undefined,
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
INNPte: '', 
   };


  constructor(
    private playeridService: PlayeridService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.playeridService.getPlayers().subscribe(players => {
    //  console.log(players);
      this.players = players;
    })

 
  };deletePlayer(event, player: Players){
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
}
 


