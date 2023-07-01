import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent implements OnInit {
  signUpForm = new FormGroup({
    country: new FormControl('',[Validators.required]),
    businessName: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required, Validators.maxLength(100)]),
    phone: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    pincode: new FormControl('',[Validators.required]),
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required)
  })
  constructor(
    private dialogRef: MatDialogRef<SignupModalComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  closeLog(){    
    this.dialogRef.close();
  }
}
