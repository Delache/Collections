import { Pokemon } from './../models/pokemon';
import { PokemonsService } from './../services/pokemons.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})


export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private service: PokemonsService) { }
  ngOnInit() {
    this.pokemons = this.service.pokemons;
  }
  selectPokemon(pokemon: Pokemon) {
    alert(`Vous avez cliqué sur ${pokemon.name}`);
  }

}
