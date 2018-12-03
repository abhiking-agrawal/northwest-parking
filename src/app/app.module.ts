import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SigninComponent } from './signin/signin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from "./custom-material";
import { UserComponent } from './admin/user/user.component';
import { ParkingSpotComponent } from './admin/parking-spot/parking-spot.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SigninComponent,
    ContactUsComponent,
    OffersComponent,
    HomeComponent,
    UserComponent,
    ParkingSpotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
