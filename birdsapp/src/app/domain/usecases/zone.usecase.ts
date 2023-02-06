import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IZoneRequest } from "src/app/infraestructure/driven-adapter/zone/zone.model";
import { ZoneGateway } from "../models/zone/gateway/zone.gateway";
import { IZoneModel } from "../models/zone/zone.model";
import { catchError } from "rxjs/operators";

@Injectable()
export class ZoneUseCase {
    constructor(private zoneGateway: ZoneGateway){}
        
        saveZone(params: IZoneRequest): Observable<IZoneModel | null>{
            return this.zoneGateway.saveZone(params).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        updateZone(params: IZoneRequest): Observable<IZoneModel | null>{
            return this.zoneGateway.updateZone(params).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        findZoneById(id: number): Observable<IZoneModel | null>{
            return this.zoneGateway.findZoneById(id).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        findAllZones(): Observable<Array<IZoneModel> | null>{
            return this.zoneGateway.findAllZones().pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }

        deleteZone(id: number): Observable<any | null>{
            return this.zoneGateway.deleteZone(id).pipe(
                catchError(() => {
                    return of(null);
                })
            )
        }
}