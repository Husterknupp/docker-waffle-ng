import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Container } from './container';
import { ContainerService } from './container.service';

@Component({
  selector: 'container-detail',
  templateUrl: './container-detail.component.html'
})
export class ContainerDetailComponent implements OnInit {
    @Input() container: Container;

    constructor(
        private containerService: ContainerService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.containerService.getContainer(+params['id']))
            .subscribe(container => {
                if (container != null) {
                    this.container = container;
                }
            });
    }

    goBack(): void {
        this.location.back();
    }
}
