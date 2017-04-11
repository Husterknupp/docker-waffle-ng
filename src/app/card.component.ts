import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-card',
  template: `
	<div class="card w-75" [class.card-outline-warning]="hero.hover" 
	(mouseover)='onHoverOverHero(hero)' (mouseout)='onHoverHeroOut(hero)'>
	  <div class="card-block">
	    <h3 class="card-title">{{hero.name}}</h3>
	    <p class="card-text">{{hero.id}}</p>
	    <div *ngIf="hero.id == selectedHero.id">
	    	<hero-detail [hero]="selectedHero"></hero-detail>
	    </div>
	    <a href="#" class="btn btn-primary">Button</a>
	  </div>
	</div>
  `
})
export class CardComponent {
	@Input() hero: Hero;
	@Input() selectedHero: Hero;

	change() : void;

	change() {
		this.hero.id = this.hero.id + 1;
		console.log(this.hero.id)
	}

	onHoverOverHero(hero: Hero) {
  	hero.hover = true;
  }
  
  onHoverHeroOut(hero: Hero) {
  	hero.hover = false;
  }
}
