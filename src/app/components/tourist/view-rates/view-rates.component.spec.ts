import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatesComponent } from './view-rates.component';

describe('ViewRatesComponent', () => {
  let component: ViewRatesComponent;
  let fixture: ComponentFixture<ViewRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
