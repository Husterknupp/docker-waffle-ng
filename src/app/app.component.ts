import { Component } from '@angular/core';
import '../assets/css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  values = '';

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

}
