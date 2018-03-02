import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasePadraoTableComponent } from './fase-padrao-table.component';

describe('FasePadraoTableComponent', () => {
  let component: FasePadraoTableComponent;
  let fixture: ComponentFixture<FasePadraoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasePadraoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasePadraoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
