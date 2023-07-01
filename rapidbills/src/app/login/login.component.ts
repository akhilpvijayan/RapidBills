import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupModalComponent } from './signup-modal/signup-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required)
  })

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  register(){
    this.dialog.open(SignupModalComponent,{width:'1190px', height:'565px', hasBackdrop: true});

  }

}
