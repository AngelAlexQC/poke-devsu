import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../../lib/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() isEditing: boolean = false;
  @Input() pokemon: Pokemon;
  @Output() onSubmit: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  pokemonForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', [Validators.required, Validators.pattern('^(http|https)://.*')]),
  });

  constructor() {
    this.pokemon = {
      name: '',
      attack: 50,
      created_at: '',
      defense: 50,
      hp: 0,
      id: 0,
      idAuthor: 1,
      image: '',
      type: '',
      updated_at: ''
    }
  }

  ngOnInit(): void {
  }

  handleSubmit($event: Event) {
    $event.preventDefault();
    this.onSubmit.emit(this.pokemonForm.value);
  }

}
