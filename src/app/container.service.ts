import { Injectable } from '@angular/core';
import { Container } from './container';
import { CONTAINERS } from './mock-containers';

@Injectable()
export class ContainerService {
	getContainers(): Promise<Container[]> {
  	return Promise.resolve(CONTAINERS);
	}
}
