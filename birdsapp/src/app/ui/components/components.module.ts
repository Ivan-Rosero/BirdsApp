import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { GuardarComponent } from './guardar/guardar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListaComponent,
    ActualizarComponent,
    EliminarComponent,
    GuardarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NavbarComponent, ListaComponent, ActualizarComponent, EliminarComponent, GuardarComponent]
})
export class ComponentsModule { }
