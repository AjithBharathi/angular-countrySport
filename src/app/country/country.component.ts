import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Country } from '../shared/model/country';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  availableCountry:boolean = false;
  dataFound = false;
  countries:Country[] = [];
  user:any

  items = [
    {name: 'person 1', age: 20},
    {name: 'person 2', age: 15},
    {name: 'person 3', age: 22},
    {name: 'person 4', age: 16},
    {name: 'person 5', age: 30},
    {name: 'person 6', age: 26},
    {name: 'person 7', age: 35},
    {name: 'person 8', age: 27},
    {name: 'person 9', age: 20},
    {name: 'person 10', age: 28},
  ]

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem('AUTH_USER'));
    this.onFetchCountry();

    this.items = this.items.filter(item => {
      let count = 0;
      if(item.age >20 && item.age <30 && count < 1) {
        count++;
        return item;
      }
      
    })
    
  }

  onFetchCountry(){
    this.countryService.getCollection().subscribe(result => {
      this.countries = result;
      this.dataFound = true;
      console.log(this.countries)
    },
    err => {
      console.log(err)
      this.dataFound = false;
    });
  }

  onAddCountry(country:NgForm){
    this.countryService.postCollection(country.value.code, country.value.name, country.value.sport, country.value.available)
    .subscribe(res => {
      console.log('added', res);
      country.reset();
      this.onFetchCountry();
    },
    err => {
      console.log(err);
    });
  }

  

 

}
