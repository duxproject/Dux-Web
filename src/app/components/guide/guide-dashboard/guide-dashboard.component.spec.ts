import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDashboardComponent } from './guide-dashboard.component';

describe('GuideDashboardComponent', () => {
  let component: GuideDashboardComponent;
  let fixture: ComponentFixture<GuideDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
