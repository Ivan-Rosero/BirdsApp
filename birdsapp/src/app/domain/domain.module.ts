import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdUseCase } from './usecases/bird.usecase';
import { CountryUseCase } from './usecases/country.usecase';
import { ZoneUseCase } from './usecases/zone.usecase';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    BirdUseCase,
    CountryUseCase,
    ZoneUseCase
  ]
})
export class DomainModule { }
