import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { AdminService } from './admin.service';
import { RegistrationService } from './registration.service';
import { ReservationService } from './reservation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour App';

  constructor(private service: HttpService) {}

  get(){
    this.service.getData().subscribe(data=> {
        console.log(data, "data from db")
    },
  err=>{
       console.error(err, "error found")
  })
  }
}
