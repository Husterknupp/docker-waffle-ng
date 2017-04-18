import { TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { ContainerComponent} from './container.component';
import { ContainerDetailComponent } from './container-detail.component'
import { CardComponent } from './card.component'
import { Container } from './container';
import { ContainerService } from './container.service';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	imports: [ 
        FormsModule,
        RouterModule.forRoot([
          {
            path: 'containers',
            component: ContainerComponent // component to create on that path
          }
        ])
      ],
    	declarations: [ 
        ContainerComponent,
        ContainerDetailComponent,
        CardComponent,
      ],
      providers: [
        ContainerService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(ContainerComponent);
    expect(fixture.componentInstance instanceof ContainerComponent).toBe(true, 'should create ContainerComponent');
  });
});

describe('onSelect', () => {
  it('should put property', () => {
    var svc : ContainerService = new ContainerService()
    var component: ContainerComponent = new ContainerComponent(svc);
    var container : Container = new Container();
    container.id = 1;
    component.onSelect(container);

    expect(component.selectedContainer.id).toEqual(1);
  });
})
