import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SigninComponent } from './signin/signin.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
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
