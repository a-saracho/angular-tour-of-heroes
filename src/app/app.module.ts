import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*Para utilizar ngModule en los inputs para modificar propiedades*/
import { FormsModule } from '@angular/forms';
/* Para utilizar rutas personalizadas*/
import { AppRoutingModule } from './app-routing.module';
/*Para hacer peticiones http*/
import { HttpClientModule } from '@angular/common/http';

/* Para simular peticiones http a un servidor, en realidad nos comunicamos con un componente */
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
