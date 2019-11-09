import { HttpClient , HttpHeaders} from '@angular/common/http';
import { POKEMONS } from './../shared/POKEMONS';
import { Pokemon } from '../models/pokemon';
import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';

  constructor(private http: HttpClient) { }

  // retourne tous les pokemons
    getPokemons(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
        tap(() => this.log(`fetched pokemons`)),
        catchError(this.handleError(`getPokemons`, [])));
    }

    // retourne le pokemon avec l'identifiant passé
    getPokemon(id: number): Observable<Pokemon> {
      const url = `${this.pokemonsUrl}/${id}`;
      return this.http.get<Pokemon>(url).pipe(
        tap(_ => this.log(`fetched pokemon id=${id}`)),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
      const httpOptions = {
        headers: new HttpHeaders({ 'content-type' : 'application/json'})
      };
      return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
        tap(() => this.log(`update pokemon id=${pokemon.id}`)),
        catchError(this.handleError<any>(`updatedPokemon`))
        );
    }
    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
      const url = `${this.pokemonsUrl}/${pokemon.id}`;
      const httpOptions = {
        headers: new HttpHeaders({ 'content-type' : 'application/json'})
      };
      return this.http.delete<Pokemon>(url, httpOptions).pipe(
        tap(() => this.log(`delete pokemon id=${pokemon.id}`)),
        catchError(this.handleError<any>(`deletedPokemon`))
        );
      }

    getPokemonTypes(): Array < string > {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
    }

    private log(log: string) {
      console.log(log);
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
  }
