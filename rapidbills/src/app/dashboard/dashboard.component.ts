import { Component, OnInit } from '@angular/core';
import { SignupModalComponent } from '../login/signup-modal/signup-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  register(){
    this.dialog.open(SignupModalComponent,{width:'990px', height:'360px', hasBackdrop: true});

  }
}
