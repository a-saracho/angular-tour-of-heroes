/* Importa clases y componentes que va a utilizar el componente*/
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


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
  /* Declaramos que heroes va a ser un array de objetos Hero para evitar errores*/
  heroes: Hero[] = HEROES;
  /* Declaramos la propiedad selectedHero sin valor inicial (? indica que puede no tener valor)*/
  selectedHero?: Hero;


  constructor() { /* Constructor del componente */}

  ngOnInit(): void {
    /*Código que se ejecuta al crear el componente con éxito*/
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
