import { Component } from '@angular/core';

@Component({
	selector: 'sg-hi-docker',
	template: `
	  <h1>{{title}}</h1>
	  <a routerLink="/containers">Containers</a>
	  <router-outlet></router-outlet>
	`
})
export class AppComponent {
	title: string = 'Popular Docker Container';
}