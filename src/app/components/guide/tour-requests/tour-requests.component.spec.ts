import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourRequestsComponent } from './tour-requests.component';

describe('TourRequestsComponent', () => {
  let component: TourRequestsComponent;
  let fixture: ComponentFixture<TourRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
