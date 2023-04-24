import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Result>('./assets/slider/data.json');
  }
}
