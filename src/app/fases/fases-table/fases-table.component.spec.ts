import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasesTableComponent } from './fases-table.component';

describe('FasesTableComponent', () => {
  let component: FasesTableComponent;
  let fixture: ComponentFixture<FasesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
