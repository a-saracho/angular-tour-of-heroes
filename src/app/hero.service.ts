import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
/* Para hacer peticiones http */
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


/*Injectable indica que este servicio va a ser usado/usar dependencias*/
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    /* Recibimos/enviamos los datos de forma síncrona */
    /*getHeroes(): Hero[] {
      return HEROES;
    }*/
    private heroesUrl = 'api/heroes';  // URL to web api


  /* Recibimos/enviamos los datos de forma asíncrona y usamos observable
      ya que la petición http al servidor nos devolverá los datos como observable*/
  getHeroes(): Observable<Hero[]> {
    /*const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;*/
    /* Hacemos una petición GET mediante HTTP al servidor REST */
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  /* Función para buscar un hero por su id */
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  /* Log a HeroService message with the MessageService
     (para no llamar a message service directamente todo el rato) */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
