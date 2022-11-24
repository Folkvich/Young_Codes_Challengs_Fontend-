import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchLatLongComponent } from './search-lat-long/search-lat-long.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'id', component: SearchIdComponent },
  { path: 'latlong', component: SearchLatLongComponent },
  { path: 'qqqq', component: SearchIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
