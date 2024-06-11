import { Injectable } from '@angular/core';
import { ICliente } from './interfaces/cliente.interface';

@Injectable()
export class ClientesService {
  clientes: ICliente[] = [
    {
      id: 1,
      nombre: 'Unisys',
      facturacion: 10000
    },
    {
      id: 2,
      nombre: 'Arelance',
      facturacion: 5000
    }
  ];

  constructor() {}

  // agregarCliente(cliente: ICliente): void {
  //   this.clientes.push(cliente);
  // }


  agregarCliente(cliente: ICliente): void {
    cliente.id = this.clientes[this.clientes.length - 1].id + 1;
    this.clientes.push(cliente);
  }

  modificarCliente(cliente: ICliente): void {
    const clienteModificar = this.clientes.find((x) => x.id === cliente.id);
    if (clienteModificar) {
      clienteModificar.nombre = cliente.nombre;
      clienteModificar.facturacion = cliente.facturacion;
    }
  }

  getClientes(): ICliente[] {
    return this.clientes;
  }
}
