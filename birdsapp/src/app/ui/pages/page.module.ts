import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdGateway } from '../../domain/models/bird/gateway/bird.gateway';
import { BirdService } from '../../infraestructure/driven-adapter/bird/bird.service';
import { CountryGateway } from '../../domain/models/country/gateway/country.gateway';
import { CountryService } from '../../infraestructure/driven-adapter/country/country.service';
import { ZoneGateway } from '../../domain/models/zone/gateway/zone.gateway';
import { ZoneService } from '../../infraestructure/driven-adapter/zone/zone.service';
import { ComponentsModule } from '../components/components.module';
import { DomainModule } from 'src/app/domain/domain.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DomainModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    {provide: BirdGateway, useClass: BirdService},
    {provide: CountryGateway, useClass: CountryService},
    {provide: ZoneGateway, useClass: ZoneService}
  ],
  exports: [HomeComponent]
})
export class PageModule { }
