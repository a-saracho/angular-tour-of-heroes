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
    /* Cabeceras de las peticiones HTTP */
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


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
  /* Función para buscar un hero por su id, cuando trabajamos con datos locales*/
  /*getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }*/
  /* GET hero by id. Will 404 if id not found
   sustituye a la anterior getHero para realizar la petición mediante GET al servidor REST */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
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
