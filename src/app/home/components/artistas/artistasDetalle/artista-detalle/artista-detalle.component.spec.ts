import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaDetalleComponent } from './artista-detalle.component';

describe('ArtistaDetalleComponent', () => {
  let component: ArtistaDetalleComponent;
  let fixture: ComponentFixture<ArtistaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
