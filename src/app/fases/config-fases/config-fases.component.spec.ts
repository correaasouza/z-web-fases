import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFasesComponent } from './config-fases.component';

describe('ConfigFasesComponent', () => {
  let component: ConfigFasesComponent;
  let fixture: ComponentFixture<ConfigFasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
