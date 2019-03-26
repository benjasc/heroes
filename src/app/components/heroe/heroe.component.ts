import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService} from '../../services/heroesService.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  heroe : any = {};

  constructor(private activatedRoute : ActivatedRoute, private heroesService : HeroesService) { 
    this.activatedRoute.params.subscribe(param=>{ //para obtener un parametro desde la url
     // console.log(param.id); //console.log(params['id])
     console.log( this.heroesService.getHeroe(param['id']));
     this.heroe = this.heroesService.getHeroe(param.id);
     
    });
   }


 

}
