import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from '../../lib/interfaces/pokemon';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  const example: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    image: 'https://via.placeholder.com/500',
    attack: 49,
    defense: 49,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    type: 'grass',
    hp: 45,
    idAuthor: 1
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the component is created', () => {
    it('should have a table', () => {
      const table = fixture.nativeElement.querySelector('table');
      expect(table).toBeTruthy();
    });

    it('should have a table header', () => {
      const header = fixture.nativeElement.querySelector('thead');
      expect(header).toBeTruthy();
    });

    it('header should have diferents columns', () => {
      const headers = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];
      const header = fixture.nativeElement.querySelector('thead');
      const th = header.querySelectorAll('th');
      expect(th.length).toBe(headers.length);
      for (let i = 0; i < th.length; i++) {
        expect(th[i].innerText).toBe(headers[i]);
      }
    });

    it('should have a table body', () => {
      const body = fixture.nativeElement.querySelector('tbody');
      expect(body).toBeTruthy();
    });

    it('should have a table row', () => {

      component.pokemons = [example];
      fixture.detectChanges();
      const row = fixture.nativeElement.querySelector('tbody').querySelectorAll('tr');
      expect(row.length).toBe(1);
    });

    it('should have buttons in last column', () => {
      component.pokemons = [example];
      fixture.detectChanges();
      const row = fixture.nativeElement.querySelector('tbody').querySelectorAll('tr');
      const buttons = row[0].querySelectorAll('button');
      expect(buttons.length).toBe(2);
    });

    it('should have a button to edit', () => {
      component.pokemons = [example];
      fixture.detectChanges();
      const row = fixture.nativeElement.querySelector('tbody').querySelectorAll('tr');
      const button = row[0].querySelectorAll('button')[0];
      expect(button.title).toBe('Editar');
    });

    it('should have a button to delete', () => {
      component.pokemons = [example];
      fixture.detectChanges();
      const row = fixture.nativeElement.querySelector('tbody').querySelectorAll('tr');
      const button = row[0].querySelectorAll('button')[1];
      expect(button.title).toBe('Eliminar');
    });
  })
});