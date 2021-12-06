import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) {
    this.clienteService.listarCliente();
   }

  ngOnInit(): void {
  }

  get listaCliente(){
    
    return this.clienteService.lista;
  }

}
