import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos: number;
  @Input() totalMasculinos: number;
  @Input() totalFemeninos: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSeleccionado: string = 'Todos';

  constructor() {
    this.todos = 0;
    this.totalMasculinos = 0;
    this.totalFemeninos = 0;
  }

  ngOnInit(): void {
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
}
