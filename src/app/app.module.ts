import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerDetailComponent } from './container-detail.component';
import { CardComponent } from './card.component';
import { ContainerComponent } from './container.component';
import { ContainerService } from './container.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
      {
        path: 'containers',
        component: ContainerComponent // component to create on that path
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    ContainerDetailComponent,
    CardComponent,
    ContainerComponent,
    DashboardComponent
  ],
  providers: [
    ContainerService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
