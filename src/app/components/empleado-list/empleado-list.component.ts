import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {
      legajo: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      sexo: 'Masculino',
      salario: 2500,
    },
    {
      legajo: 2,
      nombre: 'Marcos',
      apellido: 'Gonzalez',
      sexo: 'Masculino',
      salario: 3580,
    },
    {
      legajo: 3,
      nombre: 'Marta',
      apellido: 'Garcia',
      sexo: 'Femenino',
      salario: 1500,
    },
    {
      legajo: 4,
      nombre: 'Maria',
      apellido: 'Navarro',
      sexo: 'Femenino',
      salario: 8000,
    },
    {
      legajo: 5,
      nombre: 'Joaquin',
      apellido: 'MArquez',
      sexo: 'Masculino',
      salario: 5800,
    }
  ];

  radioButtonSeleccionado: string = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  getTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  getTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  getTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }
}
