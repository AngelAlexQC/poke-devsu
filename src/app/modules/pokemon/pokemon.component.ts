import { Component, OnInit } from '@angular/core';
import { Pokemon } from './lib/interfaces/pokemon';
import { PokeAPIService } from './services/poke-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  search: string = '';
  isEditing = false;
  constructor(private pokemonService: PokeAPIService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
