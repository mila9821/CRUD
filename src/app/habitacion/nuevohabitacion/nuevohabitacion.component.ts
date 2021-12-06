import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../habitacion.service';
import { Habitacion } from '../../Interfaces/habitacion.interface';

@Component({
  selector: 'app-nuevohabitacion',
  templateUrl: './nuevohabitacion.component.html',
  styleUrls: ['./nuevohabitacion.component.css']
})
export class NuevohabitacionComponent implements OnInit {

  constructor(private habitacionService: HabitacionService) { }

  ngOnInit(): void {
  }

  crearHabitacion(inputNombre: string,inputEstado: string,inputTipo: string,inputPrecio: number,inputDescripcion: string,inputFoto: string){
    const nuevoHabitacion: Habitacion = {
      id: 0,
      nombreHabitacion: inputNombre,
      fotoHabitacion: inputFoto,
      estadoHabitacion: inputEstado,
      tipoHabitacion: inputTipo,
      precioHabitacion: inputPrecio,
      descripcionHabitacion: inputDescripcion,
      tieneDetalleReservaHab: []
    };

    this.habitacionService.agregarHabitacion(nuevoHabitacion);
  }

}
