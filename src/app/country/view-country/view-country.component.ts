import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss']
})
export class ViewCountryComponent implements OnInit {

  key:string = '';
  country:object = {};

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      console.log(res.id);
      this.key = res.id;
      this.fetchCountry();
    })
  }

  fetchCountry(){
    console.log('fn called')
    this.countryService.fetchSingleCountry(this.key).subscribe(res => {
      this.country = res;
    });
  }

}
