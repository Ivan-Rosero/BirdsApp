import { Observable } from "rxjs";
import { IZoneRequest } from "src/app/infraestructure/driven-adapter/zone/zone.model";
import { IZoneModel } from "../zone.model";


export abstract class ZoneGateway {
    abstract saveZone(params: IZoneRequest): Observable<IZoneModel>;

    abstract updateZone(params: IZoneRequest): Observable<IZoneModel>;
    
    abstract findZoneById(id: number): Observable<IZoneModel>;
    
    abstract findAllZones(): Observable<Array<IZoneModel>>;

    abstract deleteZone(id: number): Observable<boolean>;
}