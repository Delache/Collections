import { NotFoundComponent } from './pokemons/pages/not-found/not-found.component';
import { DetailPokemonComponent } from './pokemons/pages/detail-pokemon/detail-pokemon.component';
import { PokemonListComponent } from './pokemons/pages/list-pokemons/list-pokemons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const Routes: Routes = [
{ path: 'pokemons', component: PokemonListComponent },
{ path: 'pokemon/:id', component: DetailPokemonComponent },
{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
{ path: '**' ,  component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
