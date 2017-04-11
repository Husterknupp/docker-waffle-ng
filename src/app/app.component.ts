import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import '../assets/css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit { 
  heroes: Hero[];
  selectedHero: Hero;

	constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
    	this.heroes = heroes;
    	this.selectedHero = this.heroes[0];
    });
  }

   ngOnInit(): void {
    this.getHeroes();
  }

  onKey(event: any) {
    console.log(event.target.value);
  }

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}
}
