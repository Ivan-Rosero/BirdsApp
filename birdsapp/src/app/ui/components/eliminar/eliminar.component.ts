import { Component, Input, OnInit } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecases/bird.usecase';
import { ZoneUseCase } from 'src/app/domain/usecases/zone.usecase';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  @Input() entidad: string = "";

  id: number;
  

  constructor(private birdUseCase: BirdUseCase, private zoneUseCase: ZoneUseCase) { }

  ngOnInit(): void {
  }
  deleteBird(){
    this.eliminarBird();
  }

  eliminarBird(){
    this.birdUseCase.deleteBird(this.id).subscribe(
      result => {
        alert(`Se eliminó satisfactoriamente el pajáro con ${this.id}`)
      }
    )
  }

  deleteZone(){
    this.eliminarZone();
  }

  eliminarZone(){
    this.zoneUseCase.deleteZone(this.id).subscribe(
      result => {
        alert(`Se eliminó satisfactoriamente la zona con ${this.id}`)
      }
    )
  }
}
