import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';

//enrutacion de las paginas
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { MapComponent } from './paginas/map/map.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'formulario', component: FormularioComponent
  },
  {
    path: 'map', component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
