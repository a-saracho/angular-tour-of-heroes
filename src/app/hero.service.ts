import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/*Injectable indica que este servicio va a ser usado/usar dependencias*/
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /* Recibimos/enviamos los datos de forma síncrona */
  /*getHeroes(): Hero[] {
    return HEROES;
  }*/

  /* Recibimos/enviamos los datos de forma asíncrona y usamos observable
      ya que la petición http al servidor nos devolverá los datos como observable*/
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
