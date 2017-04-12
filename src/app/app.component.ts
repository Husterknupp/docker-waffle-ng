import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import '../assets/css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { Container } from './container';
import { ContainerService } from './container.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContainerService]
})
export class AppComponent implements OnInit { 
  containers: Container[];
  selectedContainer: Container;

	constructor(private containerService: ContainerService) { }

	ngOnInit(): void {
    this.getContainers();
  }

  getContainers(): void {
    this.containerService.getContainers().then(containers => {
    	this.containers = containers;
      this.selectedContainer = this.containers[0]
    });
  }

  onKey(event: any) {
    console.log(event.target.value);
  }

	onSelect(container: Container): void {
	  this.selectedContainer = container;
	}
}
