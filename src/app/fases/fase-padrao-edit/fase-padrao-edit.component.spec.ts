import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasePadraoEditComponent } from './fase-padrao-edit.component';

describe('FasePadraoEditComponent', () => {
  let component: FasePadraoEditComponent;
  let fixture: ComponentFixture<FasePadraoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasePadraoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasePadraoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
