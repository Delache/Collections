import { Pokemon } from '../../models/pokemon';
import { Router, ActivatedRoute} from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private route: ActivatedRoute, private router: Router, private service: PokemonsService) {}

ngOnInit(): void {
  this.pokemons = this.service.pokemons;
}

selectPokemon(pokemon: Pokemon): void {
  console.log('Vous avez selectionné ' + pokemon.name);
  const link = ['/pokemon', pokemon.id];
  this.router.navigate(link);
}
}
