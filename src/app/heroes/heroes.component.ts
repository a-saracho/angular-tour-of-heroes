/* Importa clases y componentes que va a utilizar el componente*/
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

/* Metadatos del componente
  * string selector nombre del selector, se utilizará esta etiqueta html para llamar al componente
  * string templateUrl fichero html del componente
  * array styleUrls estilos css del componente
*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/* Se exporta el componente para poder utilizarlo fuera de si mismo */
export class HeroesComponent implements OnInit {

  /*Propiedades del componente*/
  /*hero = 'Windstorm';*/
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  constructor() { /* Constructor del componente */}

  ngOnInit(): void {
    /*Código que se ejecuta al crear el componente con éxito*/
  }

}
