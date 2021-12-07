import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-voters-full-info',
  templateUrl: './voters-full-info.component.html',
  styleUrls: ['./voters-full-info.component.css']
})
export class VotersFullInfoComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}