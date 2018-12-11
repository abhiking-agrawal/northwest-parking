import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-or-edit-parking-lot',
  templateUrl: './add-or-edit-parking-lot.component.html',
  styleUrls: ['./add-or-edit-parking-lot.component.css']
})
export class AddOrEditParkingLotComponent implements OnInit {
  addslot = {}
  constructor(public dialogRef: MatDialogRef<AddOrEditParkingLotComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.addslot = { ...data}
    }

  ngOnInit() {
  }

  onNoClick(data): void {

    this.dialogRef.close({isCanceled : true});
    
  }
  login(data){
    console.log('save called')
    if(data.valid){
      data.isCanceled = false;
      data.userData = this.addslot
      this.dialogRef.close(data);
    }
  }
}
