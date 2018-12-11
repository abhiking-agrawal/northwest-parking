import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { DeleteUserComponent } from './dialogs/delete-user/delete-user.component';
import { ViewUserComponent } from './dialogs/view-user/view-user.component';
import { AddOrEditUserComponent } from './dialogs/add-or-edit-user/add-or-edit-user.component';
import { AddOrEditParkingLotComponent } from './dialogs/add-or-edit-parking-lot/add-or-edit-parking-lot.component';
import { DeleteParkingSlotComponent } from './dialogs/delete-parking-slot/delete-parking-slot.component';
import { ViewParkingLotComponent } from './dialogs/view-parking-lot/view-parking-lot.component';
import { ParkingSlotBookingComponent } from './user/parking-slot-booking/parking-slot-booking.component';
import { PaymentHistoryComponent } from './user/payment-history/payment-history.component';
import { NotificationService } from './services/notification.service';
import { LoginService } from './services/login.service';
import { DataService } from './services/data.service';
import { BookParkingInfoComponent } from './book-parking-info/book-parking-info.component';

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
    ParkingSpotComponent,
    DeleteUserComponent,
    ViewUserComponent,
    AddOrEditUserComponent,
    AddOrEditParkingLotComponent,
    DeleteParkingSlotComponent,
    ViewParkingLotComponent,
    ParkingSlotBookingComponent,
    PaymentHistoryComponent,
    BookParkingInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    NotificationService,
    DataService
  ],
  entryComponents:[
    DeleteUserComponent,
    ViewUserComponent,
    AddOrEditUserComponent,
    AddOrEditParkingLotComponent,
    DeleteParkingSlotComponent,
    ViewParkingLotComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
