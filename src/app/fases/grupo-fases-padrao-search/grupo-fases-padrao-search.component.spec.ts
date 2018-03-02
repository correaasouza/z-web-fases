import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoFasesPadraoSearchComponent } from './grupo-fases-padrao-search.component';

describe('GrupoFasesPadraoSearchComponent', () => {
  let component: GrupoFasesPadraoSearchComponent;
  let fixture: ComponentFixture<GrupoFasesPadraoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoFasesPadraoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoFasesPadraoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
