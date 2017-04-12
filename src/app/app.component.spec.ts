import { TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { AppComponent} from './app.component';
import { ContainerDetailComponent } from './container-detail.component'
import { CardComponent } from './card.component'
import { Container } from './container';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	imports: [FormsModule],
    	declarations: [AppComponent, ContainerDetailComponent, CardComponent]
    });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});

describe('onHoverContainerOut', () => {
  it('should toggle hover attribute', () => {
    var card: CardComponent = new CardComponent();
    var container: Container = new Container();
    container.hover = true;
    card.onHoverContainerOut(container);

    expect(container.hover).toBe(false);
  });
})
