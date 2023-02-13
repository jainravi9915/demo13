import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { SignupComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from './services/auth.guard';
import { AllEnquiryComponent } from './user/all-enquiry/all-enquiry.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    
  },
  // {
  //   path:'login',
  //   component:LoginComponent
  // },
  // {
  //   path:'enquiry',
  //   component:SignupComponent
  // },
  
  {
    path:'about-us',
    component:AboutUsComponent,
  },
  
  {
    path:'contact-us',
    component:ContactUsComponent,
  },
  {
    path:'our-services',
    component:OurServicesComponent,
  },
  // {
  //   path:'user-dashboard',
  //   component:UserDashboardComponent,
  //   canActivate:[AuthGuard],
  //   children:[
  //     {
  //       path:'',
  //       component:ProfileComponent,
  //       pathMatch:'full'
  //     },
  //     {
  //       path:'profile',
  //       component:ProfileComponent,
  //     },
  //     {
  //       path:'get-all-enquiry',
  //       component:AllEnquiryComponent,
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
