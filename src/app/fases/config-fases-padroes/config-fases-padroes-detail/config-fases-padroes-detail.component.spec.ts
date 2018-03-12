import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFasesPadroesDetailComponent } from './config-fases-padroes-detail.component';

describe('ConfigFasesPadroesDetailComponent', () => {
  let component: ConfigFasesPadroesDetailComponent;
  let fixture: ComponentFixture<ConfigFasesPadroesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFasesPadroesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFasesPadroesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
