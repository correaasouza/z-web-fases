import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigGruposEditComponent } from './config-grupos-edit.component';

describe('ConfigGruposEditComponent', () => {
  let component: ConfigGruposEditComponent;
  let fixture: ComponentFixture<ConfigGruposEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigGruposEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigGruposEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
