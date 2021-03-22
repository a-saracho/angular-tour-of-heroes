import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


/*Injectable indica que este servicio va a ser usado/usar dependencias*/
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  /* Recibimos/enviamos los datos de forma síncrona */
  /*getHeroes(): Hero[] {
    return HEROES;
  }*/

  /* Recibimos/enviamos los datos de forma asíncrona y usamos observable
      ya que la petición http al servidor nos devolverá los datos como observable*/
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  /* Función para buscar un hero por su id */
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
