import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFasesEditComponent } from './config-fases-edit.component';

describe('ConfigFasesEditComponent', () => {
  let component: ConfigFasesEditComponent;
  let fixture: ComponentFixture<ConfigFasesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFasesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFasesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
