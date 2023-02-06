import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBirdModel } from 'src/app/domain/models/bird/bird.model';
import { BirdGateway } from '../../../domain/models/bird/gateway/bird.gateway';
import { IBirdRequest } from './bird.model';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class BirdService extends BirdGateway {
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  });

  //private httpHeaders = new HttpHeaders( {"Contetn-Type" : "application/json"})

  API: string = "http://localhost:8087/bird";

  constructor(public http: HttpClient) {
    super();
  }

  saveBird(params: IBirdRequest): Observable<IBirdModel> {
    return this.http.post<IBirdModel>(this.API,params,{headers : this.httpHeaders})
  }
  updateBird(params: IBirdRequest): Observable<IBirdModel> {
    return this.http.put<IBirdModel>(this.API,params,{headers : this.httpHeaders})
  }
  findBirdById( id: number ): Observable<IBirdModel> {
    return this.http.get<IBirdModel>(`${this.API}/${id}`,{headers : this.httpHeaders})
  }
  findAllBirds(): Observable<IBirdModel[]> {
    return this.http.get<Array<IBirdModel>>(this.API, {
      headers: this.httpHeaders
    })
  }
  deleteBird( id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    })
  } 
}
