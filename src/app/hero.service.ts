import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
/* Para hacer peticiones http */
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Para manejo de errores*/
import { catchError, map, tap } from 'rxjs/operators';


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
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
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
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
