import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { ContainerDetailComponent } from './container-detail.component';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    ContainerDetailComponent,
    CardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
