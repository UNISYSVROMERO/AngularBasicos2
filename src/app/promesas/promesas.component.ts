import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  url = './assets/people.json';

  constructor() {}

  ngOnInit() {
    this.getPeople();
    this.getPeopleAsyncAwait();
  }

  //PRIMERA FORMA DE USARLO
//las promesas deriban en exito (then cuando es exito)o casque (catch)
//resp es la respuesta, que puede llegar con text, json, un ok.... cualquier informacion que 
//traiga la promise
//resp.json, ese json es otra promesa, de modo que se pueda lanzar otro metodo asincrono, qeu igualmente
//desenvocará en otro exito o fracaso
  getPeople() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }


  //SEGUNDA FORMA DE PROBARLO
  //SE abre metodo asincrono, y luego vamos linesa por linea, creando una variable resp
  //en el  que esperamos que llegue un resultado, desde la URL
  //despues en data, esperamos la respuesta de un json, que tambien es asincrono, que 
  //y cuando termine, si todo ha ido bien, mostramos en consola, lo que tengo en el data
  //si sale mal voy al catch 
  async getPeopleAsyncAwait() {
    try {
      const resp = await fetch(this.url);
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
