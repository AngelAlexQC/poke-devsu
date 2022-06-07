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
  @Input() pokemon: Pokemon | null = null
  @Output() pokemonChange = new EventEmitter<Pokemon>();
  @Output() onSubmit: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  @Output() onCancel: EventEmitter<null> = new EventEmitter<null>();
  types: string[] = ['fire', 'water', 'normal', 'bug', 'poison']
  pokemonForm = new FormGroup({
    name: new FormControl(
      '',
      Validators.required),
    image: new FormControl(
      '',
      [Validators.required, Validators.pattern(/^https?:\/\/.*\.(png|jpg|jpeg|svg)$/)]),
    attack: new FormControl(
      '',
      [Validators.required, Validators.min(0), Validators.max(100)]),
    defense: new FormControl(
      '',
      [Validators.required, Validators.min(0), Validators.max(100)]),
    type: new FormControl(
      '',
      Validators.required),
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  handleSubmit($event: Event) {
    $event.preventDefault();
    if (this.pokemon) this.onSubmit.emit({
      ...this.pokemon,
      name: this.pokemonForm.value.name || this.pokemon.name,
      image: this.pokemonForm.value.image || this.pokemon.image,
      attack: this.pokemonForm.value.attack || this.pokemon.attack,
      defense: this.pokemonForm.value.defense || this.pokemon.defense,
      type: this.pokemonForm.value.type || this.pokemon.type,
    }); else this.onSubmit.emit({
      name: this.pokemonForm.value.name,
      image: this.pokemonForm.value.image,
      attack: this.pokemonForm.value.attack,
      defense: this.pokemonForm.value.defense,
      type: this.pokemonForm.value.type,
      created_at: new Date().toISOString(),
      hp: 0,
      id: 0,
      idAuthor: 1,
      updated_at: ''
    });
  }

  handleCancel(event: Event) {
    event.preventDefault();
    this.onCancel.emit(null);
    window.scrollTo(0, 0);
  }

}
