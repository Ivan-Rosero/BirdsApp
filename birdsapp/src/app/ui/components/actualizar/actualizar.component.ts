import { Component, Input, OnInit } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecases/bird.usecase';
import { CountryUseCase } from 'src/app/domain/usecases/country.usecase';
import { ZoneUseCase } from 'src/app/domain/usecases/zone.usecase';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  @Input() entidad: string = "";
  id: number;
  birdName: string;
  cientificName: string;
  countryName: string;
  zoneName: string;

  constructor(private birdUseCase: BirdUseCase, private countryUseCase: CountryUseCase, private zoneUseCase: ZoneUseCase) { }

  ngOnInit(): void {
  }

  actualizarBird(){
    this.birdUseCase.updateBird({id: this.id, commonName : this.birdName , scientificName : this.cientificName}).subscribe(
      result => {
        console.log(result);
        
        alert(`Se actualizó ${result?.commonName}`)
      }
    )
  }

  // guardarCountry(){
  //   this.countryUseCase.saveCountry({countryName : this.countryName}).subscribe(
  //     result => {
  //       alert(`Se guardo ${result?.countryName}`)
  //     }
  //   )
  // }

  actualizarZone(){
    this.zoneUseCase.updateZone({id: this.id, zoneName : this.zoneName}).subscribe(
      result => {
        alert(`Se actualizó ${result?.zoneName}`)
      }
    )
  }
}
