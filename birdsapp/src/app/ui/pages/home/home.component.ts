import { Component, OnInit } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecases/bird.usecase';
//import { IBirdRequest } from 'src/app/infraestructure/driven-adapter/bird/bird.model';
import { CountryUseCase } from '../../../domain/usecases/country.usecase';
import { ZoneUseCase } from '../../../domain/usecases/zone.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opcion:string = "lista";

  tipo : string = "bird";

  constructor(private birdUseCase: BirdUseCase, private countryUseCase: CountryUseCase, private zoneUseCase: ZoneUseCase) {
  }

  ngOnInit(): void {


  }

  addItem(param: string) {
    this.opcion = param;
  }
}
