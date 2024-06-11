import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo-dinamico',
  templateUrl: './formulario-reactivo-dinamico.component.html',
  styleUrls: ['./formulario-reactivo-dinamico.component.css']
})
export class FormularioReactivoDinamicoComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    bandas: this.fb.array(
      [
        ['U2', Validators.required],
        ['Coldplay', Validators.required]
      ],
      Validators.required
    )
  });

  nuevaBanda: FormControl = this.fb.control('', Validators.required);

  get bandasArr() {
    return this.myForm.get('bandas') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  agregarBanda() {
    const existe = this.bandasArr.controls.find((x) => x.value == this.nuevaBanda.value);

    if (existe) {
      alert('Banda existente');
      return;
    }

    this.bandasArr.push(this.fb.control(this.nuevaBanda.value, Validators.required));
    this.nuevaBanda.reset();
  }

  borrar(i: number) {
    this.bandasArr.removeAt(i);
  }

  guardar() {
    console.log(this.myForm.value);
  }
}
