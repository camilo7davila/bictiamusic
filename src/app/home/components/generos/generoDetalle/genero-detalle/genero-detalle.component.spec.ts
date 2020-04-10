import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroDetalleComponent } from './genero-detalle.component';

describe('GeneroDetalleComponent', () => {
  let component: GeneroDetalleComponent;
  let fixture: ComponentFixture<GeneroDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
