import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFasesPadroesComponent } from './config-fases-padroes.component';

describe('ConfigFasesPadroesComponent', () => {
  let component: ConfigFasesPadroesComponent;
  let fixture: ComponentFixture<ConfigFasesPadroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFasesPadroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFasesPadroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
