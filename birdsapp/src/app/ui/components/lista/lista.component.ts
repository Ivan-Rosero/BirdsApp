import { Component, OnInit, Input } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecases/bird.usecase';
import { CountryUseCase } from 'src/app/domain/usecases/country.usecase';
import { ZoneUseCase } from 'src/app/domain/usecases/zone.usecase';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() entidad: string = "";
  birdList : any;
  zoneList: any;

  constructor(private birdUseCase: BirdUseCase, private countryUseCase: CountryUseCase,  private zoneUseCase: ZoneUseCase, ) { }

  ngOnInit(): void {
    this.birdUseCase.findAllBirds().subscribe(
      result => { this.birdList = result;

        
      }
    )

    this.zoneUseCase.findAllZones().subscribe(
      result => { this.zoneList = result;

        
      }
    )
  }


}
