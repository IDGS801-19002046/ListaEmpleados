import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  constructor(private EmpleadoService: EmpleadoService){}

  get empleados(): IEmpleado[]{
    return this.EmpleadoService.empleados
  }

  eliminarEmpleado(index: number){
    this.EmpleadoService.eliminarEmpleado(index)
  }

}
