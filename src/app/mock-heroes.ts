/*Inportamos Hero ya que vamos a crear heroes */
import { Hero } from './hero';

/* Exportamos la constante HEROES que contiene un array de objetos hero */
/* Los declaramos como objeto hero para que lance error en caso de que los
  objetos no se creen correctamente, a diferencia de js que no lanza errores
  al no tener tipos*/
export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
