import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SigninComponent } from './signin/signin.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './admin/user/user.component';
import { ParkingSpotComponent } from './admin/parking-spot/parking-spot.component';
import { ParkingSlotBookingComponent } from './user/parking-slot-booking/parking-slot-booking.component';
import { PaymentHistoryComponent } from './user/payment-history/payment-history.component';
import { BookParkingInfoComponent } from './book-parking-info/book-parking-info.component';

const routes: Routes = [
  { path: 'user/payment-history', component: PaymentHistoryComponent },
  { path: 'user/book-parking/:id', component: BookParkingInfoComponent },
  { path: 'user/book-parking', component: ParkingSlotBookingComponent },
  { path: 'admin/users', component: UserComponent },
  { path: 'admin/parkingspots', component: ParkingSpotComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
