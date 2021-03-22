/* Importa clases y componentes que va a utilizar el componente*/
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
/*import { HEROES } from '../mock-heroes';*/
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


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
  /*heroes: Hero[] = HEROES;*/
  heroes: Hero[] = [];
  /* Declaramos la propiedad selectedHero sin valor inicial (? indica que puede no tener valor)*/
  selectedHero?: Hero;

  /* Se genera la variable HeroService ya inicializada e instanciada dentro
     del componente hero, si no le indicaramos el ámbito habría que declararla en el componente */
  constructor(private heroService: HeroService, private messageService: MessageService) { /* Constructor del componente */}

  ngOnInit(): void {
    /*Código que se ejecuta al crear el componente con éxito*/
    this.getHeroes();
  }
  /* Quitamos el onselect ya que ahora se hace con rutas */
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  /* Función que para importar los datos de los heroes del heroService
   a la propiedad heroes del componente */
  getHeroes(): void {
    /* Importamos los datos de forma síncrona */
    /* this.heroes = this.heroService.getHeroes();*/
    /* Importamos los datos de forma asíncrona, usamos subscribe ya que
        no recibiremos los datos de forma inmediata, tenemos que esperar
        a que HeroService los reciba del servidor*/
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

}
