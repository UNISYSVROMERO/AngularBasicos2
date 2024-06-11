import { Component, OnInit } from '@angular/core';
import { IPersona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-pipes-personalizados',
  templateUrl: './pipes-personalizados.component.html',
  styleUrls: ['./pipes-personalizados.component.css']
})
export class PipesPersonalizadosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  enMayusculas: boolean = true;
  metros = 10859;

  personas: IPersona[] = [
    {
      nombre: 'Juan Luis',
      trabaja: true
    },
    {
      nombre: 'Marta',
      trabaja: false
    },
    {
      nombre: 'Pedro',
      trabaja: false
    },
    {
      nombre: 'Iker',
      trabaja: false
    },
    {
      nombre: 'Samuel',
      trabaja: true
    }
  ];

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }
}
