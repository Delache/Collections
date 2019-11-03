import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pages/list-pokemons/list-pokemons.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipe/pokemon-type-color.pipe';
import { DetailPokemonComponent } from './pages/detail-pokemon/detail-pokemon.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
