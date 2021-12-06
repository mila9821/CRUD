import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public lista: Cliente[] = [];

  // hace una lista desde interfaces usuario
  listarUsuario(){
    this.http.get<Cliente[]>('http://127.0.0.1:8080/api/usuarios')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

}
