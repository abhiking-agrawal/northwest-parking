import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { ParkingSlotData } from 'src/app/model/parkingSlotData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-slot-booking',
  templateUrl: './parking-slot-booking.component.html',
  styleUrls: ['./parking-slot-booking.component.css']
})
export class ParkingSlotBookingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'location', 'action'];
  dataSource: MatTableDataSource<ParkingSlotData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private dataservice: DataService,private router: Router) { 
   
  }
  ngOnInit() {
    this.refresh()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refresh(){
    this.dataservice.getAllParkingSlotsForUser().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  redirectToBook(record){
    this.router.navigate(['/user/book-parking',record._id]);
  }
}
