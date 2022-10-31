import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { UsersComponent } from './users/users.component';
import { BikeComponent } from './bikes/bike/bike.component';
import { UserComponent } from './users/user/user.component';

import { EditBikeComponent } from './bikes/edit-bike/edit-bike.component';
import { AppRoutingModule } from './app-routing.module';
import { BikesService } from './bikes/bikes.service';
// import { BikeResolver } from './bikes/bike/bike-resolver.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './bikes/edit-bike/can-deactivate-guard.service';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
// import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikesComponent,
    UsersComponent,
    BikeComponent,
    UserComponent,
    EditBikeComponent,
    ErrorPageComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [BikesService, AuthService, AuthGuard, CanDeactivateGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
