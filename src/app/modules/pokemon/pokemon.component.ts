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
  selectedPokemon: Pokemon;
  constructor(private pokemonService: PokeAPIService) {
    this.selectedPokemon = this.selectedPokemon = this.clearPokemon();
  }

  clearPokemon(): Pokemon {
    return {
      attack: 0,
      created_at: new Date().toISOString(),
      defense: 0,
      hp: 0,
      id: 0,
      idAuthor: 1,
      image: '',
      name: '',
      type: '',
      updated_at: ''
    }
  }


  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  scrollToBottom(): void {
    const element = document.getElementById('pokemon-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onEdit(pokemon: Pokemon): void {
    this.isEditing = true;
    this.selectedPokemon = pokemon;
    this.search = '';
    setTimeout(() => {
      this.scrollToBottom();
    });
  }

  onNew(): void {
    this.isEditing = true;
    this.selectedPokemon = this.clearPokemon();
    this.search = '';
    setTimeout(() => {
      this.scrollToBottom();
    });
  }

  onDelete(pokemon: Pokemon): void {
    this.pokemonService.deletePokemon(pokemon.id).subscribe(() => {
      this.getPokemons();
    });
  }


  onCancel(): void {
    this.isEditing = false;

  }

  onSubmit(pokemon: Pokemon): void {
    if (this.selectedPokemon && this.selectedPokemon.id) {
      this.pokemonService.updatePokemon(pokemon).subscribe(() => {
        this.getPokemons();
        this.isEditing = false;
        this.selectedPokemon = this.clearPokemon();
        this.search = '';
      }
      );
    } else {
      this.pokemonService.createPokemon(pokemon).subscribe(() => {
        this.getPokemons();
        this.isEditing = false;
        this.selectedPokemon = this.clearPokemon();
        this.search = '';
      });
    }
  }

  filteredPokemons(): Pokemon[] {
    return this.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }
}
