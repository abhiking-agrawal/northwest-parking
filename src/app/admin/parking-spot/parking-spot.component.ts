import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewParkingLotComponent } from 'src/app/dialogs/view-parking-lot/view-parking-lot.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteParkingSlotComponent } from 'src/app/dialogs/delete-parking-slot/delete-parking-slot.component';
import { AddOrEditParkingLotComponent } from 'src/app/dialogs/add-or-edit-parking-lot/add-or-edit-parking-lot.component';
import { ParkingSlotData } from 'src/app/model/parkingSlotData'
import { NotificationService } from 'src/app/services/notification.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-parking-spot',
  templateUrl: './parking-spot.component.html',
  styleUrls: ['./parking-spot.component.css']
})
export class ParkingSpotComponent implements OnInit {

  displayedColumns: string[] = ['name', 'location','action'];
  dataSource: MatTableDataSource<ParkingSlotData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private dataservice: DataService,
    private calert: NotificationService) { 
    
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

  viewRecord(data): void {
    const dialogRef = this.dialog.open(ViewParkingLotComponent, {
      width: '320px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteRecord(data): void {
    const dialogRef = this.dialog.open(DeleteParkingSlotComponent, {
      width: '320px',
      data: {message:'Are you sure to delete a parking slot?',id : data._id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.dataservice.deleteParkingSlot(result.id).subscribe(res => {
          this.calert.success('Parking slot deleted successfully')
          this.refresh()
        })
      }
    });
  }

  addRecord(): void {
    const dialogRef = this.dialog.open(AddOrEditParkingLotComponent, {
      width: '320px',
      data : { type : 'Add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result && result.valid && !result.isCanceled){
        this.dataservice.addParkingSlot(result.value).subscribe(res => {
          this.calert.success('Parking slot added successfully')
          this.refresh()
        })
      }
    });
  }
  EditRecord(data): void {
    data.type = 'Edit'
    const dialogRef = this.dialog.open(AddOrEditParkingLotComponent, {
      width: '320px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if(result && result.valid && !result.isCanceled){
      var data = { 
        name : result.userData.name,
        location : result.userData.location
      }
        this.dataservice.updateParkingSlot( result.userData._id ,data).subscribe(res => {
          this.calert.success('Parking slot updated successfully')
          this.refresh()
        })
      }
    });
  } 

  refresh(){
    this.dataservice.getAllParkingSlots().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}

