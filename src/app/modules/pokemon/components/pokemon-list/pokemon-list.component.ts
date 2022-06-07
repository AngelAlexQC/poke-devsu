import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../lib/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Output() onEdit(pokemon: Pokemon): void {}
  @Output() onDelete(pokemon: Pokemon): void {}
  constructor() {}

  ngOnInit(): void {}

  handleEdit(pokemon: Pokemon): void {
    this.onEdit(pokemon);
  }

  handleDelete(pokemon: Pokemon): void {
    this.onDelete(pokemon);
  }

  onImageError(event: Event, text: string): void {
    (event.target as HTMLImageElement).src =
      'https://ui-avatars.com/api/?v1&background=random&color=fff&size=1024&name=' +
      text;
  }
}
