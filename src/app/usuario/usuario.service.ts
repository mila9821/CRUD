import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 
    
  }

  public lista: Usuario[] = [];

  // hace una lista desde interfaces usuario

  // metodos
  listarUsuario(){
    this.http.get<Usuario[]>('http://127.0.0.1:8080/api/usuarios')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarUsuario(usuario: Usuario){
    this.http.post<any>('http://127.0.0.1:8080/api/usuarios', usuario).subscribe();
  }

}
