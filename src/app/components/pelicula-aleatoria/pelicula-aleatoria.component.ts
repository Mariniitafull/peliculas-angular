import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../modelos/pelicula';

@Component({
  selector: 'app-pelicula-aleatoria',
  templateUrl: './pelicula-aleatoria.component.html',
  styleUrls: ['./pelicula-aleatoria.component.css']
})
export class PeliculaAleatoriaComponent implements OnInit {

  pelicula?: Pelicula;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPeliculaAleatoria();
  }

  async obtenerPeliculaAleatoria(){
    this.pelicula = await this.peliculasService.obtenerPeliculaAleatoria();
    
  }

  onActualizar() {
    this.obtenerPeliculaAleatoria();
  }
}
