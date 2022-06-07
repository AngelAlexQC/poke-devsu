import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../lib/interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private apiURL = environment.apiURL;
  private idAuthor = 1;
  constructor(private httpClient: HttpClient) {}

  getPokemons() {
    return this.httpClient.get<Pokemon>(
      `${this.apiURL}?idAuthor=${this.idAuthor}`
    );
  }

  getPokemon(id: number) {
    return this.httpClient.get<Pokemon>(`${this.apiURL}/${id}`);
  }

  getCount() {
    return this.httpClient.get<Pokemon>(
      `${this.apiURL}/count${this.idAuthor ? `?idAuthor=${this.idAuthor}` : ''}`
    );
  }

  createPokemon(pokemon: Pokemon) {
    return this.httpClient.post<Pokemon>(`${this.apiURL}`, pokemon);
  }

  updatePokemon(pokemon: Pokemon) {
    return this.httpClient.put<Pokemon>(
      `${this.apiURL}/${pokemon.id}`,
      pokemon
    );
  }

  deletePokemon(id: number) {
    return this.httpClient.delete<Pokemon>(`${this.apiURL}/${id}`);
  }
}
