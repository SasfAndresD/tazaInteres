import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazaComponent } from './taza.component';

describe('TazaComponent', () => {
  let component: TazaComponent;
  let fixture: ComponentFixture<TazaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TazaComponent]
    });
    fixture = TestBed.createComponent(TazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
