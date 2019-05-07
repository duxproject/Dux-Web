import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { LandingComponent } from '../../components/common/landing/landing.component';
import { SignInComponent } from '../../components/auth/sign-in/sign-in.component';
import { SignUpScComponent} from '../../components/auth/sign-up-sc/sign-up-sc.component';
import { SignUpAdminComponent } from '../../components/auth/sign-up-admin/sign-up-admin.component';
import { SignUpGuideComponent } from '../../components/auth/sign-up-guide/sign-up-guide.component';
import { SignUpComponent } from '../../components/auth/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/admin/dashboard/dashboard.component';
import { GuideRequestsComponent } from '../../components/admin/guide-requests/guide-requests.component';
import { GuidesComponent } from '../../components/admin/guides/guides.component';
import { UserprofileComponent } from '../../components/admin/userprofile/userprofile.component';
import { ForgotPasswordComponent } from '../../components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/auth/verify-email/verify-email.component';
import { AddPackagesComponent } from '../../components/guide/add-packages/add-packages.component';
import { ManagePackagesComponent } from '../../components/guide/manage-packages/manage-packages.component';
import { AddRatesComponent } from '../../components/guide/add-rates/add-rates.component';
import { TourRequestsComponent } from '../../components/guide/tour-requests/tour-requests.component';
import { ViewRatingComponent } from '../../components/guide/view-rating/view-rating.component';
import { MapComponent } from '../../components/tourist/map/map.component';
import { TravelPlanComponent } from '../../components/tourist/travel-plan/travel-plan.component';
import { ViewGuideProfileComponent } from '../../components/tourist/view-guide-profile/view-guide-profile.component';
import { ViewPackagesComponent } from '../../components/tourist/view-packages/view-packages.component';
import { ViewPlacesComponent } from '../../components/tourist/view-places/view-places.component';
import { ViewRatesComponent } from '../../components/tourist/view-rates/view-rates.component';
import { LocationComponent } from '../../components/admin/location/location.component';
import { AdminRequestsComponent } from '../../components/admin/admin-requests/admin-requests.component';
import { TourDashboardComponent } from '../../components/tourist/tour-dashboard/tour-dashboard.component';
import { WrongRouteComponent } from '../../components/common/wrong-route/wrong-route.component';
import { GuideDashboardComponent } from '../../components/guide/guide-dashboard/guide-dashboard.component';
import { TouristsComponent } from '../../components/admin/tourists/tourists.component';
import { TourListComponent } from '../../components/tourist/travel-plan/tour-list/tour-list.component';
import { AddLocationComponent } from '../../components/guide/add-location/add-location.component';


// Import canActivate guard services
import { AdminGuard } from "../../shared/guard/admin.guard";
import { GuideGuard } from "../../shared/guard/guide.guard";
import { TouristGuard } from "../../shared/guard/tourist.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
import { LocationListComponent } from 'src/app/components/admin/location-list/location-list.component';
import { EditLocationComponent } from 'src/app/components/admin/edit-location/edit-location.component';
//import { MapoComponent } from 'src/app/components/common/map/map.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', component: LandingComponent},
  
  //auth routes
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-guide', component: SignUpGuideComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-admin', component: SignUpAdminComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-tourist', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpScComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
 
  //admin routes
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'admin/guide-request', component: GuideRequestsComponent, canActivate: [AdminGuard] },
  { path: 'admin/admin-request', component: AdminRequestsComponent, canActivate: [AdminGuard] },
  { path: 'admin/guides', component: GuidesComponent, canActivate: [AdminGuard] },
  { path: 'admin/userprofile', component: UserprofileComponent, canActivate: [AdminGuard] },
  { path: 'admin/locations', component: LocationComponent, canActivate: [AdminGuard] },
  { path: 'admin/tourists', component: TouristsComponent, canActivate:[AdminGuard] },
  { path: 'admin/locations-list', component: LocationListComponent, canActivate:[AdminGuard] },
  { path: 'admin/edit-location/:id', component: EditLocationComponent, canActivate:[AdminGuard] },
  
  
  //guide routes
  { path: 'add-package', component: AddPackagesComponent, canActivate: [GuideGuard] },
  { path: 'manage-package', component: ManagePackagesComponent, canActivate: [GuideGuard] },
  { path: 'rates', component: AddRatesComponent, canActivate: [GuideGuard] },
  { path: 'tour-request', component: TourRequestsComponent, canActivate: [GuideGuard] },
  { path: 'view-ratings', component: ViewRatingComponent, canActivate: [GuideGuard] },
  { path: 'guide-dashboard', component: GuideDashboardComponent,canActivate:[GuideGuard]},
  { path: 'add-location', component: AddLocationComponent, canActivate:[GuideGuard]},
  
  //tourist routes
  { path: 'tour-dashboard', component: TourDashboardComponent, canActivate: [TouristGuard]},
  { path: 'map', component: MapComponent, canActivate: [TouristGuard] },
  { path: 'travel-plan', component: TravelPlanComponent, canActivate: [TouristGuard] },
  { path: 'view-guide-profile', component: ViewGuideProfileComponent, canActivate: [TouristGuard] },
  { path: 'view-packages', component: ViewPackagesComponent, canActivate: [TouristGuard] },
  { path: 'view-places', component: ViewPlacesComponent, canActivate: [TouristGuard] },
  { path: 'view-rates', component: ViewRatesComponent, canActivate: [TouristGuard] },
  {path: 'tour-list', component: TourListComponent, canActivate: [TouristGuard]},


  //Wrong route
  { path: 'wrong-route', component: WrongRouteComponent},
  { path: '**', component: WrongRouteComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }