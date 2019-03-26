import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroesService.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
busquedaHeroe : any = {};
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
          this.activatedRoute.params.subscribe(param=>{
            console.log(param['texto']);
            
            this.busquedaHeroe = this.heroesService.searchHero(param['texto']);
          })
   }

  ngOnInit() {
  }

}
