import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Interfaces/cliente.interface';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
export class EditarclienteComponent implements OnInit {

  constructor(private clienteSer:ClienteService) { }

  ngOnInit(): void {
  }

  editarCliente(inputNombre: string,inputFoto: string,inputModo: string,inputTelefono: string,inputEmail: string,inputPais: string,inputDni: string){
    const editarCliente: Cliente = {
      id: 0,
      nombre: inputNombre,
      foto: inputFoto,
      modo: inputModo,
      telefono: inputTelefono,
      email: inputEmail,
      pais: inputPais,
      dni: inputDni,
      testimonios: [],
      detalleReservas: []
    };
    this.clienteSer.editarCliente(1, editarCliente);
  }

}
