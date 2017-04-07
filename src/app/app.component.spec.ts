import { TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { AppComponent} from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { Hero } from './hero';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	imports: [FormsModule],
    	declarations: [AppComponent, HeroDetailComponent]
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
