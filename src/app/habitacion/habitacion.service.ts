import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitacion } from '../Interfaces/habitacion.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient) { }

  public lista: Habitacion[] = [];

  // hace una lista desde interfaces usuario
  listarUsuario(){
    this.http.get<Habitacion[]>('http://127.0.0.1:8080/api/usuarios')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

}
