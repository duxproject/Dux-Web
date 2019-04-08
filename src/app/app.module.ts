import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';

import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { UserprofileComponent } from './components/admin/userprofile/userprofile.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { UserService } from "./shared/services/user/user.service";

// Auth service
import { AuthService } from "./shared/services/auth.service";


import { LandingComponent } from './components/common/landing/landing.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { GuideRequestsComponent } from './components/admin/guide-requests/guide-requests.component';
import { GuidesComponent } from './components/admin/guides/guides.component';
import { LocationComponent } from './components/admin/location/location.component';
import { AddPackagesComponent } from './components/guide/add-packages/add-packages.component';
import { ManagePackagesComponent } from './components/guide/manage-packages/manage-packages.component';
import { TourRequestsComponent } from './components/guide/tour-requests/tour-requests.component';
import { ViewRatingComponent } from './components/guide/view-rating/view-rating.component';
import { AddRatesComponent } from './components/guide/add-rates/add-rates.component';
import { ViewRatesComponent } from './components/tourist/view-rates/view-rates.component';
import { ViewPackagesComponent } from './components/tourist/view-packages/view-packages.component';
import { ViewGuideProfileComponent } from './components/tourist/view-guide-profile/view-guide-profile.component';
import { ViewPlacesComponent } from './components/tourist/view-places/view-places.component';
import { MapComponent } from './components/tourist/map/map.component';
import { TravelPlanComponent } from './components/tourist/travel-plan/travel-plan.component';
import { SignUpGuideComponent } from './components/auth/sign-up-guide/sign-up-guide.component';
import { SignUpAdminComponent } from './components/auth/sign-up-admin/sign-up-admin.component';
import { SignUpScComponent } from './components/auth/sign-up-sc/sign-up-sc.component';
import { PackageListComponent } from './components/tourist/package-list/package-list.component';
import { RateListComponent } from './components/tourist/rate-list/rate-list.component';
import { AdminRequestsComponent } from './components/admin/admin-requests/admin-requests.component';
import { TourDashboardComponent } from './components/tourist/tour-dashboard/tour-dashboard.component';

import { LocationService } from './shared/services/location/location.service';
import { PackageService } from './shared/services/package/package.service';
import { WrongRouteComponent } from './components/common/wrong-route/wrong-route.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserprofileComponent,
    LandingComponent,
    NavbarComponent,
    GuideRequestsComponent,
    GuidesComponent,
    LocationComponent,
    AddPackagesComponent,
    ManagePackagesComponent,
    TourRequestsComponent,
    ViewRatingComponent,
    AddRatesComponent,
    ViewRatesComponent,
    ViewPackagesComponent,
    ViewGuideProfileComponent,
    ViewPlacesComponent,
    MapComponent,
    TravelPlanComponent,
    SignUpGuideComponent,
    SignUpAdminComponent,
    SignUpScComponent,
    PackageListComponent,
    RateListComponent,
    AdminRequestsComponent,
    TourDashboardComponent,
    WrongRouteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserService,
    PackageService,
    LocationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }