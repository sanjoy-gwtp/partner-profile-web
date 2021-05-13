import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-image-dialog',
  templateUrl: './profile-image-dialog.component.html',
  styleUrls: ['./profile-image-dialog.component.css']
})
export class ProfileImageDialogComponent implements OnInit {
  profile: any;

  constructor(public dialogRef: MatDialogRef<ProfileImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(data);
    this.profile = data;
  }

  ngOnInit(): void {
  }

}
