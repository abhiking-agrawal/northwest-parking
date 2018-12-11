import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from 'src/app/dialogs/delete-user/delete-user.component';
import { ViewUserComponent } from 'src/app/dialogs/view-user/view-user.component';
import { AddOrEditUserComponent } from 'src/app/dialogs/add-or-edit-user/add-or-edit-user.component';
import { NotificationService } from 'src/app/services/notification.service';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/model/userData'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'phoneNumber','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private dataservice: DataService,
    private calert: NotificationService) {
    // Assign the data to the data source for the table to render
   
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

  deleteRecord(data): void {
    console.log(data)
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '320px',
      data: {message:'Are you sure to delete a user?',id : data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.dataservice.deleteUser(result.id).subscribe(res => {
          this.calert.success('User deleted successfully')
          this.refresh()
        })
      }
    });
  }

  viewRecord(data): void {
    const dialogRef = this.dialog.open(ViewUserComponent, {
      width: '320px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addRecord(): void {
    const dialogRef = this.dialog.open(AddOrEditUserComponent, {
      width: '320px',
      data : { type : 'Add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result && result.valid && !result.isCanceled){
        this.dataservice.addUser(result.value).subscribe(res => {
          this.calert.success('User added successfully')
          this.refresh()
        })
      }
    });
  }

  EditRecord(data): void {
    data.type = 'Edit'
    const dialogRef = this.dialog.open(AddOrEditUserComponent, {
      width: '320px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if(result && result.valid && !result.isCanceled){
      console.log(result)
      var data = { 
        firstName : result.userData.firstName,
        lastName : result.userData.lastName,
        emailId : result.userData.emailId,
        phoneNumber : result.userData.phoneNumber
      }
        this.dataservice.updateUser( result.userData._id ,data).subscribe(res => {
          this.calert.success('User updated successfully')
          this.refresh()
        })
      }
    });
  }  

  refresh(){
    this.dataservice.getAllUsers().subscribe(res => {
      console.log(res)
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}

