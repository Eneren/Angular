import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VoterService } from 'src/services/voter.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'; 
import { TableComponent } from 'src/app/table/table.component';
import { VotersComponent } from './voters/voters.component';
import { favoriteVotersComponent } from './favorite-voters/favorite-voters.component';
import { favoriteVoterService } from 'src/services/favorite-voter.service';
import { VotersFullInfoComponent } from './voters-full-info/voters-full-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    VotersComponent,
    favoriteVotersComponent,
    VotersFullInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    VoterService,
    favoriteVoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }