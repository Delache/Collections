import { InMemoryDataService } from './services/in-memory-data.service';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    BrowserModule,
    PokemonsModule, // L'odre de chargement des modules est très important
    AppRoutingModule , // pour l'ordre de déclaration des routes !
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, {dataEncapsulation: false}),
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
