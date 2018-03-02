import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoFasesPadraoEditComponent } from './grupo-fases-padrao-edit.component';

describe('GrupoFasesPadraoEditComponent', () => {
  let component: GrupoFasesPadraoEditComponent;
  let fixture: ComponentFixture<GrupoFasesPadraoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoFasesPadraoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoFasesPadraoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
