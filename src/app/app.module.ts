import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { JuegoComponent } from './components/juego/juego.component';
import { PeliculaAleatoriaComponent } from './components/pelicula-aleatoria/pelicula-aleatoria.component';
import { AnfitrionesComponent } from './components/anfitriones/anfitriones.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    JuegoComponent,
    PeliculaAleatoriaComponent,
    AnfitrionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
