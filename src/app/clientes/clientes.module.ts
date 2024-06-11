import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';

@NgModule({
  declarations: [MainPageComponent, ClientesComponent, AgregarComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [ClientesService]
})
export class ClientesModule {}
