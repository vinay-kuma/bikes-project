import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { EditBikeComponent } from './bikes/edit-bike/edit-bike.component';
import { BikeComponent } from './bikes/bike/bike.component';
import { BikesComponent } from './bikes/bikes.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './bikes/edit-bike/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
// import { BikeResolver } from './bikes/bike/bike-resolver.service';
// import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  {
    path: 'bikes',
    canActivateChild: [AuthGuard],
    component: BikesComponent,
    children: [
    { path: ':id', component: BikeComponent },
    { path: ':id/edit', component: EditBikeComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  // { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}