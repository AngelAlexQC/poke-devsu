import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormComponent } from './pokemon-form.component';

describe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render form', () => {
    it('should render form', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('form')).toBeTruthy();
    });

    it('should render title', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3')).toBeTruthy();
    });

    it('should render name input', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input[name="name"]')).toBeTruthy();
    });

    it('should render image url input', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input[name="image"]')).toBeTruthy();
    });

    it('should render attack range input between 0 and 100', () => {
      const compiled = fixture.debugElement.nativeElement;
      const input = compiled.querySelector('input[name="attack"][type="range"]');
      expect(input.min).toBe('0');
      expect(input.max).toBe('100');
    })

    it('should render defense range input between 0 and 100', () => {
      const compiled = fixture.debugElement.nativeElement;
      const input = compiled.querySelector('input[name="defense"][type="range"]');
      expect(input.min).toBe('0');
      expect(input.max).toBe('100');
    })
  });
});
