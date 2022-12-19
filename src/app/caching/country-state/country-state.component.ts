import { Component, OnInit } from '@angular/core';
import { ICountryState } from '../models/country-state.model';
import { CountryStateService } from '../services/country-state.service';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css'],
})
export class CountryStateComponent implements OnInit {
  stateMap = new Map<string, ICountryState[]>();

  country!: string;
  countries: ICountryState[] = [];
  states: ICountryState[] = [];

  constructor(private service: CountryStateService) {}

  ngOnInit(): void {
    this.service.countries().subscribe((results) => {
      this.countries = results;
    });
  }

  handleOnCountryChanged() {
    this.service.states(this.country).subscribe((results) => {
      this.states = results;
    });
  }

  // local component based cache
  handleOnCountryChangedX() {
    if (this.stateMap.has(this.country)) {
      this.states = this.stateMap.get(this.country) as ICountryState[];
    } else {
      this.service.states(this.country).subscribe((results) => {
        this.stateMap.set(this.country, results);
        this.states = results;
      });
    }
  }
}
