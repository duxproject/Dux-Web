import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDashboardComponent } from './tour-dashboard.component';

describe('TourDashboardComponent', () => {
  let component: TourDashboardComponent;
  let fixture: ComponentFixture<TourDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
