import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { AvailablePipe } from '../shared/pipe/available.pipe';
import { AvailableDiective } from '../shared/directives/available.directive';
import { ViewCountryComponent } from './view-country/view-country.component';


@NgModule({
  declarations: [
    CountryComponent, 
    AvailablePipe,
    AvailableDiective,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule
  ]
})
export class CountryModule { }
