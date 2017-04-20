import { Component, Input } from '@angular/core';
import { Container } from './container';

@Component({
  selector: 'container-card',
  template: `
	<div class="card w-75" [class.card-outline-warning]="container.hover"
	(mouseover)='onHoverOverContainer(container)' (mouseout)='onHoverContainerOut(container)'>
	  <div class="card-block">
	    <h3 class="card-title">{{container.name}}</h3>
	    <p class="card-text">{{container.id}}</p>
	    <div *ngIf="container.id == selectedContainer.id">
	    	<container-detail [container]="selectedContainer"></container-detail>
	    </div>
	    <a href="#" class="btn btn-primary">Button</a>
	  </div>
	</div>
  `
})
export class CardComponent {
	@Input() container: Container;
	@Input() selectedContainer: Container;

    onHoverOverContainer(container: Container) {
        container.hover = true;
    }
  
    onHoverContainerOut(container: Container) {
        container.hover = false;
    }
}
