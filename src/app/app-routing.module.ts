import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

/* Rutas que queremos que existan en la aplicación
   Cada ruta consta de un path y su componente de destino */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, /* Ruta por defecto */
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
