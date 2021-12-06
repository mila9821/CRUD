import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Interfaces/cliente.interface';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.css']
})
export class NuevoclienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  crearCliente(inputNombre: string,inputFoto: string,inputModo: string,inputTelefono: string,inputEmail: string,inputPais: string,inputDni: string){
    const nuevoCliente: Cliente = {
      id: 0,
      nombre: inputNombre,
      foto: inputFoto,
      modo: inputModo,
      telefono: inputTelefono,
      email: inputEmail,
      pais: inputPais,
      dni: inputDni     

    };
    this.clienteService.agregarCliente(nuevoCliente);
  }

  

}
