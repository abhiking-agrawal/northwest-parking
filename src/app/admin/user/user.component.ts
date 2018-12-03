import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from 'src/app/dialogs/delete-user/delete-user.component';
import { ViewUserComponent } from 'src/app/dialogs/view-user/view-user.component';
export interface UserData {
  id: string;
  firstName:string;
  lastName: string;
  emailId: string;
  phoneNumber: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

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

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteRecord(data): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '320px',
      data: {message:'Are you sure to delete a user?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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

  
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  return {
    id: id.toString(),
    firstName : NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    lastName :  NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    emailId:  NAMES[Math.round(Math.random() * (NAMES.length - 1))]+"@gmail.com",
    phoneNumber: Math.round(Math.random() * 10000000000000).toString()
  };
}