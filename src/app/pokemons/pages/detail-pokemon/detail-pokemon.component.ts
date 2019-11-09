import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
selector: 'app-detail-pokemon',
templateUrl: './detail-pokemon.component.html',
styleUrls: ['./detail-pokemon.component.scss']
})

export class DetailPokemonComponent implements OnInit {

pokemons: Pokemon[] = null;
pokemon: Pokemon = null;

constructor(private route: ActivatedRoute, private router: Router, private service: PokemonsService) {}

ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id');
  this.service.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);
}

goBack(): void {
  this.router.navigate(['/pokemons']);
}

goEdit(pokemon: Pokemon): void {
  const link = ['/pokemon/edit', pokemon.id];
  this.router.navigate(link);
}
}
