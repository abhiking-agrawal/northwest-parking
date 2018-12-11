import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-book-parking-info',
  templateUrl: './book-parking-info.component.html',
  styleUrls: ['./book-parking-info.component.css']
})
export class BookParkingInfoComponent implements OnInit {
  bookInfo = {}
  
  constructor(private calert: NotificationService, private router: Router) { }

  ngOnInit() {
  }

  confirmBooking(data){
    if(data.valid){
      this.calert.success('Booking confirmed successful')
      this.router.navigate(['/user/payment-history'])
    }

  }

}
