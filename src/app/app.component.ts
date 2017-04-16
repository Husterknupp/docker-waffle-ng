import { Component } from '@angular/core';

@Component({
	selector: 'sg-hi-docker',
	template: `
	  <h1>{{title}}</h1>
	  <sg-my-containers>
	`
})
export class AppComponent {
	title: string = 'Popular Docker Container';
}