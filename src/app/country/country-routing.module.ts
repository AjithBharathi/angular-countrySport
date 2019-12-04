import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { ViewCountryComponent } from './view-country/view-country.component';


const routes: Routes = [
  { path: '', component: CountryComponent },
  { path: 'view-country/:id', component: ViewCountryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
