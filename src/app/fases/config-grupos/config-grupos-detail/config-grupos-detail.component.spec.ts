import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigGruposDetailComponent } from './config-grupos-detail.component';

describe('ConfigGruposDetailComponent', () => {
  let component: ConfigGruposDetailComponent;
  let fixture: ComponentFixture<ConfigGruposDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigGruposDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigGruposDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
