import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { ViewwishlistComponent } from './viewwishlist/viewwishlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent,pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent,pathMatch:"full", canActivate:[authGuard]},
  {path:"registration",component:RegistrationComponent,pathMatch:"full"},
  {path:"viewWishlist",component:ViewwishlistComponent,pathMatch:"full"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
