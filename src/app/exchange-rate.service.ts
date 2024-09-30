import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private apiUrl = 'https://api.nbp.pl/api/exchangerates/tables/A';

  constructor(private http: HttpClient) { }

    getData(date: string = ''): Observable<any> {
      const url = date ? `${this.apiUrl}${date}/?format=json` : `${this.apiUrl}?format=json`;
      return this.http.get<any>(url);
    }
}
