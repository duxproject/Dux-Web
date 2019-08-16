import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NavigatorComponent } from '../app/components/common/navigator/navigator.component';
import { MapoComponent } from './components/admin/map/map.component';

import { GeocodingService } from '../app/components/common/geocoding.service';

import 'leaflet';

// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';

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
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { UserService } from './shared/services/user/user.service';

// Auth service
import { AuthService } from './shared/services/auth.service';


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
import { GuideDashboardComponent } from './components/guide/guide-dashboard/guide-dashboard.component';
import { TouristsComponent } from './components/admin/tourists/tourists.component';
import { LocationListComponent } from './components/admin/location-list/location-list.component';
import { ChatComponent } from './components/common/chat/chat/chat.component';
import { ChathomeComponent } from './components/common/chat/chathome/chathome.component';

import 'hammerjs';
import { TourComponent } from './components/tourist/travel-plan/tour/tour.component';
import { TourListComponent } from './components/tourist/travel-plan/tour-list/tour-list.component';
import { TouristService } from './shared/services/tourist/tourist.service';
import { SideNavComponent } from './components/admin/side-nav/side-nav.component';
import { AddLocationComponent } from './components/guide/add-location/add-location.component';
import { EditLocationComponent } from './components/admin/edit-location/edit-location.component';

import { GuideChatComponent } from './components/guide/guide-chat/guide-chat.component';
import { TouristChatComponent } from './components/tourist/tourist-chat/tourist-chat.component';

import { SideBarComponent } from './components/guide/side-bar/side-bar.component';
import { NotificationsComponent } from './components/tourist/notifications/notifications.component';





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
    GuideDashboardComponent,
    TourDashboardComponent,
    WrongRouteComponent,
    TouristsComponent,
    LocationListComponent,
    NavigatorComponent,
    MapoComponent,
    TourComponent,
    TourListComponent,
    SideNavComponent,
    AddLocationComponent,
    EditLocationComponent,
    ChatComponent,
    ChathomeComponent,
    GuideChatComponent,
    TouristChatComponent,
    SideBarComponent,

    SideBarComponent,

    NotificationsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,

  ],
  providers: [
    AuthService,
    UserService,
    PackageService,
    AngularFireStorage,
    LocationService,
    GeocodingService,
    TouristService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
