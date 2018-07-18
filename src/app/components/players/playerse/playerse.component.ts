import { Component, OnInit } from '@angular/core';

import { Players  } from '../../../models/player';

import { PlayeridService  } from '../../../services/playerid.service';

import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-playerse',
  templateUrl: './playerse.component.html',
  styleUrls: ['./playerse.component.css']
})
export class PlayerseComponent implements OnInit {
  players: Players[];
  idPlayer: string;
  player: Players = {
  id: '',
  name: undefined,
  Avgte: '' ,
  BBOLASte:'' ,
  BBOLASPte: '',
  BRte:'' ,
  Birdthdate: '',
  CAte: '',
  CEte: '',
  CLIMPte: '',
  CSUCte: '',
  EFECTte: '',
  Gldate: '',
  HPERMte: '',
  HRte: '',
  INNPte: '',
  PCHEte: '',
  PCHESRte: '',
  Position: '',
  VBte: '',
  hitste: '',
  lastname: '',
 
  team: ''
   };


  constructor(
    private playeridService: PlayeridService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {  this.playeridService.getPlayers().subscribe(players => {
    // console.log(players);
    this.players = players;
  })
  }

  onSavePlayer(){
    if(this.player.name != '' && this.player.lastname != '') {
      this.playeridService.addPlayer(this.player);
      this.player.name='';
      this.player.lastname='';
      this.player.VBte='';
      this.player.CAte='';
      this.player.CEte='';
      this.player.BRte='';
      this.player.HRte='';
      this.player.hitste='';

    }} 


    // this.playeridService.getOnePlayer().subscribe(player => {
    // console.log(player)
  };

    // this.getDetallesPlayer();
  

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

   


