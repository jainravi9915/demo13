import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorService } from './services/interceptor.service';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule}from'@angular/material/slide-toggle'
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SignupComponent } from './pages/sign-up/sign-up.component';
import { CommentsModule } from './comments/comments.module';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentsComponent } from './comments/comments/comments.component';
import {  ReactiveFormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { AllEnquiryComponent } from './user/all-enquiry/all-enquiry.component';
import { AgGridModule } from 'ag-grid-angular';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UserDashboardComponent,
    ProfileComponent,
    UserSidebarComponent,
    SignupComponent,
    FooterComponent,
    OurServicesComponent,
    AllEnquiryComponent,
    AboutUsComponent,
    ContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    CommentsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AgGridModule,
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
