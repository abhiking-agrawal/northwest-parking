import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-parking-slot',
  templateUrl: './delete-parking-slot.component.html',
  styleUrls: ['./delete-parking-slot.component.css']
})
export class DeleteParkingSlotComponent implements OnInit {
  id : any
 flag =  true
  constructor(public dialogRef: MatDialogRef<DeleteParkingSlotComponent>,
    @Inject(MAT_DIALOG_DATA) public dataO) { 
      this.id = dataO.id
    }

  ngOnInit() {
  }
  onNoClick(data): void {

    this.dialogRef.close({flag : data , id : this.id});
    
  }
}
