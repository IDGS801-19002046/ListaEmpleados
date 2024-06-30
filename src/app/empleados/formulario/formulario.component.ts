import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  empleado: IEmpleado ={
    numEmpleado: 0,
    nombre: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
    sexo: "",
  }

  constructor(private EmpleadoService: EmpleadoService) { }

  agregarEmpleado(){
    if(this.empleado.nombre.trim().length == 0 ||
       this.empleado.correo.trim().length == 0 ||
       this.empleado.telefono.trim().length == 0 ||
       this.empleado.fechaNacimiento.trim().length == 0 ||
       this.empleado.sexo.trim().length == 0)
      return;
    if(this.empleado.numEmpleado === null)
      return;

    this.EmpleadoService.agregarEmpleado(this.empleado);

    this.empleado = {
      numEmpleado: 0,
      nombre: "",
      correo: "",
      telefono: "",
      fechaNacimiento: "",
      sexo: ""
    }

  }

}
