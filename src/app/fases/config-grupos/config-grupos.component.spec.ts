import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigGruposComponent } from './config-grupos.component';

describe('ConfigGruposComponent', () => {
  let component: ConfigGruposComponent;
  let fixture: ComponentFixture<ConfigGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
