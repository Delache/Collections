import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PokemonListComponent } from '../pokemons/pages/list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from '../pokemons/pages/detail-pokemon/detail-pokemon.component';


const pokemonsRoutes: Routes = [
{ path: 'pokemons', component: PokemonListComponent },
{ path: 'pokemon/:id', component: DetailPokemonComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class PokemonsRouting { }
