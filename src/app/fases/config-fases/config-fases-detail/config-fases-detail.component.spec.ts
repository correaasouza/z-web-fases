import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFasesDetailComponent } from './config-fases-detail.component';

describe('ConfigFasesDetailComponent', () => {
  let component: ConfigFasesDetailComponent;
  let fixture: ComponentFixture<ConfigFasesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFasesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
