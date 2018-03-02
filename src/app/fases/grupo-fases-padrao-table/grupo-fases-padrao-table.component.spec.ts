import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoFasesPadraoTableComponent } from './grupo-fases-padrao-table.component';

describe('GrupoFasesPadraoTableComponent', () => {
  let component: GrupoFasesPadraoTableComponent;
  let fixture: ComponentFixture<GrupoFasesPadraoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoFasesPadraoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoFasesPadraoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
