import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../Interfaces/habitacion.interface';
import { HabitacionService } from '../habitacion.service';

@Component({
  selector: 'app-editarhabitacion',
  templateUrl: './editarhabitacion.component.html',
  styleUrls: ['./editarhabitacion.component.css']
})
export class EditarhabitacionComponent implements OnInit {

  constructor(private habitacionSer : HabitacionService) { }

  ngOnInit(): void {
  }

  editarHabitacion(inputNombre: string,inputEstado: string,inputTipo: string,inputPrecio: number,inputDescripcion: string){
    const nuevoHabitacion: Habitacion = {
      id: 0,
      nombre: inputNombre,
      estado: inputEstado,
      tipo: inputTipo,
      precio: inputPrecio,
      descripcion: inputDescripcion,
      detalleReservas: []
    };

    this.habitacionSer.editarHabitacion(1, nuevoHabitacion);
  }

}
