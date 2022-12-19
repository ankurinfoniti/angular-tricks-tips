import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountryState } from '../models/country-state.model';

@Injectable({
  providedIn: 'root',
})
export class CountryStateService {
  constructor(private http: HttpClient) {}

  countries() {
    return this.http.get<ICountryState[]>(`./assets/json/country.json`);
  }

  states(name: string) {
    return this.http.get<ICountryState[]>(`./assets/json/${name}.json`);
  }
}
