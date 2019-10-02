import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-some-module-detail',
  templateUrl: './some-module-detail.component.html',
  styleUrls: ['./some-module-detail.component.scss']
})
export class SomeModuleDetailComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SomeModuleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {obj: any, action: string},
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fname: this.getValue('fname'),
      mname: this.getValue('mname'),
      lname: this.getValue('lname'),
    });
    if (this.data.action === 'view') {
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.controls[key].disable();
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getValue(key: string): string {
    return !!this.data.obj && !!this.data.obj[key] ? this.data.obj[key] : '';
  }
}
