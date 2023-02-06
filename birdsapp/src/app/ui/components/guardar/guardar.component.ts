import { Component, Input, OnInit } from '@angular/core';
import { ZoneUseCase } from 'src/app/domain/usecases/zone.usecase';
import { CountryUseCase } from 'src/app/domain/usecases/country.usecase';
import { BirdUseCase } from '../../../domain/usecases/bird.usecase';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {

  @Input() entidad: string = "";

  birdName: string;
  cientificName: string;
  countryName: string;
  zoneName: string;

  constructor(private birdUseCase: BirdUseCase, private countryUseCase: CountryUseCase, private zoneUseCase: ZoneUseCase) { }
  

  ngOnInit(): void {
  }

  guardarBird(){
    this.birdUseCase.saveBird({commonName : this.birdName , scientificName : this.cientificName}).subscribe(
      result => {
        console.log(result);
        
        alert(`Se guardo ${result?.commonName}`)
      }
    )
  }

  guardarCountry(){
    this.countryUseCase.saveCountry({countryName : this.countryName}).subscribe(
      result => {
        alert(`Se guardo ${result?.countryName}`)
      }
    )
  }

  guardarZone(){
    this.zoneUseCase.saveZone({zoneName : this.zoneName}).subscribe(
      result => {
        alert(`Se guardo ${result?.zoneName}`)
      }
    )
  }
}
