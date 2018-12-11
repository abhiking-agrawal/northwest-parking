import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-parking-lot',
  templateUrl: './view-parking-lot.component.html',
  styleUrls: ['./view-parking-lot.component.css']
})
export class ViewParkingLotComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewParkingLotComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
