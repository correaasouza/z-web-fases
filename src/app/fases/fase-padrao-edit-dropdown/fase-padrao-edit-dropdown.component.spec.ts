import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasePadraoEditDropdownComponent } from './fase-padrao-edit-dropdown.component';

describe('FasePadraoEditDropdownComponent', () => {
  let component: FasePadraoEditDropdownComponent;
  let fixture: ComponentFixture<FasePadraoEditDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasePadraoEditDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasePadraoEditDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
