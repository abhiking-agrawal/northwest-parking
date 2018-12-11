import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-or-edit-user',
  templateUrl: './add-or-edit-user.component.html',
  styleUrls: ['./add-or-edit-user.component.css']
})
export class AddOrEditUserComponent implements OnInit {
  adduser = ''
  
  constructor(public dialogRef: MatDialogRef<AddOrEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.adduser = { ...data};  
    
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
      data.userData = this.adduser
      this.dialogRef.close(data);
    }
  }
}
