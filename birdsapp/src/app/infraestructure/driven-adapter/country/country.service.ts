import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { ICountryModel } from 'src/app/domain/models/country/country.model';
import { ICountryRequest } from '../country/country.model';

@Injectable({
  providedIn: 'root'
})

export class CountryService extends CountryGateway {

  private httpHeaders = new HttpHeaders({ "Contetn-Type": "application/json" })

  API: string = "localhost:8087/bird";

  constructor(public http: HttpClient) {
    super();
  }

  saveCountry(params: ICountryRequest): Observable<ICountryModel> {
    return this.http.post<ICountryModel>(this.API, params, { headers: this.httpHeaders })
  }
  updateCountry(params: ICountryRequest): Observable<ICountryModel> {
    return this.http.put<ICountryModel>(this.API, params, { headers: this.httpHeaders })
  }
  findCountryById(id: number): Observable<ICountryModel> {
    return this.http.get<ICountryModel>(`${this.API}/${id}`, { headers: this.httpHeaders })
  }
  findAllCountries(): Observable<ICountryModel[]> {
    return this.http.get<Array<ICountryModel>>(this.API, {
      headers: this.httpHeaders
    })
  }
  deleteCountry(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API}/{id}`, {
      headers: this.httpHeaders
    })
  }
}
