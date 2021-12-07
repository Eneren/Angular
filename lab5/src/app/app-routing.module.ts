import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { favoriteVotersComponent } from './favorite-voters/favorite-voters.component';
import { VotersComponent } from './voters/voters.component';


const routes: Routes = [
  {path: '', component: VotersComponent},
  {path: 'voters', component: VotersComponent},
  {path: 'favorite', component: favoriteVotersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }