import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Voter, VoterService } from 'src/services/voter.service';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',

  template:'<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = "any";

}
