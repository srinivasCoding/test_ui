import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CountriesStoreService } from '../countriesStore.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  regionData = this.store.regionData;
  countriesData = [];
  coutriesMasterData = [];
  tableData = [];
  selectedCountry = '';
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];

  constructor(private apiService: ApiService, private store: CountriesStoreService) { }

  ngOnInit() {
    this.store.countries$.subscribe((data) => {
      let responce: any = data;
      this.coutriesMasterData = responce;
      this.coutriesMasterData.forEach((obj) => {
        this.countriesData.push(obj.name)
      })
    })
  }

  populateCountryData(event) {
    this.countriesData = [];
    this.coutriesMasterData = [];
    this.tableData = [];
    this.apiService.getCoutries(event.selectedItem);
  }

  setSelectedCountry(event) {
    this.selectedCountry = event.selectedItem;
  }

  populateTableData() {
    this.tableData = this.coutriesMasterData.filter((a) => a.name === this.selectedCountry);
  }
}