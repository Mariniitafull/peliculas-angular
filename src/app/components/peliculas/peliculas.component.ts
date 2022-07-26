import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../modelos/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  numeroPagina = 1;
  numeroElementos = 10;
  peliculas?: Pelicula[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  async obtenerPeliculas() {
    this.peliculas = await this.peliculasService.obtenerPeliculasPorPaginacion(
      this.numeroElementos,
      this.numeroPagina);
  }

  async onChangeNumElementos(numElementosSelect: HTMLSelectElement) {
    this.numeroElementos = +numElementosSelect.value
    this.obtenerPeliculas();
  }

  async onAtras() {
    if(this.numeroPagina > 1) {
      this.numeroPagina--;
    }
    this.obtenerPeliculas();
  }

  async onAdelante() {
    this.numeroPagina++;
    this.obtenerPeliculas();
  }

  async onBuscar(terminoInput: HTMLInputElement) {
    const termino = terminoInput.value;
    if(!termino) {
      return;
    }

    this.peliculas = await this.peliculasService.obtenerPeliculaPorTermino(termino);
  }

  async onBuscarEnter(event: KeyboardEvent, terminoInput: HTMLInputElement) {
    if(event.key === 'Enter') {
      await this.onBuscar(terminoInput);
      terminoInput.value = '';
    }
  }
}