import { FormsModule } from '@angular/forms';
import { PokemonsRouting } from './pokemons-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../pokemons/pages/list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from '../pokemons/pages/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../pokemons/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../pokemons/pipe/pokemon-type-color.pipe';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './pages/edit-pokemon/form-pokemon/form-pokemon.component';
import { PokemonSearchComponent } from './components/search-pokemons/search-pokemons.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PokemonsRouting,

  ],
  declarations: [
    PokemonListComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    EditPokemonComponent,
    FormPokemonComponent,
    PokemonSearchComponent,

  ],
  providers: []
})
export class PokemonsModule { }
