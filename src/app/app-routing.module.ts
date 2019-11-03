import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemons/pages/list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './pokemons/pages/detail-pokemon/detail-pokemon.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const Routes: Routes = [
{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
{ path: '**' ,  component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
