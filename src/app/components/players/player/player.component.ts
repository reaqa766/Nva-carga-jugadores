import { Component, OnInit } from '@angular/core';

import { PlayerInterface  } from '../../../models/player';

import { PlayeridService  } from '../../../services/playerid.service';

import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  idPlayer: string;
  player: PlayerInterface = {
  id: undefined,
  Avg: undefined,
  BBOLAS: undefined,
  BBOLASP: undefined,
  BR: undefined,
  Birdthdate: undefined,
  CA: undefined,
  CE: undefined,
  CLIMP: undefined,
  CSUC: undefined,
  EFECT: undefined,
  Gldate: undefined,
  HPERM: undefined,
  HR: undefined,
  INNP: undefined,
  PCHE: undefined,
  PCHESR: undefined,
  Position: undefined,
  VB: undefined,
  hits: undefined,
  lastname: undefined,
  name: undefined,
  team: undefined
   };
  constructor(
    private playerIdService: PlayeridService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getDetallesReceta();
  }

  getDetallesReceta() {
    this.idPlayer = this.route.snapshot.params['id'];
    this.playerIdService.getOnePlayer(this.idPlayer).subscribe( player => this.player = player);
  }

  onModificarPlayer({value}: {value: PlayerInterface}) {
    value.id = this.idPlayer;
    this.playerIdService.updateplayer(value);
    this.router.navigate(['/details/' + this.idPlayer]);
  }


  onSavePlayer({value}: {value: PlayerInterface}) {
  console.log(value);
  }

  }



