import { Component, OnInit, Input } from '@angular/core';
/* Para poder utilizar objetos tipo hero en el componente hero-detail */
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /* Al utilizar el componente se le va a pasar un dato que se llamará hero */
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
