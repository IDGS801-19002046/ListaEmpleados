import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from './empleado.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [

    EncabezadoComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EncabezadoComponent,
    FormularioComponent,
    ListaComponent
  ],
  providers: [
    EmpleadoService
  ]
})
export class EmpleadosModule { }
