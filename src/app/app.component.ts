import { Component } from '@angular/core';
import '../assets/css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, hover: false, name: 'Mr. Nice' },
  { id: 12, hover: false, name: 'Narco' },
  { id: 13, hover: false, name: 'Bombasto' },
  { id: 14, hover: false, name: 'Celeritas' },
  { id: 15, hover: false, name: 'Magneta' },
  { id: 16, hover: false, name: 'RubberMan' },
  { id: 17, hover: false, name: 'Dynama' },
  { id: 18, hover: false, name: 'Dr IQ' },
  { id: 19, hover: false, name: 'Magma' },
  { id: 20, hover: false, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  heroes = HEROES;
  selectedHero: Hero = this.heroes[0];

  onKey(event: any) {
    console.log(event.target.value);
  }

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}
}
