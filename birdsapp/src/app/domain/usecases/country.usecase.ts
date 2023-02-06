import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ICountryRequest } from "src/app/infraestructure/driven-adapter/country/country.model";
import { ICountryModel } from "../models/country/country.model";
import { catchError } from "rxjs/operators";
import { CountryGateway } from "../models/country/gateway/country.gateway";

@Injectable()
export class CountryUseCase {
    constructor(private countryGateway: CountryGateway){}
        
        saveCountry(params: ICountryRequest): Observable<ICountryModel | null>{
            return this.countryGateway.saveCountry(params).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        updateCountry(params: ICountryRequest): Observable<ICountryModel | null>{
            return this.countryGateway.updateCountry(params).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        findCountryById(id: number): Observable<ICountryModel | null>{
            return this.countryGateway.findCountryById(id).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        findAllCountries(): Observable<Array<ICountryModel> | null>{
            return this.countryGateway.findAllCountries().pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        deleteCountry(id: number): Observable<any | null>{
            return this.countryGateway.deleteCountry(id).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }
}