import { Component, Input, OnInit, Output, SimpleChange, EventEmitter } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { favoriteVoterService } from 'src/services/favorite-voter.service';
import { find } from 'rxjs/operators';
import { Voter } from 'src/services/voter.service';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { VotersFullInfoComponent } from '../voters-full-info/voters-full-info.component';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers:[favoriteVoterService],
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
    constructor(private favoriteVoterService: favoriteVoterService, public dialog: MatDialog) {}
    @Input() voters: Voter[] = [];
    @Output() favoriteVotersChange = new EventEmitter<Voter[]>();
    displayedColumns: string[] = ['Імя', 'gender', 'birhDate', 'age', 'isfavorite'];

    ngOnInit(): void {
    }
    onCheckboxChange(e: any) {
      if (e.target.checked) {

        let index = this.voters.findIndex(element => element.uuid == e.target.value);
        this.favoriteVoterService.putfavoriteVoter(this.voters[index])
      } else {
        this.favoriteVoterService.removefavoriteVoters(e.target.value)
      }
      this.favoriteVotersChange.emit(this.favoriteVoterService.getfavoriteVoters());
    }

    openDialog(voterUUID: any) {
      var choosenVoter;
      this.voters.find((voter) => {
          if (voter.uuid === voterUUID) {
            choosenVoter = voter
          }
        })
      const dialogRef = this.dialog.open(VotersFullInfoComponent, {
        data: choosenVoter
         });
    }
}