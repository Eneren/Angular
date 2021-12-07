import { Injectable } from "@angular/core";
import { Voter } from "./voter.service"; 

@Injectable({
    providedIn: "root",
})
export class favoriteVoterService {
    favoriteVoters: Voter[] = [];

    putfavoriteVoter(fv: Voter): void {
        this.favoriteVoters.push(fv);
    }
    getfavoriteVoters(): Voter[] {
        return this.favoriteVoters;
    }
    removefavoriteVoters(uuid: string): boolean | void{
      let index = this.favoriteVoters.findIndex(element => element.uuid == uuid);
      
      this.favoriteVoters = this.favoriteVoters.filter(value => value.uuid != uuid)
      return index==undefined?false:true;
    }
}