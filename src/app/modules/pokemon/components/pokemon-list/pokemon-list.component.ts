import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../lib/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Input() search: string = '';
  @Output() onEdit = new EventEmitter<Pokemon>();
  @Output() onDelete = new EventEmitter<Pokemon>();
  constructor() { }

  ngOnInit(): void { }

  handleEdit(pokemon: Pokemon): void {
    this.onEdit.emit(pokemon);
  }

  handleDelete(pokemon: Pokemon): void {
    if (confirm('Esta seguro que desea eliminar el pokemon?')) {
      this.onDelete.emit(pokemon);
    }
  }

  onImageError(event: Event, text: string): void {
    (event.target as HTMLImageElement).src =
      'https://ui-avatars.com/api/?v1&background=random&color=fff&size=1024&name=' +
      text;
  }

}
