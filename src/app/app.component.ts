import { Component } from '@angular/core';

@Component({
	selector: 'sg-hi-docker',
	template: `
	  <h1>{{title}}</h1>
	  <nav>
		  <a routerLink="/containers">Containers</a>
			<a routerLink="/dashboard">Dashboard</a>
	  </nav>
	  <router-outlet></router-outlet>
	`
})
export class AppComponent {
	title: string = 'Popular Docker Container';
}