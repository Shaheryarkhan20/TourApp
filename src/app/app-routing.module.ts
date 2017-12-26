import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TourComponent } from './tour/tour.component';
import { GuideComponent } from './guide/guide.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'tour',component:TourComponent},
  {path:'guide',component:GuideComponent},
  {path:'register',component:RegisterComponent},
  {path: 'reservation',component:ReservationComponent},
  {path: 'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

