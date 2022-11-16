import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/clientes/cliente.component';
import { CochesComponent } from './component/coches/coches.component';
import { MarcaComponent } from './component/marca/marca.component';
import { VentasComponent } from './component/ventas/ventas.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClienteComponent
  },

  {
    path: 'coches',
    component: CochesComponent
  },

  {
    path: 'marca',
    component: MarcaComponent
  },

  {
    path: 'ventas',
    component: VentasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
