import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFasesPadroesEditComponent } from './config-fases-padroes-edit.component';

describe('ConfigFasesPadroesEditComponent', () => {
  let component: ConfigFasesPadroesEditComponent;
  let fixture: ComponentFixture<ConfigFasesPadroesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFasesPadroesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFasesPadroesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
