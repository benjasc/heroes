import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService} from '../../services/heroesService.service';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

   heroes : any[] = [];
  constructor(private heroesService : HeroesService, private router:Router ) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
    
  }

  verHeroe(id:string){
     this.router.navigate(['/heroe',id]);
    
  }


}
