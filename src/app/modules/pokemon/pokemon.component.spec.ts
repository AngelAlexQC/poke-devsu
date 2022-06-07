import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonComponent } from './pokemon.component';
import { SharedModule } from '../shared/shared.module';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule
      ],
      declarations: [PokemonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listado de Pokemon');
  });

  it('should render a search input component', () => {
    const compiled = fixture.debugElement.nativeElement;
    const component = compiled.querySelector('app-search');
    expect(component).toBeTruthy();
  });

  it('should render a list of pokemon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const component = compiled.querySelector('app-pokemon-list');
    expect(component).toBeTruthy();
  });
});
