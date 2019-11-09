import { Pokemon } from './../pokemons/models/pokemon';
import { POKEMONS } from '../pokemons/shared/POKEMONS';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
  const pokemons: Pokemon[] = POKEMONS;
  return { pokemons };
  }
}
