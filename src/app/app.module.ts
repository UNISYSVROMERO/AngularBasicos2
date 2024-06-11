import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioAvanzadoComponent } from './formulario-avanzado/formulario-avanzado.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioReactivoDinamicoComponent } from './formulario-reactivo-dinamico/formulario-reactivo-dinamico.component';
import { PipesComponent } from './pipes/pipes.component';

// Idioma de la app
// Cambiar el locale de la app
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PipesMenosComunesComponent } from './pipes-menos-comunes/pipes-menos-comunes.component';
import { PipesPersonalizadosComponent } from './pipes-personalizados/pipes-personalizados.component';
import { MayusculasPipe } from './pipes-personalizados/mayusculas.pipe';
import { TrabajaPipe } from './pipes-personalizados/trabaja.pipe';
import { DistanciasPipe } from './pipes-personalizados/distancias.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ClientesModule } from './clientes/clientes.module';
import { PromesasComponent } from './promesas/promesas.component';
import { ObservablesComponent } from './observables/observables.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeButtonComponent } from './home-button/home-button.component';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivasComponent,
    FormularioBasicoComponent,
    FormularioAvanzadoComponent,
    FormularioReactivoComponent,
    ErrorMsgDirective,
    FormularioLoginComponent,
    FormularioReactivoDinamicoComponent,
    PipesComponent,
    PipesMenosComunesComponent,
    PipesPersonalizadosComponent,
    MayusculasPipe,
    TrabajaPipe,
    DistanciasPipe,
    LifeCycleComponent,
    PromesasComponent,
    ObservablesComponent,
    HomeComponent,
    HomeButtonComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, ClientesModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], // Idioma por defecto
  bootstrap: [AppComponent]
})
export class AppModule {}
