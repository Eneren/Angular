import { Component, OnChanges, OnInit } from '@angular/core';
import { favoriteVoterService } from 'src/services/favorite-voter.service';
import { Voter } from 'src/services/voter.service';
import { VoterService } from 'src/services/voter.service';
@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit, OnChanges {
    voters: Voter[] = [];
    favoriteVoters: Voter[] = [];
    constructor(private voterService: VoterService, private favoriteVoterService: favoriteVoterService) { }
    ngOnInit(): void {
        this.voterService.getVoters().subscribe(voters => {
          this.voters = voters.results.map((item:any) => {
            item.uuid = item.login.uuid;
            item.name = item.name.first + " " + item.name.last;
            item.birthDate = item.dob.date.substring(0, 10);
            item.age = item.dob.age;
            return item
          })

        });
        console.log(this.voters)
        this.voters = this.voters
        this.favoriteVoters = this.favoriteVoterService.getfavoriteVoters();
    }
    ngOnChanges(){
      console.log("On change voters");

    }
    favoriteVotersChange(favoriteVoters: Voter[]){
      this.favoriteVoters = favoriteVoters;
      // console.log("favorite voters changed: change detected in voters component", this.favoriteVoters);
    }

}