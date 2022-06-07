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
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  pokemonForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', [Validators.required, Validators.pattern(/^https?:\/\/.*\.(png|jpg|jpeg)$/)]),
    attack: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    defense: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
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

  handleCancel(event: Event) {
    event.preventDefault();
    this.onCancel.emit();
  }

}
