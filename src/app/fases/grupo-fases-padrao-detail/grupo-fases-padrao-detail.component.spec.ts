import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoFasesPadraoDetailComponent } from './grupo-fases-padrao-detail.component';

describe('GrupoFasesPadraoDetailComponent', () => {
  let component: GrupoFasesPadraoDetailComponent;
  let fixture: ComponentFixture<GrupoFasesPadraoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoFasesPadraoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoFasesPadraoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
