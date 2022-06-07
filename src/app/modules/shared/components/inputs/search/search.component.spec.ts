import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should renderize form-group', () => {
    it('should renderize form-group', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.form-group')).toBeTruthy();
    });

    it('should renderize input', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input')).toBeTruthy();
    });

    it('renderize with [(text)]', () => {
      const text = 'test';
      component.text = text;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input').value).toBe(text);
    });
  });
})
