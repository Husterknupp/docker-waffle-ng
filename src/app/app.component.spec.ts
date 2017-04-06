import { TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
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
