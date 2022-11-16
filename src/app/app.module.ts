import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ClienteComponent } from './component/clientes/cliente.component';
import { CochesComponent } from './component/coches/coches.component';
import { MarcaComponent } from './component/marca/marca.component';
import { VentasComponent } from './component/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ClienteComponent,
    CochesComponent,
    MarcaComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
