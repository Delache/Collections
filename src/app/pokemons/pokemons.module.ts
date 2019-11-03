import { PokemonsRouting } from './pokemons-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../pokemons/pages/list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from '../pokemons/pages/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../pokemons/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../pokemons/pipe/pokemon-type-color.pipe';

@NgModule({
  imports: [
    CommonModule, PokemonsRouting,

  ],
  declarations: [
    PokemonListComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: []
})
export class PokemonsModule { }
