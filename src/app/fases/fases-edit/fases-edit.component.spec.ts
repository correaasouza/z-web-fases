import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasesEditComponent } from './fases-edit.component';

describe('FasesEditComponent', () => {
  let component: FasesEditComponent;
  let fixture: ComponentFixture<FasesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
