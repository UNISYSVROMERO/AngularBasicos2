import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  cliente: ICliente = {
    id: 0,
    nombre: '',
    facturacion: 0
  };

  editar: boolean = false;

  constructor() {}

  ngOnInit() {}

  clienteAgregado(cliente: ICliente) {
    alert('Cliente ' + cliente.nombre + ' agregado/modificado con éxito');
  }

  editarCliente(cliente: ICliente) {
    console.log(cliente);
    this.cliente = { ...cliente };//este ...cliente lo que hace es exparcir, y crea un clon del objeto
    //y no tener que operar con la misma referencia en memoria, y no ver a la vez 
    //en los dos compoentes el valor cambiar a la vez por entender que son 
    //la misma variable
  
    this.editar = true;
  }
}
