import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule}from '@angular/common/http';
import { EmpleadosModule } from './empleados/empleados.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpleadosModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista de Empleados';
}
