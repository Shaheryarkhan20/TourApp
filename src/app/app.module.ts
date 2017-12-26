import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';
import { AdminService } from './admin.service';
import { RegistrationService } from './registration.service';
import { ReservationService } from './reservation.service';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TourComponent } from './tour/tour.component';
import { GuideComponent } from './guide/guide.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TourComponent,
    GuideComponent,
    RegisterComponent,
    ReservationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }




