import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  logo: string = '';
  ingrediente: string = '';
  imagen: string = '';
  ingredientes: string[] = ['Huevos', 'Aceite', 'Sal'];
  imagenes: string[] = [];

  constructor() {}

  ngOnInit() {}

  agregarIngrediente() {
    this.ingredientes.push(this.ingrediente);
  }

  agregarIngrediente2(ingrediente: string) {
    const existe = this.ingredientes.find((x) => x === ingrediente);
    if (!existe) {
      this.ingredientes.push(ingrediente);
    } else {
      alert(ingrediente + ' ya existe');
    }
  }

  agregarImagen() {
    this.imagenes.push(this.imagen);
  }

  eliminar(i: number) {
    this.imagenes.splice(i, 1);
  }
}
