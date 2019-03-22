import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { LandingComponent } from '../../components/common/landing/landing.component';
import { SignInComponent } from '../../components/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/auth/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/admin/dashboard/dashboard.component';
import { GuideRequestsComponent } from '../../components/admin/guide-requests/guide-requests.component';
import { GuidesComponent } from '../../components/admin/guides/guides.component';
import { UserprofileComponent } from '../../components/admin/userprofile/userprofile.component';
import { ForgotPasswordComponent } from '../../components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/auth/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";

// Include route guard in routes array
const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'guide-request', component: GuideRequestsComponent, canActivate: [AuthGuard] },
  { path: 'guides', component: GuidesComponent, canActivate: [AuthGuard] },
  { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }