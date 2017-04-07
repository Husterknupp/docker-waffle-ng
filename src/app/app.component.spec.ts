import { TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { AppComponent, Hero } from './app.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	imports: [FormsModule],
    	declarations: [AppComponent], 
    });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});

describe('onHoverHeroOut', () => {
  it('should toggle hover attribute of a hero', () => {
    var moop: AppComponent = new AppComponent();
    var hero: Hero = new Hero();
    hero.hover = true;
    moop.onHoverHeroOut(hero);

    expect(hero.hover).toBe(false);
  });
})
