import { PokemonListComponent } from './pages/list-pokemons/list-pokemons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DetailPokemonComponent } from '../pokemons/pages/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';


const pokemonsRoutes: Routes = [
{ path: 'pokemons', component: PokemonListComponent },
{ path: 'pokemon/edit/:id', component: EditPokemonComponent },
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
