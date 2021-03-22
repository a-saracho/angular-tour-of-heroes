import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

/* Para poder utilizar objetos tipo hero en el componente hero-detail */
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /* Al utilizar el componente se le va a pasar un dato que se llamará hero */
  @Input() hero?: Hero;

  /* PAra poder acceeder mediante ruta a los detalles */
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get('id'); /* Tomamos la id del parámetro de la ruta */
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero); /* Buscamos el hero mediante su id para tomarlo */
  }
  /* Función para volver atrás */
  goBack(): void {
    this.location.back();
  }

}
