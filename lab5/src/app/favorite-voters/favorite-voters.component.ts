import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { favoriteVoterService } from 'src/services/favorite-voter.service';
import { Voter } from 'src/services/voter.service';
@Component({
  selector: 'app-favorite-voters',
  templateUrl: './favorite-voters.component.html',
  styleUrls: ['./favorite-voters.component.css']
})
export class favoriteVotersComponent implements OnInit, OnChanges {
constructor(private favoriteVoterService: favoriteVoterService) {}
    @Input() favoriteVoters: Voter[] = [];
    // @Output() favoriteVotersChange = new EventEmitter<Voter[]>();
    displayedColumns: string[] = ['name', 'gender', 'birhDate', 'age', 'isfavorite'];
    ngOnInit() { }
    ngOnChanges(){
      // console.log("fav-voters", this.favoriteVoters);
      
      // this.favoriteVoters = this.favoriteVoterService.getfavoriteVoters()
    }
    onCheckboxChange(e: any) {

    // if (!e.target.checked) {
    //   this.favoriteVoterService.removefavoriteVoters(e.target.value)
    //   console.log("removed");
      
    //   console.log(this.favoriteVoterService.getfavoriteVoters())

    // }     
    // this.favoriteVotersChange.emit(this.favoriteVoterService.getfavoriteVoters());

  }

}