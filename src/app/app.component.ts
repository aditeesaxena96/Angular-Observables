import { Component } from '@angular/core';
import { ObserveserviceService } from './observeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
   constructor (private service: ObserveserviceService)
   {}
  getdata()
  {
    var info = this.service.getdata().subscribe(Response=> (console.log(Response)));
    console.log(info)
  }
}
