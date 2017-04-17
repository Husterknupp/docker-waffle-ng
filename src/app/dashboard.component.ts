import { Component, OnInit } from '@angular/core';

import { Container } from './container';
import { ContainerService } from './container.service';

@Component({
  selector: 'sg-container-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  containers: Container[] = [];

  constructor(private containerService: ContainerService) { }
  
  ngOnInit(): void {
    this.containerService.getContainers()
      .then(containers => this.containers = containers.slice(1, 5));
  }
}

