import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesStoreService } from './countriesStore.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://restcountries.eu/rest/v2/region/';

  constructor(private httpClient: HttpClient, private store: CountriesStoreService) { }

  getCoutries(region) {
    this.httpClient.get(this.apiURL + region).subscribe((data) => {
      let responce: any = data;
      this.store.countries = responce;
    })
  }
}