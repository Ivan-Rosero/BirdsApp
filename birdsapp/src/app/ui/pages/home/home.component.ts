import { Component, OnInit } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecases/bird.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opcion:string = "lista";

  tipo : string = "bird";

  constructor(private birdUseCase: BirdUseCase) {
  }

  ngOnInit(): void {


  }

  addItem(param: string) {
    this.opcion = param;
  }
}
