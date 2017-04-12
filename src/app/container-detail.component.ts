import { Component, Input } from '@angular/core';
import { Container } from './container';

@Component({
  selector: 'container-detail',
  template: `
  	<h2>{{container.name}} details!</h2>
		<div>
			<label>id: </label>{{container.id}}
		</div>
		<div>
		    <label>name: </label>
		    <input [(ngModel)]="container.name" placeholder="name"/>
		</div>
  `
})
export class ContainerDetailComponent {
	@Input() container: Container;
}
