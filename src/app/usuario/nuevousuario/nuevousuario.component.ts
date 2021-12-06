import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Interfaces/usuario.interface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  

  crearUsuario(inputNombre: string,inputLogin: string,inputPassword: string,inputEstado: number,inputTarea: string){
    const nuevoUsuario: Usuario = {
      id: 0,
      nombre: inputNombre,
      login: inputLogin,
      password: inputPassword,
      estado: inputEstado,
      tarea: inputTarea
  
    };

    this.usuarioService.agregarUsuario(nuevoUsuario);
  }

}
